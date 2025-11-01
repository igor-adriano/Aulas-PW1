const clique = () =>{
    let num = parseFloat(document.querySelector("#numer").value)

    const nums = document.querySelectorAll(".num")
    const totals = document.querySelectorAll(".total")
    const tabuadaBox = document.querySelector(".litbox")

    tabuadaBox.style.display = "block"


    for(let i = 1; i<11; i++){
        let tot = num*i

        nums[i-1].textContent = num;
        totals[i-1].textContent = tot;
    }
}

