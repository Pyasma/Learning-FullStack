let count1 = 0;
let count2 = 0;
let team1 = document.getElementById("Team1")
let team2 = document.getElementById("Team2")
  
function addScore(Team,points) {
    if (Team == "home") {
        count1 += points;
        team1.textContent = count1;
    } else {
        count2 += points;
        team2.textContent = count2;
    }
    updateBorder();
}

function reset() {
    count1 = 0;
    count2 = 0;
    team1.innerText = count1;
    team2.innerText = count2;
    team1.style.border = "2px solid black";
    team2.style.border = "2px solid black";
}

function updateBorder() {
    team1.style.border = "2px solid black";
    team2.style.border = "2px solid black";

    if (count1 > count2) {
        team1.style.border = "4px solid green";
    } else if (count2 > count1) {
        team2.style.border = "4px solid green";
    }
    else {
        team1.style.border = "4px solid orange";
        team2.style.border = "4px solid orange";
    }
}
