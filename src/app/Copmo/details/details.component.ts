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
            this.TrekId = response[0].TrekId;
            this.TrekName = response[0].TrekName;
            this.Location = response[0].Location;
            this.ShortTrekDetails = response[0].ShortTrekDetails;
            this.BestTimeToVisits = response[0].BestTimeToVisits;
          }         
        },
        error: error => console.log('Details not found' + error)
      } 
    );
  }
}

