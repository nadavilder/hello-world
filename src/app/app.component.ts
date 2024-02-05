import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from "./course/course.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CourseComponent]
})
export class AppComponent {
  title = 'hello-world';
}
