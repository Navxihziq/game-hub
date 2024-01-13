import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
}

const usePlatforms = () => useData<Platform>("/platforms");

export default usePlatforms;
