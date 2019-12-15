import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { PatientAppointementComponent } from './patient-appointement.component';
import { PatientAppointementDetailComponent } from './patient-appointement-detail.component';
import { PatientAppointementUpdateComponent } from './patient-appointement-update.component';
import { PatientAppointementDeleteDialogComponent } from './patient-appointement-delete-dialog.component';
import { patientAppointementRoute } from './patient-appointement.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(patientAppointementRoute)],
  declarations: [
    PatientAppointementComponent,
    PatientAppointementDetailComponent,
    PatientAppointementUpdateComponent,
    PatientAppointementDeleteDialogComponent
  ],
  entryComponents: [PatientAppointementDeleteDialogComponent]
})
export class YikondiAppPatientAppointementModule {}
