function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  //se campoPesquisa for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>"
       return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa)

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descrição = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    //se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria uma nova div para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2> 
          <a href="https://www.youtube.com/watch/v=87Qqyw8OTa8" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descrição}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
  }
    }
     
    if (!resultados) {
      resultados = "<p>Nada foi encontrado. Você precisa digitar alguma coisa que faça sentino no nosso site</p>"
    }
    

  // Insere os resultados na seção HTML
  section.innerHTML = resultados;
}











