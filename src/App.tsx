/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from "./components/Layout";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Experience } from "./components/sections/Experience";
import { Menu } from "./components/sections/Menu";
import { Cocktails } from "./components/sections/Cocktails";
import { Reservation } from "./components/sections/Reservation";
import { Events } from "./components/sections/Events";
import { About } from "./components/sections/About";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <Layout>
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <Experience />
      <Menu />
      <Cocktails />
      <Reservation />
      <Events />
      <About />
      <Footer />
    </Layout>
  );
}

