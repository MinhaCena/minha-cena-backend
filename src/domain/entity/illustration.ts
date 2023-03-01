import { Essay } from '@domain/entity/essay';
import { Illustrator } from '@domain/entity/illustrator';

export interface Illustration {
  id: number;
  essay: Essay;
  illustrator: Illustrator;
  urlFile: string;
  createdAt: Date;
  updatedAt?: Date;
}
