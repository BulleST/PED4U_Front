import { Perfil } from "./perfis.model";

// export class Reposicao{
//     id: number = 0;
//     diaTurma: string = '';
//     horarioTurma:  Date = new Date();
//     perfil: Perfil[] = [];
//     vagasTurma: number = '' as unknown as number;

// }

export class Reposicao{
    id: number = 0;
    nome: string = '';
    diaSemana: number = 0;
    horario: string = '';
    data: Date = new Date;
    falta: boolean = true;
    realizada: boolean = true;

}



