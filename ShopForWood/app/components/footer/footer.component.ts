
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer-component',
    template: `
        <footer id="footer" class="app-footer">
            <div class="container-fluid">
                I am the footer here. Please help fix me!
            </div>
        </footer>
    `,
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}