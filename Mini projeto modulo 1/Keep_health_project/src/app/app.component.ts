// app.component.ts
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  // restante do código...
}

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule]
})
export class AppModule { }