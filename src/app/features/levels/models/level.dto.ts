export interface LevelDto {
  id: string;
  name: string;
  description?: string;
  priorLevelId?: string;
  // TODO create exerciseDto
  exercises: unknown[];
}
