import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductRecordsComponent } from './product/component/product-records/product-records.component';

const routes: Routes = [
  {path:'dashboard', component:ProductRecordsComponent},
  {path:'',component:ProductRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
