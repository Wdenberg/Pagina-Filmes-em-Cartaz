(async function () {
    document.querySelector(".filmes").innerHTML = "carregando...";
    let req = await fetch("https://api.b7web.com.br/cinema/");
    let json = await req.json();
    console.log(json);
    montarBlog(json);
 
  function montarBlog(lista) {
    let html = "";

    for (let i in lista) {
      html +=
        `<div class="col-md-4  bg-dark p-3"><div class="filme"><img class="img-thumbnail "src="${lista[i].avatar}"/><h4 class="mb-3 text-warning text-center filme">${lista[i].titulo}</h4></div></div>`;
    }
    document.querySelector(".filmes").innerHTML = html;
  }
})();



/*
$(function(){
    $.ajax({
        url:'https://alunos.b7web.com.br/cinema/',
        type:'GET',
        dataType:'json',
        success:function(json){
           console.log(json); 
        }
    });
});


https://api.b7web.com.br/cinema/
*/