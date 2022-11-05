document.getElementById('currentDay').innerHTML = new Date().toUTCString();
const currentTime = new Date().getHours();
const mainScreen = document.getElementById('currentDay');
const timeBlock = [];
const TimeNode = [];

function init() {
    for (let i = 0; i < 48; i++) {
        const timeCount = [];
        timeCount[i] = currentTime + (i);
        timeBlock[i] = document.createElement("p")
        timeBlock[i].classList.add('time-block');
        const pma = pmAdjust(timeCount[i])
        var blocktime = subNum(pma, timeCount[i])
        TimeNode[i] = document.createTextNode(`${blocktime}`);
        timeBlock[i].appendChild(TimeNode[i]);
        mainScreen.appendChild(timeBlock[i]);
    }
}
init()

function subNum(pmStatus, time) {
    if (pmStatus == 1){
        return (`${time} AM`);
    }else if (pmStatus == 2){
        return (`${time - 12} PM`);
    }else if (pmStatus == 3){
        return (`${time - 24} AM`);
    }else if(pmStatus == 4){
        return (`${time - 36} PM`);
    }else if (pmStatus == 5){
        return (`${time - 48} AM`);
    };
};

function pmAdjust(number) {
    if (number<=12){
        return 1
    }else if (number >= 12 && number <= 24){
        return 2;
    }else if (number > 24 && number <= 36){
        return 3;
    } else if(number > 36 && number <= 48){
        return 4;
    }else return 5;
};