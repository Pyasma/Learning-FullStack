let count = 0
let saveEl = document.getElementById('prev-ent')
let camelCase = document.getElementById('count-el')

function increment() {
    count += 1
    camelCase.innerText = count
}

function save() {
    const countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    camelCase.innerText = count
}