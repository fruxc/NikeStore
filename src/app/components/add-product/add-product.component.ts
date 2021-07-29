import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface productType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  selectedValue!: string;

  productTypes: productType[] = [
    { value: 'Men-1', viewValue: 'Men' },
    { value: 'Women-1', viewValue: 'Women' },
    { value: 'Kids-1', viewValue: 'Kids' },
  ];

  availableSizes: string[] = [
    'UK 6 (EU 40)',
    'UK 6.5',
    'UK 7',
    'UK 7.5',
    'UK 8',
    'UK 8.5',
    'UK 9',
    'UK 9.5',
    'UK 10',
    'UK 10.5',
    'UK 11',
    'UK 11.5',
    'UK 12',
    'UK 12.5',
    'UK 13',
  ];
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      availableSizes: ['', Validators.required],
      productDescription: ['', Validators.required],
      productCost: ['', Validators.required],
      productImage: ['', Validators.required],
    });
  }
  ngOnInit() {}

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        console.log(this.form.value);
      } catch (err) {
        console.error(err);
      }
    }
  }
}
