import { Box } from "@chakra-ui/react";
import React from "react";

import Navbarr from "./Navbarr";
import MainComponent from "./MainComponent";
import About from "./About";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

export default function HomePage() {
    return (
        <Box>
            <Navbarr />
            <MainComponent />
            <About />
            <ContactUs />
            <Footer />
        </Box>
    );
}
