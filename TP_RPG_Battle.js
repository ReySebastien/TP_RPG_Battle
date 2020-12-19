var monstre1 = document.getElementById("Monstre1")
var monstre2 = document.getElementById("Monstre2")
var monstre3 = document.getElementById("Monstre3")
var attaquer = document.getElementById("BoutonAttaquer")
var defense = document.getElementById("BoutonDefense")
var attaqueSpe = document.getElementById("BoutonAttaqueSpe")
var cibleHTML = document.getElementById("boutonHTML")
var cibleCSS = document.getElementById("boutonCSS")
var ciblesJAVA = document.getElementById("boutonJAVA")
var persHugo = document.getElementById("boutonHugo")
var persTom = document.getElementById("boutonTom")
var persAntoine = document.getElementById("boutonAntoine") 
var persAdrien = document.getElementById("boutonAdrien")    
var manaHugo = 80
var manaTom = 80
var manaAntoine = 80
var manaAdrien = 80
var joueur = 1
var attaqueMonstres = [0, 10, 15, 20]
var attaqueJoueurs = [0, 25, 20, 10, 15]
var hpMonstres = [0, 200, 150, 250]
var hpJoueurs = [0, 150, 100, 150, 150]
var dmgPoison = 5
var dmgFeu = 5
var dmgElec = 5
var soin = 20
var cibleJoueurs = 0

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
  cibleJoueurs = 1
  
}  

cibleCSS.onclick = function(){
  document.getElementById("infobulleMonstre1").style.visibility = "hidden" 
  document.getElementById("infobulleMonstre2").style.visibility = "visible"
  document.getElementById("infobulleMonstre3").style.visibility = "hidden"
  cibleJoueurs = 2
}  

ciblesJAVA.onclick = function(){
  document.getElementById("infobulleMonstre1").style.visibility = "hidden" 
  document.getElementById("infobulleMonstre2").style.visibility = "hidden"
  document.getElementById("infobulleMonstre3").style.visibility = "visible"
  cibleJoueurs = 3
}  
  

persHugo.onclick = function(){
  document.getElementById("BoutonAttaquer").style.visibility = "visible"
  document.getElementById("BoutonDefense").style.visibility = "visible"
  document.getElementById("BoutonPoison").style.visibility = "visible" 
  document.getElementById("BoutonFeu").style.visibility = "hidden"
  document.getElementById("BoutonSoin").style.visibility = "hidden"
  document.getElementById("BoutonElec").style.visibility = "hidden"
} 

persTom.onclick = function(){
  document.getElementById("BoutonAttaquer").style.visibility = "visible"
  document.getElementById("BoutonDefense").style.visibility = "visible"
  document.getElementById("BoutonPoison").style.visibility = "hidden" 
  document.getElementById("BoutonFeu").style.visibility = "visible"
  document.getElementById("BoutonSoin").style.visibility = "hidden"
  document.getElementById("BoutonElec").style.visibility = "hidden"
} 

persAntoine.onclick = function(){
  document.getElementById("BoutonAttaquer").style.visibility = "visible"
  document.getElementById("BoutonDefense").style.visibility = "visible"
  document.getElementById("BoutonPoison").style.visibility = "hidden" 
  document.getElementById("BoutonFeu").style.visibility = "hidden"
  document.getElementById("BoutonSoin").style.visibility = "visible"
  document.getElementById("BoutonElec").style.visibility = "hidden"
} 

persAdrien.onclick = function(){
  document.getElementById("BoutonAttaquer").style.visibility = "visible"
  document.getElementById("BoutonDefense").style.visibility = "visible"
  document.getElementById("BoutonPoison").style.visibility = "hidden" 
  document.getElementById("BoutonFeu").style.visibility = "hidden"
  document.getElementById("BoutonSoin").style.visibility = "hidden"
  document.getElementById("BoutonElec").style.visibility = "visible"
}   

function toursJoueurs(joueur){
  document.getElementById("BoutonPoison").style.visibility = "hidden" 
  document.getElementById("BoutonFeu").style.visibility = "hidden"
  document.getElementById("BoutonSoin").style.visibility = "hidden"
  document.getElementById("BoutonElec").style.visibility = "hidden"
  if (joueur == 1){
    document.getElementById("BoutonPoison").style.visibility = "visible"
  }
  if (joueur == 2){
    document.getElementById("BoutonFeu").style.visibility = "visible"
  }
  if (joueur == 3){
    document.getElementById("BoutonSoin").style.visibility = "visible"
  }
  if (joueur == 4){
    document.getElementById("BoutonElec").style.visibility = "visible"
  }
}

attaquer.onclick = function(){
  joueur ++
  if (joueur == 5){
    joueur = 1
  }
  toursJoueurs(joueur)

  hpMonstres[cibleJoueurs] -= attaqueJoueurs[joueur]
  document.getElementById("PVHTML").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVCSS").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVJAVA").innerHTML = " "+hpMonstres[3]+" "
}

