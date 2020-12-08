var monstre1 = document.getElementById("Monstre1")
var monstre2 = document.getElementById("Monstre2")
var monstre3 = document.getElementById("Monstre3")
var attaquer = document.getElementById("BoutonAttaquer")
var defense = document.getElementById("BoutonDefense")
var attaqueSpe = document.getElementById("BoutonAttaqueSpe")
var cibleHTML = document.getElementById("boutonHTML")
var cibleCSS = document.getElementById("boutonCSS")
var ciblesJAVA = document.getElementById("boutonJAVA")
var hpMonstreHTML = 200
var hpMonstreCSS = 150
var hpMonstreJAVA = 250
var hpCible = 

    
monstre1.onmouseover = function(){
  document.getElementById("infobulleMonstre1").style.visibility = "visible" ;
}
monstre1.onmouseout = function(){
  document.getElementById("infobulleMonstre1").style.visibility = "hidden" ;
}
    
monstre2.onmouseover = function(){
  document.getElementById("infobulleMonstre2").style.visibility = "visible" ;
}
monstre2.onmouseout = function(){
  document.getElementById("infobulleMonstre2").style.visibility = "hidden" ;
}
    
monstre3.onmouseover = function(){
  document.getElementById("infobulleMonstre3").style.visibility = "visible" ;
}
monstre3.onmouseout = function(){
  document.getElementById("infobulleMonstre3").style.visibility = "hidden" ;
}    

cibleHTML.onclick = function(){
  document.getElementById("infobulleMonstre1").style.visibility = "visible" 
  document.getElementById("infobulleMonstre2").style.visibility = "hidden"
  document.getElementById("infobulleMonstre3").style.visibility = "hidden"
}  

cibleCSS.onclick = function(){
  document.getElementById("infobulleMonstre1").style.visibility = "hidden" 
  document.getElementById("infobulleMonstre2").style.visibility = "visible"
  document.getElementById("infobulleMonstre3").style.visibility = "hidden"
}
ciblesJAVA.onclick = function(){
   document.getElementById("infobulleMonstre1").style.visibility = "hidden" 
  document.getElementById("infobulleMonstre2").style.visibility = "hidden"
  document.getElementById("infobulleMonstre3").style.visibility = "visible"
}  
attaquer.onclick = function(){
  hpCible()
}    
    