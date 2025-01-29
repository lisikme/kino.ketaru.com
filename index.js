// Запрет контекстного меня на изображениях

// function disablecontext(e) {
// 	var clickedEl = (e==null)? event.srcElement.tagName: e.target.tagName;
//     if (clickedEl == "IMG")
//         {
//             return false;
//         }
//     }
// document.oncontextmenu = disablecontext;









// const enToRuLayout = {
//     q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
//     p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
//     j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
//     b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.',
    
//     Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
//     P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
//     J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
//     B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
// };
// const ruToEnLayout = Object.fromEntries(Object.entries(enToRuLayout).map(([key, value]) => [value, key]));

// // Функция для исправления раскладки
// function fixKeyboardLayout(text, layoutMap) {
//     return text.split('').map(char => layoutMap[char] || char).join('');
// }

// // Функция для очистки строки от пробелов и спецсимволов
// function processSearchQuery(query) {
//     return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
// }

// // Функция для обновления количества фильмов и подсказок
// function updateFilmCount(searchTerm = "") {
//     const movies = document.querySelectorAll(".hero1");
//     let found = 0;
//     let suggestions = [];
    
//     const autocompleteBox = document.getElementById("autocomplete-box");
//     autocompleteBox.innerHTML = "";
    
//     if (searchTerm.trim() === "") {
//         found = movies.length;
//     } else {
//         movies.forEach(movie => {
//             const title = movie.querySelector(".item1").textContent.toLowerCase();
//             const cleanedTitle = processSearchQuery(title);
            
//             const normalizedSearchTermEn = processSearchQuery(searchTerm);
//             const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
            
//             if (cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu)) {
//                 movie.style.display = "block";
//                 found++;
                
//                 if (suggestions.length < 500 && !suggestions.includes(title)) {
//                     suggestions.push(title);
//                 }
//             } else {
//                 movie.style.display = "none";
//             }
//         });
//     }
    
//     document.getElementById("count-film").textContent = `${found}`;
//     document.querySelector(".hero3").style.display = found === 0 ? "block" : "none";
    
//     suggestions.forEach(suggestion => {
//         const div = document.createElement("div");
//         div.classList.add("autocomplete-item");
        
//         const index = suggestion.toLowerCase().indexOf(searchTerm.toLowerCase());
//         if (index !== -1) {
//             const beforeMatch = suggestion.slice(0, index);
//             const match = suggestion.slice(index, index + searchTerm.length);
//             const afterMatch = suggestion.slice(index + searchTerm.length);
//             div.innerHTML = `${beforeMatch}<strong>${match}</strong>${afterMatch}`;
//         } else {
//             div.textContent = suggestion;
//         }
        
//         div.addEventListener("click", () => {
//             document.getElementById("searchBar").value = suggestion;
//             updateFilmCount(suggestion);
//         });
//         autocompleteBox.appendChild(div);
//     });
    
//     autocompleteBox.style.display = suggestions.length > 0 ? "block" : "none";
// }

// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("input", function() {
//     updateFilmCount(this.value);
// });
// searchBar.addEventListener("focus", function() {
//     document.getElementById("autocomplete-box").style.display = "block";
// });
// searchBar.addEventListener("blur", function() {
//     setTimeout(() => document.getElementById("autocomplete-box").style.display = "none", 200);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     updateFilmCount();
// });





// const enToRuLayout = {
//     q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
//     p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
//     j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
//     b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.',
    
//     Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
//     P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
//     J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
//     B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
// };
// const ruToEnLayout = Object.fromEntries(Object.entries(enToRuLayout).map(([key, value]) => [value, key]));

// // Функция для исправления раскладки
// function fixKeyboardLayout(text, layoutMap) {
//     return text.split('').map(char => layoutMap[char] || char).join('');
// }

// // Функция для очистки строки от пробелов и спецсимволов
// function processSearchQuery(query) {
//     return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
// }

// // Функция для обновления количества фильмов и подсказок
// function updateFilmCount(searchTerm = "") {
//     const movies = document.querySelectorAll(".hero1");
//     let found = 0;
//     let suggestions = [];
    
//     const autocompleteBox = document.getElementById("autocomplete-box");
//     autocompleteBox.innerHTML = "";
    
//     if (searchTerm.trim() === "") {
//         found = movies.length;
//     } else {
//         movies.forEach(movie => {
//             const title = movie.querySelector(".item1").textContent;  // Не преобразуем в lowerCase
//             const cleanedTitle = processSearchQuery(title);
            
//             const normalizedSearchTermEn = processSearchQuery(searchTerm);
//             const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
            
