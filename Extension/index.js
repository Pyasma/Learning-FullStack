let saves = [];
let inputField = document.getElementById("input-el");
let saveBtn = document.getElementById("input-btn");
let clearBtn = document.getElementById("clear-btn");

const ulel = document.getElementById("ul-el");

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    saves = [];
    ulel.innerHTML = "";
})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("saves"));

function storage(){
    let listItems = "";
    if (leadsFromLocalStorage && performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        saves = leadsFromLocalStorage;
        
        for (let i = 0; i < saves.length; i++) {
            listItems += `<li><a href='${saves[i]}' target='_blank'>${saves[i]}<a></li>`;
        }
    }
    ulel.innerHTML = listItems;
}


saveBtn.addEventListener("click",function() {
    saves.push(inputField.value);
    // ulel.innerHTML += `<li><a href='${inputField.value}' target='_blank'>${inputField.value}<a></li>`;
    localStorage.setItem("saves", JSON.stringify(saves));
    render();
    inputField.value = "";
});


function render() {
    listItems = "";
    for (let i = 0; i < saves.length; i++) {
        listItems += `
        <li>
            <a href='${saves[i]}' target='_blank'>${saves[i]}<a>
        </li>`;
    }
    // let listItems = "<li>"+inputField.value+"</li>";
    // let li = document.createElement("li");
    // li.textContent = saves;
    // ulel.appendChild(li);
    ulel.innerHTML += listItems;
}
