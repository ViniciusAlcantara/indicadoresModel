import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar,MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  constructor(private http:HttpClient,
              private ref: ChangeDetectorRef,
              //protected localStorage: AsyncLocalStorage,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {}
  myform: FormGroup;
  indicadores: any;
  elements: any;
  ngOnInit() {
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
    this.retornaIndicadores();
  }

  salvarRegistro(dados)
  {
    let url = `http://localhost:8000/api/indicador/save`;
    this.http.post(url, dados).subscribe(
        data => {
          console.log(data);
          this.snackBar.open("Dados salvos!", "Fechar", {
            duration: 2000,
            extraClasses: ['.success-message']
          });
          this.retornaIndicadores();
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

  excluir(id)
  {
    let url = "http://localhost:8000/api/indicador/delete/"+id;
    this.http.get(url).subscribe(
        data => {
          console.log(data);
          this.snackBar.open("Indicador excluído!", "Fechar", {
            duration: 2000,
            extraClasses: ['.success-message']
          });
          this.retornaIndicadores();
        },
        err => {
          this.snackBar.open("Indicador não excluído!", "Fechar",{
            duration: 2000,
            extraClasses: ['.error-message']
          });
          console.log(err);
        }
    );
  }

  retornaIndicadores()
  {
    let url = `http://localhost:8000/api/indicadores/all`;
    this.http.get(url).subscribe(
        data => {
          this.indicadores = data;
          this.elements = this.indicadores.indicadores;
          //this.dataSource = new MatTableDataSource(this.elements);
          console.log(this.elements);
        },
        err => {
          console.log(err);
        }
    );
  }

  visualizar(indicador){
    console.log(indicador);
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '70%',
      data: {
        indicador: indicador
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.retornarPacientesCompartilhados(this.medico.id_medico);
    });
  }
  editar(indicador){
    console.log(indicador);
    let dialogRef = this.dialog.open(EditarComponent, {
      width: '70%',
      data: {
        indicador: indicador
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      //this.retornarPacientesCompartilhados(this.medico.id_medico);
    });
  }
}
