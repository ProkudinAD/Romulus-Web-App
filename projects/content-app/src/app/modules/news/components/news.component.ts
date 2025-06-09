import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../../../../shared-lib/src/shared/components/forms/list/list.component';
import { NewsMainDto } from '../../../../../../shared-lib/src/shared/api';
import { NewsService } from '../services/news.service';
import {
  GridConfig,
  GridItemConfig,
} from '../../../../../../shared-lib/src/shared/components/forms/grid/grid.viewmodel';
import { GridDefaultConfigService } from '../../../../../../shared-lib/src/shared/components/forms/grid/services/gridDefaultConfig.Service';
import { ButtonDemoComponent } from '../button-demo/button-demo.component';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ListComponent, ButtonDemoComponent, ButtonModule, DatePickerModule, FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent extends ListComponent<NewsMainDto> implements OnInit
{
  public gConfig: GridConfig = {
    cols: 2,
    rowHeight: '200px',
    gutterSize: '16px',
  };

  iConfig: GridItemConfig = {
    showImage: true,
    imagePosition: 'left',
    showTitle: true,
    showDescription: true,
  };
  public date: Date = new Date(); // Добавлено свойство date
  public massege: string = 'Hello from NewsComponent';
  public titlesd: NewsMainDto[] = [];

  constructor(
    override service: NewsService,
    defaultConfig: GridDefaultConfigService
  ) {
    super(defaultConfig);
  }

  override ngOnInit() {
    console.log('NewsComponent initialized', this.model);
    super.ngOnInit();
  }
}
