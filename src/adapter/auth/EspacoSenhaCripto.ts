import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografiaSenha";

export default  class EspacoSenhaCripto implements ProvedorCriptografia{
    criptografar(texto: string): string {
        return texto.split('').join(' ')
    }
}