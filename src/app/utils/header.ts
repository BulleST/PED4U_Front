import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as $ from 'jquery';
import { Crypto } from "./crypto";
import { Tables } from "./table";

@Injectable({
    providedIn: 'root'
})
export class Header {
    menuAsideOpen = new BehaviorSubject<boolean>(false);
    loggedIn = new BehaviorSubject<boolean>(false);

    constructor(
        private crypto: Crypto,
        private tables: Tables,
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

}