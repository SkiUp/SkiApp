import { HttpParams } from '@angular/common/http';

export function objectToQueryParams(object: unknown): HttpParams {
  let params = new HttpParams();
  return params.append('query', JSON.stringify(object));
}
