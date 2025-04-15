import { Routes } from '@angular/router';
import { NewsComponent } from './modules/news/components/news.component';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'news',
    component: NewsComponent,
  },
];
