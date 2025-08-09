import os
from tkinter import filedialog
from rich.panel import Panel
from rich.text import Text

import requests
from PIL import Image
from rich.traceback import install

from rich import print; from rich.console import Console; cn = Console();

R = '[bold #e74856]' # 🔴| Красный
Q = '[bold #E32636]' # 🔴| Ярко красный
G = '[bold #00d26a]' # 🟢| Зелёный
B = '[bold #2268ff]' # 🔵| Синий
D = '[bold #00FF7F]' # 🔵| Голубой
W = '[bold #FFFFFF]' # ⚪| Белый
Y = '[bold #FFFF00]' # 🟡| Жёлтый
I = '[bold #f9f1a5]' # 🟡| Светло жёлтый
E = '[bold #808080]' # ⚙️| Сервый
O = '   '
A = '───'

# IA = '                         '
IA = ''
TAB ='    '
TAG1 = ['0+','6+','12+','16+','18+']
TAG2 = ['0', '6', '12', '16', '18']

print('   ')
# cn.print(f'{R}─── KetaruDev ───')

num = 0
Файлов = 1
for dirpath, dirnames, filenames in os.walk("./pages"):
    for dirname in dirnames:
        num += 1
        Файлов += 1
nun = '{:<8}'.format(num)

DIR = f'pages/{Файлов}'
FILE = 'image.png'

def inform(имя, возраст, изображение, кнопка, видео):
    return cn.print(
        Panel(
            f'[bold #808080] Название фильма: {имя}\n'
            f'[bold #808080] Возрастное ограничение: {возраст}\n'
            f'[bold #808080] URL Изображения: {изображение}\n'
            f'[bold #808080] URL Видео: {видео}',
            title="[bold #e74856]Панель разработчика",
            border_style="#e74856",
            width=80
        )
    )

class app:
    Print_0 = Panel(
        f'[bold white] Папок: [bold yellow]{nun}',
        title="[bold #808080]Панель разработчика",
        border_style="#e74856",
        width=80
    )
    Input_0 = f''

    Print_1 = Panel(
        f'[bold #f9f1a5] Значения: [bold #00d26a]Любой текст\n'
        f'[bold #808080] └[bold #E32636] Требуется обязательно!',
        title="[bold #808080]Коментарий",
        border_style="#e74856",
        width=80
    )
    Name_1  = f'{IA}{B} Название'
    Input_1 = f'{IA}{E} └ {I}Значение: '

    Print_2 = Panel(
        f'[bold #f9f1a5] значения: [bold #00d26a]0+, 6+, 12+, 16+, 18+\n'
        f'[bold #808080] └[bold yellow] По умолчанию: [bold #00d26a]0+',
        title="[bold #808080]Коментарий",
        border_style="#e74856",
        width=80
    )
    Name_2   = f'{IA}{B} Возрастное ограничение'
    Input_2  = f'{IA}{E} └ {I}Значение: '

    Print_3 = Panel(
        f'[bold #f9f1a5] Значения: [bold #00d26a]Команда [bold #E32636]file [bold white]или [bold #00d26a]https://example.com\n'
        f'[bold #808080] └[bold yellow] По умолчанию: [bold #00d26a]Нет',
        title="[bold #808080]Коментарий",
        border_style="#e74856",
        width=80
    )
    Name_3   = f'{IA}{B} Изображение'
    Input_3  = f'{IA}{E} └ {I}Значение: '
    Input_33 = f'{IA}{E}   └ {I}URL Изображения: '

    Print_4 = Panel(
        f'[bold #f9f1a5] Значения: [bold #00d26a]https://example.com\n'
        f'[bold #808080] └[bold yellow] По умолчанию: [bold #00d26a]Нет',
        title="[bold #808080]Коментарий",
        border_style="#e74856",
        width=80
    )
    Name_4   = f'{IA}{B} URL Информация'
    Input_4  = f'{IA}{E} └ {I}Значение: '

    Print_5 = Panel(
        f'[bold #f9f1a5] Значения: [bold #00d26a]https://example.com\n'
        f'[bold #808080] └[bold #E32636] Требуется обязательно!',
        title="[bold #808080]Коментарий",
        border_style="#e74856",
        width=80
    )
    Name_5   = f'{IA}{B} URL Видео'
    Input_5  = f'{IA}{E} └ {I}Значение: '

Формат_0     = (app.Print_0)
Формат_1     = (app.Print_1)
Формат_2     = (app.Print_2)
Формат_3     = (app.Print_3)
Формат_4     = (app.Print_4)
Формат_5     = (app.Print_5)

