const conta = {
    email: 'vitor@dio.me',
    password: '123456',
    name: 'Vitor Paz'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})