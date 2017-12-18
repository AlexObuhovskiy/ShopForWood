import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'content',
    template: `
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}