$(document).ready(function(){

    // window.addEventListener("keydown", function() {
    //   switch (event.key) {
    //     case "ArrowLeft":
    //     // console.log("tasto sinistro");
    //     prevImg();
    //       break;
    //     case "ArrowRight":
    //     // console.log("tasto destro");
    //     nextImg();
    //       break;
    //     case "ArrowUp":
    //     // console.log("tasto destro");
    //     nextImg();
    //       break;
    //     case "ArrowDown":
    //     // console.log("tasto destro");
    //     prevImg();
    //       break;
    //   }
    // });

    // KEYWORD UTILIZZANDO JQUERY
    $(document).keydown(function(key) {
      if (key.keyCode === 39) {
        nextImg();
      } else if (key.keyCode === 37) {
        prevImg();
      }
    });


  //al click del div con classe next faccio partire funzione next
  $('div.next').click(nextImg)
  //al click del div con classe prev faccio partire funzione prev
  $('div.prev').click(prevImg)



  // al click dei pallini voglio che corrisponda la sua img
  // ATTIVAZIONE PRIMA IMG
  $('.nav i:first-child').click(function(){
    // $('.images img')removeClass('active');
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    $('.images img:nth-child(2)').removeClass('active');
    $('.images img:nth-child(3)').removeClass('active');
    $('.images img:first-child').addClass('active');
    $('.images img:last-child').removeClass('active');
  });
  // ATTIVAZIONE SECONDA IMG
  $('.nav i:nth-child(2)').click(function(){
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    $('.images img:nth-child(2)').addClass('active');
    $('.images img:nth-child(3)').removeClass('active');
    $('.images img:first-child').removeClass('active');
    $('.images img:last-child').removeClass('active');
  });
  // ATTIVAZIONE TERZA IMG
  $('.nav i:nth-child(3)').click(function(){
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    $('.images img:nth-child(3)').addClass('active');
    $('.images img:nth-child(2)').removeClass('active');
    $('.images img:first-child').removeClass('active');
    $('.images img:last-child').removeClass('active');
  });
  // ATTIVAZIONE QUARTA IMG
  $('.nav i:last-child').click(function(){
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    $('.images img:nth-child(3)').removeClass('active');
    $('.images img:nth-child(2)').removeClass('active');
    $('.images img:first-child').removeClass('active');
    $('.images img:last-child').addClass('active');
  });




  // FUNZIONI

  // funzione per scorrere img
  function nextImg() {
    // console.log("hai cliccato correttamente");

    // mi creo una variabile che mi dia lo stato iniziale
    var imgActive = $('img.active');
    // rimuovo la classe active ogni volta che do input
    imgActive.removeClass('active');
    // a questo punto creo delle condizioni per far si che arrivato all'ultimo elemento ricominci dalla prima img

    // se il punto in cui sono è l'ultima img con classe last
    if (imgActive.hasClass('last')) {
      // torno alla prima img assegnandogli classe active
      $('img.first').addClass('active');
    } else { //altrimenti
      // mi sposto classe active da fratello a fratello
      imgActive.next("img").addClass('active');
    }
    // sposta il pallino verso destra
    var circleActive = $('i.active')
    circleActive.removeClass('active')
    if (circleActive.hasClass('last')) {
      $('i.first').addClass('active');
    } else {
      circleActive.next("i").addClass('active');
    }
  }

  //funzione per tornare all'img precedente
  function prevImg() {
    // console.log("hai cliccato correttamente");

    //variabile che mi da posizione in cui sono
    var imgActive = $('img.active');
    imgActive.removeClass('active');

    //se sono al primo elemento e do input deve tornare all'ultimo
    if(imgActive.hasClass('first')){
      $('img.last').addClass('active');
    } else {// altrimenti torno all'img precedente spostando active all'indietro
      imgActive.prev("img").addClass('active');
    }
    // sposta pallino verso sinistra
    var circleActive = $('i.active');
    circleActive.removeClass('active');

    if(circleActive.hasClass('first')){
      $('i.last').addClass('active');
    } else {
      circleActive.prev("i").addClass('active');
    }
  }
});
