
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


export class AulaCadastro{
    id: number = 0;
    descricao: string = '';
    turma_Id: number = 0;
    data: string = '';
    realizada: boolean = true;
    educador_Id:  number = null as unknown as number;
}

export class AulaPresenca{
    id: number = 0;
    aluno_Id: number = 0;
    nomeAluno: string = '';
    aula_Id: number = 0;
    apostilaAbaco_Id: number = 0;
    reposicao: boolean = true;
    falta: boolean = true;
    paginaAtual: number = 0;

}

export class AulaApostila{
    id: number = 0;
    nome: string = '';
    qtdePaginas: number = 0;
    materialExtra: string = '';
}



export class AulaCadastroBody{
    rels: AulaPresenca[] = [];
    aula: AulaCadastro = new AulaCadastro();
    apostila_List: AulaApostila[] = [];
    success: boolean = true;
    message: string = '';
}




