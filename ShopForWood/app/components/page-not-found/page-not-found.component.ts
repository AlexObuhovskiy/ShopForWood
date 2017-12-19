
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-not-found',
    template: `
        <h1>Page not found</h1>
    `,
    styleUrls: ['./footer.component.css']
})

export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}