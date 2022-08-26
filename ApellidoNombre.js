class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
    this.nombre = nombre
    this.apellido = apellido
    this.libros = [libros]
    this.mascotas = [mascotas]
    }

    getFullName() {
        return (`Mi nombre completo es: ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
    }

    countMascotas() {
       let cantidadMascotas = this.mascotas.length
       console.log(`Cantidad de Mascotas = ${cantidadMascotas}`)
       return cantidadMascotas
    }

    addBook(nombreLibro, autor) {
        this.libros.push({nombre: nombreLibro, autorLibro: autor})
    }

    getBookNames() {
        let bookNames = this.libros.map(function(libro) {
            console.log(libro.nombre)
            return libro.nombre
        })
        return bookNames
    }
}

const usuario = new Usuario ("Federico", "Leon", ["Harry Potter", "Las enseñanzas de Don Juan", "Asi hablo Zaratustra"], ["Perro", "Gato", "Loro"])

console.log(usuario);
console.log(usuario.getFullName())
console.log(usuario.addMascota("Gato"))
console.log(usuario.countMascotas())
console.log(usuario.libros)
usuario.addBook("El Cuervo", "Edgar Alan Poe")
usuario.addBook("Los Juegos del Hambre", "Pepito")
usuario.addBook("El señor de los anillos", "Tolkien")
console.log(usuario.libros)
console.log(usuario.getBookNames())

