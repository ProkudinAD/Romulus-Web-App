import { Component, Input, OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IReadService } from '../../../services/base-crud.service';
import { IEntity } from '../../../infrastructure/interfaces/eintity';
import { GridComponent } from '../grid/grid.component';
import { GridConfig, GridItemConfig } from '../grid/grid.viewmodel';
import { GridDefaultConfigService } from '../grid/services/gridDefaultConfig.Service';

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    GridComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent<TModel extends IEntity> implements OnInit, AfterViewInit
{
  @Input() public gridConfig?: GridConfig;
  @Input() public itemConfig?: GridItemConfig;

  @Input() public customItemTemplate?: TemplateRef<any>;

  @Input() public model: TModel[] = [];
  @Input() public service?: IReadService<TModel>;
  @Input() public autoLoad: boolean = true;

  public loading: boolean = false;
  public error: string | null = null;

  constructor(private defaultConfig: GridDefaultConfigService) {}

  get effectiveGridConfig(): GridConfig {
    return this.gridConfig || this.defaultConfig.getDefaultGridConfig();
  }
  
  get effectiveItemConfig(): GridItemConfig {
    return this.itemConfig || this.defaultConfig.getDefaultItemConfig();
  }

  ngOnInit(): void {
    if (this.autoLoad) {
      console.log('get date ')
      this.loadData();
    }
  }

  ngAfterViewInit(): void {}

  public loadData(): void {
    console.log('loaddate')
    if (!this.service) return;
    
    this.loading = true;
    this.error = null;
    
    this.service.getList().subscribe({
      next: (data) => {
        this.model = data;
        this.loading = false;
        console.log('Loaded data:', data);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.message;
        console.error('Error loading data:', err);
      }
    });
  }

  public refresh(): void {
    this.loadData();
  }
}
