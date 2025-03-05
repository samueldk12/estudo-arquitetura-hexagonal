import RepositorioUsario from "@/core/usuario/service/RepositorioUsuario"
import Usuario from "@/core/usuario/model/Usuario"

export default class RepositorioUsarioEmMemoria implements RepositorioUsario{
    private static readonly items: Usuario[] = []
    
    async inserir(usuario: Usuario){
        const items = RepositorioUsarioEmMemoria.items
        const usuarioExistente = await this.buscarPorEmail(
            usuario.email
        )
        
        if (usuarioExistente) return
        items.push(usuario)
        console.log(items)
    }

    async buscarPorEmail(email: string): Promise<Usuario|null>{
        const items = RepositorioUsarioEmMemoria.items
        return items.find(u => u.email === email) ?? null
    }
}