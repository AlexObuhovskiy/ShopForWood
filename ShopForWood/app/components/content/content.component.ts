import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'content',
    template: `
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}