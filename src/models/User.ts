import { StaticImageData } from "next/image";

export interface User {
  name: string;
  age: number;
  email: string;
  profilePic: StaticImageData;
  smiles: number;
}
