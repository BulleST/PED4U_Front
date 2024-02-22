
export class Aluno{
    id: number = '' as unknown as number;
    pessoa_Id: number = '' as unknown as number;
    turma_Id: number = '' as unknown as number;
    perfil_Id: number = '' as unknown as number;
    data_Vigencia_Inicial: boolean = false;
    data_Vigencia_Final:boolean = false;
    nome: string = '';
    dataNascimento:  string = '';
    celular: string = '';
    sexo_Id: number = '' as unknown as number;
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

