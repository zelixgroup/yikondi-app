import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { MedicalPrescriptionAnalysisComponent } from './medical-prescription-analysis.component';
import { MedicalPrescriptionAnalysisDetailComponent } from './medical-prescription-analysis-detail.component';
import { MedicalPrescriptionAnalysisUpdateComponent } from './medical-prescription-analysis-update.component';
import { MedicalPrescriptionAnalysisDeleteDialogComponent } from './medical-prescription-analysis-delete-dialog.component';
import { medicalPrescriptionAnalysisRoute } from './medical-prescription-analysis.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(medicalPrescriptionAnalysisRoute)],
  declarations: [
    MedicalPrescriptionAnalysisComponent,
    MedicalPrescriptionAnalysisDetailComponent,
    MedicalPrescriptionAnalysisUpdateComponent,
    MedicalPrescriptionAnalysisDeleteDialogComponent
  ],
  entryComponents: [MedicalPrescriptionAnalysisDeleteDialogComponent]
})
export class YikondiAppMedicalPrescriptionAnalysisModule {}
