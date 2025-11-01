const clique = () => {
    let num = parseFloat(document.querySelector(".nume").value);
    let res = document.querySelector(".total")

    if (num > 0){
        res.textContent = "Positivo"
    } else if (num <0) {
        res.textContent = "Negativo"
    } else {
        res.textContent = "Nulo"
    }
}