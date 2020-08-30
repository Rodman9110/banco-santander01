import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { MongoDBService } from 'src/app/services/mongo-db.service';

@Component({
  selector: 'app-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.css']
})
export class NavShellComponent {
token: any;
state: any ="close session";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private authentication: AuthenticationService,
    private mongoDBService: MongoDBService
    ) {}

    ngOnInit() {
       this.token = this.authentication.getToken();
      
      console.log(this.token);
     
    }
      

  Logout(){
    console.log("Logout")
    this.mongoDBService.postSessionRegistration$(this.token,this.state).subscribe();
    this.authentication.logoutUser();
    // window.location.reload();
    this.router.navigate(["/login"])
    
 
   }

}
