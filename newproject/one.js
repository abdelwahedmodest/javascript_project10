var thea1 = document.querySelector("#a1");
var thea2 = document.querySelector("#a2");
var thea3 = document.querySelector("#a3");
var thea4 = document.querySelector("#a4");

thea1.addEventListener("click",()=>{

    var  thetrn = document.querySelectorAll(".No");
    thetrn.forEach(elno=>{
        elno.classList.add("Nominativ");
    })
})
thea2.addEventListener("click",()=>{

    var  thetra = document.querySelectorAll(".Ak");
    thetra.forEach(elna=>{
        elna.classList.add("Akkusativ");
    })
})
thea3.addEventListener("click",()=>{

    var  thetrd = document.querySelectorAll(".Da");
    thetrd.forEach(elnd=>{
        elnd.classList.add("Dativ");
    })
})
thea4.addEventListener("click",()=>{

    var  thetrg = document.querySelectorAll(".Ge");
    thetrg.forEach(elng=>{
        elng.classList.add("Genitiv");
    })
})
var  thet = document.querySelector("table");
thet.addEventListener("mouseover",()=>{
     thet.classList.add("cp");
}) 
var   lestds = document.querySelectorAll("td");
lestds.forEach(onetd=>{

        onetd.addEventListener("click",()=>{
            onetd.classList.add("thetds");
        })


})