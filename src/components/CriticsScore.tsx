import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  // color the badge based on number of the score
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticsScore;
