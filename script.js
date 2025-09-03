document.addEventListener('DOMContentLoaded', function () {

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

 alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })

    alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
  
 })

 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#gotico', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });