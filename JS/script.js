var content = document.getElementById("herohead");

content.innerHTML = ` <div id="header">
<h3>Neslihan Minaz - Frontend Web Developer</h3>
<img class="logo" id="head-logo" src="../img/logo.png" alt="CodeFactory-Logo">
</div>

<ul>
<li><a href="gallery.html">Gallery</a></li>
<li><a href="contact.html">Contact</a></li>
<li><a href="about.html">About me</a></li>
<li><a href="blog.html">Blog</a></li>
<li><a href="index.html">Home</a></li>
</ul>`;

var footer = document.getElementById("footer");

footer.innerHTML = `<div class="main">
<img class="logo" src="../img/logo.png" alt="CodeFactory-Logo">
<p>Neslihan Minaz CodeFactory 2021</p>
</div>`;

//Nested Swiper
var swiperH = new Swiper('.swiper-container-h', {
    // spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    // spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

 //Mousewheel Swiper
//  var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   }); 