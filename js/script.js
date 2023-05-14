document.getElementById('aPropos').addEventListener('click', e => {
    // e.preventDefault();
    // smooth scroll
    document.getElementById('projets').scrollTo({top: 1, behavior: 'smooth'});
  });
function openComp(comp, num) {

    
    // document.getElementById('projets').scrollTo({top: 175, behavior: 'smooth'});
    // document.location.href='#projets'


    var compAFermer = document.getElementsByClassName("comp");
    for (let index = 0; index < compAFermer.length; index++) {
        compAFermer[index].style.display = "none"
    }

    document.getElementById(comp).style.display = "flex";

    var btn = document.getElementsByClassName("btnNav");
    for (let i = 0; i < btn.length; i++) {
        if(btn[i].id == num)
        {
            btn[i].style.color = "white";
            btn[i].style.background = "black";
            btn[i].style.borderRadius = "20px";
        }
        else
        {
            btn[i].style.color = "black";
            btn[i].style.background = "white";
            btn[i].style.borderRadius = "0px";
            // btn[i].style.margin = "0px";
            
        }
    }
}

function openForm(lapop) {
    var pop = document.getElementsByClassName("popeur");
    for (var index = 0; index < pop.length; index++) {
        pop[index].style.display = "none";
    }
    
    document.getElementById(lapop).style.display = "flex";
    // var pop = document.getElementsByClassName("popupForm");
    // for (var index = 0; index < pop.length; index++) {
    //     pop[index].style.display = "flex";
    // }
}

document.getElementById("bo").addEventListener("keydown", function(event){
    if(event.code == "Escape")
    {
        closeForm();
    }
});



function closeForm() {
    var pop = document.getElementsByClassName("popeur");
    for (var index = 0; index < pop.length; index++) {
        pop[index].style.display = "none";
    }
}

function derouleComp()
{
    
}