Имя = ''; Имя1 = f'{B}{f"-":<48}'
Возраст = ''; Возраст1 = f'{B}{f"-":<41}'
Изображение = ''; Изображение1 = f'{B}{f"-":<48}'
Кнопка = ''; Кнопка1 = f'{B}{f"-":<49}'; Button = ''
Видео = ''; Видео1 = f'{B}{f"-":<54}'

cn.print(Формат_0)
cn.input(app.Input_0, password=True)

os.system('cls')
inform(Имя1, Возраст1, Изображение1, Кнопка1, Видео1)
cn.print(Формат_1)
while Имя in '':
    cn.print(app.Name_1)
    Имя = cn.input(app.Input_1)
    if Имя == '':
        cn.print(f'{IA}   {E}└ {R}Это поле обязательно\n')
        pass
    else:
        Имя1 = f'{Y}{Имя:48}'
        break

os.system('cls')
inform(Имя1, Возраст1, Изображение1, Кнопка1, Видео1)
cn.print(Формат_2)
while Возраст in '':
    cn.print(app.Name_2)
    Возраст = cn.input(app.Input_2)
    if Возраст == '':
        Возраст = '0+'
        Возраст1 = f'{R}{f"{Возраст} {B}По умолчанию":<55}'
        break
    elif Возраст in TAG1:
        Возраст = f'{Возраст}'
        Возраст1 = f'{R}{f"{Возраст} {B}":<55}'
        break
    elif Возраст in TAG2:
        Возраст = f'{Возраст}+'
        Возраст1 = f'{R}{f"{Возраст} {B}":<55}'
        break
    else:
        Возраст = '0+'
        Возраст1 = f'{R}{f"{Возраст} {B}По умолчанию":<55}'
        break

os.system('cls')
inform(Имя1, Возраст1, Изображение1, Кнопка1, Видео1)
cn.print(Формат_3)
while True:
    cn.print(app.Name_3)
    Изображение = cn.input(app.Input_3)
    if Изображение in '':
        Изображение = 'Нет'
        Изображение1 = f'{D}Файл {B}По умолчанию{"":<31}'
        imgLOG = '1'
        break
    if Изображение.lower() in ['1', 'file', 'файл']:
        try:
            Изображение = filedialog.askopenfilename()
            FILE = Image.open(Изображение)  
            Изображение1 = f'{D}Файл{"":<44}'
            imgLOG = '2'
            break
        except:
            cn.print(f'{IA}   {E}└ {R}Файл не поддерживается\n')
    else:
        try:
            Данные = requests.get(Изображение).content
            Изображение1 = f'{D}[link={Изображение}]Ссылка[/link]{"":<42}'
            imgLOG = '3'
            break
        except:
            cn.print(f'{IA}   {E}└ {R}Ссылка указана некоректно\n')

os.system('cls')
inform(Имя1, Возраст1, Изображение1, Кнопка1, Видео1)
cn.print(Формат_4)
while Кнопка in '':
    cn.print(app.Name_4)
    # Кнопка = cn.input(app.Input_4)
    Кнопка = ''
    if Кнопка == '':
        button = ''
        Кнопка = 'Нет'
        Кнопка1 = f'{Y}{Кнопка} {B}{"":<45}'
    else:
        Кнопка1 = f'{Y}[link={Кнопка}]Ссылка[/link] {B}{"":<42}'
        Button = f'<a class="buttonn" href="{Кнопка}" target="0">Информация</a>'

os.system('cls')
inform(Имя1, Возраст1, Изображение1, Кнопка1, Видео1)
cn.print(Формат_5)
while Видео in '':
    cn.print(app.Name_5)
    Видео = cn.input(app.Input_5)
    if Видео == '':
        cn.print(f'{IA}   {E}└ {R}Это поле обязательно\n')
    else:
        Видео1 = f'{Y}[link={Видео}]Ссылка[/link] {B}'

