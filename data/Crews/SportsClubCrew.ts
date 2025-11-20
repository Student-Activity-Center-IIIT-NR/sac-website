import { StaticImageData } from "next/image";

interface CrewProps {
    img: StaticImageData;
    name: string;
    post: string;
}

// import crew
// import Sanjana_Sori from "../../assets/team_23-24/Sanjana_Sori.jpg";
// import Shaurya_Malhan from "../../assets/team_23-24/Shaurya_Malhan.jpeg";
// import Suyash_Gupta from "../../assets/team_23-24/Suyash_Gupta.jpg";
// import Yash_Raj from "../../assets/team_23-24/Yash_Raj.jpeg";
// import Neha_Dhruw from "../../assets/team_23-24/Neha_Dhruw.jpg";
// import Ravikant_Shrivas from "../../assets/team_23-24/Male-member.jpeg";
// import Aditya_Raj_Banjare from "../../assets/team_23-24/Male-member.jpeg";
// import Ravi_Vinayak from "../../assets/team_23-24/Ravi_Vinayak.jpeg";
// import Venella_Telli from "../../assets/team_23-24/Female-member.jpeg";
// import Ojash_E_Sports from "../../assets/team_23-24/Male-member.jpeg";
// import Deependra_Singh_Bhow from "../../assets/team_23-24/Deependar.jpeg";
// import Lumani_Verma from "../../assets/team_23-24/Female-member.jpeg";
// import Aman_Kumar_Singh from "../../assets/team_23-24/Aman_Singh.jpg";
// import Mayank_Chandra from "../../assets/team_23-24/Male-member.jpeg";
// import Neha_Dhruw_Volleyball from "../../assets/team_23-24/Neha_Dhruw.jpg";
// import Raj_Bhattacharya from "../../assets/team_23-24/Male-member.jpeg";
// import Aman from "../../assets/team_23-24/Aman.png"
// import Khuman from "../../assets/team_23-24/Khuman.jpg"
// import Neeraj from "../../assets/team_23-24/Neeraj.jpeg"
// import Shresth from "../../assets/team_23-24/Shresth.jpeg"
// import Taniska from "../../assets/team_23-24/Taniskha.jpg"
// import Arnav_Pandey from "../../assets/team_24-25/Photo from Arnav Pandey - Arnav Pandey.jpg"
// import Utkarsh_Rai from "../../assets/team_24-25/IMG_20240526_154302 - Utkarsh Rai.jpg"
// import Nitish_Dubey from "../../assets/team_24-25/IMG_20240524_215228 - Nitish Dubey.jpg"
// import Ayush_Menon from "../../assets/team_24-25/IMG_20240311_230953_146 - A Ayush Menon.jpg"
// import Apurva_Sahu from "../../assets/team_24-25/IMG_20231223_103412 - Apurva Sahu.jpg"
// import Aditya_Singh from "../../assets/team_24-25/IMG_1096 - Aditya Singh.jpeg"
// import Palak_Maheshwari from "../../assets/team_24-25/IMG_1340 - Palak Maheshwari.jpg"
// import Shreyas_Keshari from "../../assets/team_24-25/IMG_1975 - Shreyas Keshari.jpeg"
// import Mitesh_Pherwani from "../../assets/team_24-25/IMG_20240513_203333 - Mitesh Pherwani.jpg"
// import Mukul from "../../assets/team_24-25/IMG-20240121-WA0085 - Mukul Mukul.jpg"
// import Adarsh_Raj from "../../assets/team_24-25/IMG-20231003-WA0002 - Adarsh Raj.jpg"
// import Parthsarthi_Dutt from "../../assets/team_24-25/IMG-20240526-WA0018~2 - Parthsarthi Dutt.jpg"
// import Kartik_Pandey from "../../assets/team_24-25/MY_photo - Kartik Pandey.jpg"
// import Female from "../../assets/team_23-24/Female-member.jpeg"
// import Male from "../../assets/team_23-24/Male-member.jpeg"
// import Aditya_Jha from "../../assets/team_24-25/ad785c51-039b-42ad-beb4-3dacf0c4678c - Aditya Kumar Jha.jpeg";
// import Virat_Patel from "../../assets/team_24-25/Picsart_23-08-29_02-46-57-153 - Virat Patel.jpg"

