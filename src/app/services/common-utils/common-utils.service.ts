import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor(private router: Router) { }

  get appName(): string {
    return 'Blockchain';
  }

  get repositoryName(): string {
    return 'https://github.com/piyush1696/blockchain-ui';
  }

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }
}
