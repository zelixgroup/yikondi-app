import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { FamilyRelationshipComponent } from './family-relationship.component';
import { FamilyRelationshipDetailComponent } from './family-relationship-detail.component';
import { FamilyRelationshipUpdateComponent } from './family-relationship-update.component';
import { FamilyRelationshipDeleteDialogComponent } from './family-relationship-delete-dialog.component';
import { familyRelationshipRoute } from './family-relationship.route';

@NgModule({
  imports: [YikondiAppSharedModule, RouterModule.forChild(familyRelationshipRoute)],
  declarations: [
    FamilyRelationshipComponent,
    FamilyRelationshipDetailComponent,
    FamilyRelationshipUpdateComponent,
    FamilyRelationshipDeleteDialogComponent
  ],
  entryComponents: [FamilyRelationshipDeleteDialogComponent]
})
export class YikondiAppFamilyRelationshipModule {}
