import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from '../../service/product.service';
import { single } from '../../constant/product.constant';
import * as d3 from 'd3';

import { Color, ScaleType } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-product-records',
  templateUrl: './product-records.component.html',
  styleUrls: ['./product-records.component.scss']
})
export class ProductRecordsComponent {
  customers: any;
  editProductPopup: boolean = false;
  addProductPopup: boolean = false;
  productForm!: FormGroup;
  gender: string = '';
  selectedProductedit: any;
  productInfo: any;
  SelectedId: any;
  selectedFiles: string = ''
  displayConfirmation: boolean = false;
  deleteId: any;
  productData: any
  countData: any;
  categories: { label: string, value: string }[];

    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Category';
    showYAxisLabel = true;
    yAxisLabel = 'Count';
    colorScheme: Color = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: ['#f00', '#0f0', '#0ff'],
    };
    categoryCounts :any;
    

  constructor(private fb: FormBuilder, private messageService: MessageService, private cd: ChangeDetectorRef, private service: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]  
    })
    Object.assign(this, { single })

    this.categories = [
      { label: 'Furniture', value: 'Furniture' },
      { label: 'Accessories', value: 'Accessories' },
      { label: 'Electronics', value: 'Electronics' }
    ];
  }

  onSelect(event:any) {
    console.log(event);
  }

  onSubmit() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product Updated Successfully' })
    this.productForm.reset();
    this.editProductPopup = false;
  }

  setForm(productInfo: any) {
    this.SelectedId = productInfo.id
    this.selectedProductedit = productInfo;
    this.productForm.patchValue({
      name: this.selectedProductedit.name,
      category: this.selectedProductedit.category,
      price: this.selectedProductedit.price,
    });
    this.editProductPopup = true;
  }
  editForm() {
    let formValue = this.productForm.value;
    console.log("abc",formValue)
    this.service.editProduct(formValue, this.SelectedId).subscribe((res) => {

      this.getproduct()
    })
  }
  closeDialog() {
    this.editProductPopup = false;
    this.productForm.reset()
  }
  closeDialog2() {
    this.addProductPopup = false;
    this.productForm.reset()
  }
  submitForm() {
    const productData = {
      name: this.productForm.get('name')?.value,
      category: this.productForm.get('category')?.value,
      price: this.productForm.get('price')?.value
    };
  
    this.service.addProduct(productData).subscribe(
      (res) => {
        this.addProductPopup = false;
        this.getproduct();
        this.productForm.reset();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product Created Successfully' });
      },
    );
  }
  
  addNewProduct() {
    this.addProductPopup = true
  }

  deleteConfirmation(product: any) {
    this.deleteId = product.id
    this.displayConfirmation = true;
  }
  hideConfirmation() {
    this.displayConfirmation = false;
  }
  deleteItem() {
    this.service.deleteProduct(this.deleteId).subscribe((res) => {
      this.messageService.add({ severity: 'success', summary: 'Delete', detail: 'Product Deleted Successfully' });
      this.getproduct();
    })
    this.hideConfirmation();
  }
  ngOnInit() {
    this.getproduct();

    this.getCount();
  }
  getproduct(){
    this.service.getProducts().subscribe((res) => {
    if(res && res.length){
      this.productData = res;
      this.processData();
    }
    })
  }
  getCount(){
    this.service.getCount().subscribe((res) => {
      this.countData = res
      })
  }
  processData() {
    const categoryCountsMap = this.productData.reduce((acc:any, product:any) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});
    this.categoryCounts = Object.keys(categoryCountsMap).map(key => ({
      name: key,
      value: categoryCountsMap[key]
    }));
  }

}
