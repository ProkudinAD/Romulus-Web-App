import { Injectable } from '@angular/core';
import { GridConfig, GridItemConfig } from '../grid.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class GridDefaultConfigService {
  getDefaultGridConfig(): GridConfig {
    return {
      cols: 3,
      rowHeight: '100px'
    };
  }

  getDefaultItemConfig(): GridItemConfig {
    return {
      showImage: false,
      showTitle: true,
      showDescription: true
    };
  }
}