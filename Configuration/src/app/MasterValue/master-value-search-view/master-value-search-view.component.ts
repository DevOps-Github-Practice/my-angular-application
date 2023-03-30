import { Component, OnInit } from '@angular/core';
import { HttpService,  } from 'src/app/service/http.service';
import { HttpClient,  } from '@angular/common/http';
export interface Posts {
  id: number;
  name: string;
  values:string;

}

@Component({
  selector: 'app-master-value-search-view',
  templateUrl: './master-value-search-view.component.html',
  styleUrls: ['./master-value-search-view.component.css']
})
export class MasterValueSearchViewComponent implements OnInit {
  // postvaiue :Posts[] =[]
  dataSaved = true;
  showinputfield=false;
   inputvalue='';
  //  postsForm: Posts = {
  //    id: 0,
  //    name: '',
  //    values: '',
  //  };
   searchQuery: any;
   posts: any[] = [];
   filteredItems: any[] = [];
  //  items:any[] =[
  //   {
  //     "id": 1,
  //     "name": "Gedala Sai Prasad",
  //     "values": "sai"
  //   },
  //   {
  //     "id": 2,
  //     "name": "",
  //     "values": ""
  //   },
  //   {
  //     "id": 3,
  //     "name": "master",
  //     "values": "mass"
  //   },
  //   {
  //     "id": 4,
  //     "name": " master1",
  //     "values": ""
  //   },
  //   {
  //     "id": 5,
  //     "name": " master1",
  //     "values": "mass"
  //   },
  //   {
  //     "id": 6,
  //     "name": "test123",
  //     "values": "test"
  //   },
  //   {
  //     "id": 7,
  //     "name": "test12345",
  //     "values": "test"
  //   },
  //   {
  //     "id": 8,
  //     "name": "test90",
  //     "values": "test1"
  //   },
  //   {
  //     "id": 9,
  //     "name": "test345",
  //     "values": "test3"
  //   },
  //   {
  //     "id": 10,
  //     "name": null,
  //     "values": "wrwe"
  //   },
  //   {
  //     "id": 11,
  //     "name": null,
  //     "values": "wrwe"
  //   },
  //   {
  //     "id": 12,
  //     "name": "Gedala Sai Prasad",
  //     "values": "test"
  //   },
  //   {
  //     "id": 13,
  //     "name": "sai123",
  //     "values": "sai"
  //   },
  //   {
  //     "id": 14,
  //     "name": "qwq",
  //     "values": "sdsa"
  //   },
  //   {
  //     "id": 15,
  //     "name": "sai123",
  //     "values": "sai"
  //   }
  // ];
   constructor(private http:HttpService , private client :HttpClient){}
  ngOnInit() {
    // this.http.getData().subscribe((data:any) => {
    //   this.items = data;
    //   this.filteredItems = this.items;
    // });
  }
  search() { 
    this.http.searchProducts(this.searchQuery).subscribe((data) => {
      this.posts = data.filter(
        (post) => post.name?.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1

      );
    });
  


    // if (this.searchQuery) {
    //   this.filteredItems = this.posts.filter((item) =>
    //     item.values.toLowerCase().includes(this.searchQuery.toLowerCase())
    //   );
    // } else {
    //   this.filteredItems = [];
    // }
    // console.log(this.filteredItems)
  }

//   search(){
// this.showinputfield = true;
// this.http.getData().subscribe((data)=>{
//   console.log(data);
// })
  }
  

