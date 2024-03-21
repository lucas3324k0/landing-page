// Função para validar
function validar() {
    // Armazena o input de email
    let email = document.getElementById('email');
    let botao = document.querySelector('button');

    //le caractere
    let contador_str = email.value

    // quando nao tiver @ ele barra
    if(contador_str.includes('@') == false) {
        email.value = ''
        botao.style.background = 'red';
        email.placeholder = 'Erro, insira 0 @'; 
    }
    // quando o email for menor que 5 ele barra
    else if(contador_str.length  <= 5) {

        email.value = ''
        botao.style.background = 'red';
        email.placeholder = 'Erro, insira um email válido';
    }
    
    // Email valido se cumpre os requisitos
    else {
        email.value = ''
        botao.style.background = 'green';
        email.placeholder = 'Email válido';
    }
}
