import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
