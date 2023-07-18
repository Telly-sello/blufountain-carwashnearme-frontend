import Feature from "../components/About";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import About from "../components/About";
import SeoHead from "../components/SeoHead";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
        <Layout>
        <Hero/>      
        <Feature />
        <Contact/>
        <Pricing />
      </Layout>
    </>
  );
}
