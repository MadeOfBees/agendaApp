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
            timeBlock.classList.add('time-block-r');
        } else if (valueOf==0){
            timeBlock.classList.add('time-block-c');
        } else if (valueOf>0){
            timeBlock.classList.add('time-block-g');
        }
        const itterationText = document.createElement("p")
        const currentNode = document.createTextNode(`${subNum(pmAdjust(itterationTime), itterationTime)}`);
        const form = document.createElement("p")
        form.classList.add(Math.random());
        itterationText.appendChild(currentNode);
        timeBlock.appendChild(itterationText);
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