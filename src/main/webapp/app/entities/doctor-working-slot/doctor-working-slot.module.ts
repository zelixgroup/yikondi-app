import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { DoctorWorkingSlotComponent } from './doctor-working-slot.component';
import { DoctorWorkingSlotDetailComponent } from './doctor-working-slot-detail.component';
import { DoctorWorkingSlotUpdateComponent } from './doctor-working-slot-update.component';
import { DoctorWorkingSlotDeleteDialogComponent } from './doctor-working-slot-delete-dialog.component';
import { doctorWorkingSlotRoute } from './doctor-working-slot.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(doctorWorkingSlotRoute)],
  declarations: [
    DoctorWorkingSlotComponent,
    DoctorWorkingSlotDetailComponent,
    DoctorWorkingSlotUpdateComponent,
    DoctorWorkingSlotDeleteDialogComponent
  ],
  entryComponents: [DoctorWorkingSlotDeleteDialogComponent]
})
export class YikondiAppDoctorWorkingSlotModule {}
