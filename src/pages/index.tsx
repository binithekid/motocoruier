import Head from "next/head";
import NavBar from "@/components/NavBar";
import bg from "../../public/images/plumberbackground.jpeg";
import mobilebg from "../../public/images/mobilebackground.jpeg";
import HeroLeft from "@/components/HeroLeft";
import HeroForm from "@/components/HeroForm";
import MidHero from "@/components/MidHero";
import ServicesHero from "@/components/ServicesHero";
import tools from "../../public/images/tools.jpg";
import AreasHero from "@/components/AreasHero";
import Footer from "@/components/Footer";
import { client } from "../../lib/contentful/client";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import IconList from "../../public/images/safetylogo/imagesrow.png";
import Testimonials from "@/components/Testimonials";

export default function Home({ posts }: any) {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <>
      <Head>
        <title>Motorcycle Courier London | 24/7 Fast Response</title>
        <meta
          name="description"
          content="Discover swift and reliable emergency plumbing and heating services in London. Our experienced team is ready to tackle urgent issues with efficiency, ensuring your home stays warm and your plumbing works seamlessly. Trust us for prompt and professional solutions to your emergency heating and plumbing needs in the heart of London"
        />
      </Head>
      <main>
        <NavBar />
        <div className="relative w-full overflow-hidden pb-20">
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
            className="hidden md:block absolute inset-0 bg-cover brightness-50"
          ></div>
          <div
            style={{
              backgroundImage: `url(${mobilebg.src})`,
              backgroundSize: "contain", // Adjust the background size to zoom out
            }}
            className="block md:hidden absolute inset-0 bg-cover brightness-50"
          ></div>

          <div className="md:px-20 lg:px-30 flex flex-col px-6 md:flex-row w-full h-max mt-8 md:mt-20">
            <div className="w-full md:w-2/3 items-center justify-center flex relative">
              <HeroLeft />
            </div>
            <div className="w-full md:w-1/3">
              <HeroForm />
            </div>
          </div>
        </div>

        <ServicesHero />

        <div className="w-full flex items-center py-10 md:py-16 bg-blue-900 justify-center">
          <h1 className="text-white text-center text-xl md:text-4xl font-semibold">
            Professional and experienced team
          </h1>
        </div>

        <Testimonials />

        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: response.items,
      revalidate: 60,
    },
  };
};
