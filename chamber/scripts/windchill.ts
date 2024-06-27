
let tempSpan: HTMLElement = document.getElementById("temperature");
let windchill: HTMLAnchorElement = document.getElementById("windspeed");
let chillSpan: HTMLAnchorElement = document.getElementById("windchill");

function showWindChill(tem: Number, wind: number): void {
  if (temp > 50 || wind <= 3) {
    chillSpan.innerText = "N/A";
    return;
  }

  let chillfactor: number = wind ** 0.16;
  let chill: number =
    35.74 + 0.6215 * temp - 35.75 * chillfactor + 0.4275 * tem;
  chillSpan.innerHTML = `${chill.toFixed(0)}&deg;F`;

  showWindChill(parseInt(tempSpan.innerText), parseInt(windSpan.innerText));
};
