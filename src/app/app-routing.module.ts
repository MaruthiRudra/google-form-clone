import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: 'forms', component: FormListComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-preview/:id', component: FormPreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
