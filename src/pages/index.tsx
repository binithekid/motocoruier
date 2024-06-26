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
        <MidHero />
        <div className="px-6 md:px-20 flex w-full py-14 bg-gray-200 overflow-hidden flex-col">
          <h1 className="text-2xl md:text-4xl pb-4 md:pb-8 text-center font-light text-gray-800">
            Check out our{" "}
            <Link href="/blog">
              <span className="font-bold transition-all hover:opacity-70">
                Blog{" "}
              </span>
            </Link>{" "}
            for updates
          </h1>
          <div className="flex flex-wrap flex-grow md:flex-row w-full items-center justify-center gap-4 md:gap-2 flex-col">
            {posts.slice(0, 3).map((post: any, index: number) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
          <div className="flex flex-row justify-between pt-4">
            <div></div>
            <Link href="/blog">
              <button className="text-sm md:pr-2 text-gray-700 flex flex-row items-center gap-1 transition-all hover:opacity-70">
                See More <FaArrowRight className="text-xs text-gray-700" />
              </button>
            </Link>
          </div>
        </div>

        <div className="py-10 px-6 md:px-20 bg-blue-900 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-3 md:gap-8 w-full md:w-1/3">
            <h1 className="text-white text-xl text-center md:text-left md:text-3xl font-semibold">
              Get the help you need in{" "}
              <span className="text-blue-300">30 minutes or less</span>
            </h1>
            <h1
              onClick={handleCall}
              className="text-white text-xl text-center md:text-left md:text-3xl font-semibold cursor-pointer hover:opacity-80 transition-all"
            >
              Call us: <span className="text-blue-300"> 07301 611 578</span>
            </h1>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-2/3">
            <p className="text-white text-sm md:text-base font-light">
              We offer a quick response time of 30 minutes or less for our
              emergency plumbing services in West London. Our team of
              experienced and highly-skilled plumbers are always on hand to help
              you get the help you need when you need it most.
            </p>
            <p className="text-white font-light">
              We understand that plumbing emergencies can&apos;t wait, so we are
              ready to respond quickly to get your plumbing situation taken care
              of quickly and efficiently.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-1 px-6 md:px-20 py-10 md:py-20 items-center flex-wrap justify-center">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-1 w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-semibold">
              You break it, we fix it!
            </h1>
            <h1 className="text-xl md:text-2xl text-center md:text-left font-semibold text-blue-900">
              Call now for a free quote and an immediate response!
            </h1>
            <p className="font-light text-center text-sm md:text-base md:text-left text-gray-800 py-2 md:pr-10">
              We are available 24/7 to provide you with the best emergency
              plumbing service in West London. Call us now, and our emergency
              plumbers will be there in 30 minutes or less - ready to help get
              your plumbing situation sorted out quickly and efficiently. Let us
              take care of it and enjoy peace of mind that your emergency
              plumbing situation is in the hands of the professionals.
            </p>
            <button
              onClick={handleCall}
              className="mt-2 bg-blue-900 py-3 w-max px-6 text-white font-semibold rounded hover:opacity-80 transition-all"
            >
              GET A FREE QUOTE
            </button>
          </div>
          <div className="w-[30%] hidden md:block">
            <img src={tools.src} />
          </div>
        </div>
        <AreasHero />

        <div className="flex-row justify-center hidden md:flex items-center border-b w-full">
          <img
            src={IconList.src}
            alt="Retail Jobs London"
            className="w-auto cursor-pointer h-44"
          />
        </div>

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
