function Validar(){
    let email = document.getElementById('DigiteseuEmail').value;
    let nome = document.getElementById('DigiteseuNome').value;
    let telefone = document.getElementById('DigiteseuTelefone').value;
    let dataNascimento = document.getElementById('DigitesuaDatadeNascimento').value;
    let CPF = document.getElementById('Digiteseucpf').value;
    let endereco = document.getElementById('DigiteseuEndereco').value;
    let senha = document.getElementById('DigitesuaSenha').value;
    
    

    if(!email || !nome ){
        alert("campos de preenchiemento obrigatorio por Favor preencher");
    }else{
        alert("campos preenchido com sucesso");
    }
}

   