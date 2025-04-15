import { Observable } from 'rxjs';
import { Guid } from '../infrastructure/models/guid';

export interface IReadService<Tkey = Guid> {
  getList(): Observable<Tkey[]>;
  getById(id: Tkey): Observable<Tkey>;
}

export interface ISaveOrUpdateService<Tkey = Guid> {
  save(model: Tkey): Observable<Tkey>;
  update(model: Tkey): Observable<Tkey>;
  saveOrUpdate(model: Tkey): Observable<Tkey>;
}

export interface IDeleteService<Tkey = Guid> {
  delete(id: Tkey): Observable<void>;
}

export interface ICrudService<TKey = Guid>
  extends IReadService<TKey>,
    ISaveOrUpdateService<TKey>,
    IDeleteService<TKey> {}
