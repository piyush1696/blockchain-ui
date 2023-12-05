import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Web3 from 'web3';

declare let window: any; // To avoid TypeScript errors


@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private accountUpdate: Subject<boolean> = new Subject<boolean>();
  public accountUpdateObservable$: Observable<boolean> = this.accountUpdate.asObservable();

  public ethereum;
  private web3: Web3 | null = null;

  constructor() {
    const {ethereum} = <any>window
    this.ethereum = ethereum;
   }

  get isEnabled(): boolean {
    return typeof window.ethereum !== 'undefined';
  }

  public connect(): void {
    this.web3 = new Web3(window.ethereum);
  }

  public async connectWallet(): Promise<any> {
    if (!this.web3) {
      return 0;
    }

    const accounts = await this.ethereum.request({method: 'eth_requestAccounts'});
    return accounts;
  }

  public async getAccount(): Promise<any> {
    if (!this.web3) {
      return 0;
    }
    const accounts = await this.web3?.eth.getAccounts();
    return accounts?.[0];
  }

  public initailizeListner(): void {
    window.ethereum.on('accountsChanged', async (data: any) => {
      this.accountUpdate.next(data);
    });
  }

  public async getBalance(account: any): Promise<number> {
    if (!this.web3) {
      return 0;
    }
    const balance = await this.web3.eth.getBalance(account) || 0;
    return parseFloat(this.web3.utils.fromWei(balance, 'ether'));
  }

  public async getTransactions(account: any): Promise<any> {
    if (!this.web3) {
      return [];
    }
    return [];
  }

  public async getContract(address: string, abi: any) {
    if (!this.web3) {
      return null;
    }

    return new this.web3.eth.Contract(abi, address);
  }

  public async getNetworkGasFee(): Promise<number> {
    if (!this.web3) {
      return 0;
    }

    const price = await this.web3.eth.getGasPrice() || 0;
    return parseFloat(this.web3.utils.fromWei(price, 'ether'));
  }
}
