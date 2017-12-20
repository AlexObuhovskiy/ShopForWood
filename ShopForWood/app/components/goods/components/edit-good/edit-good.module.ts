import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditGoodComponent } from './edit-good.component';
import { GoodService } from '../../services/good.service';
import { GoodFormComponent } from '../good-form/good-form.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [EditGoodComponent],
    declarations: [EditGoodComponent, GoodFormComponent],
    providers: [GoodService],
})
export class EditGoodModule { }
