import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../myservice.service';
import { ITests, People } from '../test';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css']
})
export class WhatsNewComponent implements OnInit {
  public testArry: any = [];
  public test2Arry: any = [];
  public person: any = [];
  public opts: any = [];
  public obj: {};
  public personn: {};
  public notificationsFeaturesBeans: any = [];

  public modules = [];
  public formChangesSubscription: Subscription;


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
  let payload = {
    "orgId":2253,
    "orgGroupId":1763,
    "authenticatedUserId":120171220000021
  }
    this._service.getModulesNames(payload)
      .subscribe(data => {
        this.modules = data
        console.log(this.opts);
      });

    // this._service.getAllData()
    //   .subscribe(data => {
    //     this.test2Arry = data
    //     console.log(this.test2Arry);
    //   });

    // this._service.getReverseData()
    //   .subscribe(data => {
    //     this.person = data
    //     console.log(this.person);
    //   });
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
        this.personn = data;
      });
    this.UserForm.reset();
    this.notificationsFeaturesBeans = [];
  }

}
