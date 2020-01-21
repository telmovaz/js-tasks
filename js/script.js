const catImage = document.getElementById('cat-image');
const song = new Audio();

const cat = {
    sitImage: '/assets/sit.gif',
    foodImage: '/assets/food.gif',
    meowImage: '/assets/meow.gif',
    chillImage: '/assets/chill.gif',
    excitedImage: '/assets/exited.gif',
    sayMeow: function() {
        song.src = '../assets/meow.ogg';
        song.play();
    },
    sayPurr: function() {
        song.src = '../assets/purr.ogg';
        song.play();
    },
    sayExcited: function() {
        song.src = '../assets/exited.ogg';
        song.play();
    }
}

const makeSit = function() {
    catImage.src = cat.sitImage;
}

const makeHungry = function() {
    catImage.src = cat.foodImage;
}

const makeAngry = function() {
    catImage.src = cat.meowImage;
    cat.sayMeow();
}

const makeChill = function() {
    catImage.src = cat.chillImage;
    cat.sayPurr();
}
const makeExcited = function() {
    catImage.src = cat.excitedImage;
    cat.sayExcited();
}

let state = 0;

const updateCatState = function() {
    switch(state) {
        case 0:
            song.pause();
            makeSit();
            state++;
            break;
        case 1:
            makeHungry();
            state++;
            break;
        case 2:
            makeAngry();
            state++;
            break;
        case 3:
            makeChill();
            state++;
            break;
        case 4:
            makeExcited();
            state = 0;
            break;
        default:
            makeSit();
            state = 0;
            break;
    }
}

updateCatState();
