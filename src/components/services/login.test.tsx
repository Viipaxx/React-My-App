import { login } from "./login"


describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'vitor@dio.me'

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) vitor@dio.me!')
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
    })

})