
import { ApostilaAbaco } from "./abaco.model";

export class Aula{
    id: number = 0;
    descricao: string = '';
    data: string = '';
    realizada: boolean = true;
    educadorNome: string = '';
    horario: string = '';
    DiaSemana: number = 0;
    turmaId: number = 0;
    apostila?: ApostilaAbaco = new ApostilaAbaco();
}

export class AlunoAula{
    id: number = 0;
    aula_Id: number = 0;
    aluno_Id: number = 0;
    nome: string = '';
    data_Vigencia_Final: Date = new Date;
    apostila: string = '';
    paginaAtual: number = 0;
    falta: boolean = true;
    reposicao: boolean = true;
}







