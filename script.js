document.getElementById('currentDay').innerHTML = new Date().toUTCString();
const currentTime = new Date().getHours();
const mainScreen = document.getElementById('currentDay');
const hoursBack = 6;


function init() {
    for (let i = 0; i < 48; i++) {
        const valueOf = (i - hoursBack);
        const itterationTime = (currentTime + (i)-hoursBack);
        const timeBlock = document.createElement("div");
        if (valueOf<0-valueOf) {
            timeBlock.classList.add(`card`, `bg-danger`);
        } else if (valueOf==0){
            timeBlock.classList.add(`card`, `bg-secondary`);
        } else if (valueOf>0){
            timeBlock.classList.add(`card`, `bg-success`);
        }
        const itterationText = document.createElement("p")
        const itterationButt = document.createElement("button")
        const currentNode = document.createTextNode(`${subNum(pmAdjust(itterationTime), itterationTime)}`);
        const currentButt = document.createTextNode(`Schedule for this spot!`);
        itterationButt.addEventListener("click", function () {
            console.log(1)
        });
        itterationText.appendChild(currentNode);
        itterationButt.appendChild(currentButt);
        timeBlock.appendChild(itterationText);
        timeBlock.appendChild(itterationButt);
        mainScreen.appendChild(timeBlock);
    }
}
init()

function subNum(pmStatus, time) {
    if (pmStatus == 1) {
        return (`${time} AM`);
    } else if (pmStatus == 2) {
        return (`${time - 12} PM`);
    } else if (pmStatus == 3) {
        return (`${time - 24} AM`);
    } else if (pmStatus == 4) {
        return (`${time - 36} PM`);
    } else if (pmStatus == 5) {
        return (`${time - 48} AM`);
    };
};

function pmAdjust(number) {
    if (number <= 12) {
        return 1
    } else if (number >= 12 && number <= 24) {
        return 2;
    } else if (number > 24 && number <= 36) {
        return 3;
    } else if (number > 36 && number <= 48) {
        return 4;
    } else return 5;
};