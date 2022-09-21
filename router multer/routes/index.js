const { Router } = require(`express`)
const router = Router()
const Contenedor = require('../class/class.js')

let productosArray = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
]

const ContenedorProductos = new Contenedor(productosArray)


//RUTAS

router.get(`/`, async (req , res)=>{
    ContenedorProductos.getAll().then(r =>res.json(r))})

router.get(`/:id`, (req , res)=>{
    const id = Number(req.params.id)
    ContenedorProductos.getById(id).then(i => res.status(200).json(i))
})

router.post(`/`, (req , res )=>{
    const { title, price, thumbnail } = req.body
    ContenedorProductos.postProduct({ title, price, thumbnail }).then(i => res.send({msg:`El id del producto agregado es: ${i.id}`}))
})

router.put(`/:id` ,(req , res)=>{
    const { title, price, thumbnail } = req.body
    const id = Number(req.params.id)
    ContenedorProductos.putProduct(id, { title, price, thumbnail }).then(i => res.json(i))
   
})

router.delete(`/:id` ,(req , res)=>{
    const id = Number(req.params.id)
    ContenedorProductos.deleteById(id).then(i => res.json(i))
})






module.exports = router