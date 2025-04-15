import { Injectable } from '@angular/core';
import { ICrudService } from '../../../../../../shared-lib/src/shared/services/base-crud.service';
import { Observable } from 'rxjs';
import {
  Client,
  NewsMainDto,
} from '../../../../../../shared-lib/src/shared/api';
import { Guid } from '../../../../../../shared-lib/src/shared/infrastructure/models/guid';

@Injectable({
  providedIn: 'root',
})
export class NewsService implements ICrudService<Guid> {
  constructor(private client: Client) {}

  getList(): Observable<NewsMainDto[]> {
    return this.client.list();
  }
  getById(id: Guid): Observable<NewsMainDto> {
    throw new Error('Method not implemented.');
  }
  save(model: Guid): Observable<Guid> {
    throw new Error('Method not implemented.');
  }
  update(model: Guid): Observable<Guid> {
    throw new Error('Method not implemented.');
  }
  saveOrUpdate(model: Guid): Observable<Guid> {
    throw new Error('Method not implemented.');
  }
  delete(id: Guid): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