//             if (cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu)) {
//                 movie.style.display = "block";
//                 found++;
                
//                 if (suggestions.length < 500 && !suggestions.includes(title)) {
//                     suggestions.push(title);  // Оставляем оригинальный регистр
//                 }
//             } else {
//                 movie.style.display = "none";
//             }
//         });
//     }
    
//     document.getElementById("count-film").textContent = `${found}`;
//     document.querySelector(".hero3").style.display = found === 0 ? "block" : "none";
    
//     suggestions.forEach(suggestion => {
//         const div = document.createElement("div");
//         div.classList.add("autocomplete-item");
        
//         const index = suggestion.toLowerCase().indexOf(searchTerm.toLowerCase());
//         if (index !== -1) {
//             const beforeMatch = suggestion.slice(0, index);
//             const match = suggestion.slice(index, index + searchTerm.length);
//             const afterMatch = suggestion.slice(index + searchTerm.length);
//             div.innerHTML = `${beforeMatch}<strong>${match}</strong>${afterMatch}`;
//         } else {
//             div.textContent = suggestion;  // Оставляем в исходном регистре
//         }
        
//         div.addEventListener("click", () => {
//             document.getElementById("searchBar").value = suggestion;
//             updateFilmCount(suggestion);
//         });
//         autocompleteBox.appendChild(div);
//     });
    
//     // Добавлена проверка, чтобы скрыть поле подсказок, если оно пустое
//     autocompleteBox.style.display = suggestions.length > 0 ? "block" : "none";
// }

// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("input", function() {
//     updateFilmCount(this.value);
// });
// searchBar.addEventListener("focus", function() {
//     const autocompleteBox = document.getElementById("autocomplete-box");
//     // Показываем подсказки только если они есть
//     autocompleteBox.style.display = autocompleteBox.childElementCount > 0 ? "block" : "none";
// });
// searchBar.addEventListener("blur", function() {
//     setTimeout(() => document.getElementById("autocomplete-box").style.display = "none", 200);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     updateFilmCount();
// });










// Функция для перенаправления с параметром id
function redirectToPageWithId() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (id) {
        window.location.href = `http://localhost/pages/${id}`;
    }
}

// Вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    redirectToPageWithId();
});

// Функции для обработки поиска (по вашему предыдущему коду)
const enToRuLayout = {
    q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
    p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
    j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
    b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.',
    
    Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
    P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
    J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
    B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
};
const ruToEnLayout = Object.fromEntries(Object.entries(enToRuLayout).map(([key, value]) => [value, key]));

// Функция для исправления раскладки
function fixKeyboardLayout(text, layoutMap) {
    return text.split('').map(char => layoutMap[char] || char).join('');
}

// Функция для очистки строки от пробелов и спецсимволов
function processSearchQuery(query) {
    return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
}

// Функция для обновления количества фильмов и подсказок
function updateFilmCount(searchTerm = "") {
    const movies = document.querySelectorAll(".hero1");
    let found = 0;
    let suggestions = [];
    
    const autocompleteBox = document.getElementById("autocomplete-box");
    autocompleteBox.innerHTML = "";
    
    if (searchTerm.trim() === "") {
        found = movies.length;
    } else {
        movies.forEach(movie => {
            const title = movie.querySelector(".item1").textContent;  // Не преобразуем в lowerCase
            const cleanedTitle = processSearchQuery(title);
            
            const normalizedSearchTermEn = processSearchQuery(searchTerm);
            const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
            
            if (cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu)) {
                movie.style.display = "block";
                found++;
                
                if (suggestions.length < 500 && !suggestions.includes(title)) {
                    suggestions.push(title);  // Оставляем оригинальный регистр
                }
            } else {
                movie.style.display = "none";
            }
        });
    }
    
    document.getElementById("count-film").textContent = `${found}`;
    document.querySelector(".hero3").style.display = found === 0 ? "block" : "none";
    
    suggestions.forEach(suggestion => {
        const div = document.createElement("div");
        div.classList.add("autocomplete-item");
        
        const index = suggestion.toLowerCase().indexOf(searchTerm.toLowerCase());
        if (index !== -1) {
            const beforeMatch = suggestion.slice(0, index);
            const match = suggestion.slice(index, index + searchTerm.length);
            const afterMatch = suggestion.slice(index + searchTerm.length);
            div.innerHTML = `${beforeMatch}<strong>${match}</strong>${afterMatch}`;
        } else {
            div.textContent = suggestion;  // Оставляем в исходном регистре
        }
        
        div.addEventListener("click", () => {
            document.getElementById("searchBar").value = suggestion;
            updateFilmCount(suggestion);
        });
        autocompleteBox.appendChild(div);
    });
    
    // Добавлена проверка, чтобы скрыть поле подсказок, если оно пустое
    autocompleteBox.style.display = suggestions.length > 0 ? "block" : "none";
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function() {
    updateFilmCount(this.value);
});
searchBar.addEventListener("focus", function() {
    const autocompleteBox = document.getElementById("autocomplete-box");
    // Показываем подсказки только если они есть
    autocompleteBox.style.display = autocompleteBox.childElementCount > 0 ? "block" : "none";
});
searchBar.addEventListener("blur", function() {
    setTimeout(() => document.getElementById("autocomplete-box").style.display = "none", 200);
});

