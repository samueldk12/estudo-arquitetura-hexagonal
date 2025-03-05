import Usuario from "../model/Usuario"

export default class RepositorioUsarioEmMemoria{
    private static readonly items: Usuario[] = []
    
    async inserir(usuario: Usuario){
        const items = RepositorioUsarioEmMemoria.items
        const usuarioExistente = await this.buscaPorEmail(
            usuario.email
        )
        
        if (usuarioExistente) return
        items.push(usuario)
        console.log(items)
    }

    async buscaPorEmail(email: string): Promise<Usuario|null>{
        const items = RepositorioUsarioEmMemoria.items
        return items.find(u => u.email === email) ?? null
    }
}