import os
import re
from bs4 import BeautifulSoup
import json

def parse_main_html(file_path):
    """Парсит главный index.html и извлекает информацию о фильмах"""
    
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Используем BeautifulSoup для парсинга HTML
    soup = BeautifulSoup(content, 'html.parser')
    
    films = []
    
    # Находим все секции с фильмами
    sections = soup.find_all('section', class_='hero1')
    
    for section in sections:
        film_data = {}
        
        # Извлекаем название фильма
        title_span = section.find('span', class_='item1')
        if title_span:
            film_data['Title'] = title_span.get_text(strip=True)
        
        # Извлекаем возрастное ограничение
        age_span = section.find('span', class_='item2')
        if age_span:
            film_data['AgeLimit'] = age_span.get_text(strip=True)
        
        # Извлекаем ссылку на страницу фильма
        watch_link = section.find('a', class_='buttonn')
        if watch_link and 'href' in watch_link.attrs:
            href = watch_link['href']
            # Извлекаем ID из пути (например, ./pages/3 -> 3)
            match = re.search(r'pages/(\d+)', href)
            if match:
                film_data['page_id'] = match.group(1)
                films.append(film_data)
    
    return films

def extract_video_url_from_page(page_path):
    """Извлекает URL видео из iframe на странице фильма"""
    
    try:
        with open(page_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        soup = BeautifulSoup(content, 'html.parser')
        
        # Ищем iframe
        iframe = soup.find('iframe')
        if iframe and 'src' in iframe.attrs:
            return iframe['src']
        
        # Если iframe не найден, ищем другие возможные источники видео
        # Ищем ссылки, которые могут содержать видео
        video_sources = soup.find_all('source', {'src': True})
        if video_sources:
            return video_sources[0]['src']
        
        # Ищем video теги
        video_tag = soup.find('video')
        if video_tag and 'src' in video_tag.attrs:
            return video_tag['src']
        
        # Ищем script с видео ссылками
        scripts = soup.find_all('script')
        for script in scripts:
            if script.string:
                # Ищем URL в скрипте
                urls = re.findall(r'(https?://[^\s"\']+)', script.string)
                for url in urls:
                    if any(keyword in url.lower() for keyword in ['video', 'movie', 'stream', 'player']):
                        return url
        
        return None
        
    except FileNotFoundError:
        print(f"Файл не найден: {page_path}")
        return None
    except Exception as e:
        print(f"Ошибка при чтении файла {page_path}: {e}")
        return None

def create_films_list(films_data, base_path='./pages'):
    """Создает список фильмов с видео ссылками"""
    
    films_list = []
    
    for film in films_data:
        if 'page_id' in film:
            page_file = os.path.join(base_path, film['page_id'], 'index.html')
            
            if os.path.exists(page_file):
                video_url = extract_video_url_from_page(page_file)
                
                film_entry = {
                    'Title': film.get('Title', ''),
                    'AgeLimit': film.get('AgeLimit', ''),
                    'VideoUrl': video_url if video_url else ''
                }
                
                films_list.append(film_entry)
                print(f"Обработан фильм: {film['Title']} - видео URL: {'найден' if video_url else 'не найден'}")
            else:
                print(f"Файл не найден: {page_file}")
    
    return films_list

def save_to_js_file(films_list, output_file='films.js'):
    """Сохраняет список фильмов в формате JavaScript"""
    
    js_content = f"""const FilmsList = {json.dumps(films_list, ensure_ascii=False, indent=4)};
"""
    
    # Альтернативный формат с правильным экранированием строк
    js_content_alt = 'const FilmsList = [\n'
    
    for i, film in enumerate(films_list):
        js_content_alt += '    {\n'
        js_content_alt += f"        'Title': '{film['Title']}',\n"
        js_content_alt += f"        'AgeLimit': '{film['AgeLimit']}',\n"
        js_content_alt += f"        'VideoUrl': '{film['VideoUrl']}'\n"
        js_content_alt += '    }'
        if i < len(films_list) - 1:
            js_content_alt += ','
        js_content_alt += '\n'
    
    js_content_alt += '];'
    
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(js_content_alt)
    
    print(f"Результат сохранен в файл: {output_file}")

def main():
    # Основной файл с информацией о фильмах
    main_file = './index.html'
    
    if not os.path.exists(main_file):
        print(f"Файл {main_file} не найден!")
        return
    
    print("Парсим основной файл...")
    films_data = parse_main_html(main_file)
    print(f"Найдено фильмов: {len(films_data)}")
    
    print("\nИзвлекаем ссылки на видео...")
    films_list = create_films_list(films_data)
    
    print("\nСоздаем JavaScript файл...")
    save_to_js_file(films_list)
    
    print("\nГотово!")

if __name__ == "__main__":
    main()