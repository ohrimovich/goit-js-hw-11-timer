class CountdownTimer {
    constructor({targetDate}) {
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),

        }
        this.targetDate = targetDate;
        this.timerId = null;

    }

    calc = () => {
        this.startDate = Date.now();
      
         let time = this.targetDate - this.startDate;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        if (this.targetDate <= this.startDate) {
            clearInterval(this.timerId);
            this.setEndTimerValues();
            }
        return {days,hours,mins,secs }
    }
    
    updateTimerFace({days,hours,mins,secs }) {
         this.refs.days.textContent = days < 10 ? `0${days}` : days;
            this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
            this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
            this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
            
    }

    setEndTimerValues({days,hours,mins,secs }) {
        
        this.refs.days.textContent = '00';
        this.refs.hours.textContent = '00';
        this.refs.mins.textContent = '00';
        this.refs.secs.textContent = '00';
}

    startTimer() {
        this.timerId =  setInterval(() => {
            this.calc;
            const updateTime = this.calc();
            this.updateTimerFace(updateTime);
        }, 1000);
        }

}
const timer = new CountdownTimer({targetDate : new Date('Aug 26, 2022 10:10:00' )});
timer.startTimer();


