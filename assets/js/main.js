jQuery(document).ready(function() {
    jQuery.fn.fullpage({
        verticalCentered: true,
        resize : true,
        anchors: ['Home', 'about me', 'skill', 'contacta', 'contact'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        navigation: true,
        navigationPosition: 'right',
        loopBottom: false,
        loopTop: false,
        autoScrolling: true,
        css3: false,
        paddingTop: 0,
        paddingBottom: 0,

        //events
      
        afterLoad: function(anchorLink, index){

            if(anchorLink=='about me'){
                jQuery('#section1').find('.diapo').delay(200).animate({
                    left:'0%'
                },1000,'easeOutExpo');
               
            }
            if(anchorLink=='contacta'){
                jQuery('#section3').find('.diapo').delay(200).slideDown(1000,'easeOutCubic');

            }
            if(anchorLink=='contact'){
                jQuery('#section4 h2').delay(500).animate({
                    left:'0%'
                },1500,'easeOutExpo',function(){
                     jQuery('#section4 img').fadeTo(4000,1);
                })
               
            }

        },
        afterRender: function(){
                jQuery('#section0 img').delay(700).animate({left:'0%'},1500,'easeOutExpo');    
        },
    });
});

(function(){
      var words = [
          " "+'Trying'+ " ",
          'Dreaming',
          'Learning'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 1000);
        
  })();

$(function(){
  $('#caja').mixItUp();
});

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length; 
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};
var texto = "Lisbeth Balabarca";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,200);