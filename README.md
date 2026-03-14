# DOM - Document Object Model


```javascript
document.documentElement    //Элемент `<html>`
document.head               //Элемент `<head>`
document.body               //Элемент `<body>`
```
## DOM-коллекции


```javascript
elem.childNodes     //Получение всех детей `<elem>`
elem.firstChild     //Получение первого потомка `<elem>`
elem.lastChild      //Получение последнего потомка `<elem>`
```

## Соседи и родитель

```javascript
elem.parentNode         //Получение родительского элемента
elem.nextSibling        //Получение следующего узла
elem.previousSibling    //Получение предыдущего узла
```

## Навигация только по элементам
```javascript
elem.children
elem.parentElement
elem.previousElementSibling
elem.nextElementSibling
elem.firstChild
elem.lastElementChild
```

## Навигация по таблице
```javascript
table.rows          // Коллекция строк
table.caption       // Ссылка элемент `<caption>`
table.tHead         // Ссылка на элемент `<thead>`
table.tFoot         // Ссылка на элемент `<tfoot>`
table.tBodies       // Коллекция элементов <tbody>
tbody.rows          // Коллекция строк
tr.cells            // Коллекция `td` и `th` ячеек, внутри `tr`
tr.sectionRowIndex  // Номер строки `tr` в текущей секции
tr.rowIndex         // Номер строки `tr` в таблице
td.cellIndex        // Номер ячейки в строке
th.cellIndex        // Номер ячейки в строке
```

# Поиск элеметов
```javascript
let elem = document.getElementById("идентификатор") //получение элемента через id
let elem = document.querySelector("css-селектор") //Получение элемента через селектор
let elems = document.querySelectorAll('css-селектор') //Получение коллекции через селектор
```

## Различные методы элементов
```javascript
имя_объекта instanceof имя_класса // Проверяет принадлежность объекта к определенному классу, с учетом наследования 


elem.matches('css-селектор')    // (boolean) | Проверяет, удовлетворяет ли эелемент css-селектору
elem.closest('css-селектор')    // (elem | null) | Поиск ближащего предка, который соответструет css-селектору
elem.constructor.name           // Получение имени DOM узла
elem.tagName                    // Имя элемента (есть только у элементов класса Elements)
elem.nodeName                   // Имя элемента (определено для любых узлов класса Node)
elem.innerHTML                  // Содержимое элемента только у узлов элемента
elem.outerHTML                  // Содержит HTML элемент целиком, как innerHML + сам элемент
elem.data                       // Содержимое текстового узла    
elem.nodeValue                  // Содержимое текстового узла
elem.hidden                     // (boolean) Указывает видимый элемент или нет

elem.value                      // Значение (для элемента класса HTMLInputElement, HTMLSelectElement, ...)
elem.href                       // Адрес ссылки (для элементов класса HTMLAnchorElement)
elem.id                         // Значение атрибута "id" для всех элеметов (HTMLElement)
```

## Атрибуты и свойства
```javascript
elem.hasAttribute('Имя атрибута')               // (boolean) Проверяет наличие атрибута
elem.getAttribute('Имя атрибута')               // Получить значение атрибута
elem.setAttribute("Имя атрибута", "Значение")   // Установить атрибут
elem.removeAttribute("Имя атрибута")            // Удалить атрибут
```

## Нестандартные атрибуты, dataset