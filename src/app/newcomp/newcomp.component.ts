import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent {
  
  sourceLanguage: string = 'en';
  targetLanguage: string = 'ta';
  textToTranslate: string = '';
  translationResult: string = '';

  constructor(private ipService: ApiservService){}

  translate() {
    this.ipService.getLocation(this.sourceLanguage, this.targetLanguage, this.textToTranslate).subscribe(
      (response: any) => {
        console.log(response);
        
        this.translationResult = response.data.translatedText;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
