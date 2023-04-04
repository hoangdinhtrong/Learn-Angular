import { Component } from '@angular/core';
import { CommonService } from './Services/common.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private commonService: CommonService,
    private formBuilder: FormBuilder
  ) {}

  title = 'LearnAngular';
  public name = '';

  public submitForm(): void {
    // console.log('submit form: name = ' + this.name);
    this.commonService.submitData({ name: this.name, age: 12 });
  }
//#region  Reactive Form
  public formData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });
  // public formData = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   age: ['', Validators.required],
  // });

  
  public onSubmit(): void {
    // console.log('submit form: formData = ', this.formData.value);
    this.commonService.submitData(this.formData.value);
  }
//#endregion
}
