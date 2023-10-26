function ContainerPrincipal(nombrex) {
  const body1 = document.querySelector("body");
  const cuadroPrincipal = document.createElement("div");
  cuadroPrincipal.id = nombrex;

  body1.appendChild(cuadroPrincipal);

  cuadroPrincipal.className =
    "bg-danger-subtle text-dark container-fluid justify-items-center";
  body1.className = "m-1 justify-content-center bg-secondary";
}

function Row(nombreContainer, nombreFila) {
  const row = document.createElement("div");
  row.className =
    "row justify-items-center align-self-center justify-content-around";
  row.id = nombreFila;
  const container = document.querySelector("#" + nombreContainer);
  container.appendChild(row);

  row.innerText = nombreFila;
}

function Column(nombreFila, nombreColumna) {
  const column = document.createElement("div");
  column.className = "col text-center text-primary";
  column.style.cssText =
    "border-top: 2px solid grey !important;border-bottom: 2px solid grey !important; border-left: 2px solid grey !important;border-right: 2px solid grey !important;";
  column.id = nombreColumna;

  const row = document.querySelector("#" + nombreFila);
  row.appendChild(column);

  column.innerText = nombreColumna;
}

let resultDic = {};

function crearCuadroMayor(nombreCuadro, nombreFila, nombreColumna) {
  let nArray = [];
  for (let a = 1; a <= 9; a++) {
    nArray.push(a.toString());
  }

  let lArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  let n = 1;

  for (a in nArray) {
    Row(nombreCuadro, nombreFila + nArray[a]);
    for (b in nArray) {
      Column(nombreFila + nArray[a], nombreColumna + lArray[b] + nArray[a]);
      resultDic[lArray[b] + nArray[a]] = n;
      n++;
      if (n == 10) {
        n = 1;
      }
      for (const key of Object.keys(resultDic)) {
        document.querySelector(
          "#" + nombreColumna + lArray[b] + nArray[a]
        ).innerText = resultDic[key];
      }

      if (lArray[b] == "a" || lArray[b] == "d" || lArray[b] == "g") {
        document.querySelector(
          "#" + nombreColumna + lArray[b] + nArray[a]
        ).style["border-left"] = "3px solid black";
      }
      if (lArray[b] == "c" || lArray[b] == "f" || lArray[b] == "i") {
        document.querySelector(
          "#" + nombreColumna + lArray[b] + nArray[a]
        ).style["border-right"] = "3px solid black";
      }
      if (nArray[a] == "1" || nArray[a] == "4" || nArray[a] == "7") {
        document.querySelector(
          "#" + nombreColumna + lArray[b] + nArray[a]
        ).style["border-top"] = "3px solid black";
      }

      if (nArray[a] == "3" || nArray[a] == "6" || nArray[a] == "9") {
        document.querySelector(
          "#" + nombreColumna + lArray[b] + nArray[a]
        ).style["border-bottom"] = "3px solid black";
      }
    }
  }
}

ContainerPrincipal("cuadroPrincipal");

crearCuadroMayor("cuadroPrincipal", "f", "_");

function obtenerInfoDic() {
  let infoDic = {};
  let nArray = [];
  let lArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  for (let a = 1; a <= 9; a++) {
    nArray.push(a.toString());
  }

  for (a in nArray) {
    for (b in lArray) {
      infoDic[lArray[b] + nArray[a]] = document.querySelector(
        "#_" + lArray[b] + nArray[a]
      ).innerText;
    }
  }
  return infoDic;
}

function obtenerInfoID() {
  let lNombres = [];
  let nArray = [];
  let lArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  for (let a = 1; a <= 9; a++) {
    nArray.push(a.toString());
  }

  for (a in nArray) {
    for (b in lArray) {
      lNombres.push("_" + lArray[b] + nArray[a]);
    }
  }
  return lNombres;
}

function chequeFila(letra = String) {
  lNombres = obtenerInfoID();
  dResultado = {};

  for (a in lNombres) {
    if (lNombres[a].includes(letra)) {
      // console.log(`chequea si contiene una ${letra}`);
      let res = Number(document.querySelector("#" + lNombres[a]).innerText);
      dResultado[lNombres[a]] = res;
    }
  }
  return dResultado;
}

function chequeCol(num) {
  lNombres = obtenerInfoID();
  dResultado = {};

  for (a in lNombres) {
    if (lNombres[a].includes(num)) {
      // console.log(`chequea si contiene una ${num}`);
      let res = Number(document.querySelector("#" + lNombres[a]).innerText);
      dResultado[lNombres[a]] = res;
    }
  }
  return dResultado;
}

let filab = chequeFila("b");
let columna7 = chequeCol("7");

function prueba(ingreso) {
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lala1;
  let lala2;
  let entrega = {};
  for (let [k1, v1] of Object.entries(ingreso)) {
    lala1 = v1;
    for (let [k2, v2] of Object.entries(ingreso)) {
      lala2 = v2;
      if (lala1 === lala2 + 1) {
        lala1 += 1;
        if (lala1 === 10) {
          lala1 = 1;
          entrega[k1] = lala1;
        }
      }
    }
  }
  console.log(entrega);
}
console.log(filab);
prueba(filab);

console.log(columna7);
prueba(columna7);
