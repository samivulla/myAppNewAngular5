import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyserviceService } from './myservice.service';
import { ITests, People } from './test';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public testArry: any = [];
  public test2Arry: any = [];
  private person: any = [];
  public opts: any = [];
  public obj: {};
  public personn: {};
  public notificationsFeaturesBeans: any = [];

  public modules = ['Admin', 'Registration', 'Emr'];
  private formChangesSubscription: Subscription;


  UserForm: FormGroup
  constructor(private _service: MyserviceService, private fb: FormBuilder) {
  }

  private initForm() {
    this.UserForm = this.fb.group({
      notificationSubject: this.fb.control('', Validators.required),
      applicationVersion: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      modId: this.fb.control('', Validators.required),
      featureDescription: this.fb.control('', Validators.required)
    });


  }

  setUpFormValueChanges() {
    this.formChangesSubscription = this.UserForm.valueChanges.subscribe((data) => {
    });
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

  ngOnInit() {

    this.initForm();

    this.setUpFormValueChanges();


   this.opts = [
      {value: 111, text: 'Admin' },
      {value: 222, text: 'Registration' }
  ]; 
    this._service.getData()
      .subscribe(data => {
        this.testArry = data
        console.log(this.testArry);
      });

    this._service.getAllData()
      .subscribe(data => {
        this.test2Arry = data
        console.log(this.test2Arry);
      });

    this._service.getReverseData()
      .subscribe(data => {
        this.person = data
        console.log(this.person);
      });
  }


  reUseMethod() {
    let formObjct = this.UserForm.value;
    this.obj = {
      modId: formObjct.modId,
      featureDescription: formObjct.featureDescription
    };
    return this.obj;
  }

  /**
   * descritption add multuple description
   * 
   */
  addDescription() {
    let getData = this.reUseMethod();
    this.notificationsFeaturesBeans.push(getData);
    this.UserForm.get('featureDescription').setValue("");
  }

  submit() {
    let getData = this.reUseMethod();
    this.notificationsFeaturesBeans.push(getData);
    let payload = {
      notificationSubject: this.UserForm.value.notificationSubject,
      applicationVersion: this.UserForm.value.applicationVersion,
      description: this.UserForm.value.description,
      notificationsFeaturesBeans: this.notificationsFeaturesBeans,
      createdUsrId: 220171231000002,
    }
    this._service
      .getWhatsNewData(payload)
      .subscribe(data => {
        this.personn = data
        console.log(this.personn);
      });
    console.log(payload);
    this.UserForm.reset();
    this.notificationsFeaturesBeans = [];
  }

}
