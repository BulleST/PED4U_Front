import { Perfil } from "./perfis.model";

export class ReposicaoAlunos{
    id: number = 0;
    diaTurma: string = '';
    horarioTurma:  Date = new Date();
    perfil: Perfil[] = [];
    vagasTurma: number = '' as unknown as number;

}