import { NgModule } from '@angular/core';
import { IonicPageModule } from '../../../../../..';

import { RootPage } from './root-page';

@NgModule({
  declarations: [
    RootPage,
  ],
  imports: [
    IonicPageModule.forChild(RootPage)
  ],
  entryComponents: [
    RootPage,
  ]
})
export class RootPageModule {}
