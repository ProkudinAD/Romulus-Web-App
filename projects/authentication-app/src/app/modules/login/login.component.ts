import { Component, OnInit } from '@angular/core';
import { SharedLibComponent } from '../../../../../shared-lib/src/public-api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedLibComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  ngOnInit() {
    console.log('99999 123123123 login');
  }
  
}
