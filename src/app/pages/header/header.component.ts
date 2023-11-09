import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Cadastros Gerais',
                items: [
                    {
                        label: 'Apostilas de ábaco',
                        icon: 'pi pi-refresh',
                      
                    },
                    {
                        label: 'Alunos',
                        icon: 'pi pi-times',
                        
                    },
                    {
                        label: 'Educadores',
                        icon: 'pi pi-times',
                        
                    },
                    {
                        label: 'Perfis',
                        icon: 'pi pi-times',
                        
                    },
                    {
                        label: 'Turmas',
                        icon: 'pi pi-times',
                        
                    }

                ]
            },
            {
                label: 'Lançar aula',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            },
            {
                label: 'Gerenciar Reposições',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
        
     }

    clickMethod(name: string) {
        // if (confirm('Você tem certeza que deseja fazer Logout?')) {
        //   console.log("Implement logout funcionality here")
        // }
    }
}
      
    
