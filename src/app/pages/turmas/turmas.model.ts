import { Perfil } from "../perfis/perfis.model";

export class Turma{
    id: number = 0;
    horarioTurma:  Date = new Date(); 
    diaTurma: string = '';
    qtdeAlunos: number = '' as unknown as number;
    vagasTurma: number = '' as unknown as number;
    nome: string = '';
    perfil: Perfil[] = [];
}