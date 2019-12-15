import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { DoctorScheduleComponent } from './doctor-schedule.component';
import { DoctorScheduleDetailComponent } from './doctor-schedule-detail.component';
import { DoctorScheduleUpdateComponent } from './doctor-schedule-update.component';
import { DoctorScheduleDeleteDialogComponent } from './doctor-schedule-delete-dialog.component';
import { doctorScheduleRoute } from './doctor-schedule.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(doctorScheduleRoute)],
  declarations: [
    DoctorScheduleComponent,
    DoctorScheduleDetailComponent,
    DoctorScheduleUpdateComponent,
    DoctorScheduleDeleteDialogComponent
  ],
  entryComponents: [DoctorScheduleDeleteDialogComponent]
})
export class YikondiAppDoctorScheduleModule {}
