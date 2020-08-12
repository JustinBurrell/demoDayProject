//get references 
let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button1");

let statesArray = [1, 2, 2, 1, 2];
let selected = [0, 1, 2, 3, 4];
let properties = ['health', 'injustice', 'relief', 'education', 'tool'];

//filter function
function filter(){
    for (let i=0; i<statesArray.length; i++) {
        if (selected.includes(i)) {
            if (statesArray[i] == 1) {
                selected.splice(selected.indexOf(i));
            }
        } else if (statesArray[i] == 2){
            selected.push(i);
        }
    }   
}



//iterate through JSON and find type
    //onclick for health button
        button1.onclick = function(){
            if(statesArray[0] == 1){
                for(let j=0; j<gridBox.length; j++){
                    if(selected.length == 0){
                        if (myJson[j].type.includes(properties[0])){
                            gridBox[j].style.display = "block";
                        } else {
                            gridBox[j].style.display = "none"
                        }
                    }

                    if(selected.length == 1){
                        if (myJson[j].type.includes(properties[0]) && myJson[j].type.includes(properties[selected[0]])){
                            gridBox[j].style.display = "block";
                        } else {
                            gridBox[j].style.display = "none"
                        }
                    }

                    if(selected.length == 2){
                        if (myJson[j].type.includes(properties[0]) && myJson[j].type.includes(properties[selected[0]]) && myJson[j].type.includes(properties[selected[1]])){
                            gridBox[j].style.display = "block";
                        } else {
                            gridBox[j].style.display = "none"
                        }
                    }

                    if(selected.length == 3){
                        if (myJson[j].type.includes(properties[0]) && myJson[j].type.includes(properties[selected[0]]) && myJson[j].type.includes(properties[selected[1]]) && && myJson[j].type.includes(properties[selected[2]])){
                            gridBox[j].style.display = "block";
                        } else {
                            gridBox[j].style.display = "none"
                        }
                    }

                    if(selected.length == 4){
                        if (myJson[j].type.includes(properties[0]) && myJson[j].type.includes(properties[selected[0]]) && myJson[j].type.includes(properties[selected[1]]) && myJson[j].type.includes(properties[selected[2]]) && myJson[j].type.includes(properties[selected[3]])){
                            gridBox[j].style.display = "block";
                        } else {
                            gridBox[j].style.display = "none"
                        }
                    }

                }
                stateArray[0] = 2;
            }
            else if (statesArray[0] == 2) {
                for(let i=0; i<gridBox.length; i++) {
                    
                    if(myJson[i].type.includes('health') == false){
                        gridBox[i].style.display = "block";
                    }
                }
                state = 1;
            }
            filter();
        }





