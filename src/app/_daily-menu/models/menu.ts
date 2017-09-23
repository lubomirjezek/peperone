import { Soup } from './soup';
import { Meal } from './meal';

export interface Menu {
  polifky: Soup[];
  hlavni: Meal[];
  active: boolean;
  day: string;
  date: string;
}
