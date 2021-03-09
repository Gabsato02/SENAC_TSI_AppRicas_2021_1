const linha1 = document.querySelector(".linha-1");
const linha2 = document.querySelector(".linha-2");
const grafico = document.querySelector("#grafico");

grafico.addEventListener("mouseenter", () => {
  linha1.setAttribute("stroke", "yellow");
  linha2.setAttribute("stroke", "pink");
});

grafico.addEventListener("mouseleave", () => {
  linha1.setAttribute("stroke", "blue");
  linha2.setAttribute("stroke", "red");
});