document.addEventListener("DOMContentLoaded", function() {
    updateFilmCount();
    redirectToPageWithId();  // Переадресация с id
});



// const enToRuLayout = {
//     q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
//     p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
//     j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
//     b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.',
    
//     Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
//     P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
//     J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
//     B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
// };
// const ruToEnLayout = Object.fromEntries(Object.entries(enToRuLayout).map(([key, value]) => [value, key]));

// // Функция для исправления раскладки
// function fixKeyboardLayout(text, layoutMap) {
//     return text.split('').map(char => layoutMap[char] || char).join('');
// }

// // Функция для очистки строки от пробелов и спецсимволов
// function processSearchQuery(query) {
//     return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
// }

// // Функция для обновления количества фильмов и подсказок
// function updateFilmCount(searchTerm = "") {
//     const movies = document.querySelectorAll(".hero1");
//     let found = 0;
//     let suggestions = [];
    
//     const autocompleteBox = document.getElementById("autocomplete-box");
//     autocompleteBox.innerHTML = "";
    
//     if (searchTerm.trim() === "") {
//         found = movies.length;
//     } else {
//         movies.forEach(movie => {
//             const title = movie.querySelector(".item1").textContent.toLowerCase();
//             const cleanedTitle = processSearchQuery(title);
            
//             const normalizedSearchTermEn = processSearchQuery(searchTerm);
//             const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
            
//             if (cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu)) {
//                 movie.style.display = "block";
//                 found++;
                
//                 if (suggestions.length < 500 && !suggestions.includes(title)) {
//                     suggestions.push(title);
//                 }
//             } else {
//                 movie.style.display = "none";
//             }
//         });
//     }
    
//     document.getElementById("count-film").textContent = `${found}`;
//     document.querySelector(".hero3").style.display = found === 0 ? "block" : "none";
    
//     suggestions.forEach(suggestion => {
//         const div = document.createElement("div");
//         div.classList.add("autocomplete-item");
        
//         const index = suggestion.toLowerCase().indexOf(searchTerm.toLowerCase());
//         if (index !== -1) {
//             const beforeMatch = suggestion.slice(0, index);
//             const match = suggestion.slice(index, index + searchTerm.length);
//             const afterMatch = suggestion.slice(index + searchTerm.length);
//             div.innerHTML = `${beforeMatch}<strong>${match}</strong>${afterMatch}`;
//         } else {
//             div.textContent = suggestion;
//         }
        
//         div.addEventListener("click", () => {
//             document.getElementById("searchBar").value = suggestion;
//             updateFilmCount(suggestion);
//         });
//         autocompleteBox.appendChild(div);
//     });
    
//     // Добавлена проверка, чтобы скрыть поле подсказок, если оно пустое
//     autocompleteBox.style.display = suggestions.length > 0 ? "block" : "none";
// }

// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("input", function() {
//     updateFilmCount(this.value);
// });
// searchBar.addEventListener("focus", function() {
//     document.getElementById("autocomplete-box").style.display = "block";
// });
// searchBar.addEventListener("blur", function() {
//     setTimeout(() => document.getElementById("autocomplete-box").style.display = "none", 200);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     updateFilmCount();
// });



// const enToRuLayout = {
//     q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
//     p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
//     j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
//     b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.',

//     Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
//     P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
//     J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
//     B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
// };
// const ruToEnLayout = Object.fromEntries(Object.entries(enToRuLayout).map(([key, value]) => [value, key]));

// // Функция для исправления раскладки
// function fixKeyboardLayout(text, layoutMap) {
//     return text.split('').map(char => layoutMap[char] || char).join('');
// }

// // Функция для очистки строки от пробелов и спецсимволов
// function processSearchQuery(query) {
//     return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
// }

// // Функция для обновления количества фильмов и подсказок
// function updateFilmCount(searchTerm = "") {
//     const movies = document.querySelectorAll(".hero1");
//     let found = 0;
//     let suggestions = [];
    
