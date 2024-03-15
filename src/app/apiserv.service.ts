import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservService {

  constructor(private http: HttpClient) { }
  
  getLocation(sourceLanguage: string, targetLanguage: string, text: string) {
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    return this.http.post(url, { sourceLanguage, targetLanguage, text });
  }
}
