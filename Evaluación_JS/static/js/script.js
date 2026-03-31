// Ejercicio
function calcularPago() {
    let monto = parseFloat(document.getElementById("monto").value);
    let total;

    if (monto >= 70000) {
        total = monto * 0.15;
    } else if (monto < 70000) {
        total = monto * 0.05;
    }

    document.getElementById("resultadoTesoreria").innerText = "Total a pagar: $" + total.toFixed(0);
}

// Ejercicio 2
let lista = [];

function mostrarLista() {
    let ol = document.getElementById("listaSalud");
    ol.innerHTML = "";

    lista.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        ol.appendChild(li);
    });
}

function agregarNormal() {
    let nombre = document.getElementById("nombreSalud").value;
    lista.push(nombre);
    mostrarLista();
}

function agregarUrgencia() {
    let nombre = document.getElementById("nombreSalud").value;
    lista.unshift(nombre);
    mostrarLista();
}

// Ejercicio 3
let beneficiarios = ["Alexiel Retamales", "Ignacio Diaz", "Javiera Zapata", "David Tobar", "Fabrizio Mendieta", "Donovan Saez"];

function buscarBeneficiario() {
    let dato = document.getElementById("buscarNombre").value.toLowerCase();
    let encontrado = false;

    for (let i = 0; i < beneficiarios.length; i++) {
        if (beneficiarios[i].toLowerCase() === dato) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        document.getElementById("resultadoSubsidio").innerText = "Beneficiario Verificado";
    } else {
        document.getElementById("resultadoSubsidio").innerText = "No registrado";
    }
}