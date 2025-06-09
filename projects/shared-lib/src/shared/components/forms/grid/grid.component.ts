import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { GridConfig, GridItemConfig, IGridItem } from './grid.viewmodel';
import { IEntity } from '../../../infrastructure/interfaces/eintity';

@Component({
  selector: 'lib-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent<TModel extends IEntity> {
  @Input() items: TModel[] = [];
  @Input() gridConfig: GridConfig = {
    cols: 3,
    rowHeight: '100px',
  };
  @Input() itemConfig: GridItemConfig = {
    showImage: false,
    showTitle: true,
    showDescription: true,
  };
  @Input() customItemTemplate?: TemplateRef<any>;
  ngOnInit(): void {
    console.log('GridComponent initialized', this.items);
  }
}
