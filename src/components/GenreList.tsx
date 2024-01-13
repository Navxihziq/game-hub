import { List, ListItem, Image, Button, HStack } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();
  console.log(data);
  return (
    <>
      <List>
        {data &&
          data.map((genre) => (
            <ListItem margin={2}>
              <HStack>
                <Image
                  fit="cover"
                  borderRadius={8}
                  boxSize={10}
                  src={genre.image_background}
                ></Image>
                <Button variant={"link"}>{genre.name}</Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default GenreList;
