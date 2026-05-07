let contadorId = 0;

function adicionarLivro() {
  const inputNome = document.getElementById("inputNome");
  const inputDias = document.getElementById("inputDias");

  const nome = inputNome.value.trim();
  const dias = Number(inputDias.value);

  if (nome === "") {
    alert("Informe o nome do livro!");
    return;
  }

  const mensagemVazia = document.getElementById("mensagemVazia");
  if (mensagemVazia) {
    mensagemVazia.remove();
  }

  const id = "livro-" + contadorId;
  contadorId++;

  const itemDiv = document.createElement("div");
  itemDiv.id = id;
  itemDiv.classList.add("item-livro");

  if (dias > 0) {
    itemDiv.classList.add("atrasado");
  }

  itemDiv.innerHTML = `
        <div>
            <p><strong>${nome}</strong></p>
            <p>Dias de atraso: ${dias}</p>
            <p class="aviso">${dias > 0 ? "ATRASADO" : ""}</p>
        </div>
        <button onclick="removerLivro('${id}')">Confirmar Arquivamento</button>
    `;

  document.getElementById("listaLivros").appendChild(itemDiv);

  atualizarContadores();

  inputNome.value = "";
  inputDias.value = "0";
  inputNome.focus();
}

function removerLivro(id) {
  const item = document.getElementById(id);
  item.remove();

  const lista = document.getElementById("listaLivros");
  if (lista.children.length === 0) {
    lista.innerHTML =
      '<p id="mensagemVazia">Nenhum livro registrado ainda.</p>';
  }

  atualizarContadores();
}

function atualizarContadores() {
  const lista = document.getElementById("listaLivros");

  const todosItens = lista.querySelectorAll(".item-livro");
  const itensAtrasados = lista.querySelectorAll(".item-livro.atrasado");

  document.getElementById("totalProcessados").textContent = todosItens.length;
  document.getElementById("totalMulta").textContent = itensAtrasados.length;
}
