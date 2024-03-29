document.addEventListener('DOMContentLoaded', function(){
    const pergunta = document.querySelectorAll('.perguntas__lista__item');
    const planos_cards = document.querySelector('.planos__escolhas__cards');
    const fim_scroll = document.querySelector('.fim_position');
    
    window.addEventListener('scroll', function(){
        console.log(planos_cards.getBoundingClientRect().top);
    })

    pergunta.forEach(element => {
        element.addEventListener('click', function(){
            this.children[0].classList.toggle('--alterar_icone');
            this.children[1].classList.toggle('--colapsar');
            
        })
    });
        
})