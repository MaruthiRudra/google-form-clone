import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormListComponent,
    FormBuilderComponent,
    FormPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
