import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NavbarComponent, 
  Web3ConnectionComponent, 
  ContractInformationComponent,
  VoteComponent
} from './components';

import { EthereumComponent } from './pages';
import { MetamaskComponent } from './pages/metamask/metamask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Web3ConnectionComponent,
    ContractInformationComponent,
    VoteComponent,
    EthereumComponent,
    MetamaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
