import Usuario from "../model/Usuario";

export default interface RepositorioUsario {
    inserir(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
}