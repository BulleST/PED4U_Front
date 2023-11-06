import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    clickMethod(name : string) {
        // if (confirm('Você tem certeza que deseja fazer Logout?')) {
        //   console.log("Implement logout funcionality here")
        // }
      }
}