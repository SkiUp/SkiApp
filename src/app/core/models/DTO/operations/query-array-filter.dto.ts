import { QueryFilterDto } from "./query-filter.dto";
import { QueryOperators } from "./query-operators.enum";

export class QueryArrayFilterDto<T> extends QueryFilterDto {
  public filterType: 'array';
  public value: T[];
  public queryOperator: QueryOperators;
}
