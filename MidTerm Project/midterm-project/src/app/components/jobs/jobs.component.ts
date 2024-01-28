import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../../services/job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

  jobList: any = [];
  constructor(private jobService: JobServiceService) {}
  ngOnInit(): void {
    
    this.jobService.getAllJobs().subscribe(jobs => {
      this.jobList = jobs;
    })
  }

}
