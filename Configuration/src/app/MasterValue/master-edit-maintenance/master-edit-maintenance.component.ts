import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
export interface Posts {
  id: number;
  name: string;
  inputData:string;
  disable :boolean;
}
@Component({
  selector: 'app-master-edit-maintenance',
  templateUrl: './master-edit-maintenance.component.html',
  styleUrls: ['./master-edit-maintenance.component.css']
})
export class MasterEditMaintenanceComponent {
  constructor( private http:HttpService, 
       private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private router: Router,
       ) {
  }
  dataSaved = true;

  inputData: string[] = [];
  postvaiue :Posts[] =[]
  // postsForm: Posts = {
  //   id: 0,
  //   name: '',
  //   values:'',
  // };
 postId:string ='';
//  postsForm = new FormGroup({
//   name: new FormControl(''),
//   values: new FormControl('')
//  })
editForm!: FormGroup;
id!: number;

postsForm!:FormGroup;
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      inputData: ['', Validators.required],
      disable: ['', Validators.required]

    });

    this.id = this.activatedRoute.snapshot.params['id'];

    this.http.getProductById(this.id)
      .subscribe(data => {
        this.editForm.setValue({
          name: data.name,
          inputData: data.inputData,
          disable: data.disable

        });
      });

    // console.log(this.activatedRoute.snapshot.params['id']);
    //  this.http.getProductById(this.activatedRoute.snapshot.params['id']).subscribe((results:any)=>{
    //   this.postsForm.patchValue(results);

      // this.postsForm = new FormGroup({
      //   name: new FormControl(results['name']),
      //   values: new FormControl(results['values'])
      //  })
     //})
  }
 
  onUpdate(){
    this.http.updateProduct(this.id, this.editForm.value)
      .subscribe(data => {
        console.log(data);
        alert("Data Update Successfull");
      });
      //this.router.navigate(['/master-value-maintenance', this.id]);

      this.editForm.reset();
  
     this.dataSaved = false;
     this.router.navigate(['master-value-maintenance']);
  }
  // onSave(mainform: NgForm){
  //   this.http.create(this.postsForm)
  //   .subscribe({
  //     next:(data) => {
  //       console.log(data);
  //       alert("successfully added");

  //     },
  //     error:(err) => {
  //       console.log(err);
  //     }
  //   })
  //   mainform.reset();
  // }

  //onSave(){
    // this.http.create(this.productForm.value).subscribe(res =>{
    // console.log(res);
    // })
  //}
  addNewrow() {
    this.inputData.push('');

  }
  deleteProduct() {
    console.log()
    this.http.deleteProduct(this.id).subscribe(()=>{
      // this.editForm = this.editForm.filter((input: { id: number; }) => input.id!==id);
      console.log(`Product with ID ${this.id} deleted`);
      alert("Data Deleted Successfull");

      this.editForm.reset();
      this.dataSaved = false;

    })
    // if (confirm("do you want to delete")) {
    //   this.inputData.splice(index, 1)
    // }
  }
  

}
