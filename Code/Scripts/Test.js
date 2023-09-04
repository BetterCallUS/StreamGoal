var IdleImages = 
[
    "../../Themes/MarciHungry/IDLE/Ideal_0.gif",
    "../../Themes/MarciHungry/Progress/Goal1.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_1.gif",
    "../../Themes/MarciHungry/Progress/Goal2.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_2.gif",
    "../../Themes/MarciHungry/Progress/Goal3.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_3.gif",
    "../../Themes/MarciHungry/Progress/Goal4.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_4.gif",
    "../../Themes/MarciHungry/Progress/Goal5.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_5.gif",
    "../../Themes/MarciHungry/Progress/Goal6.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_6.gif",
    "../../Themes/MarciHungry/Progress/Goal7.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_7.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_8.gif",
    "../../Themes/MarciHungry/Progress/Goal8.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_9.gif",
    "../../Themes/MarciHungry/Progress/Goal9.gif",
    "../../Themes/MarciHungry/IDLE/Ideal_10.gif",
    "../../Themes/MarciHungry/Progress/Goal10.gif"
]
var IntergrativeShape = document.getElementById("Goal")
var i = 0 
var timer = setInterval(function(){
    if(i>=IdleImages.length){
        clearInterval(timer)
        return
    }
    IntergrativeShape.src = IdleImages[i++]

},4200)