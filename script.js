const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');
const title = document.getElementById('title');


const currentYear =  new Date().getFullYear();

const newBirthTime = new Date(`June 21 ${currentYear} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const diff = newBirthTime-currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' +h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}


setTimeout(() => {
   loading.remove();
   countdown.style.display = 'flex'
}, 1000)

setInterval(updateCountdown, 1000);