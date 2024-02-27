
export class Aluno{
    id: number = 0 as unknown as number;
    pessoa_Id: number = 0;
    turma_Id: number = 0 as unknown as number;
    perfil_Id: number = '' as unknown as number;
    data_Vigencia_Inicial: Date = new Date;
    data_Vigencia_Final:  Date = new Date;
    nome: string = '';
    dataNascimento:  string = '';
    celular: string = '';
    sexo_Id: number = 0;
  }
  
  export class AlunoList {
    alunoId: number = '' as unknown as number;
    turma_Id: number = '' as unknown as number;
    nome: string = '';
    celular: string = '';
    idade: number = '' as unknown as number;
    sexo: string = '';
    horarioTurma:  string = ''; 
    diaTurma: number = '' as unknown as number;
    perfilAluno: string = '';
    dataVigencia: string = '';
  }

  export class AlunoAulaRel{
    alunoAula_Id: number = 0;
    aula_Id: number = 0;
    nome: string = '';
    apostila: string = '';
    pagina: string = '';
    falta: boolean = true;
    reposicao: boolean = true;
  }

