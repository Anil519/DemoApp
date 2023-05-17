import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  implements OnInit{

  data:any=[]
  displayedColumns: string[] = ['id', 'name', 'country', 'established'];
  dataSource:any;
  recordlength:any;

  pageSize = 15;
  pageNumber = 1;
  totalRecords = 0;
  constructor(private service:AppService){

  }
  ngOnInit(): void {
    this.getfakedata()
  }
  getfakedata(){
    this.service.getFakeApi().subscribe((res)=>{
      this.data=res
      this.dataSource=res
      this.recordlength=this.data.length
    })
  }

  pageSizeChanged(page:any) {
    if (page.pageIndex <= 4) {
      this.pageNumber = page.pageIndex + 1;
      this.pageSize = page.pageSize;    
    } 
  }

}
