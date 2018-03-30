import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar,MatTableDataSource,MatDialog} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
