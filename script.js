let body = document.querySelector('body');
let btn = document.querySelectorAll("button");
console.log(btn);

btn[0].addEventListener("click", color);
btn[1].addEventListener("click", image);
btn[2].addEventListener("click", gradient);

// to change the color 
function getColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}
function color(){
    let newColor = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
    body.style.backgroundImage = "none";
    body.style.backgroundColor = newColor;
}

// to change the image
let arr1 = ["./Assets/image1.jpg", "./Assets/image2.jpg", "./Assets/image3.jpg", "./Assets/image4.jpg", "./Assets/image5.webp", "./Assets/image6.jpg", "./Assets/image7.jpg", "./Assets/image8.jpg", "./Assets/image9.jpg", "./Assets/image10.jpg"];

function getImage(){
    let idx = Math.floor(Math.random() * arr1.length);
    return arr1[idx];
}
function image(){
    let img = `url(${getImage()})`;
    body.style.background = img;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    console.log(img);
}

// to change the gradient colors
let arr2 = ["(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)", "(to right, #fa709a 0%, #fee140 100%)", "(to top, #30cfd0 0%, #330867 100%)", "(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)", "(-20deg, #d558c8 0%, #24d292 100%)", "(-60deg, #16a085 0%, #f4d03f 100%)", "(to top, #e8198b 0%, #c7eafd 100%)", "(to top, #0fd850 0%, #f9f047 100%)", "(to right, #ed6ea0 0%, #ec8c69 100%)", "(to top, #e14fad 0%, #f9d423 100%)"];

function getGradient(){
    let idx = Math.floor(Math.random()*arr2.length);
    return arr2[idx];
}
function gradient(){
    let grad = `linear-gradient${getGradient()}`;
    body.style.backgroundImage = grad;
}