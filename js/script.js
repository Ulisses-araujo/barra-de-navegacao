const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');
    const navLinks = document.querySelectorAll('.link li');

   
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('active');
        //animação dos links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 1}s`
            } 
        });
        //animação burger
        burger.classList.toggle('toggle');
        
    }); 
}
navSlide();