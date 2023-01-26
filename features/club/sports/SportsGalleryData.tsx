import  DSC_0029_min from "../../../assets/atharv/DSC_0029-min.jpg"
import  DSC_0030_min from "../../../assets/atharv/DSC_0163-min.jpg"
import  DSC_0031_min from "../../../assets/atharv/DSC_0415-min.jpg"
import  DSC_0032_min from "../../../assets/atharv/DSC_1027-min.jpg"
import  DSC_0033_min from "../../../assets/atharv/DSC_0029-min.jpg"
import { StaticImageData } from "next/image"

interface CrewProps {
  img: StaticImageData;
}

export const Data = [
  {
    Year: 2022,
    Introduction:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia. ",
    Winners:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et sagittis massa. Cras neque ante, iaculis ac massa in, maximus egestas erat. Nullam pellentesque quam sit amet suscipit varius. Sed at cursus eros, eu ornare enim. Suspendisse potenti. Ut quis velit sed lorem convallis lacinia. ",
  }
];

export const itemData:CrewProps[] = [
  {
    img:  DSC_0029_min,
  },
  {
    img:  DSC_0030_min,
  },
  {
    img:  DSC_0031_min,
  },
  {
    img:  DSC_0032_min,
  },
  {
    img:  DSC_0033_min,
  },
  {
    img:  DSC_0030_min,
  },
];
