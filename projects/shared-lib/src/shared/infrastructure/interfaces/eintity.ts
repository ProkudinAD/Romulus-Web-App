import { Guid } from '../models/guid';

export interface IEntity<TKey = Guid> {
  id: TKey;
}
/** Базовый класс моделей */
export declare abstract class Entity<TKey = Guid> implements IEntity<TKey> {
  id: TKey;
}
