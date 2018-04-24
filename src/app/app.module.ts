import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageSidebarComponent } from './page-sidebar/page-sidebar.component';
import { H21BreadcrumbsComponent } from './h21-breadcrumbs/h21-breadcrumbs.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageSidebarComponent,
    H21BreadcrumbsComponent,
    ExampleViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
