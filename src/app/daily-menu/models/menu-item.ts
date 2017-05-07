import { Soup } from './soup';
import { Meal } from './meal';

export interface MenuItem {
  polifky: Soup[];
  hlavni: Meal[];
  active: boolean;
  day: string;
  date: string;
}
