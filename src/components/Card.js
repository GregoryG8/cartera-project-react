import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack borderWidth="1px"  borderRadius="lg" overflow="hidden" spacing={4} align="stretch" backgroundColor="white">
      <Image src={imageSrc} alt={title} borderRadius="5px"/>
      <HStack justifyContent="space-between" alignItems="center" padding="10px">
        <Heading as="h3" size="md" color="black" fontWeight="bold">
          {title}
        </Heading>
        <Text color="black" cursor="pointer">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </Text>
        
      </HStack>
      <Text color="black" padding="10px">
        {description}
      </Text>
    </VStack>
  );
};

export default Card;
