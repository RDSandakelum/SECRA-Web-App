import React from "react";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Center,
} from "@chakra-ui/react";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

const SecraInfo = () => (
  <Box textAlign="justify" fontSize="20px" mt={4} w="90vw">
    <Heading as="h2" size="lg" mb={4}>
      What is SECRA?
    </Heading>
    <Text>
      SECRA is an International project funded by the European Commission
      ERASMUS+ scheme. SECRA demonstrates European added value through its
      transnational character aimed at a sustainable systemic impact. More
      specifically, SECRA promotes the sustainable development of the partner
      countries in the field of higher education according to Article 4 of EU
      regulation 1288 (2013).
    </Text>
    <br />
    <Text>
      SECRA will achieve this through a comprehensive training program, on site
      and online, in innovation and entrepreneurship education, mapping the UEC
      networks and monitoring their progress, as well as promoting the creation
      of such sustainable networks. In the background of a continuously shifting
      environment due to the occurrence of disasters, SECRA will enhance the
      capacity of HEIs to demonstrate to students who will become recent
      graduates that there are more options than working for the public sector,
      thus putting their technological skills into innovative uses.
    </Text>
    <br />
    <Text>
      This is in line with the EU 2020 (2010) strategy of a smart, sustainable,
      and inclusive growth. Smart growth is based on new knowledge creation and
      innovation, and SECRA’s experiential learning activities aim towards
      innovative connections with the private sector. Sustainable growth will be
      promoted through the integration of entrepreneurial thinking in training
      materials – not only market, but also green – social- and policy
      entrepreneurship. Finally, ensuring the participation of women and raising
      awareness about diversity issues promote the inclusive growth, one
      striving towards social cohesion.
    </Text>
    <br />
    <Text>
      It is the composition of the consortium, the know-how of the programme
      countries and the existing relationships between programme and partner
      countries that can make the creation of new knowledge and the knowledge
      transfer possible. What is more, SECRA is designed to gather data and
      establish learning feedback loops not only between programme and partner
      countries, but also among and within partner countries themselves,
      something that would not be possible to achieve with activities in each
      single country with national funding. Finally, the objectives of the
      program HEIs are aligned with that of the partner countries, different
      context notwithstanding.
    </Text>
    <br />
    <Heading as="h3" size="md" my={2}>
      Objectives of SECRA:
    </Heading>
    <br />
    <UnorderedList>
      <ListItem>
        Our first objective is to trace, delimit, and map the lacunae in UEC
        collaborations broadly identified through (i) work preceding SECRA and
        (ii) the needs analysis conducted together with the program countries of
        the Philippines, Thailand, and Sri Lanka. Bounding these lacunae will,
        inter alia, provide the foundation for the work conducted in the
        development WPs.
      </ListItem>
      <ListItem>
        Our second objective is to foster a better alignment between the
        interest of enterprises with the national public interest, especially in
        the field of disaster resilience.
      </ListItem>
      <ListItem>
        SECRA’s third objective is to create the prerequisites for, and
        establish a community of practice (CoP) involving university and
        enterprise actors in the field of disaster resilience, both in physical
        and in virtual network terms.
      </ListItem>
      <ListItem>
        SECRA’s fourth objective is to boost entrepreneurship and innovation in
        the selected HEIs by creating opportunities for collaboration with
        enterprise actors; support the transition of ideas into practice, and
        support start-ups and scale-ups while making use of existing knowledge
        resources at these HEIs.
      </ListItem>
      <ListItem>
        SECRA’s fifth objective is to develop and launch a monitoring and
        assessment tool that can feed into evaluations of UEC collaborations in
        a broader effort of evidence-based policy in the program countries.
      </ListItem>
      <ListItem>
        Our sixth objective is to foster appropriate, inclusive solutions for
        the promotion of gender equity and diversity.
      </ListItem>
    </UnorderedList>
  </Box>
);

export default function AboutMain() {
  return (
    <Box p={4}>
      <Box>
        <Navbarr />
      </Box>
      <Center>
        <Heading mt="40px" as="h1" size="xl" mb={4}>
          About SECRA
        </Heading>
      </Center>
      <Center>
        <SecraInfo />
      </Center>
      <br />
      <Footer />
    </Box>
  );
}
