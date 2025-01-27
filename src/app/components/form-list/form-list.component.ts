import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  standalone: false,
  
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss'
})
export class FormListComponent {
  forms = JSON.parse(localStorage.getItem('forms') || '[]');

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewForm(index: number): void {
    this.router.navigate(['/form-preview', index]);
  }
}
