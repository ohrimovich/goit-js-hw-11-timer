class CountdownTimer {
    constructor({targetDate}) {
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),

        }
        this.targetDate = targetDate;
        this.id = null;
        

    }

    calc = () => {
         this.startDate = Date.now();
         let time = this.targetDate - this.startDate;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            if(this.targetDate <= this.startDate) {
                 clearInterval(this.id)
            }
        return {days,hours,mins,secs }
    }
    
updateTimerFace({ days, hours, mins, secs }) {
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    this.refs.days.textContent = days < 0 ? `00` : days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.hours.textContent = hours < 0 ? `00` : hours;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.mins.textContent = mins < 0 ? `00` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    this.refs.secs.textContent = secs < 0 ? `00` : secs;
  }

    startTimer() {
        this.id = setInterval(() => {
            this.calc;
            const updateTime = this.calc();
            this.updateTimerFace(updateTime);
        }, 1000);
        }

}
const timer = new CountdownTimer({targetDate : new Date('Aug 16, 2021')});
timer.startTimer();


