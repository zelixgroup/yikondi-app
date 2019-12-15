import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { PatientInsuranceCoverageComponent } from './patient-insurance-coverage.component';
import { PatientInsuranceCoverageDetailComponent } from './patient-insurance-coverage-detail.component';
import { PatientInsuranceCoverageUpdateComponent } from './patient-insurance-coverage-update.component';
import { PatientInsuranceCoverageDeleteDialogComponent } from './patient-insurance-coverage-delete-dialog.component';
import { patientInsuranceCoverageRoute } from './patient-insurance-coverage.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(patientInsuranceCoverageRoute)],
  declarations: [
    PatientInsuranceCoverageComponent,
    PatientInsuranceCoverageDetailComponent,
    PatientInsuranceCoverageUpdateComponent,
    PatientInsuranceCoverageDeleteDialogComponent
  ],
  entryComponents: [PatientInsuranceCoverageDeleteDialogComponent]
})
export class YikondiAppPatientInsuranceCoverageModule {}
