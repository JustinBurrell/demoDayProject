//get references 
let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button1");

let statesArray = [2, 2, 2, 2, 2];
let selected = [0, 1, 2, 3, 4];

//filter function
function filter(){
    for (let i=0; i<statesArray.length; i++) {
        if (selected.includes(i)) {
            if (statesArray[i] == 1) {
                selected.splice(i, 1, "");
            }
        } else {
            if (statesArray[i] == 2) {
                selected.push(i);
            }
        } 
    }
}

//iterate through JSON and find type
    //onclick for health button
    button1.onclick = function(){
        if(state == 1){
            for(let j=0; j<gridBox.length; j++){
                if (myJson[j].type.includes('health')){
                    gridBox[j].style.display = "block";
                } else{
                    gridBox[j].style.display = "none"
                }
            }
            state = 2;
        }
        else if (state == 2) {
            for(let i=0; i<gridBox.length; i++) {
                if(myJson[i].type.includes('health') == false){
                    gridBox[i].style.display = "block";
                }
            }
            state = 1;
        }
    }





