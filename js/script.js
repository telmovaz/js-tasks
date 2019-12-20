function jump(isJumping) {
    const frog = document.getElementById('frog');
    if (isJumping === true) {
        frog.classList.add('active');
    } else {
        frog.classList.remove('active');
    }
}

function setHeadSpeed(speed) {
    const head = document.getElementsByClassName('head')[0];
    head.style.animation = 'jump-head ' + 0.6 / speed + 's infinite';
}

function setLegsSpeed(speed) {
    const legs = document.getElementsByClassName('leg');
    Array.from(legs).forEach(function (item) {
        item.style.animation = 'jump-leg ' + 0.6 / speed + 's infinite';
    });
}

function setBodySpeed(speed) {
    const frog = document.getElementsByClassName('frog')[0];
    frog.style.animation = 'jump ' + 0.6 / speed + 's infinite';
}

