import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  id: number = 0;
  showDetails: boolean = false;
  editForm: FormGroup = this.getInitialEditForm();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id')!;
        this.showDetails = params.get('showDetails') === 'true';
        this.editForm.controls['id'].setValue(this.id);
      }
    );
  }

  ngOnInit(): void {
    this.editForm.valueChanges.subscribe(console.log);
    this.editForm.controls['from'].valueChanges.subscribe(console.log);
  }

  getInitialEditForm(): FormGroup {
    return this.fb.group({
      id: [0],
      from: ['Graz', [
        Validators.required,
        Validators.minLength(3)
      ]],
      to: ['Hamburg', [
        Validators.required,
        Validators.minLength(3)
      ]],
      date: [new Date().toISOString()],
    });
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
