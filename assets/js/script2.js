$(document).ready(function () {

    $('#fechaIda').ready(function () {
        let fechaIda = document.getElementById('fechaIda');
        fechaIda.setAttribute('min', fechaHoy());
    });

    $('#fechaVuelta').ready(function () {
        let fechaVuelta = document.getElementById('fechaVuelta');
        fechaVuelta.setAttribute('min', fechaManana());
    });

    $('.restriccion').change(function (){
        restricciones();
    });

    
    $('#fechaIda').change(function () {
        let fechaIda = document.getElementById('fechaIda');
        $('#mostrarIda').text(fechaIda.value);
    });

    $('#fechaVuelta').change(function () {
        let fechaVuelta = document.getElementById('fechaVuelta');
        $('#mostrarVuelta').text(fechaVuelta.value);
    });
    
    
});

function capturarSelect(id) {

    let select = document.getElementById(`${id}`);
    let valorSelect = select.value;


    return valorSelect;

};



function restricciones() {

    let fechaIda = Date.parse(capturarSelect('fechaIda'));
    let fechaVuelta = Date.parse(capturarSelect('fechaVuelta'));

    if (typeof fechaIda == 'number' && typeof fechaVuelta == 'number') {
        if (fechaIda > fechaVuelta) {
            alert('La fecha de vuelta debe ser posterior a la fecha de vuelta.')
        } else {
            if (fechaIda == fechaVuelta) {
                alert('La fecha de vuelta debe ser distinta a la fecha de ida.')
            };
        };
    };
};

function fechaHoy() {

    const fecha = new Date();

    let year = fecha.getFullYear();
    let month = parseInt(fecha.getMonth()) + 1;
    let day = parseInt(fecha.getDate());

    if (day < 10) {
        day = '0' + day;
    };
    if (month < 10) {
        month = '0' + month;
    };

    return `${year}-${month}-${day}`;

};

function fechaManana() {

    const fecha = new Date();

    let year = fecha.getFullYear();
    let month = parseInt(fecha.getMonth()) + 1;
    let day = parseInt(fecha.getDate());
    let nextDay = day + 1;
    let esBisiesto = false;

    if (year % 400 == 0) {
        esBisiesto = true;
    } else {
        if (year % 100 != 0) {
            esBisiesto = false;
        } else {
            if (year % 4 == 0) {
                esBisiesto = true;
            };
        };
    };

    if (nextDay < 10) {
        nextDay = '0' + nextDay;
    };

    if (month < 10) {
        month = '0' + month;
    };

    if (month == 2) {
        if (esBisiesto == true) {
            if (day == 29) {
                nextDay = '01';
            };
        } else {
            if (day == 28) {
                nextDay = '01';
            };
        };
    };

    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day == 30) {
            nextDay = '01'
        }
    } else {
        if (day == 31) {
            nextDay = '01'
        }
    }

    if (month)
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            if (day == 29) {
                nextDay = '01'
            }
        } else

            return `${year}-${month}-${nextDay}`;

};



