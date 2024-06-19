import { StaticImageData } from "next/image";

interface CrewProps {
    img: StaticImageData;
    name: string;
    post: string;
}

// import crew
import Male from "../../assets/team_24-25/Male-member.jpeg"
import Female from "../../assets/team_24-25/Female-member.jpeg"
import Yash from "../../assets/team_24-25/yash_1.jpg";
import Priyadarshi from "../../assets/team_24-25/priyadarshi.jpg"
import R_Sai_Shivani from "../../assets/team_24-25/Female-member.jpeg"
import Anshul_Lakra from "../../assets/team_24-25/IMG_4342~3 - Anshul Pratap Lakra.jpg"
import Parthsarthi_Dutt from "../../assets/team_24-25/IMG-20240526-WA0018~2 - Parthsarthi Dutt.jpg"
import Jaya_Deep from "../../assets/team_24-25/IMG20240218145308 - Kundrapu Jaya Deep.jpg"
import Tejas_Keshwani from "../../assets/team_24-25/Screenshot_20240524_131623_Gallery - Tejas Keshwani.jpg"
import Shubhang_Nande from "../../assets/team_24-25/Screenshot_2024-05-25-14-53-47-550_com.whatsapp-edit - Shubhang Nande.jpg"
import Virat_Patel from "../../assets/team_24-25/Picsart_23-08-29_02-46-57-153 - Virat Patel.jpg"
import Kaushal_Ranjan from "../../assets/team_24-25/Kaushal Ranjan (7) - Kaushal Ranjan.png"
import Kritie_Omar from "../../assets/team_24-25/IMG-20240529-WA0012 - Kritie Omar(1).jpg"
import Meenal_Patle from "../../assets/team_24-25/IMG-20240524-WA0038 - Meenal Patle.jpg"
import Karmendra_Dev from "../../assets/team_24-25/IMG-20240412-WA0148-01-01-01 - Karmendra Dev Netam.jpeg"
import Anushka_Ekka from "../../assets/team_24-25/IMG_20240410_130215 - Anushka Ekka.jpg"
import Vaishnavi_Shrivastava from "../../assets/team_24-25/1000088291-01 - Vaishnavi Shrivastava.jpeg"
import Jayaprakash_Sahu from "../../assets/team_24-25/IMG_20231004_223523 - Jaiprakash Sahu.jpg"
import Shrawan_Kumar from "../../assets/team_24-25/1705775302364f - Shrawan Kumar Bhagat.jpg"
import Tanisha_Jain from "../../assets/team_24-25/IMG20240322120646 - Tanisha Jain.jpg"
import Shashank_Mishra from "../../assets/team_24-25/ppf - Shashank Mishra.jpg"
import Navneeth from "../../assets/team_24-25/830c251d-5463-4969-ac80-75e644f0394d - Kundrapu Navneeth.jpeg"
import Ashritha from "../../assets/team_24-25/ash_20240527_073222_0000 - Ashritha Gundu.jpg"
import Hritik_Routia from "../../assets/team_24-25/20240428_183502 - Hritik Kumar Routia.jpg"
import Vriddhi_Jain from "../../assets/team_24-25/IMG_20231231_231251_225 - Vriddhi Jain.jpg"
import Parth_Patel from "../../assets/team_24-25/IMG_20240526_185423 - Parth Patel.jpg"
import Adya_Pandey from "../../assets/team_24-25/IMG_20240526_135155 - Adya Pandey.jpg"
import Alisha_Tripathi from "../../assets/team_24-25/IMG-20240523-WA0005 - Alisha Tripathi.jpg"
import Mohit_Sharma from "../../assets/team_24-25/2024-05-20-16-37-50-202 - Sharma Mohit.jpg"
import Anish_Kumar from "../../assets/team_24-25/20240316_184446 - Anish Kumar.jpg"
import Kushagra_Verma from "../../assets/team_24-25/WhatsApp Image 2024-06-19 - Kushagra Verma.jpg"

