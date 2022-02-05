import { Component, Input } from '@angular/core';
import { SlopeTypes } from '@app/core';

@Component({
  selector: 'app-slope-type',
  templateUrl: './slope-type.component.html',
  styleUrls: ['./slope-type.component.scss'],
})
export class SlopeTypeComponent {
  @Input() slopeType: SlopeTypes;

  public get iconType(): number {
    switch (this.slopeType) {
      case SlopeTypes.NONE:
      case SlopeTypes.FLAT:
      case SlopeTypes.EASY:
        return 0;
      case SlopeTypes.HARD:
        return 1;
      case SlopeTypes.HARD_MOGULS:
        return 1.5;
      case SlopeTypes.VERY_HARD:
        return 2;
      case SlopeTypes.VERY_HARD_MOGULS:
        return 2.5;
      case SlopeTypes.STEEP_SECTION:
        return 3;
    }
    return 0;
  }
}
