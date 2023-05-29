import { Essay } from "./essay";
import { Illustrator } from "./illustrator";

export class Illustration {
  id: number;
  essay: Essay;
  illustrator: Illustrator;
  urlFile: string;
  createdAt: Date;
  updatedAt?: Date;
}
