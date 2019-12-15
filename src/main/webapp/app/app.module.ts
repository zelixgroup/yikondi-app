import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { YikondiAppSharedModule } from 'app/shared/shared.module';
import { YikondiAppCoreModule } from 'app/core/core.module';
import { YikondiAppAppRoutingModule } from './app-routing.module';
import { YikondiAppHomeModule } from './home/home.module';
import { YikondiAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    YikondiAppSharedModule,
    YikondiAppCoreModule,
    YikondiAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    YikondiAppEntityModule,
    YikondiAppAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class YikondiAppAppModule {}
