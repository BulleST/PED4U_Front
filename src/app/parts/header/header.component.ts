import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Header } from 'src/app/utils/header';
import { faBars, faIdCard, faKey, faSignOut, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { Account } from 'src/app/models/account.model';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/models/account-perfil.model';
import { IsMobile, ScreenWidth } from 'src/app/utils/mobile';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit{

    menuMinhaContaOpen = false;
    faSignOut = faSignOut;
    faIdCard = faIdCard;
    faKey = faKey;
    faUser = faUser;
    faBars = faBars;
    faTimes = faTimes;
    homeActive = true;
    userLogado?: Account;
    perfil = '';
    subscription: Subscription[] = [];
    nomeAbreviado = '';
    menu: any;
    login: { icon: string; routerLink: string[]; login: { label: string; icon: string; routerLink: string[]; }[]; }[] | undefined;
    loggedIn: boolean = false;

    


    constructor(
        private accountService: AccountService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public header: Header,
        private mobile: IsMobile,
        
    ){
        this.mobile.set();
        this.header = header;
        this.router.events.subscribe(res => {
            if(res instanceof NavigationEnd)
                this.homeActive = res.url == '/' || res.url == '/home' || res.url == '/minha-conta' || res.url == '/minha-conta/change-password'
        })

        this.userLogado = this.accountService.accountValue;
        var account = this.accountService.account.subscribe(async res => {
            this.userLogado = res;
            if (res) {
                this.perfil = Role[res.perfilAcesso_Id]
                let array = res?.name.split(' ')
                if (array.length == 1) {
                    this.nomeAbreviado = array[0];
                } else {
                    this.nomeAbreviado = array[0] + ' ' + array[array.length - 1];
                }

            }
        });
        this.subscription.push(account);

        var loggedIn = this.header.loggedIn.subscribe(res => this.loggedIn = res);

        if(accountService.accountValue){
            this.header.loggedIn.next(true)
        }
        else{
            this.header.loggedIn.next(false)
        }


        this.subscription.push(loggedIn);

        
       
    }

    items: MenuItem[] | undefined;
    itemsRight: MenuItem [] | undefined;
    

    ngOnInit() {
        this.items = [
            {
                label: 'Cadastros Gerais', 
                routerLink: ['listagem-apostilas'],
                items: [
                    {
                        label: 'Apostilas de ábaco',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['abaco']
                        
                      
                    },
                    {
                        label: 'Alunos',
                        icon:'pi pi-fw pi-user',
                        routerLink: ['aluno']
                        
                        
                    },
                    {
                        label: 'Educadores',
                        icon: 'pi f-w pi-user-edit',
                        routerLink: ['educadores'] 
                        
                    },
                    {
                        label: 'Perfis',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['perfis']
                        
                        
                    },
                    {
                        label: 'Turmas',
                        icon: 'pi pi-fw pi-book',
                        routerLink:['turmas']
                       
                        
                    }

                ],
               
            },
            {
                label: 'Lançar Aula', 
                icon: 'pi pi-fw pi-pencil', 
                routerLink: ['aulas'],
              
            },
            {
                label: 'Gerenciar Reposição', 
                icon: 'pi pi-fw pi-bookmark', 
                routerLink: ['reposicao'],
                style: {
                    'margin-right': 'auto'
                }
              
            },  
         
            {
                label: 'Meus Dados', 
                routerLink: ['my-account'],
                style: {
                    'margin-left': 'auto'
                }
            }, 
            {
                label: 'Logout', 
                icon: 'pi pi-fw pi-power-off', 
                routerLink: ['logout'],
                
            }, 
        ];
    

        if(this.loggedIn){
            this.router.navigate(['home']);
        }
        else{
            this.router.navigate(['']);
        }
     }

        

    clickMethod(name: string) {
        if (confirm('Você tem certeza que deseja fazer Logout?')) {
          console.log("Implement logout funcionality here")
        }
    }

    sair() {
        console.log('entrou na funcao')
        this.accountService.logout();
        this.header.closeMenuMinhaConta();
    }


    minhaConta() {
        this.router.navigate([this.router.url, 'minha-conta'], { relativeTo: this.activatedRoute, skipLocationChange: false, replaceUrl: true })
    }
}
      
    
