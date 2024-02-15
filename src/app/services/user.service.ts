import { environment } from './../../environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, of, tap } from 'rxjs';
import { Crypto } from '../utils/crypto';
import { Usuario, UsuarioRequest } from '../models/usuario.model';
import { Tables } from '../utils/table';
import { AccountService } from './account.service';
import { Account } from '../models/account.model';
import { PerfilAcesso, Role } from '../models/account-perfil.model';
import { Response } from '../models/response.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    url = environment.url;
    list = new BehaviorSubject<Usuario[]>([]);
    listPerfil = new BehaviorSubject<PerfilAcesso[]>([]);
    objeto = new BehaviorSubject<Usuario | undefined>(undefined);
    account: Account = new Account;
    perfilAcesso = new BehaviorSubject<PerfilAcesso[]>([]);
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private httpClient: HttpClient,
        private tables: Tables,
        private http: HttpClient,
        private toastr: ToastrService,
        private crypto: Crypto,
        private accountService: AccountService,
    ) {
        this.accountService.account.subscribe(res => this.account = res ?? new Account);
    }

    getObject() {
        var e = localStorage.getItem('usuario')
        if (e) {
            this.setObject(this.crypto.decrypt(e) ?? new Usuario)
        }
        return this.objeto;
    }

    setObject(value: Usuario) {
        localStorage.setItem('usuario', this.crypto.encrypt(value) ?? '')
        this.objeto.next(value);
    }

    getList(loading: boolean = false) {
       this.loading.next(loading);
        this.tables.loading.next(true);
        return this.http.get<Usuario[]>(`${this.url}/usuario`)
        .pipe(tap({
            next: list => {
                list = list.map(x => {
                    x.ativo = !x.dataDesativado;
                    return x;
                });
                this.list.next(list);
                this.loading.next(false);
                return of(list);
            },
            error: res => this.toastr.error('Não foi possível carregar usuários.')
        }));
    }

    get(id: number) {
        return this.http.get<Usuario>(`${this.url}/usuario/${id}`, { headers: new HttpHeaders({ 'loading': 'true' }) });
    }

    getPerfilAcesso() {
        return this.http.get<PerfilAcesso[]>(`${this.url}/Usuario/perfil-list`)
        .pipe(tap({
            next: res => {
                this.perfilAcesso.next(res);
                return res;
            },
            error: res => this.toastr.error('Não foi possível carregar perfil.')
        }));
    }

    create(request: UsuarioRequest) {
        return this.http.post<UsuarioRequest>(`${this.url}/usuario`, request);
    }

    edit(request: UsuarioRequest) {
        return this.http.put<UsuarioRequest>(`${this.url}/usuario`, request);
    }

    changeStatus(id: number, ativo: boolean) {
        return this.http.patch<Usuario>(`${this.url}/usuario/${id}/${ativo}`, {});
    }

    resetPassword(id: number) {
        return this.http.patch(`${this.url}/usuario/reset-password/${id}`, {});
    }
}