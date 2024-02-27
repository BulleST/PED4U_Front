
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
    reposicao: boolean = true;
    falta: boolean = true;
    paginaAtual: number = 0;
    apostilaNome: string = '';
    pessoaNome: string = '';
}

