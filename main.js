canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

widthrv = 100 ;
heightrv = 90;

background_canvas = "mars.jpg";
rvimage = "rover.png";

rvx = 10;
rvy = 10; 

function load() {
    imagetagbg = new Image(); //defining a variable wit a new image
    imagetagbg.onload = uploadbg; //setting a function on loading the variable
    imagetagbg.src = background_canvas; // loading the image

    imagerv = new Image();
    imagerv.onload = uploadrv;
    imagerv.src = rvimage;

}

function uploadbg() {
    ctx.drawImage(imagetagbg , 0,0 , canvas.width , canvas.height);

}
function uploadrv() {
    ctx.drawImage(imagerv ,rvx , rvy , widthrv , heightrv);
}

window.addEventListener("keydown" , mykeydown);

function mykeydown(e) {
    keypressed = e.keyCode ; 
    console.log(keypressed);

    if(keypressed == '38') {
        up();
        console.log("up");
        
    }

    if(keypressed == '40') {
        down();
        console.log("down");
        
    }

    if(keypressed == '37') {
        left();
        console.log("left");
        
    }

    if(keypressed == '39') {
        right();
        console.log("right");
        
    }
}










function up() {
    if (rvy >= 0) {
        rvy = rvy - 25 ; 
        console.log("when up arrow is pressed , x =  " + rvx + " and y = " + rvy);
        uploadbg();
        uploadrv();
    }

    
}

function down() {
    if (rvy <= 600 ) {
        rvy = rvy + 25 ; 
        console.log("when down arrow is pressed , x =  " + rvx + " and y = " + rvy);
        uploadbg();
        uploadrv();
    }
}

function left() {
    if (rvx >= 0) {
        rvx = rvx - 25 ; 
        console.log("when left arrow is pressed , x =  " + rvx + " and y = " + rvy);
        uploadbg();
        uploadrv();
    }

    
}

function right() {
    if (rvx <= 700) {
        rvx = rvx + 25 ; 
        console.log("when right arrow is pressed , x =  " + rvx + " and y = " + rvy);
        uploadbg();
        uploadrv();
    }

    
}