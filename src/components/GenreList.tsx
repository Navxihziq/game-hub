import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();
  console.log(data);
  return <>{data && data.map((genre) => <p>{genre.name}</p>)}</>;
}

export default GenreList;
