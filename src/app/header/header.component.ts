import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,  private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((res: Response) => {
      console.log('res', res);
    });
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }

  isAuth() {
    return this.authService.isAuthenticiated();
  }

  signOut() {
    this.authService.signOut();
  }

}
