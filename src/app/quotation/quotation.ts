import { Component } from '@angular/core';
import { QuotationData, dataList } from'../app.model'

@Component({
    selector: 'quotation',
    templateUrl: './quotation.html',
    // styleUrls: ['./home.css'] 
})
export class GetAQuote {
    quotationData: QuotationData;
    list: any;
    constructor() {
        this.quotationData = new QuotationData();
        this.list = dataList;
    }


    getEstimate(){
        //calling post API with quotationData
        debugger;
        console.log('SSSSSSSSSSSS',this.quotationData); 
    }

}