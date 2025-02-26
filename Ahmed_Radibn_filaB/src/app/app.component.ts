import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuartoComponent } from './quarto/quarto.component';
import { TerzoComponent } from './terzo/terzo.component';
import { SecondoComponent } from './secondo/secondo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuartoComponent, TerzoComponent, SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ahmed_Radibn_filaB';
}
