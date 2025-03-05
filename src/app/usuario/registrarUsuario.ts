import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioPG from "@/adapter/db/RepositorioUsuarioPg";

export default async function registrarUsuario(){
    TerminalUtil.titulo(`Registrar Usuario`)
    
    const { campoRequerido } = TerminalUtil
    const nome  = await campoRequerido('Nome: ')
    const email = await campoRequerido('Email: ')
    const senha = await campoRequerido('Senha: ')

    const usuario: Usuario = { nome, email, senha }
    const casoDeUso = new RegistrarUsuario(new RepositorioUsuarioPG(),new SenhaCripto())

    try{
        await casoDeUso.executar(usuario)
        await TerminalUtil.sucesso('Usuario registrado com sucesso!')
    }catch(e: any){
        await TerminalUtil.erro(e.message)
    }finally{
        await TerminalUtil.esperarEnter()
    }

    
}