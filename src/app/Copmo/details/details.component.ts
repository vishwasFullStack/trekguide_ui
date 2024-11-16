import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service'
import { response } from 'express';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  title: string = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }
   fetchData(): void {
    this.apiService.getData().subscribe(
      {
        next: response=>{
          console.log(response);
          if(response !== null)
          {
            this.title = response[0].trekName;
          }
          else{
            this.title = 'Details not found';
          }
         
        },
        error: error => console.log('Details not found' + error)
      } 
    );
  }
}

