import { Pipe, PipeTransform } from '@angular/core';
import { ModelHero } from '../../components/interfaces/hero.interface';

@Pipe({
  name: 'impuro',
  pure: false,
})
export class ImpuroPipe implements PipeTransform {
  transform(heroe: ModelHero[], filterBy: number) {
    return heroe.filter((e) => {
      e.tvShows.length === filterBy;
    });
  }
}
