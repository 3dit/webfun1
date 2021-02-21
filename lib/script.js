console.log('Started Program');
let x = 100;
let y = 200;
let width = window.innerWidth;
let height = window.innerHeight;
let nameWidth = 500;
let nameHeight = 300;
let xvelocity = 10 + Math.random() * 10;
let yvelocity = Math.random() * 1.5;
let gravity = 1;

function loopFunction() {
    
    yvelocity += gravity;

    x += xvelocity;
    y += yvelocity;

    if(x + nameWidth > width) {
        xvelocity = -xvelocity * .98;
        x += xvelocity;
    } else if(x < 0) {
        xvelocity = -xvelocity * .98;
        x += xvelocity;
    }
    if(y + nameHeight > height) {
        yvelocity = -yvelocity * .98;
        xvelocity *= .95;
        y += yvelocity;
    } else if(y<0) {
        yvelocity = -yvelocity * .98;
        xvelocity *= .95;
        y += yvelocity;
    }

    //move the #name div using CSS properties
    $('#name').css('top', y+'px');
    $('#name').css('left', x+'px');
}

let loop = setInterval(loopFunction, 1000/30);
