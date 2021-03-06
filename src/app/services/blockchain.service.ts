import { Injectable } from '@angular/core';
import { Blockchain } from 'blockchain/src/blockchain';
import EC from 'elliptic';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];
  constructor() {
    this.blockchainInstance.difficulty = 2;
    this.generateWalletKeys();
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  public getBlocks() {
    return this.blockchainInstance.chain;
  }
  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  getBalance(address) {
    return this.blockchainInstance.getBalanceofAddress(address);
  }

  getAllTransactions(address) {
    return this.blockchainInstance.getAllTransactionsOfAddress(address);
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }
  private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
    console.log(this.walletKeys);
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}
