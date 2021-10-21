class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  getRefs = () => {
    const container = document.querySelector(this.selector);
    const days = container.querySelector('[data-value="days"]');
    const hours = container.querySelector('[data-value="hours"]');
    const mins = container.querySelector('[data-value="mins"]');
    const secs = container.querySelector('[data-value="secs"]');
    return {
      days,
      hours,
      mins,
      secs,
    };
  };
  setTime = ({ days, hours, mins, secs }) => {
    const time = this.targetDate - Date.now();
    days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  };
  pad(value) {
    return String(value).padStart(2, "0");
  }
  start = () => {
    setInterval(() => {
      this.setTime(this.getRefs())
    })
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Nov 17, 2021"),
});

timer.start();

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Nov 25, 2021"),
});

