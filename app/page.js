import Navbar from "@/components/Navbar";
import Main from "../components/Main";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Stocks from "@/components/Stocks";

export default function Home() {
  return (
    <>
      <main className="flex lg:hidden w-screen h-full items-stretch flex-grow flex-col text-bold m-1 mb-2 bg-black">
        <Navbar />
        <Stocks />
        <div className='flex lg:hidden h-full'>
          <div className="flex absolute z-50 h-full">
            <Dashboard />
          </div>
          <div className="h-full">
            <FeaturedCompanies />
            <Main />
          </div>
        </div>
      </main>

      <Footer />

      <main className="hidden lg:flex w-screen h-full items-stretch flex-grow flex-col text-bold m-1 mb-2 bg-black">
        <Navbar />
        <Stocks />
        <FeaturedCompanies />
        <Main />
      </main>
    </>
  );
}