import Akhil from "../../assets/team_25-26/Atharv/Akhil Nirala.jpg";
import Akritee from "../../assets/team_25-26/Atharv/Akritee Singh.jpg";
import Anjaney from "../../assets/team_25-26/Atharv/Anjaney Jha.jpg";
import Anmol from "../../assets/team_25-26/Atharv/Anmol Singh.jpg";
import Annam from "../../assets/team_25-26/Atharv/Annam HemaKumar.webp";
import Banoth from "../../assets/team_25-26/Atharv/Banoth Digamber.jpg";
import Chaudhary from "../../assets/team_25-26/Atharv/Chaudhary Malay Rajeshkumar.jpg"; 
import Darshna from "../../assets/team_25-26/Atharv/Darshana Sharma.png";
import Eishita from "../../assets/team_25-26/Atharv/Eishita Mishra.jpg";
import Harsh from "../../assets/team_25-26/Atharv/Harsh Kumar Patel.jpg";
import Janay from "../../assets/team_25-26/Atharv/Janay Bhanushali.jpg";
import Kanchireddy from "../../assets/team_25-26/Atharv/Kanchireddy Sai Siddhartha Reddy.jpg"; 
import Karan from "../../assets/team_25-26/Atharv/Karan Ramdas Jadhav.jpg";
import Kheelit from "../../assets/team_25-26/Atharv/Kheelit Chandrawanshi.jpg";
import Pulak from "../../assets/team_25-26/Atharv/Pulak Sharma.jpg";
import Rahul from "../../assets/team_25-26/Atharv/Rahul Barma.png";
import Sanidhya from "../../assets/team_25-26/Atharv/Sanidhya Solanki.jpg";
import Srishti from "../../assets/team_25-26/Atharv/Srishti Tripathi.jpg";
import Utsav from "../../assets/team_25-26/Atharv/Utsav Garg.jpg";
import Omkar from "../../assets/team_25-26/Atharv/Omkar Dattatraya Waghmode.jpg";











export const atharv: CrewProps[] = [
    {
        img: Anmol,
        name: "Anmol Singh",
        post: "Head",
    },
    {
        img: Annam,
        name: "Annam Hemakumar",
        post: "Head",
    },
    {
        img: Akhil,
        name: "Akhil Nirala",
        post: "Vice-Head",
    },
    {
        img: Kheelit,
        name: "Kheelit Chandrawanshi",
        post: "Dodge Ball InCharge",
    },
    {
        img: Akritee,
        name: "Akritee Singh",
        post: "Cricket InCharge",
    },
    {
        img: Kanchireddy,
        name: "Kanchireddy Sai Siddhartha Reddy",
        post: "Badminton Incharge",
    },
    {
        img: Chaudhary,
        name: "Chaudhary Malay Rajeshkumar",
        post: "Football InCharge",
    },
    {
        img: Eishita,
        name: "Eishita Mishra",
        post: "Badminton Incharge",
    },
    {
        img: Utsav,
        name: "Utsav Garg",
        post: "E-Sports InCharge",
    },
    {
        img: Anjaney,
        name: "Anjaney Jha",
        post: "Cricket InCharge",
    },
    {
        img: Janay,
        name: "Janay Bhanushali",
        post: "Chess Incharge",
    },
    {
        img: Pulak,
        name: "Pulak Sharma",
        post: "Chess Incharge",
    },
    {
        img: Banoth,
        name: "Banoth Digamber",
        post: "Volleyball InCharge",
    },
    {
        img: Karan,
        name: "Karan Ramdas Jadhav",
        post: "kabbadi InCharge",
    },
    {
        img: Darshna,
        name: "Darshna Sharma",
        post: "Throwball InCharge",
    },
    {
        img: Rahul,
        name: "Rahul Barma",
        post: "Basketball InCharge",
    },
    {
        img: Sanidhya,
        name: "Sanidhya Solanki",
        post: "Table-Tennis InCharge",
    },
    {
        img: Srishti,
        name: "Srishti Tripathi",
        post: "Basketball InCharge",
    },
    {
        img: Harsh,
        name: "Harsh Kumar Patel",
        post: "Atharv Mini Golf InCharge",
    },
    {
        img: Omkar,
        name: "Omkar Dattatraya Waghmode",
        post: "Cricket InCharge",
    },
    // {
    //     img: Khuman,
    //     name: "Khuman Singh Sonwani",
    //     post: "Gym In-Charge",
    // },
    // {
    //     img: Taniska,
    //     name: "Tanishka Chauhan",
    //     post: "Gym In-Charge",
    // },
    // {
    //     img: Shresth,
    //     name: "Shresht Mishra",
    //     post: "Gym Commitee Meber",
    // },
    // {
    //     img: Neeraj,
    //     name: "Neeraj Manhar",
    //     post: "Gym Commitee Meber",
    // },
    // {
    //     img: Aman,
    //     name: "Aman Sahu",
    //     post: "Gym Commitee Meber",
    // },

];