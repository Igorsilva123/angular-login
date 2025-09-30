import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabecalho',
  imports: [FormsModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css'
})
export class Cabecalho {
  title = "Igor";
  valorInput ='valor Inicial' ;
  alterarCor = false;
  estiloCor = "red"
  tipoUsuario: String = "feliz"
  atualizarTitulo() {
    this.estiloCor = "blue"
    this.alterarCor = true;
    console.log(this.valorInput);
  }
}
