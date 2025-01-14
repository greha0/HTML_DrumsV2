function suona(strumento){
    var crash1 = new Audio("sound/crash1.mp3");
    var crash2 = new Audio("sound/crash2.mp3");
    var hh = new Audio("sound/hh.mp3");
    var ride = new Audio("sound/ride.mp3");
    var highTom = new Audio("sound/high-tom.mp3");
    var midTom = new Audio("sound/mid-tom.mp3");
    var floor = new Audio("sound/floor-tom.mp3");
    var bass = new Audio("sound/bass.mp3");
    var snare = new Audio("sound/snare.mp3");

    if(strumento == "crash1"){
        crash1.play();
    }
    if(strumento == "crash2"){
        crash2.play();
    }

    if(strumento == "hh"){
        hh.play();
    }

    if(strumento == "ride"){
        ride.play();
    }

    if(strumento == "high-tom"){
        highTom.play();
    }

    if(strumento == "mid-tom"){
        midTom.play();
    }

    if(strumento == "floor-tom"){
        floor.play();
    }

    if(strumento == "bass"){
        bass.play();
    }

    if(strumento == "snare"){
        snare.play();
    }
    
}