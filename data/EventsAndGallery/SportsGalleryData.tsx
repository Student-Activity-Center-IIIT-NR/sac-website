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
    name: "SpikeFest Showdown",
    intro:
      "The 2024 Volleyball League Tournament brought together five enthusiastic teams with total of 50 players in an exciting display of skill, teamwork, and sportsmanship. The league format allowed each team to face off against one another, resulting in thrilling matches and intense competition.The tournament followed a round-robin league format, with each team playing against every other team. Matches were played in a best-of-three sets format, with rally scoring. The point system awarded three points for a win and one point for a loss. The teams accumulated points throughout the tournament, and the team with the highest total points at the end was declared the overall winner.",
    winner:
      "Team consisting of Adarsh, Keshav, Himanshu, Yogi, Chaitanya, Nitish, Aditya, Anuj, Sakshi and Ananya emerged victorious",
  },
  {
    name: "Table Top Triump",
    intro:
      "Four teams, Team Aryan Kishore, Team Yash Vardhan Gautam, Team Ojas Dubey, Team Aditya Oza, competed in the competition on the dates of September 18 - 21. The Team Aryan Kishore vs. Team Yash Vardhan Gautam and Team Ojas Dubey vs. Team Aditya Oza league games were planned for September 18 and 19, respectively .Finals between Team Yash Vardhan Gautam and Team Ojas Dubey were held on the 21 September .The Table Tennis Tournament's stated regulations were carried out to in full. Each League included Boys singles matches - 2, Boys doubles - 2 , Girls singles - 1 , Girls doubles - 1 , Mixed doubles - 1, Open - 1 in total. Singles matches were played for three sets and doubles and mixed doubles for 5 sets each.",
    winner:
      "Team Yash Vardhan Gautam with Members: Yash Vardhan Gautam, Gautam Sarawagi, Vikalp Tripathi, Yash Joshi, Lumani Verma, Sakshi Sonker, Anushka ekka",
  },
  {
    name: "League of Leagues",
    intro:
      "This thrilling event brought together 60 enthusiastic students from for a weekend of fierce competition and camaraderie on the football field. A total of 4 teams participated in the tournament whose names are as Gladiators , Supreme OG’s , Purkhoti Phoenix , Synergy.",
    winner:
      "The finalists demonstrated exceptional skills, teamwork, and sportsmanship. After a closely contested game, Gladiators emerged victorious, securing the title of the League of Leagues Football Tournament champions.",
  },
  {
    name: "E-Sports Tournament",
    intro:
      "The Tournament was of the exciting and thrilling game of valorant, the players entered as teams and played on their own laptops the Tournament was of single elimination type where 8 teams participated each team of 5 players so a total of 40 participants. It consisted of a total of 7 matches. On day 1 from 7pm onwards the matches started each of 40 min duration all the elimination rounds ended on day 1 and the semi finals, finals were held on Day 2 these matches were best of 3 and were also streamed on youtube so the whole college could watch and cheer for their favorites.",
    winner:
      "Team Grandfather Og’s- (AMMOX36 - Amogh Dubey) (Pinspy- Tushar Tirkey) (DeathAdder- Saatvik Sharma) (Slowsloth- Anand Bachker) (Benedict - Abhishekh Kerketta)",
  },
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
