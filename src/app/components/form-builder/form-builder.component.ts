import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Field } from '../../models/filed';

@Component({
  selector: 'app-form-builder',
  standalone: false,
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent {
  public formTitle = '';
  public fields: Field[] = [];

  public constructor(private router: Router) {}

  public addField(): void {
    this.fields.push({ label: '', type: 'text' });
  }

  public deleteField(index: number): void {
    this.fields.splice(index, 1);
  }

  public saveForm(): void {
    const forms = JSON.parse(localStorage.getItem('forms') || '[]');
    forms.push({ title: this.formTitle, fields: this.fields });
    localStorage.setItem('forms', JSON.stringify(forms));
    this.router.navigate(['/forms']);
  }
}
