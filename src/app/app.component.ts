import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { CourseComponent } from "./course/course.component";
import { ServiceTestService } from './service-test.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminComponent } from './admin/admin.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [AdminComponent,MatSlideToggleModule,RouterOutlet, CourseComponent,RouterLink,CommonModule,HttpClientModule],
    providers: [ServiceTestService],
})
export class AppComponent {
  title = 'hello-world';
  constructor(private router: Router, private service : ServiceTestService ){}

  MyInfo: any=[];
  displayMsg:string = "";
  DynamicRouter(linkName:string){
    this.router.navigate([linkName])
  }

  ngOnInit(){

    this.displayMsg = this.service.DisplayMsg();
    this.service.GetDetails().subscribe(data=>{
      this.MyInfo = data;
    })

  }
}
