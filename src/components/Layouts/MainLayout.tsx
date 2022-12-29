import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default MainLayout;
