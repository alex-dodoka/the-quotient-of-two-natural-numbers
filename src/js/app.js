function getRes() {
    let a = $('#A').val();
    let b = $('#B').val();

    if (a > 1000000 || b > 1000000) {
        alert("Число не должно превышать 1.000.000")
    } else if (b !== 0) {
        print("Impossible")
    } else {
        print(makeDivision(a, b))
    }

}


function makeDivision(a, b) {
    return Math.floor(a / b);
}

function print(res) {
    $('#space-for-print-res').html(res);
}