import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  let heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games `;
  return (
    <Heading
      fontSize={{
        sm: 40,
        md: 45,
        lg: 50,
        xl: 60,
      }}
      marginY={4}
      as="h1"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
