import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { YikondiAppTestModule } from '../../../test.module';
import { DrugDosageFormDeleteDialogComponent } from 'app/entities/drug-dosage-form/drug-dosage-form-delete-dialog.component';
import { DrugDosageFormService } from 'app/entities/drug-dosage-form/drug-dosage-form.service';

describe('Component Tests', () => {
  describe('DrugDosageForm Management Delete Component', () => {
    let comp: DrugDosageFormDeleteDialogComponent;
    let fixture: ComponentFixture<DrugDosageFormDeleteDialogComponent>;
    let service: DrugDosageFormService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [YikondiAppTestModule],
        declarations: [DrugDosageFormDeleteDialogComponent]
      })
        .overrideTemplate(DrugDosageFormDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DrugDosageFormDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DrugDosageFormService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
