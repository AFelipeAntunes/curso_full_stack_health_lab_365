// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const alimentos = [
      {
        id: 1,
        name: "Abacate",
        description: "...",
        qttCalories: 0,
        qttDaysFeed: 3,
        imageLink: ""
      },
      // outros alimentos...
    ];

    localStorage.setItem('alimentos', JSON.stringify(alimentos));
  }
}
