import { Request, Response } from 'express';
import productService from '../service/productService'

class ProductController {

    async creatProduct(req: Request, res: Response) {
        await productService.creatProductList(req.body)
        return res.status(201).send()
    }

    async getProduct(req: Request, res: Response) {
        return res.status(200).json(await productService.getProduct())
    }

    async productsStock(req: Request, res: Response) {
        return res.status(200).json(await productService.getStock())
    }

    async totalStock(req: Request, res: Response) {
        return res.status(200).json(await productService.totalStock())
    }
}

export default new ProductController()