//     const autocompleteBox = document.getElementById("autocomplete-box");
//     autocompleteBox.innerHTML = "";
    
//     if (searchTerm.trim() === "") {
//         found = movies.length;
//     } else {
//         movies.forEach(movie => {
//             const title = movie.querySelector(".item1").textContent.toLowerCase();
//             const cleanedTitle = processSearchQuery(title);
            
//             const normalizedSearchTermEn = processSearchQuery(searchTerm);
//             const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
            
//             if (cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu)) {
//                 movie.style.display = "block";
//                 found++;
                
//                 if (suggestions.length < 5 && !suggestions.includes(title)) {
//                     suggestions.push(title);
//                 }
//             } else {
//                 movie.style.display = "none";
//             }
//         });
//     }
    
//     document.getElementById("count-film").textContent = `${found}`;
//     document.querySelector(".hero3").style.display = found === 0 ? "block" : "none";
    
//     suggestions.forEach(suggestion => {
//         const div = document.createElement("div");
//         div.classList.add("autocomplete-item");
        
//         const index = suggestion.toLowerCase().indexOf(searchTerm.toLowerCase());
//         if (index !== -1) {
//             const beforeMatch = suggestion.slice(0, index);
//             const match = suggestion.slice(index, index + searchTerm.length);
//             const afterMatch = suggestion.slice(index + searchTerm.length);
//             div.innerHTML = `${beforeMatch}<strong>${match}</strong>${afterMatch}`;
//         } else {
//             div.textContent = suggestion;
//         }
        
//         div.addEventListener("click", () => {
//             document.getElementById("searchBar").value = suggestion;
//             updateFilmCount(suggestion);
//         });
//         autocompleteBox.appendChild(div);
//     });
    
//     autocompleteBox.style.display = suggestions.length > 0 ? "block" : "none";
// }

// // Логика поиска с автозаполнением
// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("input", function() {
//     updateFilmCount(this.value);
// });

// searchBar.addEventListener("blur", function() {
//     setTimeout(() => document.getElementById("autocomplete-box").style.display = "none", 200);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     updateFilmCount();
// });






// Словари для исправления раскладки
// const enToRuLayout = {
//     q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
//     p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
//     j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
//     b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.',

//     Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
//     P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
//     J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
//     B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
// };
// const ruToEnLayout = Object.fromEntries(Object.entries(enToRuLayout).map(([key, value]) => [value, key]));

// // Функция для исправления раскладки
// function fixKeyboardLayout(text, layoutMap) {
//     return text.split('').map(char => layoutMap[char] || char).join('');
// }

// // Функция для очистки строки от пробелов и спецсимволов
// function processSearchQuery(query) {
//     return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
// }

// // Функция для обновления количества фильмов и подсказок
// function updateFilmCount(searchTerm = "") {
//     const movies = document.querySelectorAll(".hero1");
//     let found = 0;
//     let suggestions = [];
    
//     const autocompleteBox = document.getElementById("autocomplete-box");
//     autocompleteBox.innerHTML = "";
    
//     if (searchTerm.trim() === "") {
//         found = movies.length;
//     } else {
//         movies.forEach(movie => {
//             const title = movie.querySelector(".item1").textContent.toLowerCase();
//             const cleanedTitle = processSearchQuery(title);
            
//             const normalizedSearchTermEn = processSearchQuery(searchTerm);
//             const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
            
//             if (cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu)) {
//                 movie.style.display = "block";
//                 found++;
                
//                 if (suggestions.length < 5 && !suggestions.includes(title)) {
//                     suggestions.push(title);
//                 }
//             } else {
//                 movie.style.display = "none";
//             }
//         });
//     }
    
//     document.getElementById("count-film").textContent = `${found}`;
//     document.querySelector(".hero3").style.display = found === 0 ? "block" : "none";
    
//     suggestions.forEach(suggestion => {
//         const div = document.createElement("div");
//         div.classList.add("autocomplete-item");
        
//         const index = suggestion.toLowerCase().indexOf(searchTerm.toLowerCase());
//         if (index !== -1) {
//             const beforeMatch = suggestion.slice(0, index);
//             const match = suggestion.slice(index, index + searchTerm.length);
//             const afterMatch = suggestion.slice(index + searchTerm.length);
//             div.innerHTML = `${beforeMatch}<strong>${match}</strong>${afterMatch}`;
//         } else {
//             div.textContent = suggestion;
//         }
        
//         div.addEventListener("click", () => {
//             document.getElementById("searchBar").value = suggestion;
//             updateFilmCount(suggestion);
//         });
//         autocompleteBox.appendChild(div);
//     });
// }

