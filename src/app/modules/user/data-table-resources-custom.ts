/*import { DataTableResource, DataTableParams } from 'angular-6-datatable';

export class DataTableResourceCustom<T> extends DataTableResource<T> {

  constructor(items: T[]) {
    super(items);
  }

  query(params: DataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<T[]> {
    const items = super.query(params, filter);
    return new Promise((resolve) => {
      setTimeout(() => resolve(items), Math.floor(Math.random() * 1000));
    });
  }
}
*/