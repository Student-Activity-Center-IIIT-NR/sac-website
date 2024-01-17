import { StaticImageData } from "next/image";

import DSC_0029_min from "../../../assets/atharv/DSC_0029-min.jpg";
import DSC_0030_min from "../../../assets/atharv/DSC_0163-min.jpg";
import DSC_0031_min from "../../../assets/atharv/DSC_0415-min.jpg";
import DSC_0032_min from "../../../assets/atharv/DSC_1027-min.jpg";
import DSC_0033_min from "../../../assets/atharv/DSC_0029-min.jpg";

interface CrewProps {
  img: StaticImageData;
}

interface dataProps {
  name: string;
  intro: string;
  winner: string;
}

// insert new data at beginning
export const data: dataProps[] = [
  {
    name: "Aarambh 4.0",
    intro:
      "Aarambh which brings together students from across the college to compete in various sports and showcase their skills. The club provides students with opportunities to engage in physical activity, build a sense of community, and represent the college in inter-collegiate competitions. It also helps in promoting a healthy lifestyle, developing discipline and time management skills and fostering a sense of pride among students. Overall, Atharv plays an important role in promoting sports and physical wellness within the IIIT-NR community",
    winner:
      "The Titans have emerged victorious in an intense and closely contested tournament. After days of hard-fought matches, the Titans outlasted their opponents to claim the championship title.They had a tough competition against  in the league, but they never wavered in their determination to come out on top. With a mix of skill, strategy, and sheer grit, the Titans were able to outlast their opponents and secure the victory.",
  },
];

export const itemData: CrewProps[] = [
  {
    img: DSC_0029_min,
  },
  {
    img: DSC_0030_min,
  },
  {
    img: DSC_0031_min,
  },
  {
    img: DSC_0032_min,
  },
  {
    img: DSC_0033_min,
  },
  {
    img: DSC_0030_min,
  },
];
