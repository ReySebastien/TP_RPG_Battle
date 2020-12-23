var monstre1 = document.getElementById("Monstre1")
var monstre2 = document.getElementById("Monstre2")
var monstre3 = document.getElementById("Monstre3")
var attaquer = document.getElementById("BoutonAttaquer")
var defense = document.getElementById("BoutonDefense")
var poison = document.getElementById("BoutonPoison")
var feu = document.getElementById("BoutonFeu")
var soin = document.getElementById("BoutonSoin")
var elec = document.getElementById("BoutonElec")
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
var hpJoueurs = [0, 150, 150, 150, 150]
var dmgPoison = 5
var dmgFeu = 5
var dmgElec = 5
var soin = 20
var cibleJoueurs = 0
var cibleMonstres = 0
var monstre = 0
var tour = 0
var DefPerso = 10

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
    document.getElementById("BoutonDefense").style.visibility = "visible"
    if (manaHugo <= 0) {
      document.getElementById("BoutonPoison").style.visibility = "hidden"
   }   
  }
  if (joueur == 2){
    document.getElementById("BoutonFeu").style.visibility = "visible"
    document.getElementById("BoutonDefense").style.visibility = "visible"
    if (manaTom <= 0) {
      document.getElementById("BoutonFeu").style.visibility = "hidden"
   }
  }
  if (joueur == 3){
    document.getElementById("BoutonSoin").style.visibility = "visible"
    document.getElementById("BoutonDefense").style.visibility = "visible"
  }
  if (joueur == 4){
    document.getElementById("BoutonElec").style.visibility = "visible"
    document.getElementById("BoutonDefense").style.visibility = "visible"
    if (manaAdrien <= 0) {
      document.getElementById("BoutonElec").style.visibility = "hidden"   
 }
  }
}

attaquer.onclick = function(){
  joueur ++
  if (hpJoueurs[1]<=0) {
    joueur ++
  }
  if (hpJoueurs[2]<=0) {
    joueur ++
  }
  if (hpJoueurs[3]<=0) {
    joueur ++
  }
  if (hpJoueurs[4]<=0) {
    joueur ++
  }
  if (joueur == 5){
    tour ++
    monstre ++
    if (hpMonstres[1]>0) {
    cibleMonstres = Math.floor(Math.random() * 3) + 1
    hpJoueurs[cibleMonstres] -= attaqueMonstres[monstre]
    document.getElementById("PVHUGO").innerHTML = hpJoueurs[1]
    document.getElementById("PVTOM").innerHTML = hpJoueurs[2]
    document.getElementById("PVANTOINE").innerHTML = hpJoueurs[3]
    document.getElementById("PVADRIEN").innerHTML = hpJoueurs[4]
  }
    monstre++
    if (hpMonstres[2]>0) {
    cibleMonstres = Math.floor(Math.random() * 3) + 1
    hpJoueurs[cibleMonstres] -= attaqueMonstres[monstre]
    document.getElementById("PVHUGO").innerHTML = hpJoueurs[1]
    document.getElementById("PVTOM").innerHTML = hpJoueurs[2]
    document.getElementById("PVANTOINE").innerHTML = hpJoueurs[3]
    document.getElementById("PVADRIEN").innerHTML = hpJoueurs[4]
  }
    monstre++
    if (hpMonstres[3]>0) {
    cibleMonstres = Math.floor(Math.random() * 3) + 1
    hpJoueurs[cibleMonstres] -= attaqueMonstres[monstre]
    document.getElementById("PVHUGO").innerHTML = hpJoueurs[1]
    document.getElementById("PVTOM").innerHTML = hpJoueurs[2]
    document.getElementById("PVANTOINE").innerHTML = hpJoueurs[3]
    document.getElementById("PVADRIEN").innerHTML = hpJoueurs[4]
  }
    monstre = 0
    joueur = 1
  }
  toursJoueurs(joueur)

  hpMonstres[cibleJoueurs] -= attaqueJoueurs[joueur]
  document.getElementById("PVHTML").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVCSS").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVJAVA").innerHTML = " "+hpMonstres[3]+" "

  if (hpMonstres[1] <= 0) {
    monstre1.style.visibility = "hidden"
    document.getElementById("infobulleMonstre1").style.visibility = "hidden"
    document.getElementById("boutonHTML").style.visibility = "hidden"
  }
  if (hpMonstres[2] <= 0) {
    monstre2.style.visibility = "hidden"
    document.getElementById("infobulleMonstre2").style.visibility = "hidden"
    document.getElementById("boutonCSS").style.visibility = "hidden"
  }
  if (hpMonstres[3] <= 0) {
    monstre3.style.visibility = "hidden"
    document.getElementById("infobulleMonstre3").style.visibility = "hidden"
    document.getElementById("boutonJAVA").style.visibility = "hidden"
  }

  if (hpMonstres[1] <= 0 && hpMonstres[2] <=0 && hpMonstres[3] <=0) {
    document.getElementById("Victoire").style.visibility = "visible"
    document.getElementById("BoutonAttaquer").style.visibility = "hidden"
    document.getElementById("BoutonDefense").style.visibility = "hidden"
    document.getElementById("BoutonPoison").style.visibility = "hidden" 
    document.getElementById("BoutonPoison").style.visibility = "hidden" 
    document.getElementById("BoutonFeu").style.visibility = "hidden"
    document.getElementById("BoutonSoin").style.visibility = "hidden"
    document.getElementById("BoutonElec").style.visibility = "hidden"

  }

