import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

import { Platform } from "../hooks/useGame";

interface Props {
  platforms: Platform[];
}

const PlatfromList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };
  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]}></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatfromList;
