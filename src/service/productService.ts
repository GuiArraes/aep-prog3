import { writeFile, readFile } from 'fs/promises'

class ProductService {

    async creatProductList(data) {
        await writeFile('products.json', JSON.stringify(data, null, 2))
    }

    async getProduct() {
        try {
            const productList = await readFile('products.json', "utf-8")
            return JSON.parse(productList)
        } catch (error) {
            throw new Error("Erro ao ler a lista de produtos")
        }
    }

    async getStock() {
        try {
            const produtoList = await this.getProduct()

            const stock = produtoList.map(produto => {
                let item = {
                    nome: produto.nome,
                    qtde: produto.qtde,
                    preco: produto.preco,
                    valor_estoque: produto.qtde * produto.preco
                }
                return item
            })

            return stock

        } catch (error) {
            throw new Error(error)
        }
    }

    async totalStock() {
        try {
            const stock = await this.getStock()

            const totalStock = stock.reduce((acc, atual) => {
                return acc += atual.valor_estoque
            }, 0).toFixed(2)

            return totalStock

        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new ProductService()