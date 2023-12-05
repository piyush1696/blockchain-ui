import { Injectable } from '@angular/core';
import { Web3Service } from '../web3/web3.service';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  public contractAddress: string = '';
  public contractABI: any = null;

  constructor(private web3Service: Web3Service) { }

  set address(_contractAddress: string) { this.contractAddress = _contractAddress; }
  get address() { return this.contractAddress; }

  set abi(_contractABI: any) { this.contractABI = _contractABI; }
  get abi() { return this.contractABI; }


  async vote(account: string): Promise<void> {
    if (!account) return;

    const contract: any = await this.web3Service.getContract(this.contractAddress, this.contractABI);
    if (contract?.methods.vote) {
      const result = await contract?.methods.vote().send({ from: account });
      console.log(result);
    }
  }
}
