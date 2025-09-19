import {ReactNode} from "react";
import { Box, Heading} from "@chakra-ui/react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItems = ({term, children}: Props) => {
    return (
        <Box marginY={5}>
            <Heading as="dt" fontSize="md" color="gray.600">{term}</Heading>
            <Box as="dd" fontSize="sm" color="gray.500">
                {children}
            </Box>
        </Box>
    );
}

export default DefinitionItems;