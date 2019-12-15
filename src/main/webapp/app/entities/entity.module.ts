import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'holiday',
        loadChildren: () => import('./holiday/holiday.module').then(m => m.YikondiAppHolidayModule)
      },
      {
        path: 'emergency-ambulance',
        loadChildren: () => import('./emergency-ambulance/emergency-ambulance.module').then(m => m.YikondiAppEmergencyAmbulanceModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.YikondiAppCountryModule)
      },
      {
        path: 'city',
        loadChildren: () => import('./city/city.module').then(m => m.YikondiAppCityModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.YikondiAppAddressModule)
      },
      {
        path: 'health-centre-category',
        loadChildren: () =>
          import('./health-centre-category/health-centre-category.module').then(m => m.YikondiAppHealthCentreCategoryModule)
      },
      {
        path: 'health-centre',
        loadChildren: () => import('./health-centre/health-centre.module').then(m => m.YikondiAppHealthCentreModule)
      },
      {
        path: 'pharmacy',
        loadChildren: () => import('./pharmacy/pharmacy.module').then(m => m.YikondiAppPharmacyModule)
      },
      {
        path: 'pharmacy-all-night-planning',
        loadChildren: () =>
          import('./pharmacy-all-night-planning/pharmacy-all-night-planning.module').then(m => m.YikondiAppPharmacyAllNightPlanningModule)
      },
      {
        path: 'speciality',
        loadChildren: () => import('./speciality/speciality.module').then(m => m.YikondiAppSpecialityModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./doctor/doctor.module').then(m => m.YikondiAppDoctorModule)
      },
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.YikondiAppPatientModule)
      },
      {
        path: 'health-centre-doctor',
        loadChildren: () => import('./health-centre-doctor/health-centre-doctor.module').then(m => m.YikondiAppHealthCentreDoctorModule)
      },
      {
        path: 'doctor-schedule',
        loadChildren: () => import('./doctor-schedule/doctor-schedule.module').then(m => m.YikondiAppDoctorScheduleModule)
      },
      {
        path: 'doctor-working-slot',
        loadChildren: () => import('./doctor-working-slot/doctor-working-slot.module').then(m => m.YikondiAppDoctorWorkingSlotModule)
      },
      {
        path: 'patient-appointement',
        loadChildren: () => import('./patient-appointement/patient-appointement.module').then(m => m.YikondiAppPatientAppointementModule)
      },
      {
        path: 'patient-favorite-pharmacy',
        loadChildren: () =>
          import('./patient-favorite-pharmacy/patient-favorite-pharmacy.module').then(m => m.YikondiAppPatientFavoritePharmacyModule)
      },
      {
        path: 'patient-favorite-doctor',
        loadChildren: () =>
          import('./patient-favorite-doctor/patient-favorite-doctor.module').then(m => m.YikondiAppPatientFavoriteDoctorModule)
      },
      {
        path: 'life-constant-unit',
        loadChildren: () => import('./life-constant-unit/life-constant-unit.module').then(m => m.YikondiAppLifeConstantUnitModule)
      },
      {
        path: 'life-constant',
        loadChildren: () => import('./life-constant/life-constant.module').then(m => m.YikondiAppLifeConstantModule)
      },
      {
        path: 'patient-life-constant',
        loadChildren: () => import('./patient-life-constant/patient-life-constant.module').then(m => m.YikondiAppPatientLifeConstantModule)
      },
      {
        path: 'insurance-type',
        loadChildren: () => import('./insurance-type/insurance-type.module').then(m => m.YikondiAppInsuranceTypeModule)
      },
      {
        path: 'insurance',
        loadChildren: () => import('./insurance/insurance.module').then(m => m.YikondiAppInsuranceModule)
      },
      {
        path: 'patient-insurance-coverage',
        loadChildren: () =>
          import('./patient-insurance-coverage/patient-insurance-coverage.module').then(m => m.YikondiAppPatientInsuranceCoverageModule)
      },
      {
        path: 'allergy',
        loadChildren: () => import('./allergy/allergy.module').then(m => m.YikondiAppAllergyModule)
      },
      {
        path: 'patient-allergy',
        loadChildren: () => import('./patient-allergy/patient-allergy.module').then(m => m.YikondiAppPatientAllergyModule)
      },
      {
        path: 'pathology',
        loadChildren: () => import('./pathology/pathology.module').then(m => m.YikondiAppPathologyModule)
      },
      {
        path: 'patient-pathology',
        loadChildren: () => import('./patient-pathology/patient-pathology.module').then(m => m.YikondiAppPatientPathologyModule)
      },
      {
        path: 'patient-emergency-number',
        loadChildren: () =>
          import('./patient-emergency-number/patient-emergency-number.module').then(m => m.YikondiAppPatientEmergencyNumberModule)
      },
      {
        path: 'medical-record-authorization',
        loadChildren: () =>
          import('./medical-record-authorization/medical-record-authorization.module').then(
            m => m.YikondiAppMedicalRecordAuthorizationModule
          )
      },
      {
        path: 'drug-administration-route',
        loadChildren: () =>
          import('./drug-administration-route/drug-administration-route.module').then(m => m.YikondiAppDrugAdministrationRouteModule)
      },
      {
        path: 'drug-dosage-form',
        loadChildren: () => import('./drug-dosage-form/drug-dosage-form.module').then(m => m.YikondiAppDrugDosageFormModule)
      },
      {
        path: 'drug',
        loadChildren: () => import('./drug/drug.module').then(m => m.YikondiAppDrugModule)
      },
      {
        path: 'analysis',
        loadChildren: () => import('./analysis/analysis.module').then(m => m.YikondiAppAnalysisModule)
      },
      {
        path: 'medical-prescription',
        loadChildren: () => import('./medical-prescription/medical-prescription.module').then(m => m.YikondiAppMedicalPrescriptionModule)
      },
      {
        path: 'medical-prescription-drug',
        loadChildren: () =>
          import('./medical-prescription-drug/medical-prescription-drug.module').then(m => m.YikondiAppMedicalPrescriptionDrugModule)
      },
      {
        path: 'medical-prescription-analysis',
        loadChildren: () =>
          import('./medical-prescription-analysis/medical-prescription-analysis.module').then(
            m => m.YikondiAppMedicalPrescriptionAnalysisModule
          )
      },
      {
        path: 'doctor-assistant',
        loadChildren: () => import('./doctor-assistant/doctor-assistant.module').then(m => m.YikondiAppDoctorAssistantModule)
      },
      {
        path: 'family-relationship',
        loadChildren: () => import('./family-relationship/family-relationship.module').then(m => m.YikondiAppFamilyRelationshipModule)
      },
      {
        path: 'family-member',
        loadChildren: () => import('./family-member/family-member.module').then(m => m.YikondiAppFamilyMemberModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class YikondiAppEntityModule {}
