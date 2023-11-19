import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

  lecturaQr:string = ''

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  async startScan() {
    document.body.classList.add('barcode-scanner-active');
    const listener = await BarcodeScanner.addListener('barcodeScanned', async (result) => {
      if (result.barcode.displayValue) {
        this.lecturaQr = result.barcode.displayValue; 
        this.stopScan(); 
      }
    });
    await BarcodeScanner.startScan();
  }

  async stopScan() {
    document.body.classList.remove('barcode-scanner-active');
    await BarcodeScanner.removeAllListeners();
    await BarcodeScanner.stopScan();
    this.changeDetectorRef.detectChanges();
  }

}
