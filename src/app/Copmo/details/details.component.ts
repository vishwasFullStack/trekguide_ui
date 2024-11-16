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
  TrekId: string =""
  TrekName: string = '';
  Location: string = '';
  ShortTrekDetails: string = '';
  BestTimeToVisits: string = '';
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
            this.TrekId = response.trekId;
            this.TrekName = response.trekName;
            this.Location = response.location;
            this.ShortTrekDetails = response.shortTrekDetails;
            this.BestTimeToVisits = response.bestTimeToVisits;
          }         
        },
        error: error => console.log('Details not found' + error)
      } 
    );
  }
}

