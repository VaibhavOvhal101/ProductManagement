import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
  
  editProduct(payload: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, payload);
  }
  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/products/${id}`);
  }
  addProduct(payload: any): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, payload);
  }

  
  getCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/counts`);
  }

}