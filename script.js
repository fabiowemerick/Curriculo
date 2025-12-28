const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const erro = document.getElementById('erro');

form.addEventListener('submit',(event) =>{
    event.preventDefault();

    if(nome.value ==='' || email.value ===''){
        erro.textContent = 'Preencha todos os campos obrigatorios.';
        erro.style.color = 'red';
    }else { 
        erro.textContent='Mensagem enviada com sucesso!';
        erro.style.color = 'green';
        form.reset();
    }
});