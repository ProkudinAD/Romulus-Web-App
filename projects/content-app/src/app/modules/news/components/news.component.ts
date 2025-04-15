import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../../../../shared-lib/src/shared/components/forms/list/list.component';
import { NewsMainDto } from '../../../../../../shared-lib/src/shared/api';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent
  extends ListComponent<NewsMainDto>
  implements OnInit
{
  public massege: string = 'Hello from NewsComponent';
  public titlesd: NewsMainDto[] = [];

  constructor(public override service: NewsService) {
    super();
  }

  override ngOnInit() {
    console.log('NewsComponent initialized', this.model);
    super.ngOnInit();
  }
}
