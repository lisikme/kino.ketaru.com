import os
import aiohttp
import asyncio
from rich.console import Console
from rich.panel import Panel
from rich.text import Text
from time import sleep

# Инициализация консоли
console = Console()

# Цвета для вывода
COLORS = {
    'success': 'bold green',
    'error': 'bold red',
    'warning': 'bold yellow',
    'info': 'bold blue',
    'title': 'bold cyan',
}

async def check_url_status(session, url):
    """Асинхронно проверяет статус URL с разными методами"""
    if not url.startswith(('http://', 'https://')):
        return f"[{COLORS['error']}]Не работает (неверный формат URL)"
    
    try:
        # Сначала пробуем HEAD запрос (быстрее)
        async with session.head(url, allow_redirects=True, timeout=aiohttp.ClientTimeout(total=10)) as response:
            # Если сервер не поддерживает HEAD, пробуем GET
            if response.status == 405:
                async with session.get(url, timeout=aiohttp.ClientTimeout(total=10)) as get_response:
                    # Любой ответ от сервера считается "работает"
                    return f"[{COLORS['success']}]Работает (HTTP {get_response.status})"
            
            return f"[{COLORS['success']}]Работает (HTTP {response.status})"
            
    except aiohttp.ClientSSLError:
        return f"[{COLORS['success']}]Работает (но с SSL ошибкой)"
    except (aiohttp.ClientConnectionError, asyncio.TimeoutError):
        return f"[{COLORS['error']}]Не работает (сервер недоступен)"
    except aiohttp.ClientError as e:
        return f"[{COLORS['error']}]Не работает (ошибка запроса: {str(e)})"
    except Exception as e:
        return f"[{COLORS['error']}]Не работает (неожиданная ошибка: {str(e)})"

def get_film_info(film_dir):
    """Получает информацию о фильме из его HTML-файла"""
    index_path = os.path.join(film_dir, 'index.html')
    if not os.path.exists(index_path):
        return None
    
    try:
        with open(index_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Улучшенный парсинг HTML
        name = extract_between(content, '<div class="name">', '<p class="number">')
        age = extract_between(content, '<p class="number">', '</p>')
        video_url = extract_between(content, '<iframe class="fonv" src="', '"')
        
        # Очистка полученных данных
        name = clean_text(name) if name else 'Unknown'
        age = clean_text(age) if age else '?'
        video_url = clean_url(video_url) if video_url else None
        
        return {
            'name': name,
            'age': age,
            'video_url': video_url,
            'path': film_dir
        }
    except Exception as e:
        console.print(f"[{COLORS['error']}]Error reading {film_dir}: {str(e)}")
        return None

def extract_between(content, start_marker, end_marker):
    """Улучшенное извлечение текста между маркерами"""
    try:
        start = content.find(start_marker)
        if start == -1:
            return None
        start += len(start_marker)
        end = content.find(end_marker, start)
        return content[start:end] if end != -1 else content[start:]
    except:
        return None

def clean_text(text):
    """Очистка текста от HTML-тегов и лишних пробелов"""
    if not text:
        return text
    # Удаляем HTML-теги
    text = ' '.join(text.split())  # Удаляем лишние пробелы
    return text.strip()

def clean_url(url):
    """Очистка и проверка URL"""
    if not url:
        return None
    url = url.strip()
    if url.startswith('//'):
        url = 'https:' + url
    elif not url.startswith(('http://', 'https://')):
        url = 'https://' + url
    return url

async def print_film_info(session, film, idx):
    """Выводит информацию о фильме в одну строку со статусом"""
    info_text = Text()
    
    # Основная информация в одну строку
    info_text.append(f"#{idx}: ", style="bold")
    info_text.append(f"{film['name']}", style="bold magenta")
    info_text.append(" [", style="dim")
    info_text.append(f"{film['age']}", style="bold green")
    info_text.append("] - ", style="dim")
    
    # Проверка статуса URL
    if film['video_url']:
        status = await check_url_status(session, film['video_url'])
        
        # Извлекаем стиль и текст статуса
        status_style = status.split(']')[0][1:]
        status_text = status.split(']')[1]
        info_text.append(status_text, style=status_style)
    else:
        info_text.append("URL не указан", style=COLORS['error'])
    
    console.print(info_text)

async def main():
    console.print("[bold]Проверка фильмов и статуса видео[/bold]\n", justify="center")
    
    # Получаем список всех фильмов
    pages_dir = './pages'
    
    if not os.path.exists(pages_dir):
        console.print(f"[{COLORS['error']}]Папка 'pages' не найдена!")
        return
    
    film_dirs = sorted([
        d for d in os.listdir(pages_dir) 
        if os.path.isdir(os.path.join(pages_dir, d))
    ])
    
    if not film_dirs:
        console.print(f"[{COLORS['warning']}]В папке 'pages' не найдено фильмов!")
        return
    
    console.print(f"[bold]Найдено фильмов:[/bold] {len(film_dirs)}\n", style=COLORS['title'])
    
    # Создаем сессию для асинхронных запросов
    async with aiohttp.ClientSession() as session:
        # Создаем список задач для всех фильмов
        tasks = []
        for idx, film_dir in enumerate(film_dirs, 1):
            full_path = os.path.join(pages_dir, film_dir)
            film_info = get_film_info(full_path)
            
            if film_info:
                tasks.append(print_film_info(session, film_info, idx))
        
        # Выполняем все задачи параллельно
        await asyncio.gather(*tasks)

if __name__ == "__main__":
    asyncio.run(main())