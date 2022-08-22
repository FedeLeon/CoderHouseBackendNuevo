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
        return (this.mascotas)
    }

    countMascotas() {
       let cantidadMascotas = this.mascotas.length
       return (`Cantidad de Mascotas = ${cantidadMascotas}`)
    }

    addBook(nombreLibro, autor) {
        this.libros.push({nombre: nombreLibro, autorLibro: autor})
        return (this.libros)
    }

    getBookNames() {
        this.libros.map(function(lib) {
            return console.log(lib.nombre)
        })

    }
}

const usuario = new Usuario ("Federico", "Leon", "Harry Potter", "Perro")

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

