import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
export interface Posts {
  id: number;
  name: string;
  inputData: string;
  disable : boolean;
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // };
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  create(payload: Posts) {
    return this.http.post<Posts>('http://localhost:3000/posts', payload);

  }  
 
  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3000/posts`
    );

  // postCustomer(data:any){
  //   return this.http.post<any>(`${this.baseUrl}`, data)
  // };
  // getCustomer(){
  //   return this.http.get<any>(`${this.baseUrl}`)
  // };
  // updateCustomer(data:any , id:number){
  //   return this.http.put<any>(`${this.baseUrl}/${id}`,data)
  // };
  // deleteCustomer(id:number){
  //  return this.http.delete<any>(`${this.baseUrl}/${id}`)
  // };
}

getall(): Observable<any> {
  return this.http.get(`http://localhost:3000/posts`);
}
getProductById(id: number): Observable<any> {
  return this.http.get(`http://localhost:3000/posts/${id}`);
}

updateProduct(id: number, productData: any): Observable<any> {
  return this.http.put(`http://localhost:3000/posts/${id}`, productData);
}

deleteProduct(id:number){
  return this.http.delete(`http://localhost:3000/posts/${id}`);
}


}
