import useMediaQuery from "@/hooks/useMediaQuery";
import logo from "../assets/logo-header.png";

export default function Footer() {
  const isAboveMediumScreen = useMediaQuery("(min-width: 800px)");
  return (
    <footer className="border-t border-primary-medium border-opacity-50 bg-primary-dark px-8 py-8 md:px-16">
      <div
        className={`justify-between gap-3 ${isAboveMediumScreen ? "flex" : "flex flex-col gap-6"}`}
      >
        <div className="basis-1/2">
          <img src={logo} alt="logo" className="h-8" />
          <p className="mt-3 text-xxs md:max-w-[70%]">
            This website and its content are the property of Furigym.
            Unauthorized use or reproduction of any content, including images,
            text, and logos, is strictly prohibited. For inquiries regarding
            memberships, classes, or any other services, please contact us
            directly. Your privacy and data security are important to us.
          </p>
          <p className="mt-3 text-sm capitalize md:text-base">
            <span className="pt-0.5">©</span> furigym all rights reserved.
          </p>
        </div>
        <div className="basis-1/4 text-xs md:text-sm">
          <h4 className="mb-3 text-sm font-bold">Opening hours</h4>
          <p className="mb-2">Mon - Fri: 7:00 AM - 10:00 PM</p>
          <p className="mb-2">Sat: 9:00 AM - 8:00 PM</p>
          <p className="mb-2">Sun: 7:00 AM - 11:00 AM</p>
        </div>
        <div className="basis-1/4 text-xs md:text-sm">
          <h4 className="mb-3 text-sm font-bold">Contacts</h4>
          <p className="mb-2">Phone: + 420 111 222 333</p>
          <p className="mb-2">Email: furigym@gmail.com</p>
          <p className="mb-2">
            Address: Jiráskovo nám. 160/1a, 702 00, Ostrava
          </p>
        </div>
      </div>
    </footer>
  );
}
