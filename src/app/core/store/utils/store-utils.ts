import { Dictionary, EntityState } from '@ngrx/entity';

export class StoreUtils {

  public static initStateForValues<T extends { id: string }>(values: T[] = []): EntityState<T> {
    return values.reduce((state, value) => {
      state.ids.push(value.id);
      state.entities[value.id] = value;
      return state;
    }, { ids: [] as string[], entities: {} as Dictionary<any> });
  }
}
