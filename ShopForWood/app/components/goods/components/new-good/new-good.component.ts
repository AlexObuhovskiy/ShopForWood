import { Observable } from "rxjs/Rx";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Good } from "../../models/good.model";
import { GoodService } from "../../services/good.service";


@Component({
    moduleId: module.id,
    selector: "new-good",
    template: `
        <good-form
            [good]="good"
            [submitButtonName]="submitButtonName"
            (imageChange)="imageChanged($event)"
            (submit)="Submit()">
        </good-form>
    `,
    styleUrls: ["./new-good.component.css"]
})
export class NewGoodComponent {
    private good: Good = new Good;
    private image: File;
    private submitButtonName: string = "Save";

    constructor(
        private _goodService: GoodService,
        private _router: Router
    ) { }

    private imageChanged(imageFile: File): void {
        this.image = imageFile;
    }

    private Submit(): void {
        this._goodService.addGood(this.good)
            // save image to server after creation of the good
            .mergeMap((createdGood: Good) => {
                if (this.image === undefined) {
                    return Observable.of(201);
                }

                return this._goodService.addGoodImage(createdGood.goodId, this.image);
            })
            .subscribe(() => this._router.navigate([""]));
    }
}
