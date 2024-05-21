const data = document.querySelector(".data");
const horas = document.querySelector(".hora");
const segundos = document.querySelector(".segundos");
const dias = document.querySelector(".dia");
const pmAM = document.querySelector(".pm");

const relogio = setInterval(function time() {
  let date = new Date();
  let diames = date.getDate();
  let mes = date.getMonth() + 1;
  let dia = date.getDay();
  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundo = date.getSeconds();

  data.textContent = `${mes} / ${diames}`;
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  horas.textContent = `${hora}:${minutos}`;
  if (segundo < 10) {
    segundo = "0" + segundo;
  }
  segundos.textContent = `${segundo}`;

  if (hora < 13) {
    pmAM.textContent = "AM";
  } else {
    pmAM.textContent = "PM";
  }

  if (dia === 0) {
    dia = "SU";
  } else if (dia === 1) {
    dia = "MO";
  } else if (dia === 2) {
    dia = "TU";
  } else if (dia === 3) {
    dia = "WE";
  } else if (dia === 4) {
    dia = "TH";
  } else if (dia === 5) {
    dia = "FR";
  } else {
    dia = "SA";
  }
  dias.textContent = `${dia}`;
});
