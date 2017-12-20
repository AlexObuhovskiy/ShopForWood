import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ContentModule } from './components/content/content.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer.component/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GoodService } from './components/goods/services/good.service';
import { GoodsModule } from './components/goods/goods.module';


@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, GoodsModule,
    ContentModule, RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, HeaderComponent,
    FooterComponent, AboutComponent, PageNotFoundComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    GoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
