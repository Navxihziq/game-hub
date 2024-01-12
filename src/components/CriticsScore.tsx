import { Tag } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  return <Tag colorScheme="Teal">{score}</Tag>;
};

export default CriticsScore;
