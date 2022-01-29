import { QueryArrayFilterDto } from "@core/models/DTO";

export class LevelsQueryDto {
  className? = 'level';
  filters?: QueryArrayFilterDto<unknown>[];
}
