var listagem = document.getElementById('lista-tarefas') //pega a div da listagem
var id = 0 //variável para controlar os ids dos elementos

//função para adicionar uma nova tarefa
function adicionarTarefa() {
  var tarefa = document.getElementById('novaTarefa').value //pega o texto a ser adicionado
  id++
  //validação para não ser adicionada tarefa vazia
  if (tarefa == '') {
    alert('Descreva a tarefa.')
  } else {
    const paragrafo = document.createElement('p') //cria um novo paragrafo
    paragrafo.innerHTML = `<input type="checkbox" onclick="concluirTarefa(this)" id="${id}" />` //adiciona o checkbox a tarefa com o id dinamico
    paragrafo.appendChild(document.createTextNode(tarefa)) //adiciona o texto a nova tarefa
    listagem.appendChild(paragrafo) //adiciona a tarefa a listagem
    paragrafo.classList.add('emAndamento') //adiciona a classe ao paragrafo
    paragrafo.setAttribute('id', `paragrafo${id}`) //adiciona o id ao paragrafo
    document.getElementById('novaTarefa').value = '' //apaga o texto atual no input
  }
}

//função para concluir e riscar a tarefa
function concluirTarefa(p) {
  var id = p.id //identificador do id passado pelo this
  var paragrafo = document.getElementById(`paragrafo${id}`) //capturando o paragrafo adequado
  var checkbox = document.getElementById(id) //capturando o checkbox adequado
  if (paragrafo.className == 'emAndamento') {
    paragrafo.classList.replace('emAndamento', 'concluido') //alterando a classe css
    checkbox.setAttribute('disabled', 1) //desativando o checkbox
  }
}
