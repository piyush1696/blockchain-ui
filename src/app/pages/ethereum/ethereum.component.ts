import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonUtilsService, Web3Service } from 'src/app/services';

interface IAccountInfo {
  id: string,
  balance: number,
  currency: string,
  transactions: []
};

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.scss']
})
export class EthereumComponent implements OnInit {
  public web3Enabled: boolean = this.web3Service.isEnabled;

  constructor(private web3Service: Web3Service, private commonUtilsService: CommonUtilsService) {
  }

  ngOnInit(): void {
    if(this.web3Enabled) {
      this.commonUtilsService.redirectTo('ethereum/metamask');
    }
  }
}
