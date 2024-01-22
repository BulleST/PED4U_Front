import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as $ from 'jquery';
import { Crypto } from "./crypto";
import { Table } from "./table";

@Injectable({
    providedIn: 'root'
})
export class Header {
    menuAsideOpen = new BehaviorSubject<boolean>(false);
    loggedIn = new BehaviorSubject<boolean>(false);

    constructor(
        private crypto: Crypto,
        private table: Table,
    ) {

    }

    toggleMenuAside(): void {
        this.setMenuAside(!this.menuAsideOpen.value);
    }

    setMenuAside(value: boolean) {
        var encryted = this.crypto.encrypt(value) ?? '';
        localStorage.setItem('navigation', encryted);
        this.menuAsideOpen.next(value);
    }


    toggleMenuMinhaConta(): void {
        this.loggedIn.next(!this.loggedIn.value);
    }

    openMenuMinhaConta() {
        this.loggedIn.next(true);
    }

    closeMenuMinhaConta() {
        this.loggedIn.next(false);
    }

    clickOut() {
        // var classe = this;
        // $('body').on('click', function (e) {
        //     classe.closeMenuMinhaConta();
        //     classe.setMenuAside(false);
        // });
        
        // $('.navigation-toggle-content').on('click', function (e) {
        //     classe.setMenuAside(true);
        // });
        
        // $('.navigation-content*').each((i, el) => {
        //     $(el).on('click', function (e) {
        //         e.stopPropagation();
        //     });
        // })
        // $('.navigation-content').on('click', function (e) {
        //     e.stopPropagation();
        // });
    }
}