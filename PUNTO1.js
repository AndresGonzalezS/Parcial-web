const arrayNumeros = [1, 234, 4543, 32544567, 1236654454, 1345549578256];

function sumarCuadros(arrayNumeros) {
    let sum = 0;
    for (let numero of arrayNumeros) {
        console.log('+ ' + '-'.repeat(numero.toString().length) + ' +');
        console.log('| '+ numero + ' |');
        console.log('+ ' + '-'.repeat(numero.toString().length) + ' +');
        sum += numero;
    }
    console.log('+ ' + '='.repeat(sum.toString().length) + ' +');
    console.log('| ' + sum +' |');
    console.log('+ ' + '='.repeat(sum.toString().length) + ' +');
}

sumarCuadros(arrayNumeros);