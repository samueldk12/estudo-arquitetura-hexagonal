import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dip";

export default async function menuFundamentos(){
    TerminalUtil.titulo(`Fundamentos`)

    const [indiceMenuSelected, textoMenuSelected] = await TerminalUtil.menu([
        `1. Polimorfismo`,
        '2. DIP',
        `Voltar`
    ])

    switch(indiceMenuSelected){
        case 0: await polimorfismo(); break
        case 1: await dip(); break
        default: return
    }
}