import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="mx-0 sm:mx-6">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;