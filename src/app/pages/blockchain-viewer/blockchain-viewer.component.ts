import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss'],
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  constructor(blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
  }

  ngOnInit(): void {}
}
