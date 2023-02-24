import Footer from "src/Components/Footer/Footer";
import { useRouter } from "next/router";
import Heading from "src/Components/Heading/Heading";
import Bar from "../Components/Bar/Bar";
import Banner from "../Components/Banner/Banner";

const MainLayout = ({ children }) => {
  const router = useRouter();
  
  return (
    <>
      <header>
        <Bar />
        <Heading />
        {router.pathname === "/" && <Banner />}
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
