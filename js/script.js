var btnPresentacion = document.querySelector("#item1");


btnPresentacion.addEventListener('click',function(){
    var section1 = document.querySelector(".section1")
    var offDisplay = document.querySelectorAll(".visible");
    displayOff(offDisplay);
    section1.classList.add("visible");
    })

var btnLenguajes = document.querySelector("#item2");
btnLenguajes.addEventListener("click", function(){
    var section2 = document.querySelector(".section2");
    var offDisplay = document.querySelectorAll(".visible");
    displayOff(offDisplay);
    section2.classList.add("visible");
})

var btnTecnologias = document.querySelector("#item3");
btnTecnologias.addEventListener("click", function(){
    var section3 = document.querySelector(".section3");
    var offDisplay = document.querySelectorAll(".visible");
    displayOff(offDisplay);
    section3.classList.add("visible");
})

var btnContacto = document.querySelector("#item4");
btnContacto.addEventListener("click", function(){
    var section4 = document.querySelector(".section4");
    var offDisplay = document.querySelectorAll(".visible");
    displayOff(offDisplay);
    section4.classList.add("visible");
})

function displayOff(lista){
    for (let i = 0; i < lista.length; i++) {
        var element = lista[i];
        element.classList.remove("visible");
    }
}