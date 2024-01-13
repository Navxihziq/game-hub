import {
  Card,
  CardBody,
  Image,
  Heading,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatfromList from "./PlatfromList";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../services/image-url";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      ></Image>
      <CardBody>
        <Heading marginBottom={3} size="md">
          {game.name}
        </Heading>
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
