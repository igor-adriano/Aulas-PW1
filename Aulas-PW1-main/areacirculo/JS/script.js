const clique = () => {
    let raio = parseFloat(document.getElementById("raio").value)
    let pi = parseFloat(Math.PI.toFixed(5))
    let a = pi*Math.pow(raio, 2)
    console.log(a)

    exibir(a)
}

const exibir = (a) =>{
    document.getElementById("total").innerHTML = a;
}