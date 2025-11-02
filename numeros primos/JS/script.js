const clique = () =>{
    let num = parseFloat(document.querySelector(".nume").value)
    let res = document.querySelector(".ident")

    if (num <2){
        res.textContent = "Não é primo"
    }

    let primo = true;

    for(let i = 2; i<=Math.sqrt(num);i++){
        if (num % i === 0){
            primo = false;
            break
        }
    }

    if(primo){
        res.textContent = "é primo"
    } else{
        res.textContent = "não é primo"
    }
}