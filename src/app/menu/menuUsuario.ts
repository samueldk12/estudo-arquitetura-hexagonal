import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";
import registrarUsuario from "../usuario/registrarUsuario";

export default async function menuUsuario(){
    TerminalUtil.titulo(`Usuario`)

    const [indiceMenuSelected, textoMenuSelected] = await TerminalUtil.menu([
        `1. Registrar Usuario`,
        `Voltar`
    ])

    switch(indiceMenuSelected){
        case 0: await registrarUsuario(); break
        default: return
    }

    await menuUsuario()
}