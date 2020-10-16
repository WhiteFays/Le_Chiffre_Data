function openMenu() {
    document.getElementById('sideMenu').style.marginLeft = '0px';
    document.getElementById('Bloc').style.marginLeft = '450px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closenMenu() {
    document.getElementById('sideMenu').style.marginLeft = '-450px';
    document.getElementById('Bloc').style.marginLeft = '0px';
    document.body.style.backgroundColor = '#fff';
    
}
