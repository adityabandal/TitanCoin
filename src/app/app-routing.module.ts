import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WalletDetailsComponent } from './pages/wallet-details/wallet-details.component';

const routes: Routes = [
  { path: '', component: BlockchainViewerComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'new/transaction', component: CreateTransactionComponent },
  { path: 'new/transaction/pending', component: PendingTransactionsComponent },
  { path: 'wallet/:address', component: WalletDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
