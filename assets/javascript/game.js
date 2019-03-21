$(document).ready(function() {
    var valueMatch = "";
    var ameValue = "";
    var carnValue ="";
    var celValue = "";
    var quartzValue = "";
    var ameButton;
    var carnButton;
    var quartzButton;
    var score;
    var wins=0;
    var loss=0;
    

 /* 
================================
         START/RESTART
================================ 
*/
    function initialize() {
        valueMatch=Math.floor(Math.random()*101)+19;
        score=0;
        var crystal=[$(".amethyst"), $(".carnelian"), $(".celestite"), $(".quartz")];
        var button=[ameButton, carnButton, celValue, quartzValue];

/* 
================================
         CRYSTAL VALUES      
================================ 
*/
        for (var i=0; i<crystal.length; i++) {
            button[i]=crystal[i].attr("data-chicken", Math.floor(Math.random()*12)+2);
        };
/* 
================================
          HTML     
================================ 
*/
        $("#valueMatch").html(valueMatch);
        $("#wins").html(wins);
        $("#loss").html(loss);
        $("#score").html(score);
    }
    initialize();
    
 /* 
================================
          CLICK FUNCTION    
================================ 
*/   
    $(".crystal").on("click", function(){
        score += parseInt($(this).attr("data-chicken"));
        $("#score").html(score);
        if(score == valueMatch) {
            wins++;
            initialize();
        }
        else if (score > valueMatch) {
            loss++;
            initialize();
        }
    });
    });