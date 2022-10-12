const productsDB = require('../databasemysql')

const productTable = async () => {
    try {
        await productsDB.schema.createTable('product', productTable => {
            productTable.increments('id').primary()
            productTable.string('title', 50).notNullable()
            productTable.string('thumbnail', 500).notNullable()
            productTable.integer('price').notNullable()
        })
        console.log('Tabla de productos creada correctamente')
        productsDB.destroy()

    } catch (err) {
        console.log(err)
        productsDB.destroy()
    }
}

class ProductosClass {
    constructor(config, table) {
        this.config = config
        this.table = table
    }

    // Guardar producto

    async save(producto) {
        try {
            await productsDB(`${this.table}`).insert(producto)
            console.log("Se ha agregado el producto correctamente")

        } catch (err) {
            console.log(err)
        }
    }

    // Obtener todos los productos

    async getAll() {

        try {
            const contenido = await productsDB.from(`${this.table}`).select("*")
            return contenido

        } catch (error) {
            if (error) {
                productTable()
            } else {
                console.log(
                    `Ocurrio el siguiente error: ${error}`
                )
            }
        }
    }


    // Eliminar producto

    async delete(id) {
        try {
            await productsDB.from(`${this.table}`).where("id", "=", id).del()

        } catch (err) {
            console.log(err)
        }
    }
}



module.exports = ProductosClass