export const website: CrewProps[] = [
    {
        img: Priyadarshi,
        name: "Priyadarshi Satyakam",
        post: "Head",
    },
    {
        img: Yash,
        name: "Yash Joshi",
        post: "Vice Head",
    },
    {
        img: Kushagra_Verma,
        name: "Kushagra Verma",
        post: "Core Member",
    },
    {
        img: Alisha_Tripathi,
        name: "Alisha Tripathi",
        post: "Core Member",
    },
    {
        img: Mohit_Sharma,
        name: "Mohit Sharma",
        post: "Core Member"
    },
    {
        img: Anish_Kumar,
        name: "Anish Kumar",
        post: "Core Member"
    }
];

export const shutterbug: CrewProps[] = [
    {
        img: R_Sai_Shivani,
        name: "R.Sai Shivani",
        post: "Head",
    },
    {
        img: Anshul_Lakra,
        name: "Anshul Pratap Lakra",
        post: "Vice Head",
    },
    {
        img: Parthsarthi_Dutt,
        name: "Parthsarthi Dutt",
        post: "Videographer",
    },
    {
        img: Jaya_Deep,
        name: "K Jaya Deep",
        post: "Videographer",
    },
    {
        img: Anushka_Ekka,
        name: "Anushka Ekka",
        post: "Content & Mails",
    },
    {
        img: Virat_Patel,
        name: "Virat Patel",
        post: "Operations",
    },
    {
        img: Shubhang_Nande,
        name: "Shubhang Nande",
        post: "Operations",
    },
    {
        img: Male,
        name: "Anshumaan Karna",
        post: "Social Media",
    },
    {
        img: Kritie_Omar,
        name: "Kritie Omar",
        post: "Social Media",
    },
    {
        img: Kaushal_Ranjan,
        name: "Kaushal Ranjan",
        post: "Graphic Designer",
    },
    {
        img: Karmendra_Dev,
        name: "Karmendra Dev Netam",
        post: "Photographer",
    },
    {
        img: Tejas_Keshwani,
        name: "Tejas Keshwani",
        post: "Photographer",
    },
    {
        img: Meenal_Patle,
        name: "Meenal Patle",
        post: "Photographer",
    },
    {
        img: Vaishnavi_Shrivastava,
        name: "Vaishnavi Shrivastava",
        post: "Photographer",
    },
    {
        img: Jayaprakash_Sahu,
        name: "Jaiprakash Sahu",
        post: "Photographer",
    },
    {
        img: Shrawan_Kumar,
        name: "Shrawan Kumar Bhagat",
        post: "Photographer",
    },
];
// Changing name
export const pr: CrewProps[] = [
    {
        img: Virat_Patel,
        name: "Virat Patel",
        post: "Head(PR)",
    },
    {
        img: Male,
        name: "Pulli Uttam Reddy",
        post: "Head(Social Media)",
    },
    {
        img: Male,
        name: "Sayyed Raahim Adnan Ali",
        post: "Vice Head",
    },
    {
        img: Tanisha_Jain,
        name: "Tanisha Jain",
        post: "Core member",
    },
    {
        img: Shashank_Mishra,
        name: "Shashank Mishra",
        post: "Core member",
    },
    {
        img: Navneeth,
        name: "Navneeth",
        post: "Core member",
    },
    {
        img: Ashritha,
        name: "Ashritha",
        post: "Core member",
    },
];
// Changing name
export const design: CrewProps[] = [
    {
        img: Kaushal_Ranjan,
        name: "Kaushal Ranjan",
        post: "Head(Design)",
    },
    {
        img: Hritik_Routia,
        name: "Hritik Routia",
        post: "Head(Documentation)",
    },
    {
        img: Vriddhi_Jain,
        name: "Vriddhi Jain",
        post: "Core Member",
    },
    {
        img: Parth_Patel,
        name: "Parth Patel",
        post: "Core Member",
    },
    {
        img: Adya_Pandey,
        name: "Adya Pandey",
        post: "Core Member",
    },
    {
        img: Anushka_Ekka,
        name: "Anushka Ekka",
        post: "Core Member",
    },
];