import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <>
      <Badge
        paddingX={2}
        borderRadius={"5px"}
        fontSize={"0.9em"}
        colorScheme={score >= 75 ? "green" : score >= 50 ? "yellow" : "red"}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
