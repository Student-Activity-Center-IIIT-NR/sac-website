import { StaticImageData } from "next/image";

import IMG_0426 from "../../assets/atharv/IMG_0426.jpg";
import DSC_0799 from "../../assets/atharv/DSC_0799.jpg";
import IMG_0023 from "../../assets/atharv/IMG_0023.jpg";
import IMG20231015181640 from "../../assets/atharv/IMG20231015181640.jpg";
import IMG_0932 from "../../assets/atharv/IMG_0932.jpg";
import IMG_7420 from "../../assets/atharv/IMG_7420.jpg";


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
    name: "Aarambh 6.0",
    intro:
      "Aarambh which brings together students from across the college to compete in various sports and showcase their skills. The club provides students with opportunities to engage in physical activity, build a sense of community, and represent the college in inter-collegiate competitions. It also helps in promoting a healthy lifestyle, developing discipline and time management skills and fostering a sense of pride among students. Overall, Atharv plays an important role in promoting sports and physical wellness within the IIIT-NR community",
    winner:
      "The Titans have emerged victorious in an intense and closely contested tournament. After days of hard-fought matches, the Titans outlasted their opponents to claim the championship title.They had a tough competition against  in the league, but they never wavered in their determination to come out on top. With a mix of skill, strategy, and sheer grit, the Titans were able to outlast their opponents and secure the victory.",
  },
];

export const itemData: CrewProps[] = [
  {
    img: IMG_0426,
  },
  {
    img: DSC_0799,
  },
  {
    img: IMG_0023,
  },
  {
    img: IMG20231015181640,
  },
  {
    img: IMG_0932,
  },
  {
    img: IMG_7420,
  },
];
