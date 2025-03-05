import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import InverterSenhaCript from "@/adapter/auth/InverterSenhaCripto";

export default async function registrarUsuario(){
    TerminalUtil.titulo(`Registrar Usuario`)
    
    const nome = await TerminalUtil.campoRequerido('Nome: ',`Samuel Arao`)
    const email = await TerminalUtil.campoRequerido('Email: ',`pintao20cm@gmail.com`)
    const senha = await TerminalUtil.campoRequerido('Senha: ',`12cmfazestrago`)

    const usuario: Usuario = { nome, email, senha }
    const casoDeUso = new RegistrarUsuario(new InverterSenhaCript())

    try{
        await casoDeUso.executar(usuario)
        await TerminalUtil.sucesso('Usuario registrado com sucesso!')
    }catch(e){
        await TerminalUtil.erro(e.message)
    }finally{
        await TerminalUtil.esperarEnter()
    }

    
}