Страница = (f"""
<!-- Форматирование -->
<!DOCTYPE html>
<html lang="ru" class="no-js">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <head>
        <meta charset="utf-8">
        <meta name="yandex-verification" content="2d8c1dcb18ad48b7"/>
        
<!-- Интеграция Embed -->
<meta property="og:site_name" content="KR.Corp">
<link rel="shortcut icon" href="https://i.imgur.com/tPQs4ZD.png">
<meta property="og:image:width" content="170">
<meta property="og:image:height" content="250">
<meta name="theme-color" content="#26ade9">

<!-- CSS -->
<link rel="stylesheet" href="../../css/Page.css">        <!-- Дизайн фона сайта --> 
<link rel="stylesheet" href="../../css/Header.css">      <!-- Дизайн шапки сайта --> 
<link rel="stylesheet" href="../../css/ScrollBar.css">   <!-- Полоса прокрутки -->
<link rel="stylesheet" href="../../css/SectionBox.css">  <!-- Секции блоков -->
<link rel="stylesheet" href="../../css/VideoPlayer.css"> <!-- Видео блок -->
<link rel="stylesheet" href="../../css/Animation.css">   <!-- Анимации -->
<link rel="stylesheet" href="../../css/Head.css">        <!-- Дизайн шапки сайта 2.0 --> 

<link rel="stylesheet" href="../../css/Root.css">        <!-- Конфигурация -->

<!-- JavasCript -->
<script src="../../index.js"></script>

<!-- Шапка страницы -->
<div class="body-wrap">
    <header id="site-header">
        <type id="page-name">
            <span id="namm">КиноОнлайн<span id="rel">БЕТА</span></span>
            <span id="nam">Каталог фильмов</span></type>
        <div id="site-header-box">
            <a href="../../">
                <div id="site-logo-box">
                    <img id="site-logo-img" src="https://ketame.ru/corp.png">
                    <name id="site-logo-name">
                        <span id="ketaru">Ketaru</span>
                        <span id="corp">Corp</span>
                    </name>
                </div>
            </a>
        </div>
    </header>

<!-- каталог фильмов -->
<section class="hero2"></section>

<section class="hero1"><div class="container"><div class="hero-inner"><div class="hero-copy"><div class="film">
    <div class="name">{Имя}<p class="number">{Возраст}</p></div></div><div class="im">
    <img src="image.png" class="image" loading="lazy" onerror="this.style.visibility = 'hidden'" width="170px" height = "250px"><div class="hero-cta">
    {Button}</section><section class="hero1"><div class="container"><p class="buttonns"><p>
    <iframe class="fonv" src="{Видео}" frameborder="0" allowfullscreen></iframe></div></div></div>       
    <meta property="og:title" content="{Имя}">
    <title>KR.Corp | {Имя}</title>
        <meta property="og:image" content="https://kino.ketame.ru/pages/{Файлов}/image.png">
</section>

</html>
""")

os.system('cls')
print('   ')
num = 0
for dirpath, dirnames, filenames in os.walk("./pages"):
    for dirname in dirnames:
        num += 1
        pass
nun = f'{num}      '
num += 1
cn.print(Формат_0)

____________________Имя = F'{Имя:54}'
_______________Возраст = F'{Возраст:41}'
cn.print('')
cn.print(
    Panel(
        f'[bold white] Название: [bold #e74856]{____________________Имя}\n'
        f'[bold white] Возрастное ограниение: [bold #e74856]{_______________Возраст}',
        title=f"[bold #808080]ID: {num}",
        border_style="#808080",
        width=80
    )
)
cn.print()
cn.print(f'{W}   URL Информация: {B}[link={Кнопка}]Ссылка[/link]')
cn.print(f'{W}   URL Видео: {B}[link={Видео}]Ссылка[/link]')

# Создать папку для фильма
if not os.path.exists(f'./{DIR}'): 
    os.makedirs(f'./{DIR}')

# Изменение каталога
Строка = 89
with open('./index.html', 'r', encoding='utf8') as Файл:
    lines = Файл.readlines()
lines.insert(Строка-2, f'''
<section class="hero1"><div class="container"><div class="hero-inner"><div class="hero-copy"><div class="film"><h1 class="items">
    <span class="item1">{Имя}</span><p>
    <span class="item2">{Возраст}</span></p></h1></div>
    <div class="im"><img src="./pages/{num}/image.png" class="image" loading="lazy" onerror="this.style.visibility = 'hidden'" width="170px" height = "250px"><div class="hero-cta">
    <a class="buttonn" href="./pages/{num}">Смотреть</a>
</section>
''')
Файл = open('./index.html', 'w+', encoding='utf8')
Файл.writelines(lines)

# Создание изображения
if imgLOG in '1':
    FILE = Image.open('icon/image.png')
    FILE = FILE.save(f'./{DIR}/image.png')
if imgLOG in '2':
    FILE = Image.open(Изображение)  
    FILE = FILE.save(F'./{DIR}/image.png')
if imgLOG in '3':
    FILE = open(f'./{DIR}/{FILE}', 'wb')
    FILE.write(eval('Данные'))
    FILE.close()

# Страница фильма
Фильм = open(F"./{DIR}/index.html", "w+", encoding='utf8')
Фильм.write(Страница)
Фильм.close()