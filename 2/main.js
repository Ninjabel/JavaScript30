function setDate() {
    const time = new Date();

    secondHand = document.querySelector('.second-hand');
    const seconds = time.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    minuteHand = document.querySelector('.minute-hand');
    const minutes = time.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    hourHand = document.querySelector('.hour-hand');
    const hours = time.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    if (secondsDegree == 444) {
        secondHand.classList.add('notransition');
    }
    if (secondsDegree == 96) {
        secondHand.classList.remove('notransition');
    }

    if (minutesDegree == 444) {
        minuteHand.classList.add('notransition');
    }
    if (minutesDegree == 96) {
        minuteHand.classList.remove('notransition');
    }

    if (hoursDegree == 444) {
        hourHand.classList.add('notransition');
    }
    if (hoursDegree == 96) {
        hourHand.classList.remove('notransition');
    }

    console.log(secondsDegree);
}

setInterval(setDate, 1000);

