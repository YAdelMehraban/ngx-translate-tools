import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { TranslateLoader } from '@ngx-translate/core';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function TranslateMessageFormatCompilerFactory() {
  return new TranslateMessageFormatCompiler({ intlSupport: true });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      compiler: {
        provide: TranslateCompiler,
        useFactory: TranslateMessageFormatCompilerFactory
      },
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
