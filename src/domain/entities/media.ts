import { Redaction } from "@application/entities/redaction";
import { Illustrator } from "@application/entities/illustrator";

export interface Media {
  id: number;
  redactionId: Redaction;
  illustratorId: Illustrator;
  urlFile: string;
  createdAt: Date;
  updatedAt?: Date;
}
