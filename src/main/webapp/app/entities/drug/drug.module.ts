import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { DrugComponent } from './drug.component';
import { DrugDetailComponent } from './drug-detail.component';
import { DrugUpdateComponent } from './drug-update.component';
import { DrugDeleteDialogComponent } from './drug-delete-dialog.component';
import { drugRoute } from './drug.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(drugRoute)],
  declarations: [DrugComponent, DrugDetailComponent, DrugUpdateComponent, DrugDeleteDialogComponent],
  entryComponents: [DrugDeleteDialogComponent]
})
export class YikondiAppDrugModule {}
