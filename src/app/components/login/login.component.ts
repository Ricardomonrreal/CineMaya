import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Si estás usando componentes standalone
  imports: [FormsModule, CommonModule], // Importa los módulos necesarios
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Define la propiedad
  password: string = ''; // Define la propiedad
  errorMessage: string = ''; // Define la propiedad
  returnUrl: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/peliculas';
  }

  onSubmit(): void { // Implementa el método onSubmit
    if (this.authService.login(this.username, this.password)) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}