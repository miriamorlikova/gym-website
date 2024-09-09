import logo from "@/assets/logo-header.png";
import Navbar from "@/components/Navbar";

type PageHeaderProps = {};

export default function PageHeader(props: PageHeaderProps) {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between px-8 py-6">
      <div className="flex w-full items-center justify-between">
        <img src={logo} alt="logo" className="h-8" />
        <Navbar />
      </div>
    </nav>
  );
}
