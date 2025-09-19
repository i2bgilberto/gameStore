import { Heading, Text} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <Heading 
                fontSize="4xl" 
                textAlign="center" 
                mt={10} 
                color="red.500"
            >
                Oops!
            </Heading>
            <Text 
                fontSize="xl" 
                textAlign="center" 
                mt={4} 
                mb={8}
                maxW="500px" 
                mx="auto"
            >
                {!isRouteErrorResponse(error) ? (
                    "Something went wrong. Please try again later."
                ) : (
                    "The page you're looking for doesn't exist."
                )}
            </Text>
        </div>
    );
}
export default ErrorPage;