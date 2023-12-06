export class AlunoList {
    id: number = '' as unknown as number;
    nome: string = '';
    celular: number = '' as unknown as number;
    idade: number = '' as unknown as number;
    genero: string = '';
    horarioTurma:  Date = new Date(); 
    diaTurma: string = '';
    perfil: string = '';
    dataVigencia: boolean = false;
}

export class PerfilAluno{
    id: number = 0;
    nome: string = '';
}

export class Aluno {
    id: number = '' as unknown as number;
    nome: string = '';
    celular: number = '' as unknown as number;
    idade: number = '' as unknown as number;
    genero: string = '';
    horarioTurma:  Date = new Date(); 
    diaTurma: string = '';
    perfil_Id: number = undefined as unknown as number;
    dataVigencia: boolean = false;
}