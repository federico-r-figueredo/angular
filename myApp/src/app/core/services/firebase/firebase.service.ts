import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      username: '',
      password: ''
    });
  }


  patientList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  getPatients(){
    this.patientList = this.db.list('/patients');
    return this.patientList.snapshotChanges();
  };

  addPatient(newPatient){
    var filteredPatient = JSON.parse(JSON.stringify(newPatient)); //removes undefined fields
    return this.patientList.push({
      username: filteredPatient.name,
      password: filteredPatient.gender
    });
  }

  updatePatient(updatedPatient) {
    this.patientList.update(updatedPatient.$key,{
      username: updatedPatient.name,
      password: updatedPatient.gender
    });
  }

  deletePatient(key) {
    this.patientList.remove(key);
  }

}
