//CONTENEDOR

class Contenedor {
    constructor(arrayProductos) {
        this.arrayProductos = arrayProductos
    }
        
    static idContador = 1

    // devolver un array de objetos con todos los objetos que esten el archivo 

    async getAll() {
        try {
           let contenido = this.arrayProductos
           return contenido
        } catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    // recibe un id y devuelve el objeto con ese id si no existe devolver null

   async getById(id) {
        try {
            let contenido = this.arrayProductos
            let objetoEncontrado = contenido.find(i => i.id === id)
            if (objetoEncontrado) {
                return objetoEncontrado
            } else {
                return { error: 'producto no encontrado' }
            }

        } catch (err) {
            console.log(`${err}: Producto no encontrado`);
        }
    }

    //guardar el objeto en el archivo y devolver el id asignado 

    async postProduct(producto) {
        try {
            let id = Contenedor.idContador
            let nuevoProducto = {...producto , id : id }
            Contenedor.idContador++
            this.arrayProductos.push(nuevoProducto)
            console.log(`Objeto con id : ${nuevoProducto.id} agregado`)
            return nuevoProducto
        } catch (err) {
            console.log(`No se pudeo agregar el objeto: ${err}`)
        }
    }

    // modifica un producto

    async putProduct(id, nuevoProducto) {
        try {
            let contenido = this.arrayProductos
            contenido.forEach(producto => {
             if(producto.id === id) {
                producto = nuevoProducto
                console.log(`Objeto con id : ${nuevoProducto.id} modificado`)
             } else {
                return { error: 'producto no encontrado' }
             }
            })
            
        } catch (err) {
            console.log(`No se encontro el objeto con ese ID : ${err}`)
        }
    }

    // borrar el elemento segun el id que le pasemos en el archivo 

    async deleteById(id) {
        try {
            let contenido = this.arrayProductos
            let objetoEncontrado = contenido.find(i => i.id === id)
            if (objetoEncontrado) {
                let contenidoFiltrado = contenido.filter(i => i.id != id)
                this.arrayProductos = contenidoFiltrado
                console.log(`Objeto con id : ${id} eliminado`)
            } else {
                return { error: 'producto no encontrado' }
            }
        } catch (err) {
            console.log(`Hubo un error en recuperar el objeto por ID : ${err}`)
        }
    }
}


module.exports = Contenedor