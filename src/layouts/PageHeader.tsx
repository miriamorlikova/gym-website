import logo from "@/assets/logo-header.png";
import Navbar from "@/components/Navbar";
import useScroll from "@/hooks/useScroll";

type PageHeaderProps = {};

export default function PageHeader(props: PageHeaderProps) {
  const { isTopOfPage } = useScroll();
  return (
    <div
      className={`fixed top-0 z-30 flex w-full items-center justify-between px-8 py-6 lg:px-12 ${isTopOfPage ? "" : "bg-gradient-dark drop-shadow"}`}
    >
      <div className="flex w-full items-center justify-between">
        <img src={logo} alt="logo" className="h-8" />
        <Navbar />
      </div>
    </div>
  );
}
