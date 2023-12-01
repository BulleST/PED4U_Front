export class Aluno {
    alunoId: number = '' as unknown as number;
    nome: string = '';
    celular: number = '' as unknown as number;
    idade: number = '' as unknown as number;
    genero: string = '';
    horarioTurma:  Date = new Date(); 
    diaTurma: string = '';
    perfilAluno: string = '';
    dataVigencia: boolean = false;
}

export class PerfilAluno{
    id: number = '' as unknown as number;
    nome: string = '';
}