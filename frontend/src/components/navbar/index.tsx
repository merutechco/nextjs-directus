'use client';

import { Navbar, NavbarCollapse } from "flowbite-react";
import Link from "next/link";

const Navigationbar = () => {
    return (
        <Navbar>
            {/* Your Navbar content here */}
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </Navbar.Brand>
            {/* <NavbarToggle /> */}
            <NavbarCollapse>
                <Navbar.Link as={Link} href="/">Home</Navbar.Link>
                <Navbar.Link href="/about-us">About</Navbar.Link>
                <Navbar.Link href="/code-of-conduct">Code of Conduct</Navbar.Link>
                <Navbar.Link href="/privacy-policy">Privacy Policy</Navbar.Link>
            </NavbarCollapse>
        </Navbar>
    );
};

export default Navigationbar;