const clique = () => {
    let numero1 = parseFloat(document.getElementById("N1").value)

    let numero2 = parseFloat(document.getElementById("N2").value)

    if (isNaN(numero1) && isNaN(numero2)){
        alert("Alguma coluna não esá preenchida")
    }else{
        alert("Calculando...")
        let total = numero1+numero2;

        exibir(total);
    }

}

const exibir = (total) => {

    document.getElementById("total").innerHTML = total;
}



