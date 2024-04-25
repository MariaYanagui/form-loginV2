function validarForm() {
    var usuario = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
}
}