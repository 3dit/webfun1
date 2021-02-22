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
let groundDamp = .85;
let start;

function loopFunction(timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;
    if(elapsed < 1000/60) {
        requestAnimationFrame(loopFunction);
        return
    } else {
        start = timestamp;
    }

    yvelocity += gravity;

    x += xvelocity;
    y += yvelocity;

    if (x + nameWidth > width) {
        xvelocity = -xvelocity * .98;
        x += xvelocity;
    } else if (x < 0) {
        xvelocity = -xvelocity * .98;
        x += xvelocity;
    }
    if (y + nameHeight > height) {
        yvelocity = -yvelocity * groundDamp;
        xvelocity *= .95;
        y += yvelocity;
    } else if (y < 0) {
        yvelocity = -yvelocity;
        xvelocity *= .95;
        y += yvelocity;
    }

    //move the #name div using CSS properties
    $('#name').css('top', y + 'px');
    $('#name').css('left', x + 'px');

    window.requestAnimationFrame(loopFunction);
}

window.requestAnimationFrame(loopFunction);


