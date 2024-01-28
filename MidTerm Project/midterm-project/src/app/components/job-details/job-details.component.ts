import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../../services/job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
  currentJobId: number = 0;
  currentJobTitle: string = '';
  currentJobDesc: string = '';
  currentJobDur: string= '';
  currentJobEmpl: string = '';

  



  constructor(private jobService: JobServiceService, private actRoute:ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.actRoute.snapshot);
    this.currentJobId = parseInt(this.actRoute.snapshot.paramMap.get("jobId")?? "")
    this.jobService.getJob(this.currentJobId).subscribe(j => {
      this.currentJobTitle = j.title;
      this.currentJobDesc = j.description;
      this.currentJobEmpl = j.employer;
      this.currentJobDur = j.duration;
    })

    
  }
}
