function openMenu() {
    document.getElementById('sideMenu').style.marginLeft = '0px';
    document.getElementById('bloc').style.marginLeft = '0px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closeMenu() {
    document.getElementById('sideMenu').style.marginLeft = '-350px';
    document.getElementById('bloc').style.marginLeft = '0px';
    document.body.style.backgroundColor = '#fff';
    
}
