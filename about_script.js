//get references
let images = document.getElementsByClassName("image");
let imagesText = document.getElementsByClassName("innergallery");

//hover functions for image 1
images[0].onmouseover = function(){
    images[0].style.opacity = "0.5";
    imagesText[0].innerHTML = "Justin Burrell";
}

images[0].onmouseout = function(){
    images[0].style.opacity = "1";
    imagesText[0].innerHTML = "";
}

//hover functions for image 2
images[1].onmouseover = function(){
    images[1].style.opacity = "0.5";
    imagesText[1].innerHTML = "Gabriel Veras";
}

images[1].onmouseout = function(){
    images[1].style.opacity = "1";
    imagesText[1].innerHTML = "";
}

//hover functions for image 3
images[2].onmouseover = function(){
    images[2].style.opacity = "0.5";
    imagesText[2].innerHTML = "Herbert Toler";
}

images[2].onmouseout = function(){
    images[2].style.opacity = "1";
    imagesText[2].innerHTML = "";
}

//hover functions for image 4
images[3].onmouseover = function(){
    images[3].style.opacity = "0.5";
    imagesText[3].innerHTML = "Noah Daamgard";
}

images[3].onmouseout = function(){
    images[3].style.opacity = "1";
    imagesText[3].innerHTML = "";
}