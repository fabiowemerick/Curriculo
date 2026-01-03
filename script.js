const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const erro = document.getElementById('erro');

form.addEventListener('submit', (event) => {

    if (nome.value === '' || email.value === '') {
        event.preventDefault(); 
        erro.textContent = 'Preencha todos os campos obrigatórios.';
        erro.style.color = 'red';
    } else {
        erro.textContent = 'Enviando mensagem...';
        erro.style.color = 'green';
       
    }
});
