import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";
import TerminalUtil from "../util/TerminalUtil";
import corrida from "@/core/fundamentos/Corrida";
import Ferrari from "@/core/fundamentos/Ferrari";
import { terminal } from "terminal-kit";

export default async function dip(){
    TerminalUtil.titulo('DIP')

    const [tipo] = await TerminalUtil.selecaoConfirmacao("Tipo de carro", [
        "Fusca", "Ferrari"
    ])

    let carro: Carro

    switch(tipo){
        case 0: 
            carro = new Fusca() 
            break
        case 1: 
            carro = new Ferrari() 
            break
        default:
            carro = new Fusca()
    }

    corrida(carro, terminal.red)
    await TerminalUtil.esperarEnter()
}