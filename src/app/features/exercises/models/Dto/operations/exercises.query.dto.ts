import { QueryArrayFilterDto } from "@core/models";

export class ExercisesQueryDto {
  className? = 'exercise';
  filters?: QueryArrayFilterDto<unknown>[];
}
