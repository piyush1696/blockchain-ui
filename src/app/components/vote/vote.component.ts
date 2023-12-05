import { Component, Input } from '@angular/core';
import { VotingService } from 'src/app/services';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  @Input() account: string = '';

  constructor(private votingService: VotingService) {}

  async vote(): Promise<void> {
    this.votingService.address = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
    this.votingService.abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "Voted",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];

    await this.votingService.vote(this.account);
  }
}
