import { IEntity } from "../../../infrastructure/interfaces/eintity";

export interface GridConfig {
  cols: number;
  rowHeight: string;
  gutterSize?: string;
  templateAreas?: string[];
}

export interface GridItemConfig {
  showImage?: boolean;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  showTitle?: boolean;
  showDescription?: boolean;
  customTemplate?: boolean;
}

export interface IGridItem {
    id: string | number;
    title?: string;
    description?: string;
    imageUrl?: string;
  }
