/*function cambiaColor(){
    if(window.innerWidth <= 991){
        console.log('Funciona');
        let addColor = document.getElementById('navigation');
        console.log(addColor)
        addColor.classList.add("menu--color")
    }
    else{
        let addColor = document.getElementById('navigation');
        addColor.classList.remove("menu--color")
    }
}

window.addEventListener('resize', cambiaColor);*/

/*let boton = document.getElementById('clicMenu');
boton.onclick = agregarClase;*/

/*let contador = 0;
function agregarColor(){
    let addColor = document.getElementById('navigation');
    addColor.classList.toggle("menu--color")
    contador += 1;
    if (contador % 2 == 0){
        console.log('es par');

    }
    else{
        console.log('es impar');
    }
}
window.addEventListener('onclick', agregarColor);*/

let contador = 0;

function agregarColor(){
    contador += 1;
    if(window.innerWidth <= 991){
        if(contador % 2 == 0){
            let addColor = document.getElementById('navigation');
            addColor.classList.remove("menu--color","menu--des")
            addColor.classList.toggle("menu--tra")
            setTimeout(() => {
                addColor.classList.remove("menu--tra");
            }, 500);
        }
        else{
            let addColor = document.getElementById('navigation');
            addColor.classList.add("menu--color","menu--des")
        }
    }
}