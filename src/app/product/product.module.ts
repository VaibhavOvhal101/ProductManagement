import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductRecordsComponent } from './component/product-records/product-records.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    ProductRecordsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule
  ]
})
export class ProductModule { }
