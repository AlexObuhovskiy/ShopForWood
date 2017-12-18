
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header',
    template: `
        <h1>Header</h1>
        <nav>
            <a routerLink="">Главная</a>
            <a routerLink="/about">О сайте</a>
        </nav>
    `,
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}