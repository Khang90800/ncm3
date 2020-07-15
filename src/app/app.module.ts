import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { AddMenuComponent } from '../add-menu/add-menu.component';
import { ListMenuComponent } from '../list-menu/list-menu.component';
import { AddNcComponent } from '../add-menu/add-nc/add-nc.component';
import { AddApComponent } from '../add-menu/add-ap/add-ap.component';
import { AddAdComponent } from '../add-menu/add-ad/add-ad.component';
import { FourOhFourComponent } from '../four-oh-four/four-oh-four.component';
import { NcListComponent } from '../list-menu/nc-list/nc-list.component';
import { ApListComponent } from '../list-menu/ap-list/ap-list.component';
import { AdListComponent } from '../list-menu/ad-list/ad-list.component';
import { NcComponent } from '../list-menu/nc-list/nc/nc.component';
import { ApComponent } from '../list-menu/ap-list/ap/ap.component';
import { AdComponent } from '../list-menu/ad-list/ad/ad.component';

import { NcService } from './services/nc.service';
import { ApService } from './services/ap.service';
import { AdService } from './services/ad.service';
import { NcDetailsComponent } from '../list-menu/nc-list/nc-details/nc-details.component';
import { ApDetailsComponent } from '../list-menu/ap-list/ap-details/ap-details.component';
import { AdDetailsComponent } from '../list-menu/ad-list/ad-details/ad-details.component';

const appRoutes: Routes = [
  { path: 'add-nc', component: AddNcComponent },
  { path: 'add-ap', component: AddApComponent },
  { path: 'add-ad', component: AddAdComponent },
  { path: 'list-menu', component: ListMenuComponent },
  { path: 'nc-list', component: NcListComponent },
  { path: 'nc-list/:id', component: NcDetailsComponent },
  { path: 'ap-list', component: ApListComponent },
  { path: 'ap-list/:id', component: ApDetailsComponent },
  { path: 'ad-list', component: AdListComponent },
  { path: 'ad-list/:id', component: AdDetailsComponent },
  { path: '', component: ListMenuComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent, 
    AddMenuComponent,
    AddNcComponent,
    AddApComponent,
    AddAdComponent,
    ListMenuComponent,
    AdListComponent,
    ApListComponent,
    NcListComponent,
    FourOhFourComponent,
    NcComponent,
    ApComponent,
    AdComponent,
    NcDetailsComponent,
    ApDetailsComponent,
    AdDetailsComponent
  ],
  providers: [
    NcService,
    ApService,
    AdService
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
