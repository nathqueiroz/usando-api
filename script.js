
async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";

    try {//tente fazer isso
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) { 
        throw Error('CEP inexistente!') 
    }

    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')
    var bairro = document.getElementById('bairro')

    cidade.value = consultaCEPConvertida.localidade
    logradouro.value = consultaCEPConvertida.logradouro
    estado.value = consultaCEPConvertida.uf
    bairro.value = consultaCEPConvertida.bairro


    console.log(consultaCEPConvertida)
    return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Digite novamente!</p>` 
    console.log(erro)
    }

}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value)) //focuout-evento quando o usuario clica fora após digitiar no campo