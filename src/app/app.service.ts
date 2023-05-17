import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:3000/posts';

  save(data:any){
   return this.http.post('http://localhost:3000/posts',data)
    

  }

  get(){
    return this.http.get('http://localhost:3000/posts')
  }

  getFakeApi(){
    return this.http.get('https://api.instantwebtools.net/v1/airlines	');
  }

  
  updateUser(id: number, user:any) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, user);
  }
}
