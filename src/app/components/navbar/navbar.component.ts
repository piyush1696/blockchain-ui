import { Component } from '@angular/core';
import { CommonUtilsService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public appName: string = this.commonUtilsService.appName;
  public repositoryName: string = this.commonUtilsService.repositoryName;

  constructor(private commonUtilsService: CommonUtilsService) {}
}
