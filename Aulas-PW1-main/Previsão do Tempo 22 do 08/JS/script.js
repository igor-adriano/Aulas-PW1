let chave = "4c6ede3d86c7bb6c701e75e439c03bed";

const clique = () => {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);

     if (cidade === ""){
    alert("Não há nada escrito")
}else{
    alert("Preechido com sucesso, buscando dados de: " + cidade)
    }

}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const buscarCidade = async (cidade) => {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
    .then(res => res.json())

    console.log(dados);
    colocaNaTela(dados);


}

const colocaNaTela = (dados) => {
    document.querySelector(".nome-cidade").innerHTML = dados.name;
    document.querySelector(".temp1").innerHTML = dados.main.temp;
    document.querySelector(".descrition").innerHTML = dados.weather[0].description;
    document.querySelector(".umid").innerHTML = dados.main.humidity;
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