if (hpJoueurs[1] <= 0 && hpJoueurs[2] <=0 && hpJoueurs[3] <=0 && hpJoueurs[4] <= 0) {
    document.getElementById("Defaite").style.visibility = "visible"
    document.getElementById("BoutonAttaquer").style.visibility = "hidden"
    document.getElementById("BoutonDefense").style.visibility = "hidden"
    document.getElementById("BoutonPoison").style.visibility = "hidden" 
    document.getElementById("BoutonPoison").style.visibility = "hidden" 
    document.getElementById("BoutonFeu").style.visibility = "hidden"
    document.getElementById("BoutonSoin").style.visibility = "hidden"
    document.getElementById("BoutonElec").style.visibility = "hidden"

  }

}

poison.onclick = function(){
  hpMonstres[cibleJoueurs] -= dmgPoison
  manaHugo -= 10
  document.getElementById("PVHTML").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVCSS").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVJAVA").innerHTML = " "+hpMonstres[3]+" "
  document.getElementById("MANAHUGO").innerHTML = " "+manaHugo+" "
  if (manaHugo <= 0) {
   document.getElementById("BoutonPoison").style.visibility = "hidden"   
  }
}

feu.onclick = function(){
  hpMonstres[cibleJoueurs] -= dmgFeu
  manaTom -= 10
  document.getElementById("PVHTML").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVCSS").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVJAVA").innerHTML = " "+hpMonstres[3]+" "
  document.getElementById("MANATOM").innerHTML = " "+manaTom+" "
  if (manaTom <= 0) {
   document.getElementById("BoutonFeu").style.visibility = "hidden"
   }   

}

elec.onclick = function(){
  hpMonstres[cibleJoueurs] -= dmgElec
  manaAdrien -= 10
  document.getElementById("PVHTML").innerHTML = " "+hpMonstres[1]+" "////
  document.getElementById("PVCSS").innerHTML = " "+hpMonstres[2]+" "
  document.getElementById("PVJAVA").innerHTML = " "+hpMonstres[3]+" "
  document.getElementById("MANAADRIEN").innerHTML = " "+manaAdrien+" "
  if (manaAdrien <= 0) {
   document.getElementById("BoutonElec").style.visibility = "hidden"   
 }
}

defense.onclick = function(){
  hpJoueurs[joueur] += DefPerso
  document.getElementById("BoutonDefense").style.visibility = "hidden"
}


