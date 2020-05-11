 var tara=jQuery("body h1.titlu").text();

    var images = ['consecinte/'+tara+'/1.jpg', 'consecinte/'+tara+'/2.jpg', 'consecinte/'+tara+'/3.jpg', 'consecinte/'+tara+'/4.jpg'];

    var x = 0;

    var imgs = document.getElementById('img2');

    setInterval(slider, 2000);


    function slider() {

      if (x < images.length) {
        x = x + 1;
      } else {
        x = 1;
      }


      imgs.innerHTML = "<img src=" + images[x - 1] + " id='img3'>";


    }

