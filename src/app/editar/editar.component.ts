import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<EditarComponent>,
              @Inject(MAT_DIALOG_DATA) private data,
              private http:HttpClient,
              public snackBar: MatSnackBar) { }
  indicador:any;
  myform: FormGroup;
  ngOnInit() {
      this.indicador = this.data.indicador;
      this.myform = new FormGroup({
          dataIntegracao: new FormControl(),
          dataUltAlteracao: new FormControl(),
          formulaCalculo: new FormControl(),
          idDrgIntegracao: new FormControl(),
          identDirecaoSeta: new FormControl(),
          identPeriodicidade: new FormControl(),
          identReferencial: new FormControl(),
          informacoesAdicionais: new FormControl(),
          nome: new FormControl(),
          numDecimais: new FormControl(),
          objetivo: new FormControl(),
          unidade: new FormControl(),
          usuarioUltAlteracao: new FormControl(),
          versao: new FormControl(),
      });
      this.myform.setValue({
          dataIntegracao: this.indicador.dataIntegracao,
          dataUltAlteracao: this.indicador.dataUltAlteracao,
          formulaCalculo: this.indicador.formulaCalculo,
          idDrgIntegracao: this.indicador.idDrgIntegracao,
          identDirecaoSeta: this.indicador.identDirecaoSeta,
          identPeriodicidade: this.indicador.identPeriodicidade,
          identReferencial: this.indicador.identReferencial,
          informacoesAdicionais: this.indicador.informacoesAdicionais,
          nome: this.indicador.nome,
          numDecimais: this.indicador.numDecimais,
          objetivo: this.indicador.objetivo,
          unidade: this.indicador.unidade,
          usuarioUltAlteracao: this.indicador.usuarioUltAlteracao,
          versao: this.indicador.versao,
      });
  }

  salvarRegistro(dados)
  {
    let url = `http://localhost:8000/api/indicador/save`;
    dados.id = this.indicador.id;
    this.http.post(url, dados).subscribe(
        data => {
          console.log(data);
          this.snackBar.open("Dados salvos!", "Fechar", {
            duration: 2000,
            extraClasses: ['.success-message']
          });
        },
        err => {
          this.snackBar.open("Dados não salvos!", "Fechar",{
            duration: 2000,
            extraClasses: ['.error-message']
          });
          console.log(err);
        }
    );
  }

}
