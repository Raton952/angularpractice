import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit  {
    constructor(private authService: AuthorsService){}

    ngOnInit(): void {
      this.authService.getAuthors().subscribe(data =>{
        console.log(data);
        
      })
    }
}
