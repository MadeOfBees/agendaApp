document.getElementById('currentDay').innerHTML = new Date().toUTCString();
const currentTime = new Date().getHours();
const mainScreen = document.getElementById('currentDay');
const hoursBack = 6;


async function init() {
    for (let i = 0; i < 48; i++) {
        const valueOf = (i - hoursBack);
        const itterationTime = (currentTime + (i) - hoursBack);
        const timeBlock = document.createElement("div");
        if (valueOf < 0 - valueOf) {
            timeBlock.classList.add(`card`, `bg-danger`);
        } else if (valueOf == 0) {
            timeBlock.classList.add(`card`, `bg-secondary`);
        } else if (valueOf > 0) {
            timeBlock.classList.add(`card`, `bg-success`);
        }
        const itterationText = document.createElement("label")
        const currentNode = document.createTextNode(`${subNum(pmAdjust(itterationTime), itterationTime)}`);
        const input = document.createElement("input")
        const form = document.createElement("form")
        const inputNode = document.createTextNode(`Schedule for this spot!`);
        timeBlock.appendChild(itterationText);
        mainScreen.appendChild(timeBlock);
        input.appendChild(inputNode)
        form.appendChild(input);
        timeBlock.appendChild(form);
        itterationText.appendChild(currentNode);
        if (valueOf < 0 - valueOf) {
            form.classList.add(`bg-danger`);
        } else if (valueOf == 0) {
            form.classList.add(`bg-secondary`);
        } else if (valueOf > 0) {
            form.classList.add(`bg-success`);
        }
    }
}
init()

function subNum(pmStatus, time) {
    const weekdays = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
    if (pmStatus == 1) {
        return (`${time} AM`);
    } else if (pmStatus == 2) {
        return (`${time - 12} PM`);
    } else if (pmStatus == 3) {
        return (`Tomorrow at ${time - 24} AM`);
    } else if (pmStatus == 4) {
        return (`Tomorrow at ${time - 36} PM`);
    } else if (pmStatus == 5) {
        return (`${weekdays[(new Date().getDay())]} at ${time - 48} AM`);
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