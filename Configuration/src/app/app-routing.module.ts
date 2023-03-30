import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityMaintenanceComponent } from './components/facility-maintenance/facility-maintenance.component';
import { HomeComponent } from './components/home/home.component';
import { LOBMaintenanceComponent } from './components/lobmaintenance/lobmaintenance.component';
import { LocationMaintenanceComponent } from './components/location-maintenance/location-maintenance.component';
import { SBUMaintenanceComponent } from './components/sbumaintenance/sbumaintenance.component';
import { SkillMaintenanceComponent } from './components/skill-maintenance/skill-maintenance.component';
import { TimeZoneMaintenanceComponent } from './components/time-zone-maintenance/time-zone-maintenance.component';
import { VerticalMaintenanceComponent } from './components/vertical-maintenance/vertical-maintenance.component';
import { MasterEditMaintenanceComponent } from './MasterValue/master-edit-maintenance/master-edit-maintenance.component';
import { MasterValueMaintenanceComponent } from './MasterValue/master-value-maintenance/master-value-maintenance.component';
import { MasterValueSearchViewComponent } from './MasterValue/master-value-search-view/master-value-search-view.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path: 'master-value-maintenance', component:MasterValueMaintenanceComponent},
{path:'master-value-maintenance/master-value-search-view', component:MasterValueSearchViewComponent},
{path:'master-value-maintenance/master-edit-maintenance/:id', component:MasterEditMaintenanceComponent},
{path:'skill-maintenance', component:SkillMaintenanceComponent},
{path: 'time-zone-maintenance', component:TimeZoneMaintenanceComponent},
{path: 'location-maintenance', component:LocationMaintenanceComponent},
{path: 'facility-maintenance', component:FacilityMaintenanceComponent},
{path: 'sbumaintenance', component:SBUMaintenanceComponent},
{path: 'lobmaintenance', component:LOBMaintenanceComponent},
{path: 'vertical-maintenance', component:VerticalMaintenanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
