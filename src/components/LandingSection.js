import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Gregory!";
const bio1 = "A software developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2x1" src="https://i.pravatar.cc/150?img=7"/>
      <Heading as="h1" size="2x1" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h2" size="lg" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
