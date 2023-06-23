const myHeader = document.querySelector("header");
const buttonHeader = document.querySelector("nav button");
console.log(buttonHeader);

document.addEventListener("scroll", function (e) {
  if (window.scrollY > 370) {
    myHeader.classList.add("secondClassHeader");
    buttonHeader.classList.add("greenButton");
  } else {
    myHeader.classList.remove("secondClassHeader");
    buttonHeader.classList.remove("greenButton");
  }
});

console.log("ciao");
