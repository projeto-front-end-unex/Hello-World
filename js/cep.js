async function BuscarCEP(){
    viacep = document.getElementById('cep').value;
    resposta = await fetch(`https://viacep.com.br/ws/${viacep}/json/`);
    RespCep = await resposta.json(); 

    document.getElementById('bairro').value = RespCep.bairro;
    document.getElementById('cidade').value = RespCep.localidade;
    document.getElementById('estado').value = RespCep.uf;
    document.getElementById('ddd').value = RespCep.ddd;
}

function Verificar(){
    viacep = document.getElementById('cep').value;
    if(viacep.length < 9 || viacep.length > 9){
        alert('Digite um CEP válido')
    } else {
        BuscarCEP()
    }
}

document.getElementById('cep').addEventListener('focusout',Verificar); 