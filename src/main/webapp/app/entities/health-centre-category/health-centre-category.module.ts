import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { HealthCentreCategoryComponent } from './health-centre-category.component';
import { HealthCentreCategoryDetailComponent } from './health-centre-category-detail.component';
import { HealthCentreCategoryUpdateComponent } from './health-centre-category-update.component';
import { HealthCentreCategoryDeleteDialogComponent } from './health-centre-category-delete-dialog.component';
import { healthCentreCategoryRoute } from './health-centre-category.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(healthCentreCategoryRoute)],
  declarations: [
    HealthCentreCategoryComponent,
    HealthCentreCategoryDetailComponent,
    HealthCentreCategoryUpdateComponent,
    HealthCentreCategoryDeleteDialogComponent
  ],
  entryComponents: [HealthCentreCategoryDeleteDialogComponent]
})
export class YikondiAppHealthCentreCategoryModule {}
