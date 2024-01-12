import {
  Card,
  CardBody,
  Image,
  Heading,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatfromList from "./PlatfromList";
import CriticsScore from "./CriticsScore";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name}></Image>
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <Stack>
          <HStack alignItems="center">
            <PlatfromList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticsScore score={game.metacritic}></CriticsScore>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
