const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

//LÓGICA DE CADASTRO
//Abrir modal
//Clicar no botão
//Setar os campos com os valores do usuário do localStorage
//Trocar o botão salvar para atualizar
//Salvar as informações no localStorage
//Fechar o model
//Recarregar a página

//FUNÇÃO DE EXIBIR OS USUÁRIOS
//Pegar os itens no localStorage (getItem)
//Colocar os dados dentro de um array
//Utilizar o método forEach para percorrer o array
//Criar a tabela usando o DOM (id do tbody)



const createNewUser = () => {
    let listUser = []

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cel = document.getElementById("cel").value;
    const cidade = document.getElementById("cidade").value;
}    
// Aqui você pode realizar ações com os dados salvos, como enviar para um servidor, salvar em localStorage, etc.
    const dadosUser = {
        name: name,
        email: email,
        cel: cel,
        cidade: cidade,
    }

    if (localStorage.getItem("userRegistration")) {
        listUser = JSON.parse(localStorage.getItem(userRegistration));
    }

    listUser.push(dadosUser);

    localStorage.setItem("userRegistration", JSON.stringify(listUser));
    
    
