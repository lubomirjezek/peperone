import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full'
  } , {
    path: ':id',
    component: RootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class GalleryRoutingModule { }
