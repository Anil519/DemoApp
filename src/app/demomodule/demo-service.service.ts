import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  payload:any

  constructor(private http:HttpClient) { }

 
}
