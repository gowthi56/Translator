import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewinterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const textTranslatorUrl = 'https://text-translator2.p.rapidapi.com/translate';

    if (request.url === textTranslatorUrl) {
      const { sourceLanguage, targetLanguage, text } = request.body; // Extract parameters from request body
      const body = new URLSearchParams({
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: text
      }).toString();

      request = request.clone({
        setHeaders: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '5d8546b21cmsh1cd6861bdbc24cbp1df8b4jsndf41c15a01fb',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: body
      });
    }

    return next.handle(request);
  }
}