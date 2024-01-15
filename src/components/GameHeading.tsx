import { Heading } from "@chakra-ui/react";

interface Props {
  heading: string;
}
export const GameHeading = ({ heading }: Props) => {
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
