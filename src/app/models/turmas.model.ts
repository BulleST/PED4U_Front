// model para lista página de Turmas
export class Turma {
    id: number = 0;
    nome: string = '';
    horario: string = '';
    diaSemana: number = 0;
    capacidadeAlunos: number = 0;
    vagasRestantes: number = 0;
    nomeEducador: string = '';
    perfis: string = '';
    diaSemanaTxt: string = '';
}
// model para lista de aulas por Turma
export class TurmaAula{
    id: number = 0;
    descricao: string = '';
    data: Date = new Date;
    realizada: boolean = true;
    educadorNome: string = '';
    horario: string = '';
    diaSemana:  number = '' as unknown as number;
    turmaId: number = 0;
}

// model para lista cadastrar uma Turma
export class TurmaCadastro{
    id: number = 0;
    horario: string = '';
    diaSemana:  number = '' as unknown as number;
    qtdeMaxAlunos:  number = '' as unknown as number;
    educador_Id: number = '' as unknown as number;
    unidade_Id:   number = '' as unknown as number;
    perfis: number[] = [];
}

export class DiaSemana{
    id: number = 0;
    nome: string = '';
}

export class TurmaPerfilRel{
    id: number = 0;
    turma_Id: number = 0;
    perfil_Id: number = 0;
}