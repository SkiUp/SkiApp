import { HttpParams } from '@angular/common/http';

export function objectToQueryParams(object: unknown): HttpParams {
  let params = new HttpParams();
  for (const [key, value] of Object.entries(object)) {
    params = params.append(key, JSON.stringify(value));
  }
  return params;
}
