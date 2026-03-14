// Смена цвета фона
setTimeout(() => { document.body.style.color = "#FFFFFF"}, 2000)
setTimeout(() => { document.body.style.background = "#1F2A3C"}, 2000)

console.log(navigator.userAgent)


console.log(document.body.childNodes[1].nextSibling)
console.log(document.body.childNodes[5].rows[1].cells[0])

let el = document.getElementById("sp1")
let el2 = document.querySelector("li")
let el3 = document.querySelectorAll("li")
console.log(el, el2, el3)

for (let e of el3) {
    if (e.matches('#sp1')) {
        e.style.background = "#ff0000"
    }
}

console.log(el.closest('ul'))

console.log(el2.innerHTML = `<script>console.log(123)</script>`)

let text = document.body.firstChild
console.log(text.data)

setTimeout(() => { news.textContent = "Стас уснул! трагедия" }, 2000)

news.hidden = true

setInterval(() => {
    if (news.hidden) {
        news.hidden = false
    } else {
        news.hidden = true
    }
}, 1000)