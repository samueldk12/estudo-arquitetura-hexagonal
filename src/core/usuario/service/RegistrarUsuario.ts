import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsarioEmMemoria from "./RepositorioUsarioEmMemoria";
import Id from "@/core/shared/Id";
import ProvedorCriptografia from "./ProvedorCriptografiaSenha";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>
{
    constructor(
        private provedorCripto: ProvedorCriptografia
    ){}

    async executar(usuario: Usuario): Promise<void> 
    {
        const senhaCript = this.provedorCripto.criptografar(usuario.senha)
        const repo = new RepositorioUsarioEmMemoria()

        const usuarioExistente = await repo.buscaPorEmail(usuario.email)
        if(usuarioExistente) throw new Error('USUARIO_JA_EXISTE')
        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCript
        }
        repo.inserir(novoUsuario)
        
        console.log(`\n\n${senhaCript}`)
    }
}