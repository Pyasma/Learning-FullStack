let saves = [];
let inputField = document.getElementById("input-el");
const  saveBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("saves"));

const ulel = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        saves.push(tabs[0].url);
        localStorage.setItem("saves", JSON.stringify(saves));
        render(saves);
    });
})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
      listItems += `
        <li>
          <a href="${leads[i]}" target="_blank">
            ${leads[i]}
          </a>
        </li>`;
    }
    ulel.innerHTML = listItems;
  }

saveBtn.addEventListener("click",function() {
    saves.push(inputField.value);
    // ulel.innerHTML += `<li><a href='${inputField.value}' target='_blank'>${inputField.value}<a></li>`;
    localStorage.setItem("saves", JSON.stringify(saves));
    render(saves);
    inputField.value = "";
});


function storage(){
    if (leadsFromLocalStorage) {
        saves = leadsFromLocalStorage;
        render(saves);
    }
}

clearBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    saves = [];
    ulel.innerHTML = "";
})





