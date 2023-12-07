import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit{

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                routerLink: ['listagem-apostilas'],
                items: [
                    {
                        label: 'Apostilas de ábaco',
                        routerLink: ['abaco']
                        
                      
                    },
                    {
                        label: 'Alunos',
                        routerLink: ['aluno']
                        
                        
                    },
                    {
                        label: 'Educadores',
                        routerLink: ['educadores'] 
                        
                    },
                    {
                        label: 'Perfis',
                        
                        
                    },
                    {
                        label: 'Turmas',
                       
                        
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
      
    
