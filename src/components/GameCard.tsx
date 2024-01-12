import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatfromList from "./PlatfromList";

interface Prop {
  game: Game;
}

const GameCard = ({ game }: Prop) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name}></Image>
      <CardBody>
        <Stack>
          <Heading size="md">{game.name}</Heading>
          <PlatfromList platforms={game.platforms} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
