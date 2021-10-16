
  const refs = {
    clock: document.getElementById("timer-1"),
    days: document.querySelector('.value[data-value="days"]'),
    hours: document.querySelector('.value[data-value="hours"]'),
    mins: document.querySelector('.value[data-value="mins"]'),
    secs: document.querySelector('.value[data-value="secs"]'),
  } 

  class CountdownTimer {
    constructor({ selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
      }
      timeinterval = setInterval(() => {
          const nowDate = Date.now();
          const time = this.targetDate - nowDate;
          this.updateClock(time);
          this.timeFinish(time);
      }, 1000);

      updateClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.clock.textContent = `${days} days : ${hours} hours : ${mins} minutes : ${secs} seconds`;
      }
      
    pad(value) {
        return String(value).padStart(2, "0");
    }
    timeFinish(time) {
        if (time <= 0) {
            clearInterval(this.timeinterval);
            refs.clock.textContent = "Finish";
          }
    }
}   

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 17, 2021'),
  });

