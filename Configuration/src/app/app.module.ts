import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillMaintenanceComponent } from './components/skill-maintenance/skill-maintenance.component';
import { TimeZoneMaintenanceComponent } from './components/time-zone-maintenance/time-zone-maintenance.component';
import { LocationMaintenanceComponent } from './components/location-maintenance/location-maintenance.component';
import { FacilityMaintenanceComponent } from './components/facility-maintenance/facility-maintenance.component';
import { SBUMaintenanceComponent } from './components/sbumaintenance/sbumaintenance.component';
import { LOBMaintenanceComponent } from './components/lobmaintenance/lobmaintenance.component';
import { VerticalMaintenanceComponent } from './components/vertical-maintenance/vertical-maintenance.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MasterValueSearchViewComponent } from './MasterValue/master-value-search-view/master-value-search-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { MasterValueMaintenanceComponent } from './MasterValue/master-value-maintenance/master-value-maintenance.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MasterEditMaintenanceComponent } from './MasterValue/master-edit-maintenance/master-edit-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterValueMaintenanceComponent,
    SkillMaintenanceComponent,
    TimeZoneMaintenanceComponent,
    LocationMaintenanceComponent,
    FacilityMaintenanceComponent,
    SBUMaintenanceComponent,
    LOBMaintenanceComponent,
    VerticalMaintenanceComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    MasterValueSearchViewComponent,
    FooterComponent,
    MasterEditMaintenanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
