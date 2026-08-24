// Controle de Abas
function mudarAba(nomeAba) {
  document.querySelectorAll('.aba-conteudo').forEach(aba => {
    aba.classList.remove('ativa');
  });
  
  if (nomeAba === 'ficha') {
    document.getElementById('aba-ficha').classList.add('ativa');
  } else if (nomeAba === 'mestre') {
    document.getElementById('aba-mestre').classList.add('ativa');
  }
}

// Upload de Foto
function carregarFoto(event) {
  const leitor = new FileReader();
  leitor.onload = function() {
    const preview = document.getElementById('preview-foto');
    preview.src = leitor.result;
  };
  if (event.target.files[0]) {
    leitor.readAsDataURL(event.target.files[0]);
  }
}

// Habilidades
function adicionarHabilidade() {
  const input = document.getElementById('nome-habilidade');
  const nome = input.value.trim();

  if (nome === "") return;

  const lista = document.getElementById('lista-habilidades');
  const li = document.createElement('li');
  li.textContent = nome;

  // Botão de remover
  const btnRemover = document.createElement('button');
  btnRemover.textContent = " ✕";
  btnRemover.style.marginLeft = "10px";
  btnRemover.onclick = function() { li.remove(); };

  li.appendChild(btnRemover);
  lista.appendChild(li);

  input.value = "";
}

// Criar Sala do Mestre
function criarSala() {
  const nomeSala = document.getElementById('nome-sala').value.trim();
  const status = document.getElementById('status-sala');

  if (nomeSala === "") {
    status.textContent = "Digite um nome para a sala!";
    status.style.color = "#f04747";
    return;
  }

  status.textContent = `Sala "${nomeSala}" criada com sucesso!`;
  status.style.color = "#43b581";
}