// // Логика поиска с автозаполнением
// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("input", function() {
//     updateFilmCount(this.value);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     updateFilmCount();
// });























// // Словари для исправления раскладки
// const enToRuLayout = {
//     q: 'й', w: 'ц', e: 'у', r: 'к', t: 'е', y: 'н', u: 'г', i: 'ш', o: 'щ',
//     p: 'з', '[': 'х', ']': 'ъ', a: 'ф', s: 'ы', d: 'в', f: 'а', g: 'п', h: 'р',
//     j: 'о', k: 'л', l: 'д', ';': 'ж', "'": 'э', z: 'я', x: 'ч', c: 'с', v: 'м',
//     b: 'и', n: 'т', m: 'ь', ',': 'б', '.': 'ю', '/': '.', 

//     Q: 'Й', W: 'Ц', E: 'У', R: 'К', T: 'Е', Y: 'Н', U: 'Г', I: 'Ш', O: 'Щ',
//     P: 'З', '{': 'Х', '}': 'Ъ', A: 'Ф', S: 'Ы', D: 'В', F: 'А', G: 'П', H: 'Р',
//     J: 'О', K: 'Л', L: 'Д', ':': 'Ж', '"': 'Э', Z: 'Я', X: 'Ч', C: 'С', V: 'М',
//     B: 'И', N: 'Т', M: 'Ь', '<': 'Б', '>': 'Ю', '?': '.'
// };
// const ruToEnLayout = Object.fromEntries(
//     Object.entries(enToRuLayout).map(([key, value]) => [value, key])
// );
// // Функция для исправления раскладки
// function fixKeyboardLayout(text, layoutMap) {
//     return text
//         .split('')
//         .map(char => layoutMap[char] || char)
//         .join('');
// }
// // Функция для очистки строки от пробелов и спецсимволов, оставляя только буквы и цифры
// function processSearchQuery(query) {
//     return fixKeyboardLayout(query, ruToEnLayout).replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
// }
// // Функция для извлечения чисел из запроса
// function extractNumbers(query) {
//     return query.match(/\d+/g) || [];
// }
// // Функция для проверки, есть ли в строке кириллица
// function hasCyrillic(text) {
//     return /[а-яА-Я]/.test(text);
// }
// // Функция для проверки, есть ли в строке латиница
// function hasLatin(text) {
//     return /[a-zA-Z]/.test(text);
// }
// // Функция для обновления количества фильмов
// function updateFilmCount(searchTerm = "") {
//     const movies = document.querySelectorAll(".hero1"); // Все блоки фильмов
//     let found = 0; // Количество найденных фильмов

//     if (searchTerm.trim() === "") {
//         found = movies.length; // Если поле пустое, показываем все фильмы
//     } else {
//         // Перебираем все блоки фильмов для поиска
//         movies.forEach(movie => {
//             const title = movie.querySelector(".item1").textContent.toLowerCase(); // Название фильма
//             const cleanedTitle = processSearchQuery(title);

//             const normalizedSearchTermEn = processSearchQuery(searchTerm);
//             const normalizedSearchTermRu = fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout);
//             const fixedSearchTerm = hasLatin(normalizedSearchTermEn) && !hasCyrillic(normalizedSearchTermEn)
//                 ? fixKeyboardLayout(normalizedSearchTermEn, enToRuLayout)
//                 : normalizedSearchTermRu;

//             const titleIncludesSearchTerm = cleanedTitle.includes(normalizedSearchTermEn) || cleanedTitle.includes(normalizedSearchTermRu);

//             if (titleIncludesSearchTerm) {
//                 movie.style.display = "block"; // Показываем фильм
//                 found++;
//             } else {
//                 movie.style.display = "none"; // Скрываем фильм
//             }
//         });
//     }

//     // Обновляем количество найденных фильмов
//     const countElement = document.getElementById("count-film");
//     countElement.textContent = `${found}`;

//     // Показываем блок hero3, если фильмов не найдено
//     const hero3 = document.querySelector(".hero3");
//     if (found === 0) {
//         hero3.style.display = "block";
//     } else {
//         hero3.style.display = "none";
//     }
// }

// // Логика поиска
// document.getElementById("searchBar").addEventListener("input", function() {
//     updateFilmCount(this.value); // Обновляем количество фильмов при изменении поля поиска
// });

// // Вызываем функцию для отображения общего количества фильмов при загрузке страницы
// document.addEventListener("DOMContentLoaded", function() {
//     updateFilmCount(); // Сразу при загрузке отображаем количество всех фильмов
// });