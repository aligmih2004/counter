let check = true;
let start1, start2, start3;
let minute = 0, second = 0, msecond = 0;
let trashBtns;
let count = 0;
const formatNumber = number => number < 10 ? '0' + number : number;
const counter = () => {
  const Hour = document.querySelector("#hour");
  const Minute = document.querySelector('#second');
  if (check) {
    check = false;
    document.querySelector("#start").innerHTML = "Stop";
    const [m, s, ms] = document.querySelectorAll("#m, #s, #ms");
    start1 = setInterval(() => {
      if (msecond == 60) msecond = 0;
      msecond++;
      ms.innerHTML = formatNumber(msecond);
    }, (1000 / 60));
    start2 = setInterval(() => {
      if (second == 60) second = 0;
      second++;
      s.innerHTML = formatNumber(second);
    }, 1000);
    start3 = setInterval(() => {
      if (minute == 60) {
        Hour.innerHTML = parseInt(Hour.innerHTML) + 1;
        second = 0;
      }
      minute++;
      m.innerHTML = formatNumber(minute);
      Minute.innerHTML = formatNumber(minute);
    }, 1000 * 60);
  } else {
    check = true;
    document.querySelector("#start").innerHTML = "Start";
    [ start1, start2, start3 ].forEach(clearInterval); 
    [ "#m", "#s", "#ms" ].map(selector => parseInt(document.querySelector(selector).innerHTML)); 
  }
}
const restart = () => {
    minute = 0;
    second = 0;
    msecond = 0;
    const selectors = ["#m", "#s", "#ms"];
    for (const selector of selectors) {
      document.querySelector(selector).innerHTML = "00";
    }}
const mapping = {
    "#start": counter,
    "#add": restart,
};
for (const selector in mapping) {
    const element = document.querySelector(selector);
    const listener = mapping[selector];
    element.addEventListener("click", listener);
}
const addBtn = document.querySelector("#save");
var Hcard = document.querySelector("#Hcard");
addBtn.addEventListener("click",()=>{
    count++;
        Hcard.innerHTML += `
          <div class="card">
            <p>${formatNumber(minute)}:${formatNumber(second)}:${formatNumber(msecond)}</p>
            <input type="checkbox" id="use${count}">
            <label class="checkbox" for="use${count}">
              <div class="cercle"></div>
            </label>
            <button class="trash"></button>
          </div>`;
        trashBtns = document.querySelectorAll(".trash");
        trashBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const card = event.target.closest(".card");
            if (card) {
            card.remove();
            }
        });
        });
});