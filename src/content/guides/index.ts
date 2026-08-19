import { bankGuides } from "./bank";
import { dmvGuides } from "./dmv";
import { housingGuides } from "./housing";
import { seniorHousingGuides } from "./housing-senior";
import { immigrationGuides } from "./immigration";
import { jobGuides } from "./job";
import { lifeGuides } from "./life";
import { medicalGuides } from "./medical";
import { taxGuides } from "./tax";

export const guides = [
  ...lifeGuides,
  ...dmvGuides,
  ...bankGuides,
  ...medicalGuides,
  ...taxGuides,
  ...immigrationGuides,
  ...jobGuides,
  ...housingGuides,
  ...seniorHousingGuides,
];
