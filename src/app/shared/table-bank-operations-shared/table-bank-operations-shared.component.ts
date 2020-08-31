import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BankOperationsInterface } from 'src/app/Models/BankOperations';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import * as XLSX from "xlsx";
// import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';
import { Router } from '@angular/router';

// import { PdfMakeWrapper } from 'pdfmake-wrapper';
// import pdfFots from 'pdfmake/build/vfs_fonts'; // fonts provided for pdfmake

interface jsPDFWithPlugin extends jsPDF{
  autoTable :(opcions: UserOptions) => jsPDF;
}


@Component({
  selector: 'app-table-bank-operations-shared',
  templateUrl: './table-bank-operations-shared.component.html',
  styleUrls: ['./table-bank-operations-shared.component.css']
})
export class TableBankOperationsSharedComponent implements OnInit {

  @Input() BankOperationsUser: BankOperationsInterface[];
  dataSource = new MatTableDataSource(this.BankOperationsUser);
  displayedColumns: string[] = ['n_account','concept','type','quantity','balance','date_operation'];
  fileName = "BankOperations.xlsx";
  @ViewChild('htmlData') htmlData:ElementRef;

  constructor(
    private router: Router
    ) { }

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 

  


  ngOnInit(): void {
    console.log(this.BankOperationsUser);
    this.dataSource.data = this.BankOperationsUser;
    this.dataSource.paginator = this.paginator;
  }

  exportexcel(): void {
    let element = document.getElementById("htmlData");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    console.log(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }
  goBack(): void {
    this.router.navigate(["/home"])
  }
  
  exportpdf():void {


    const doc = new jsPDF('p','pt','a2') as jsPDFWithPlugin;
    console.log(this.BankOperationsUser);
    console.log( this.dataSource.data);
    (doc as any).autoTable({

      html:'#htmlData',
      // styles: {
      //   font: 'Amiri',
      //   fontStyle: 'normal',
      // }

      
      startY: 20,
                    margin: { horizontal: 7 },
                    styles: { 
                      columnWidth: 'wrap',
                       font: 'Amiri',
                      fontStyle: 'normal' ,
                  },
                    columnStyles: {
                        text: { columnWidth: 'auto' },
                        nil: { halign: 'right' },
                        tgl: { halign: 'right' }
                    },
                    headerStyles: { halign: 'center' },
                    theme: 'grid'
                    







      
      // head:[['id','n_account','concept','type','quantity','balance','date_operation']],
      // body:[] ,
      // theme: 'plain',
      // didDrawCell: data => {
      //   console.log(data.column.index)
      // }
      
    })

    doc.save("BankOperations.pdf");





    // var pdf = this.htmlData.nativeElement.innerHTML;
    // const doc = new jsPDF('p', 'pt', 'letter');

    // const margins = {
    //   top: 80,
    //   bottom: 60,
    //   left: 40,
    //   width: 522
    // };

    // doc.html(pdf, {
    //   callback: function(doc) {
    //     doc.save("Test1.pdf");
    //   }
    // })

    // // or
    
    // doc.fromHTML(pdf, margins.left, margins.top, {}, function () {

    //   doc.save("Test2.pdf");
    // }, margins);
  







//     console.log(this.htmlData);

//     const DATA = this.htmlData.nativeElement;
//     const doc = new jsPDF('p','pt', 'a4');
// console.log()

//     console.log(DATA);
//     console.log(doc);
//     const handleElement = {
//       '#editor':function(element,renderer){
//         return true;
//       }
//     };
//     doc.fromHTML(DATA.innerHTML,15,15,{
//       'width': 200,
//       'elementHandlers': handleElement
//     });

//     doc.save('angular-demo.pdf');


    // console.log(jsPDF);


    // var doc = new jsPDF;
    // doc.text('Hello world!',20, 20 );
    // doc.text('This is client-side Javascript, pumping out a PDF.',20, 30, );
    // doc.addPage();
    // doc.text('Do you like that?',20, 20, );

    // // Save the PDF
    // doc.save('Test.pdf');


   }

   public openPDF():void {
    // let DATA = this.htmlData.nativeElement;
    // let doc = new jsPDF('p','pt', 'a4');
    // doc.fromHTML(DATA.innerHTML,15,15);
    // doc.output('dataurlnewwindow');
  }



}
