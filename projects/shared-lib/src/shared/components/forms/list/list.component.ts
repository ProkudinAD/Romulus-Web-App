import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IReadService } from '../../../services/base-crud.service';
import { IEntity } from '../../../infrastructure/interfaces/eintity';

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent<TModel extends IEntity>
  implements OnInit, AfterViewInit
{
  @Input() public model: TModel[] = [];
  @Input() public service?: IReadService<TModel>;
  @Input() public autoLoad: boolean = true;

  public loading: boolean = false;
  public error: string | null = null;

  constructor() {}

  ngOnInit(): void {
    if (this.service) {
      this.service.getList().subscribe({
        next: (data) => {
          this.model = data;
          this.loading = false;
          this.error = null;
          console.log(data);
        },
        error: (err) => {
          this.loading = false;
          this.error = err.message;
        },
      });
    }
    if (this.autoLoad /* && this.service */) {
      this.loadData();
    }
  }

  ngAfterViewInit(): void {}

  public loadData(): void {}

  public refresh(): void {
    this.loadData();
  }
}
