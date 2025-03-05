import Ferrari from "@/core/fundamentos/Ferrari";
import TerminalUtil from "../util/TerminalUtil";
import Carro from "@/core/fundamentos/Carro";
import Fusca from "@/core/fundamentos/Fusca";

export default async function polimorfismo(){
    TerminalUtil.titulo(`Polimorfismo`)
    
    const [tipoCarro] = await TerminalUtil.selecaoConfirmacao(
        `Tipo de Carro?`, [`Ferrari`, `Fusca`]
    )
    
    const carro: Carro = 
        tipoCarro === 0 ? new Ferrari() : new Fusca()
    
    while(true){
    

        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor(`Velocidade maxima `, `${carro.velocidadeMaxima} km/h`)
        TerminalUtil.exibirChaveValor(`Velocidade atual `, `${carro.velocidadeAtual} km/h`)
        
        const [opcao] = await TerminalUtil.selecaoConfirmacao(`Qual opcao `, [`Acelerar`, `Freiar`])

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao(`Deseja Continuar?`)
        if(!continuar) return

     
    }
}