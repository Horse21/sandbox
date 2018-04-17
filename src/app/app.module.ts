import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {H21CoreUIModule, PreloaderService, SettingsService, StorageService, H21StringUtilsService} from '@h21/h21.core.ui';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {DxDataGridModule, DxTabsModule, DxTextBoxModule} from 'devextreme-angular';
import {ProfilesComponent} from './profiles/profiles.component';
import { TravelportComponent } from './travelport/travelport.component';
import { OurComponentComponent } from './our-component/our-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';

const routes: Routes = [
  {path: 'travelport', component: TravelportComponent},
  {path: 'profile', component: ProfilesComponent},
  {path: 'test', component: TestComponent},
  {path: 'components', component: OurComponentComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProfilesComponent,
    TravelportComponent,
    OurComponentComponent
  ],
  imports: [
    BrowserModule,
    H21CoreUIModule,
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxTabsModule,
    DxTextBoxModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [PreloaderService, SettingsService, StorageService, H21StringUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
