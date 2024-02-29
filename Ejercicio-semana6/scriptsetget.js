class Menu {
    constructor(nombre, comida, cantidadComida, soda, cantidadSoda) {
        this._nombre = nombre;
        this._comida = comida;
        this._cantidadComida = cantidadComida;
        this._soda = soda;
        this._cantidadSoda = cantidadSoda;
    }

    realizarPedido() {
        if (isNaN(this._cantidadComida) || this._cantidadComida <= 0 || isNaN(this._cantidadSoda) || this._cantidadSoda <= 0) {
            console.error("Por favor, ingrese cantidades válidas.");
            return;
        }

        let totalComida = this._cantidadComida * 5;
        let precioBebida = this.calcularPrecioBebida(this._soda);
        let totalPedido = totalComida + (precioBebida * this._cantidadSoda);

        return totalPedido;
    }

    calcularPrecioBebida(bebida) {
        switch (bebida) {
            case "coca-cola":
            case "Fanta":
                return 1;
            case "Pepsi":
            case "7uo":
            case "Grepette":
                return 0.75;
            default:
                return 0;
        }
    }
}

class Cocina extends Menu {
    constructor(nombre, comida, cantidadComida, soda, cantidadSoda, estado) {
        super(nombre, comida, cantidadComida, soda, cantidadSoda);
        this._estado = estado;
    }

    get Estado(){
        return this._estado;
    }

    set Estado(value){
        setTimeout(() => {
            this._estado = value;
            document.getElementById('estado').innerText = value;
            if(value === "Listo") {
                alert(`Cliente ${this._nombre} ha recibido ${this._cantidadComida} órdenes de ${this._comida} y ${this._cantidadSoda} sodas de ${this._soda}. El pedido está listo.`);
            }
        }, 5000); 
    }
}


function Ordenar() {
    let nombre = document.getElementById('nombre').value;
    let comida = document.getElementById('comida').value;
    let cantidadComida = parseInt(document.getElementById('NumComida').value);
    let soda = document.getElementById('soda').value;
    let cantidadSoda = parseInt(document.getElementById('NumSoda').value);

    let cocina = new Cocina(nombre, comida, cantidadComida, soda, cantidadSoda, "En cocina");
    let totalPedido = cocina.realizarPedido();

    if (typeof totalPedido !== 'undefined') {
        document.getElementById('nom').innerText = cocina._nombre;
        document.getElementById('tipo').innerText = cocina._comida;
        document.getElementById('orden').innerText = cocina._cantidadComida;
        document.getElementById('bebida').innerText = cocina._soda;
        document.getElementById('Cantidad').innerText = cocina._cantidadSoda;
        document.getElementById('total').innerText = totalPedido.toFixed(2);
        document.getElementById('estado').innerText = "En cocina";
        document.getElementById('totalprecio').innerText = totalPedido;

        // Accede al método Estado como una propiedad
        cocina.Estado = "Listo";
    }
}




