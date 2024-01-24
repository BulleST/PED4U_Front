
export class Aluno{
    id: number = '' as unknown as number;
    pessoa_Id: number = '' as unknown as number;
    turma_Id: number = '' as unknown as number;
    perfil_Id:number = '' as unknown as number;
    data_Vigencia_Inicial: boolean = false;
    data_Vigencia_Final:boolean = false;
    nome: string = '';
    dataNascimento:  string = '';;
    celular: string = '';
    sexo_Id: number = '' as unknown as number;
  }
  
  export class AlunoList {
    alunoId: number = '' as unknown as number;
    nome: string = '';
    celular: number = '' as unknown as number;
    idade: number = '' as unknown as number;
    sexo: string = '';
    horarioTurma:  Date = new Date(); 
    diaTurma: string = '';
    PerfilAluno: number = undefined as unknown as number;
    dataVigencia: boolean = false;
  }

