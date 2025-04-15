import { Component, OnInit } from '@angular/core';
import { SharedLibComponent } from '../../../../../shared-lib/src/public-api';
import { NewsMainDto } from '../../../../../shared-lib/src/shared/api';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListComponent } from '../../../../../shared-lib/src/shared/components/forms/list/list.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedLibComponent,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    ListComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent
  extends ListComponent<NewsMainDto>
  implements OnInit
{
  public massege: string = 'Hello from LoginComponent';
  public titlesd: NewsMainDto[] = [];

  constructor() {
    super();
  }

  override ngOnInit() {}
}
