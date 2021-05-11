import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'blockchain/src/blockchain';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent implements OnInit {
  public newTx;
  public walletKey;
  constructor(
    private blockchainService: BlockchainService,
    private router: Router
  ) {
    this.newTx = new Transaction();
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {}

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);
    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();

    console.log('Transaction created!');
  }
}
