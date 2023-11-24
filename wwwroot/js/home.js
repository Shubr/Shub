document.addEventListener("DOMContentLoaded", function(){
    let btn = document.getElementById("test");
    let logo_shub = document.getElementById('logo_shub');
    let c = false;
    btn.addEventListener('click', function(){
        if(c){
            logo_shub.classList.remove('scroll-up');
            logo_shub.classList.add('scroll-down');
            logo_shub.style.color = "red";
            c=!c;
        }
        else{
            logo_shub.classList.add('scroll-up');
            logo_shub.classList.remove('scroll-down');
            logo_shub.style.color = "red";
            c=!c;
        }
    })
})