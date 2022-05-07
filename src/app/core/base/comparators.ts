export type ValueSelector<K, T> = (object1: K) => T;
export type Comparator<T> = (object1: T, object2: T) => number;

const identitySelector: ValueSelector<any, any> = value => value;

export abstract class Comparators {
  public static datesComparator<K>(growing: boolean = true, valueSelector: ValueSelector<K, Date>): Comparator<K> {
    return (object1: K, object2: K) => growing
      ? valueSelector(object1).getTime() - valueSelector(object2).getTime()
      : valueSelector(object2).getTime() - valueSelector(object1).getTime()
  }
}