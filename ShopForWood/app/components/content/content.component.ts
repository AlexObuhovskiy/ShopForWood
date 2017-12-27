import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "content",
    template: `
        <div class="main">
            <div class="main-container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ["./content.component.css"]
})

export class ContentComponent {

}
