import { List, ListIcon, ListItem } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();
  console.log(data);
  return (
    <>
      <List>
        {data &&
          data.map((genre) => (
            <ListItem>
              <ListIcon />
              {genre.name}
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default GenreList;
