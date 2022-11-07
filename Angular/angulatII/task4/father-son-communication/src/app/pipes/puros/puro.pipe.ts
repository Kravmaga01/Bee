import { Pipe, PipeTransform } from '@angular/core';
import { ModelHero } from '../../components/interfaces/hero.interface';

@Pipe({
  name: 'puro',
})
export class PuroPipe implements PipeTransform {
  transform(value: ModelHero[]) {
    return value.filter((e) => e.tvShows.length < 1);
  }
}
