/* ------------------------------------------------------------------------------------- */
var btn_azul = document.getElementById('tema-default');
var btn_rojo = document.getElementById('tema-rojo');
var btn_verde = document.getElementById('tema-verde');
var btn_gris = document.getElementById('tema-gris');
var btn_temas = document.getElementById('item5');
var box_temas = document.getElementById('temas');
var buttonMailto = document.getElementById("email");
var form = document.getElementById("form");
btn_temas.addEventListener('click', temas)

form.addEventListener('submit', function(event){
    event.preventDefault();
        const form = new FormData(this);
        buttonMailto.setAttribute("href",`mailto:HeberDuarteRyR@gmail.com?subject=Portafolio - Mi nombre es ${form.get("name")}&body= ${form.get("message")}`);
        buttonMailto.click();
})


function temas(event){
    event.preventDefault()
    box_temas.style.display = 'flex';
    btn_azul.addEventListener('click', tema_azul);
    btn_rojo.addEventListener('click', tema_rojo);
    btn_verde.addEventListener('click', tema_verde);
    btn_gris.addEventListener('click', tema_gris);
}


function tema_azul(event){
    box_temas.style.display = 'none';
    document.documentElement.style.setProperty('--color1', '#3c40a4');
    document.documentElement.style.setProperty('--color2', '#4d68f0');
    document.documentElement.style.setProperty('--color3', '#8697fe');
    document.documentElement.style.setProperty('--color4', '#003567');
    document.documentElement.style.setProperty('--color5', '#119e99');
    
}
function tema_rojo(event){
    box_temas.style.display = 'none';
    document.documentElement.style.setProperty('--color1', '#a30a29');
    document.documentElement.style.setProperty('--color2', '#e21d38');
    document.documentElement.style.setProperty('--color3', '#ff8987');
    document.documentElement.style.setProperty('--color4', '#761622');
    document.documentElement.style.setProperty('--color5', '#8d5151');
    
}
function tema_verde(event){
    box_temas.style.display = 'none';
    document.documentElement.style.setProperty('--color1', '#40A33C');
    document.documentElement.style.setProperty('--color2', '#68F04D');
    document.documentElement.style.setProperty('--color3', '#87FF89');
    document.documentElement.style.setProperty('--color4', '#356600');
    document.documentElement.style.setProperty('--color5', '#9E9911');
    
}
function tema_gris(event){
    box_temas.style.display = 'none';
    document.documentElement.style.setProperty('--color1', '#2f4f4f');
    document.documentElement.style.setProperty('--color2', '#778899');
    document.documentElement.style.setProperty('--color3', '#d3d3d3');
    document.documentElement.style.setProperty('--color4', '#708090');
    document.documentElement.style.setProperty('--color5', '#808080');
    
}