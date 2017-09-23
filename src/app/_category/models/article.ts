import { Image } from './image';

export interface Article {
  id: number;
  header: string;
  url: string;
  text: string;
  img?: Image;
  category: string;
  return: boolean;
}
