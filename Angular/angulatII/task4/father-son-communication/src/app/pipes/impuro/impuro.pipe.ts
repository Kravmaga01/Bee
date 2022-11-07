import { Pipe, PipeTransform } from '@angular/core';
import { ModelHero } from '../../components/interfaces/hero.interface';

@Pipe({
  name: 'impuro',
  pure: false,
})
export class ImpuroPipe implements PipeTransform {
  transform(heroe: ModelHero[], filterBy: number) {
    console.log(
      heroe.filter((e) => {
        e.tvShows.length;
      })
    );
    return heroe.filter((e) => {
      return e.tvShows.length === filterBy;
    });
  }
}
