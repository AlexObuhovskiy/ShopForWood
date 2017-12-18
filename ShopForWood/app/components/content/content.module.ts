import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    exports: [ContentComponent],
    declarations: [ContentComponent],
    providers: [],
})
export class ContentModule { }
