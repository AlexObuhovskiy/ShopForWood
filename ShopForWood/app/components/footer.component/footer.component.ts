
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer',
    template: `
        <h1>Footer</h1>
    `,
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}