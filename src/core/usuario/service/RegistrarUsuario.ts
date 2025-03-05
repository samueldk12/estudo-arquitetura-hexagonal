import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";
import Id from "@/core/shared/Id";
import ProvedorCriptografia from "./ProvedorCriptografiaSenha";
import RepositorioUsario from "./RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void>
{
    constructor(
        private repositorio: RepositorioUsario,
        private provedorCripto: ProvedorCriptografia
    ){}

    async executar(usuario: Usuario): Promise<void> 
    {
        const senhaCript = this.provedorCripto.criptografar(usuario.senha)

        const usuarioExistente = await this.repositorio.buscarPorEmail(usuario.email)

        if(usuarioExistente) throw new Error('USUARIO_JA_EXISTE')
        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCript
        }

        this.repositorio.inserir(novoUsuario)

    }
}