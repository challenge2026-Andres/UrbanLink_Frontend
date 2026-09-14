export type CategoriaRecompensa = 'passagem' | 'cashback' | 'parceiro'

export type Recompensa = {
  id: number
  titulo: string
  categoria: CategoriaRecompensa
  pontos: number
  descricao: string
  parceiro?: string
}
