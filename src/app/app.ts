import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Formulario } from "./componentes/formulario/formulario";

@Component({
  selector: 'app-root',
  imports: [Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-login');
}
