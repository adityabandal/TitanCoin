import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';

const routes: Routes = [{ path: '', component: BlockchainViewerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
