import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonUtilsService, Web3Service } from 'src/app/services';

interface IAccountInfo {
  id: string,
  balance: number,
  currency: string,
  transactions: []
};

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.scss']
})
export class MetamaskComponent {
  public web3Enabled: boolean = this.web3Service.isEnabled;
  public walletConnected: boolean = false;
  public account: IAccountInfo = {
    id: '',
    balance: 0,
    currency: 'ETH',
    transactions: []
  };

  constructor(private web3Service: Web3Service, private commonUtilsService: CommonUtilsService) {
    this.web3Service.accountUpdateObservable$.subscribe(async (addresses: any) => {
      if (addresses?.length) {
        await this.getConnectedAccount();
      } else {
        this.walletConnected = false;
        this.account = {
          id: '',
          balance: 0,
          currency: 'ETH',
          transactions: []
        };
      }
    });
  }

  ngOnInit(): void {
    if (this.web3Enabled) {
      this.web3Service.connect();
      this.web3Service.initailizeListner();

      this.initalizeApp();
    } else {
      this.commonUtilsService.redirectTo('ethereum');
    }
  }

  private async initalizeApp() {
    await this.getConnectedAccount();
  }


  public async connectToWallet(): Promise<void> {
    await this.web3Service.connectWallet();
  }

  public async getConnectedAccount(): Promise<void> {
    const account = await this.web3Service.getAccount();

    if (account) {
      this.walletConnected = true;
      this.account.id = account;
      await this.getAccountBalance();
    }
  }

  public async getAccountBalance(): Promise<void> {
    const balance = await this.web3Service.getBalance(this.account?.id);
    this.account.balance = balance;
  }
}
