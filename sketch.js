let suaidade;
let ação;
let terror;
let RPG;
let titulo;
let corpo;
let jogos = {
  menor10: {
    ação: "Zumbi Tsunami",
    terror: "Subway Surfes",
    RPG:"Pou"
  },
 entre10e14: {
    ação:"Soccer Super Star Futebol",
    terror:"FNAF",
    RPG: "Minecraft"
 },
  entre14e16: {
    ação:"Roblox",
    terror:"Evil Nun",
    RPG:"sally Face"  
 },
  entre16e18: {
    ação:"Genshin Imact",
    terror:"The Dark Deception",
    RPG:"Mario Kart Tour"  
 },
   maiorde18: {
   ação:"Gta 5",
   terror:"Mortal Kombat",
   RPG:"League Of Legends"
 }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(670,530).addClass("hidden");
  suaidade=createInput("").position(630,585);
  
  ação= createCheckbox("gosta de jogos de ação?👽").position(100.600).addClass("hidden");
  
  terror= createCheckbox("gosta de jogos de terror?🦇").position(100.650).addClass("hidden");
  
  RPG= createCheckbox("gosta de jogos de RPG?👀").position(100.600).addClass("hidden");
  
  título = "Kanit";
  corpo = "Playwrite CU";
 button = createButton("APERTA MEU BOTÃO😈").position(width/2,560);
  button.mousePressed(bota);
  button.addClass("botao");
}
function bota(){
  selectAll(".hidden").forEach((el)=>
  el.removeClass("hidden"));
  button.hide();
  
}
function draw() {
  background( "black");
 
let idade = parseInt(suaidade.value());
let checkação = ação.checked();
let checkterror = terror.checked();
let checkRPG = RPG.checked();
let jogo = "Insira suas preferências";
if (suaidade.value()!==""){
  jogo = mostrajogo(idade, checkação, checkterror, checkRPG);
 }
  fill("white");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(título);
  
  fill("white");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("Melhor indicador de jogos de 2024",width/2,30);
  textFont(corpo);

}


function  mostrajogo(idade, checkação, checkterror, checkRPG){
  if (isNaN(idade)){
    return "idade Inválida";
    
  } else
   if (idade < 5){
   return "Sai daqui, seu pirralho🤬"
  }else
   if(idade > 120){
   return "Já morreu, enterra💀"
     
        }
 if (idade >= 5 && idade <10){
   if (checkação){
     return jogos["menor10"]["ação"];
    } 
   
   if (checkterror){
     return jogos["menor10"]["terror"];
    }
   if (checkRPG){
     return jogos["menor10"]["RPG"];
     
    }
  }
 
  else if (idade >= 10 && idade <14){
   if (checkação){
     return jogos["entre10e14"]["ação"];
    }
   
   if (checkterror){
     return jogos["entre10e14"]["terror"];
    }
   if (checkRPG){
     return jogos["entre10e14"]["RPG"];

 }
}
  else if (idade >= 14 && idade <16){
   if (checkação){
     return jogos["entre14e16"]["ação"];
    }
   
   if (checkterror){
     return jogos["entre14e16"]["terror"];
    }
   if (checkRPG){
     return jogos["entre14e16"]["RPG"];
   }
  }
 else if (idade >= 16 && idade <18){
   if (checkação){
     return jogos["entre16e18"]["ação"];
    }
   
   if (checkterror){
     return jogos["entre16e18"]["terror"];
    }
   if (checkRPG){
     return jogos["entre16e18"]["RPG"];
   }
 }
  if (idade >18 ){
   if (checkação){
     return jogos["maior18"]["ação"];
    }
   
   if (checkterror){
     return jogos["maior18"]["terror"];
    }
   if (checkRPG){
     return jogos["maior18"]["RPG"];
   }
  }
}