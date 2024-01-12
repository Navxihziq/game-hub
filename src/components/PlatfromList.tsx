import { HStack } from "@chakra-ui/react";
import { PlatformResponseUnit } from "../hooks/useGame";

interface Props {
  platforms: PlatformResponseUnit[];
}

const PlatfromList = ({ platforms }: Props) => {
  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <p key={platform.platform.id}>{platform.platform.name}</p>
        ))}
      </HStack>
    </>
  );
};

export default PlatfromList;
