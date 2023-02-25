let src = document.getElementById('search');
let srcbar = document.getElementById('searchbar');

src.addEventListener('click', searchbar);
document.getElementById('main').addEventListener('click', revert);

function searchbar() {
    dim();
    srcbar.style.visibility = 'visible';

}
function dim() {
    document.getElementById('header').style.filter = 'brightness(50%)';
    document.body.style.background = 'grey';
    document.getElementById('main').style.filter = 'brightness(50%)';
    document.getElementById('footer').style.filter = 'brightness(50%)';
}

function undim() {
    document.getElementById('header').style.filter = 'brightness(100%)';
    document.body.style.background = 'white';
    document.getElementById('main').style.filter = 'brightness(100%)';
    document.getElementById('footer').style.filter = 'brightness(100%)';
}
function revert() {
    undim();
    srcbar.style.visibility = 'hidden';
}
