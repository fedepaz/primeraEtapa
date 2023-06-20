function ContainerPrincipal(nombrex) {
    const body1 = document.querySelector('body');
    const cuadroPrincipal = document.createElement('div');
    cuadroPrincipal.id = nombrex;

    body1.appendChild(cuadroPrincipal);


    cuadroPrincipal.className = "p-3 m-2 bg-danger-subtle text-dark container justify-items-center";
    body1.className = "p-2 m-2 justify-content-center bg-secondary"
}

function Row(nombreContainer, nombreFila) {
    const row = document.createElement('div');
    row.className = "row justify-items-center align-self-center justify-content-around"
    row.id = nombreFila
    const container = document.querySelector('#' + nombreContainer);
    container.appendChild(row);

    row.innerText = nombreFila;
}

function Column(nombreFila, nombreColumna) {
    const column = document.createElement('div');
    column.className = "col text-center text-primary";
    column.style.cssText = 'border-top: 2px solid grey !important;border-bottom: 2px solid grey !important; border-left: 2px solid grey !important;border-right: 2px solid grey !important;'
    column.id = nombreColumna;

    const row = document.querySelector('#' + nombreFila);
    row.appendChild(column);

    column.innerText = nombreColumna
}

let resultDic = {};

function crearCuadroMayor(nombreCuadro, nombreFila, nombreColumna) {
    let nArray = [];
    for (let a = 1; a <= 9; a++) {
        nArray.push(a.toString())
    };

    let lArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let n = 1;

    for (a in nArray) {
        Row(nombreCuadro, nombreFila + nArray[a]);
        for (b in nArray) {
            Column(nombreFila + nArray[a], nombreColumna + lArray[b] + nArray[a]);
            resultDic[lArray[b] + nArray[a]] = n;
            n++;
            for (const key of Object.keys(resultDic)) {
                document.querySelector('#' + nombreColumna + lArray[b] + nArray[a]).innerText = key + ":" + resultDic[key];
            }
            if (lArray[b] == "a" || lArray[b] == "d" || lArray[b] == "g") {
                document.querySelector('#' + nombreColumna + lArray[b] + nArray[a]).style["border-left"] = '3px solid black';
            };
            if (lArray[b] == "c" || lArray[b] == "f" || lArray[b] == "i") {
                document.querySelector('#' + nombreColumna + lArray[b] + nArray[a]).style["border-right"] = '3px solid black';

            };
            if (nArray[a] == "1" || nArray[a] == "4" || nArray[a] == "7") {
                document.querySelector('#' + nombreColumna + lArray[b] + nArray[a]).style["border-top"] = '3px solid black';

            };

            if (nArray[a] == "3" || nArray[a] == "6" || nArray[a] == "9") {
                document.querySelector('#' + nombreColumna + lArray[b] + nArray[a]).style["border-bottom"] = '3px solid black';

            };

        };
    };


};




ContainerPrincipal("cuadroPrincipal")

crearCuadroMayor("cuadroPrincipal", "f", "_");

let nArray = [];
for (let a = 1; a <= 9; a++) {
    nArray.push(a.toString())
};

for (const key of Object.keys(resultDic)) {
    for (n in nArray) {
        resultDic[key] = n;
    }
}
console.log(resultDic);