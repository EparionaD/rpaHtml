let contador = 0;
let boton = document.getElementById('clicMenu');

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

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop || document.body.scrollTop

    if(scroll > 50){
        boton.removeAttribute('onclick','agregarColor()')
        document.getElementById("navigation").classList.add('menu--color','menu--des');

        let efecto = document.getElementsByClassName("menu__item");
        for (let i = 0; i < efecto.length; i++) {
            efecto[i].classList.remove('menu__item--color')
            if(efecto[i].classList.contains('active')){
                efecto[i].classList.remove('active--color')
                console.log('no tiene')
            }
        }

    }else{
        boton.setAttribute('onclick','agregarColor()')
        document.getElementById("navigation").classList.remove('menu--color','menu--des');
        document.getElementById("navigation").classList.add('menu--tra');
        setTimeout(() => {
            document.getElementById("navigation").classList.remove('menu--tra');
        }, 100);

        let efecto = document.getElementsByClassName("menu__item");
        if(window.innerWidth >=992){
            for (let i = 0; i < efecto.length; i++) {
                efecto[i].classList.add('menu__item--color')
                if(efecto[i].classList.contains('active')){
                    efecto[i].classList.add('active--color')
                    console.log('si tiene active')
                }
            }
        }
    }
}

/*if(window.innerWidth >=992){
    let efecto = document.getElementsByClassName("menu__item");
    for (let i = 0; i < efecto.length; i++) {
        if(efecto[i].classList.contains('active')){
            efecto[i].classList.add('active--color')
            console.log('si tiene active')
        }
    }
}*/