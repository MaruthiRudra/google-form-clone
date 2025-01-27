import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field } from '../../models/filed';

@Component({
  selector: 'app-form-preview',
  standalone: false,
  
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.scss'
})
export class FormPreviewComponent {
  public fields: Field[] = [];

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    const forms = JSON.parse(localStorage.getItem('forms') || '[]');

    if (index !== null) {
      const formIndex = parseInt(index, 10); // Safely convert to number
      if (!isNaN(formIndex) && forms[formIndex]) {
        this.fields = forms[formIndex].fields;
      } else {
        alert('Form not found for the given index.');
        // Optionally, you could navigate back or display an error message
      }
    } else {
      alert('No form ID provided in the route.');
      // Optionally, you could navigate back or display an error message
    }
  }
  public submitResponse(): void {
    alert('Form submitted!');
  }
}
