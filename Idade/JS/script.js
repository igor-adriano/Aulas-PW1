const clique = () =>{
    let sid = parseInt(document.querySelector(".sd").value)
    let idfc = parseInt(document.querySelector(".fc").value)
    let idfm = parseInt(document.querySelector(".fm").value)
    
    let id = idfc+idfm
    let idfv = sid-id

    const idade = [idfc, idfm, idfv].sort((a, b)=> a-b)

    document.querySelector(".fv").innerHTML = idade[2]
}