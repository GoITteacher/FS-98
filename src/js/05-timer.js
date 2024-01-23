/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

const startBtn = document.querySelector('button[data-action-start]');
const pauseBtn = document.querySelector('button[data-action-pause]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

class Timer {
  constructor(tick) {
    this.tick = tick;
    this.isActive = false;
    this.lastTime = 0;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();

    this.intervalId = setInterval(() => {
      const current = Date.now();
      const diff = current - this.initTime + this.lastTime;
      const timeObj = this.#msToTime(diff);
      this.tick(timeObj);
    }, 1000);
  }

  pause() {
    if (!this.isActive) return;
    this.lastTime = Date.now() - this.initTime + this.lastTime;
    this.isActive = false;
    clearInterval(this.intervalId);
  }

  stop() {
    if (!this.isActive) return;
    this.lastTime = 0;
    this.isActive = false;
    clearInterval(this.intervalId);
  }

  #msToTime(s) {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;

    return { hrs, mins, secs };
  }
}

const timer = new Timer(tick);

startBtn.addEventListener('click', () => {
  timer.start();
});

stopBtn.addEventListener('click', () => {
  clockface.textContent = '00:00:00';
  timer.stop();
});

pauseBtn.addEventListener('click', () => {
  timer.pause();
});

function tick({ hrs, mins, secs }) {
  const timeStr = `${addZero(hrs)}:${addZero(mins)}:${addZero(secs)}`;
  clockface.textContent = timeStr;
}

function addZero(num) {
  return num.toString().padStart(2, '0');
}
