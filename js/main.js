$(document).ready(function(){
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });
      });

    //   POST->un array de objetos
      const post = [
        {
            title: 'Titulo1 del Post',
            date: ' 11 de Agosto de 2021 by María',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque aut expedita fugiat enim quisquam laborum adipisci optio error quasi, numquam quo delectus reiciendis culpa velit est a illum tempora.iores facilis dolorem cum distinctio. Iste debitis veniam neque, pariatur porro quibusdam omnis nulla provident quas? Velit atque deserunt nemo? Non nihil molestias corporis quod dignissimos nemo eaque fuga voluptatibus?'
        },
        {
            title: 'Titulo2 del Post',
            date: ' 20 de Julio del 2021 by Juan',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque aut expedita fugiat enim quisquam laborum adipisci optio error quasi, numquam quo delectus reiciendis culpa velit est a illum tempora.iores facilis dolorem cum distinctio. Iste debitis veniam neque, pariatur porro quibusdam omnis nulla provident quas? Velit atque deserunt nemo? Non nihil molestias corporis quod dignissimos nemo eaque fuga voluptatibus?'
        },
        {
            title: 'Titulo3 del Post',
            date: ' 10 de Junio del 2019 by Manuel',
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque aut expedita fugiat enim quisquam laborum adipisci optio error quasi, numquam quo delectus reiciendis culpa velit est a illum tempora.iores facilis dolorem cum distinctio. Iste debitis veniam neque, pariatur porro quibusdam omnis nulla provident quas? Velit atque deserunt nemo? Non nihil molestias corporis quod dignissimos nemo eaque fuga voluptatibus?'
        },
      ];
      console.log(post);
      post.forEach((item,index) => { //voy a crear una plantilla
        var posts = `
        <div class="post-title">
        <h2>${item.title}<br>
      <span> Publicado el ${item.date}</span></h2>
        <button class="post-title-button">Comentarios</button>
</div>

        <p>${item.content}
        </p> `
          //ahora creamos el nodo que contendra la plantilla
          //$('.Selector').append()
          $('.div-post').append(posts)
      });
//cambiar atributo de hoja de estilos
let theme = document.getElementById("theme");
console.log(theme);
let themeGreen = document.getElementById("themeGreen");
console.log(themeGreen);
let themeBlue = document.getElementById("themeBlue");
console.log(themeBlue);
let themeRed = document.getElementById("themeRed");
console.log(themeRed);
let selector = document.getElementById("selector-theme")


themeGreen.addEventListener("click", function() {
  theme.setAttribute("href", "./css/green.css");
document.body.setAttribute("class", "green");
});
themeBlue.addEventListener("click", function() {
  theme.setAttribute("href", "./css/blue.css");
  document.body.setAttribute("class", "blue");
});
themeRed.addEventListener("click", function() {
  document.body.setAttribute("class", "red");
  theme.setAttribute("href", "./css/red.css");
});

// themeGreen.addEventListener("click", function() {
//    theme.setAttribute("href", "./css/red.css");
//    themeBlue.innerHTML = "He";
//   });