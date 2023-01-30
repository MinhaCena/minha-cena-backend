import { Redaction } from "@application/entities/redaction";
import { Illustrator } from "@application/entities/illustrator";

export interface Drawings {
  id: number;
  redactionId: Redaction;
  illustratorId: Illustrator;
  urlFile: string;
  createdAt: Date;
  updatedAt: Date;
}
