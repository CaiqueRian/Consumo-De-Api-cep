function preencherForm(endereco){
    document.querySelector("#ruaLabel").value = endereco.logradouro;
    document.querySelector("#bairroLabel").value = endereco.bairro;
    document.querySelector("#cidadeLabel").value = endereco.localidade;
    document.querySelector("#estadoLabel").value = endereco.uf;
}


let pesquisarCep = async()=>{
    let cep = document.querySelector("#cepLabel").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dados = await fetch(url);
    let endereco = await dados.json()
    preencherForm(endereco)
    console.log(endereco);
}

