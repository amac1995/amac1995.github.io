/*============ Navbar transparente to Solida ==========*/

$(document).ready(function(){
    $(window).scroll(function () {
        /* Se o scroll da janela for superior a 300 pixeis -> Solid */
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');

        /* So desaparece caso o scroll da janela for inferior a 300 pixeis -> transparent */
        } else{
            $('.navbar').removeClass('solid');
        }
    })
})

/*============ Clicar na navegacao pretendida ==========*/

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        /* Criacao de uma variavel que descubra se ja estamos na navegacao certa ou nao */
        var _opened = $(".navbar-collapse").hasClass("show");
        if(_opened === true && !clickover.hasClass("navbar-toggler")){
            $(".navbar-toggler").click();
        }
    })
})

/* Scrolling Inteligente para links */

$(document).ready(function(){
    $("a").on('click', function (event) {
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                //800 miliseconds
            }, 800, function (){
                window.location.hash=hash;
            })
        }//end if 
    })
})