import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografiaSenha";


// Na arquitetura hexagonal esta classe é um adaptador!
// O adaptador NÃOOO faz parte do core business da aplicação! 
export default class InverterSenhaCript implements ProvedorCriptografia {
    criptografar(senha: string): string {
        return senha.split('').reverse().join('')
    }
}