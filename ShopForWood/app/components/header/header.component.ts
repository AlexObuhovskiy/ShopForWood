
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header',
    template: `
        <div>
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" routerLink="">Главная</a>
                        </div>
                        <div>
                        <ul class="nav navbar-nav">
                            <li>
                                <a routerLink="/new-good">Новый товар</a>
                            </li>
                            <li>
                                <a routerLink="/about">О сайте</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <div class="container">

                </div>
            </div>
        </div>
    `,
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}