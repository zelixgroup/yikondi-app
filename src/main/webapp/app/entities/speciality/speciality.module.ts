import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { SpecialityComponent } from './speciality.component';
import { SpecialityDetailComponent } from './speciality-detail.component';
import { SpecialityUpdateComponent } from './speciality-update.component';
import { SpecialityDeleteDialogComponent } from './speciality-delete-dialog.component';
import { specialityRoute } from './speciality.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(specialityRoute)],
  declarations: [SpecialityComponent, SpecialityDetailComponent, SpecialityUpdateComponent, SpecialityDeleteDialogComponent],
  entryComponents: [SpecialityDeleteDialogComponent]
})
export class YikondiAppSpecialityModule {}
