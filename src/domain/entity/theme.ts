import { Essay } from "./essay";

export interface Theme {
  id: number;
  theme: string;
  createdAt: Date;
  updatedAt?: Date;
  essays: Essay[];
}
