let interactable = document.getElementById("interactable")
let player = document.getElementById("player")
let wall = document.getElementById("Wall")

var ShowerSounds = ["Shampoo.m4a", "BrushingTeeth.m4a", "HairProduct.m4a", "Pumping.m4a", "WaterRunning.m4a", "BeardScratch.mp3" ]
var color = ["#D5FFC6", "#B3F5E9", "#EDD3FD", "#F2FDD3", "#FDD3E9", "#FDECD3"];
var monologues = ["2_cat.mp3", "Toothbrush.m4a", "1_istanbul.mp3", "Ritual.m4a", "3_cafe.mp3","TheSpot.m4a"]
var ShowerStartEnd = ["StartShower.m4a", "EndShower.m4a"]
// index for monologues and color
var i = 0;
// initial audio
var audio = new Audio("sound/" + monologues[0]); 
var ShowerEnd = new Audio("sound/"+ ShowerStartEnd[1]);
document.getElementById("player").loop = false;



function SwitchUp(){
    
}

document.getElementById("Wall").onclick = function() {
    // pause ongoing audio
    audio.pause();
    ShowerEnd.pause();
    
    // random integer change to make sure a different monologue and color will play next
    // i = (i + 1 + Math.floor(Math.random() * 5))%6;
    i += 1;
    console.log(i);
    
    // color change
    
    
    // audio change
    if (drop){
        
        document.querySelector("body").style.background = color[i];
        audio = new Audio("sound/"+ ShowerSounds[i]);
        
        audio.play();
        audio.onended = function(){
        
            audio = new Audio("sound/"+ monologues[i]);
            
            audio.play();
            
            
            
        }
    }
    
}



var drop = 0;
var drops = []
window.onload = function (){
    while(++i < 200){
        var dropLeft = randRange(25,75);
        var dropTop = randRange(-110,120);

        $('.rain').append('<div class = "drop" id="drop' + i + '"></div>');
        $('#drop' + i).css('left', dropLeft + '%');
        $('#drop' + i).css('top', dropTop + '%');
        drops.push($("#drop" + i));
    }
    createRain();
}

function randRange(minNum, maxNum) {
    return (Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum);
}



function createRain() {
    if (drop){
        for (let i = 0; i < 200; i++){
            drops[i].css("display", "inline");
        }
    }
    else{
        for (let i = 0; i < 200; i++){
            drops[i].css("display", "none");
        }

    }
    
}

function setRain() {
    drop = !drop;
    if (!drop){
        ShowerEnd.pause();
        document.querySelector("body").style.background = "grey";
        audio.pause();
        ShowerEnd = new Audio("sound/"+ ShowerStartEnd[1]);
        ShowerEnd.play();

        
        }
    else{
        ShowerEnd.pause();
        ShowerEnd = new Audio("sound/"+ ShowerStartEnd[0]);
        ShowerEnd.play();
        
        if (typeof player.loop == 'boolean')
        {
            player.loop = true;
        }
        else
        {
            player.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
    }
    createRain();
}