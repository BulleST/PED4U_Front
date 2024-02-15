
import { Component, ViewChild } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Subscription, lastValueFrom } from 'rxjs';
import { MenuTableLink } from 'src/app/helpers/menu-links.interface';
import { Usuario, userColumns } from 'src/app/models/usuario.model';
import { AccountService } from 'src/app/services/account.service';
import { IsMobile, ScreenWidth } from 'src/app/utils/mobile';
import { Tables } from 'src/app/utils/table';
import { UserService } from './../../../services/user.service';
import { LoadingService } from 'src/app/parts/loading/loading';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    faUsers = faUsers;
    list: Usuario[] = []
    @ViewChild('dt') dt!: Table;
    tableLinks: MenuTableLink[] = [];

    columns = userColumns;
    subscription: Subscription[] = [];
    loading = false;

    constructor(
        private tables: Tables,
        private userService: UserService,
        private accountService: AccountService,
        private loadingHelper: LoadingService
    ) {
        var list = this.userService.list.subscribe(res => this.list = Object.assign([], res));
        this.subscription.push(list);
        this.loadingHelper.loading.subscribe(res => this.loading = res);

        var loading = this.userService.loading.subscribe(res => this.loading = res);
        this.subscription.push(loading);

        lastValueFrom(this.userService.getList(true));

        var selected = this.tables.selected.subscribe(res => {
            if (res) {
                this.tableLinks = [
                    { label: 'Editar', routePath: ['editar'], paramsFieldName: ['id'] },
                    { label: (res.ativo ? 'Desabilitar' : 'Habilitar'), routePath: [ (res.ativo ? 'desabilitar' : 'habilitar') ], paramsFieldName: ['id'] },
                    { label: 'Resetar senha', routePath: [ 'reset-password'], paramsFieldName: ['id'] },
                ];

                if (this.accountService.accountValue?.perfilAcesso_Id == 1) {
                    this.tableLinks.push({ label: 'Excluir', routePath: ['excluir'], paramsFieldName: ['id'] } )
                }
                this.tableLinks = this.tables.encryptParams(this.tableLinks);
            }
        });
        this.subscription.push(selected);

    }

    ngOnDestroy(): void {
        this.subscription.forEach(x => x.unsubscribe());
    }

    getList() {
        lastValueFrom(this.userService.getList(true));
    }

    updateStatus(usuario:Usuario,status:any){
        this.loading = true;
        lastValueFrom(this.userService.changeStatus(usuario.id, status)).then(res=>{
            console.log(res)
            lastValueFrom(this.userService.get(usuario.id)).then(res=>{
                if(res.dataDesativado == null) usuario.ativo = true;
                else usuario.ativo = false;
            })
            this.loading = false;
        });
        
    }

    // Função para limpar os filtros aplicados na tabela
    clear(table: Table) {
        table.clear();
    }

    // Função para filtrar a tabela a partir do input
    applyFilterGlobal(event: any, filterType: string) {
        this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
  }
}