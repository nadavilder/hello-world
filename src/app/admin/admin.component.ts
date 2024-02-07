import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { ServiceTestService } from '../service-test.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,MatFormFieldModule,MatInputModule,RouterOutlet,RouterLink,CommonModule,HttpClientModule,MatAutocompleteModule],
  providers: [ServiceTestService],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router, private service : ServiceTestService ){}

  MyInfo: any=[];
  options: string[] = ['One', 'Two', 'Three'];
  
  ngOnInit(){

    this.service.GetDetails().subscribe(data=>{
      this.MyInfo = data;
    })

  }
}
