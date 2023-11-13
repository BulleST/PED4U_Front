import { HomeRoutingModule } from './home.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';

@NgModule ({
    declarations: [ 
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule
    ],
})

export class HomeModule {}