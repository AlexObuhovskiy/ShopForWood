import { Subscription } from "rxjs/Subscription";
import {
    Component, OnInit, Input, Output, EventEmitter,
    ChangeDetectionStrategy, ChangeDetectorRef
} from "@angular/core";
import { Router } from "@angular/router";
import { Good } from "../../models/good.model";

@Component({
    moduleId: module.id,
    selector: "good",
    template: `
        <div class="main">
            <div class="name">
                {{good.name}}
            </div>
            <div class="description">
                <label for="description">Description:</label>
                <span id="description">{{good.description}}</span>
            </div>
            <div *ngIf="good.imageName" class="image">
                <img [src]="getImageSrc()" />
            </div>
            <button class="remove" (click)="remove()"></button>
            <button (click)='editGood()'>Edit</button>
        </div>
    `,
    styleUrls: ["./good.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent {
    private imageData: string;

    @Input() good: Good;
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private _router: Router,
        private _changeDetectorRef: ChangeDetectorRef
    ) { }

    private getImageSrc(): string {
        return "/Images/Goods/" + this.good.imageName;
    }

    private remove(): void {
        this.delete.emit(this.good.goodId);
    }

    private editGood(): void {
        this._router.navigate(["/edit-good", this.good.goodId]);
    }
}