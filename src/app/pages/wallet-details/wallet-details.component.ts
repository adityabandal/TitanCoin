import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss'],
})
export class WalletDetailsComponent implements OnInit {
  public wallet;
  public balance;
  public transactions = [];
  constructor(
    private blockchainService: BlockchainService,
    private route: ActivatedRoute
  ) {
    // this.wallet = this.route.snapshot.paramMap.get('address');
    // this.balance = blockchainService.getBalance(this.wallet);
    // this.transactions = blockchainService.getAllTransactions(this.wallet);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.wallet = params['address'];

      this.balance = this.blockchainService.getBalance(this.wallet);
      this.transactions = this.blockchainService.getAllTransactions(
        this.wallet
      );
    });
  }
}
