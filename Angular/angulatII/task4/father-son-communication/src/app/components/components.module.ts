import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { ChilderHeaderComponent } from './childer-header/childer-header.component';
import { ChildrenFooterComponent } from './children-footer/children-footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    ChilderHeaderComponent,
    ChildrenFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    HijoComponent,
    ChilderHeaderComponent,
    ChildrenFooterComponent,
  ],
})
export class ComponentsModule {}
