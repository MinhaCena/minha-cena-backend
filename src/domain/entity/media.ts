import { Redaction } from "@domain/entity/redaction";
import { Illustrator } from "@domain/entity/illustrator";


export interface Media {
  id: number;
  redactionId: Redaction;
  illustratorId: Illustrator;
  urlFile: string;
  createdAt: Date;
  updatedAt?: Date;
}
