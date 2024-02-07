import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { FisrtLetterToUpperPipe } from '../fisrt-letter-to-upper.pipe';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule,FormsModule,FisrtLetterToUpperPipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
 title = "Hello Yair!"

 Pets = [
  {
    Name: 'Tofi',
    Age: 3,
    Gender: 'Male'
  },
  {
    Name: 'Libi',
    Age: 15,
    Gender: 'Female'
  },
  {
    Name: 'Mika',
    Age: 12,
    Gender: 'female'
  },
  {
    Name: 'Dina',
    Age: 21,
    Gender: 'Female'
  }
];

IsVisible:boolean = true;

Onchange(args:boolean)
{
  this.IsVisible = args;
}

name1:string="Nadav"
name2:string="Yair"
}

