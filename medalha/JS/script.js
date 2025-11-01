const clique = () =>{
    const temp1 = parseFloat(document.querySelector(".t1").value);
    const temp2 = parseFloat(document.querySelector(".t2").value);
    const temp3 = parseFloat(document.querySelector(".t3").value);
    let podio = document.querySelector(".medbox")

    podio.style.display = "block"

    const numeros = [temp1, temp2, temp3].sort((a, b) => b - a);

      document.querySelector(".p1").textContent = numeros[2];
      document.querySelector(".p2").textContent = numeros[1];
      document.querySelector(".p3").textContent = numeros[0];
}