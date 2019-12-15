import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { LifeConstantUnitComponent } from './life-constant-unit.component';
import { LifeConstantUnitDetailComponent } from './life-constant-unit-detail.component';
import { LifeConstantUnitUpdateComponent } from './life-constant-unit-update.component';
import { LifeConstantUnitDeleteDialogComponent } from './life-constant-unit-delete-dialog.component';
import { lifeConstantUnitRoute } from './life-constant-unit.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(lifeConstantUnitRoute)],
  declarations: [
    LifeConstantUnitComponent,
    LifeConstantUnitDetailComponent,
    LifeConstantUnitUpdateComponent,
    LifeConstantUnitDeleteDialogComponent
  ],
  entryComponents: [LifeConstantUnitDeleteDialogComponent]
})
export class YikondiAppLifeConstantUnitModule {}
