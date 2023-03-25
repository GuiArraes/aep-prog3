import { Router } from 'express';
import productsController from './controller/productController'

const routes = Router()

routes.post('/products', productsController.creatProduct)
routes.get('/products', productsController.getProduct)
routes.get('/products-stock', productsController.productsStock)
routes.get('/total-stock', productsController.totalStock)

export default routes