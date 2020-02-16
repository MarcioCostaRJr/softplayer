import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  private urlGitHub = 'https://github.com/MarcioCostaRJr/softplayer';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
              private breakpointObserver: BreakpointObserver, 
              private authService: AuthService,
              private router: Router ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  redirectSource() {
    window.open(this.urlGitHub);
  }
}
