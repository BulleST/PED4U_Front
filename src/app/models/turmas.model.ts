

export class Turma {
    turmaId: number = 0;
    horario: string = '';
    diaSemana: number = 0;
    capacidadeAlunos: number = 0;
    vagasRestantes: number = 0;
    nomeEducador: string = '';
    perfis: string = '';
}

export class TurmaCadastro{
    id: number = 0;
    horario: string = '';
    diaSemana:  number = '' as unknown as number;
    qtdeMaxAlunos:  number = '' as unknown as number;
    educador_Id: number = '' as unknown as number;;
    unidade_Id:   number = '' as unknown as number;;
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