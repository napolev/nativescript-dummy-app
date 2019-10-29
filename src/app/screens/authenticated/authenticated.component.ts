import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "ns-authenticated",
  moduleId: module.id,
  templateUrl: "authenticated.component.html"
})
export class AuthenticatedComponent {
  constructor(private authService: AuthService, private routerExtensions: RouterExtensions) {

  }

  public onTapLogout() {
    this.authService.tnsOauthLogout();
    this.routerExtensions.back();
  }
}