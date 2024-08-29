function verificarSigno() {
    var data = document.getElementById('dataNascimento').value;
    var partesData = data.split('-');
    var dia = parseInt(partesData[2]);
    var mes = parseInt(partesData[1]);
    var signo;

    switch (mes) {
        case 1:
            if (dia <= 20) {
                signo = 'Capricórnio';
            } else {
                signo = 'Aquário';
            }
        break;
        case 2:
            if (dia <= 18) {
                signo = 'Aquário';
            } else {
                signo = 'Peixe'
            }
        break
        case 3:
            if (dia <= 20) {
                signo = 'Peixe';
            } else {
                signo = 'Áries'
            }
        break
        case 4:
            if (dia <= 20) {
                signo = 'Áries';
            } else {
                signo = 'Touro'
            }
        break
        case 5:
            if (dia <= 20) {
                signo = 'Touro';
            } else {
                signo = 'Gêmeos'
            }
        break
        case 6:
            if (dia <= 20) {
                signo = 'Gêmeos';
            } else {
                signo = 'Câncer'
            }
        break
        case 7:
            if (dia <= 22) {
                signo = 'Câncer';
            } else {
                signo = 'Leão'
            }
        break
        case 8:
            if (dia <= 22) {
                signo = 'Leão';
            } else {
                signo = 'Virgem'
            }
        break
        case 9:
            if (dia <= 22) {
                signo = 'Virgem';
            } else {
                signo = 'Libra'
            }
        break
        case 10:
            if (dia <= 22) {
                signo = 'Libra';
            } else {
                signo = 'Escorpião'
            }
        break
        case 11:
            if (dia <= 21) {
                signo = 'Escorpião';
            } else {
                signo = 'Sargitário'
            }
        break
        case 11:
            if (dia <= 21) {
                signo = 'Sargitário';
            } else {
                signo = 'Capricónio'
            }
        break
    }

    document.getElementById('resultado').innerHTML = ' Seu Signo é: ' + signo
}

function classToggle() {
    const navs = document.querySelectorAll('.Navbar_Items')
    navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'))
}

document.getElementById('btnVerificarSigno').onclick = verificarSigno

document.querySelector('.Navbar_link_toggle').addEventListener('click', classToggle);