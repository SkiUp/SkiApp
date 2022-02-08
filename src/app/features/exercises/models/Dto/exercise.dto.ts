import { ExerciseTypes, SlopeTypes } from '@app/core';
export interface ExerciseDto {
  id: string;
  description: string;
  slopeType: SlopeTypes;
  type: ExerciseTypes;
  level: unknown;
  mouvement: unknown;
  isOfficial: boolean;
  asset: unknown;
}
