import {
  Button,
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Center,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGamesQueryStore from "../store";




const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId= useGamesQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGamesQueryStore(s => s.setGenre)
  if (error) return null;
  if (isLoading)
    return (
      <Center h={"100%"}>
        <Spinner />
      </Center>
    );
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <hr />

      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
