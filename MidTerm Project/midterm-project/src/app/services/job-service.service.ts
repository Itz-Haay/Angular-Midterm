import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  listOfJobs: any[] = [
    {
      id: 1,
      title: "Package Handler",
      description: "I unloaded tractor trailers",
      duration: "5 years",
      employer: "United Parcel Service"
    },
    {
      id: 2,
      title: "UPS Delivery Driver",
      description: "I Delivered packages",
      duration: "2 years",
      employer: "United Parcel Service"
    },
    {
      id: 3,
      title: "Route Sales Representative",
      description: "Sold and Delivered Product to Residences",
      duration: "1 year",
      employer: "Schwans Home Delivery"
    }
  ]

  constructor() { }

  getAllJobs(): Observable<any>{
    return of(this.listOfJobs);
  }

  getJob(jobID: number): Observable<any>{
    let foundJob = this.listOfJobs.find(job => job.id === jobID)
    return of(foundJob)
  }
}
