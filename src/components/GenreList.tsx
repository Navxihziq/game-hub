import { List, ListItem, Image, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const { data } = useGenres();

  return (
    <>
      <List>
        {data &&
          data.map((genre) => (
            <ListItem key={genre.id} margin={2}>
              <HStack>
                <Image
                  fit="cover"
                  borderRadius={8}
                  boxSize={10}
                  src={genre.image_background}
                ></Image>
                <Button
                  onClick={() => {
                    setSelectedGenre(genre.name);
                    onSelectGenre(genre);
                  }}
                  fontSize={"md"}
                  variant={"link"}
                  fontWeight={selectedGenre === genre.name ? "bold" : "regular"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default GenreList;
