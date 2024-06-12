import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    ToastModule,
    FileUploadModule
    
    
  ],
  exports:[
    CommonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    ToastModule,
    FileUploadModule
    



  ]
})
export class PrimengModule { }
