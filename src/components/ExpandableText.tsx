import { useState } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const limits = 300;
    if (!children) return null;
    if (children.length <= limits) return <p>{children}</p>
    if (isExpanded) return <p>{children} <Button  size="xs" colorScheme="blue" onClick={() => setIsExpanded(false)}>Show Less</Button></p>
    const text = children.substring(0, limits) + '...';
    return <p>{text} <Button size="xs" colorScheme="blue"  onClick={() => setIsExpanded(true)}>Show More</Button></p>
}



export default ExpandableText;