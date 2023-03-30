import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
export interface Posts {
  id: number;
  name: string;
  inputData: string;
  disable: boolean;
}
@Component({
  selector: 'app-master-value-maintenance',
  templateUrl: './master-value-maintenance.component.html',
  styleUrls: ['./master-value-maintenance.component.css']
})
export class MasterValueMaintenanceComponent implements OnInit {
  name: any;
  constructor(private toastr: ToastrService, private http: HttpService,
    public router: Router, private activatedRoute: ActivatedRoute, public fb: FormBuilder,) {
  }
  saveButtonClicked = false;
  dataSaved = true;
  inputvalue: string[] = [];
  postvaiue: Posts[] = []
  postsForm: Posts = {
    id: 0,
    name: '',
    inputData: '',
    disable: false,
  };
  inputData = [
    {
      key1: ''
    }
  ];



  ngOnInit() {

  }

  onSave(mainform: NgForm) {
    // this.saveButtonClicked = true;
    this.http.create(this.postsForm)
      .subscribe({
        next: (data) => {
          console.log(data);

          alert("successfully added");

        },
        error: (err) => {
          console.log(err);

        }
      })
    mainform.reset();
    this.dataSaved = false;

  }

  //onSave(){
  // this.http.create(this.productForm.value).subscribe(res =>{
  // console.log(res);
  // })
  //}
  addNewrow() {
    this.inputvalue.push('');
    // this.inputData1.push({
    //   key1:''
    // })
    //  this.http.create(this.postsForm)
    //  .subscribe(() => {
    //   this.inputData.push({ key1: '' });
    //   console.log({key1: ''})
    //     });


    // const data = {
    //   key1: ''
    // };
    // this.http.create(this.inputData1)
    //   .subscribe(() => {
    //     this.inputData1.push(this.inputData1);
    //   });

  }
  delete(index: any) {
    if (confirm("do you want to delete")) {
      this.inputvalue.splice(index, 1)
    }
  }
  reset(mainform: NgForm) {
    this.router.navigate(['master-value-maintenance']);
    mainform.reset();
  }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.mainform.controls;
  // }
}
