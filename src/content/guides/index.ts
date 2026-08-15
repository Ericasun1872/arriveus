import { bankGuides } from "./bank";
import { dmvGuides } from "./dmv";
import { housingGuides } from "./housing";
import { seniorHousingGuides } from "./housing-senior";
import { jobGuides } from "./job";
import { medicalGuides } from "./medical";
import { taxGuides } from "./tax";

export const guides = [
  ...dmvGuides,
  ...bankGuides,
  ...medicalGuides,
  ...taxGuides,
  ...jobGuides,
  ...housingGuides,
  ...seniorHousingGuides,
];
