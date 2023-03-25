import app from './app';

function main() {
    let port = 3000

    try{
        app.listen(port, 'localhost', async () => {
            console.log(`Servidor inicializado na porta ${port}`)
        })
    }catch(error) {
        console.log('Erro ao inicializar o servidor: ', error)
    }
}

main()