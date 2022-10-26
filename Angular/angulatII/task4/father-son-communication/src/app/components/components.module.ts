import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { ChilderHeaderComponent } from './childer-header/childer-header.component';
import { ChildrenFooterComponent } from './children-footer/children-footer.component';
import { FooterComponent } from './footer/footer.component';

import { ImpuroPipe } from '../pipes/impuro/impuro.pipe';
import { PuroPipe } from '../pipes/puros/puro.pipe';
@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    ChilderHeaderComponent,
    ChildrenFooterComponent,
    FooterComponent,
    PuroPipe,
    ImpuroPipe,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    HijoComponent,
    ChilderHeaderComponent,
    ChildrenFooterComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
