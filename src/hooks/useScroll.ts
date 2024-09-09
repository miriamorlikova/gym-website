import { useEffect, useState } from "react";
import {
  SelectedPageValueType,
  useSelectedPage,
} from "@/hooks/useSelectedPage";



export default function useScroll() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const { setSelectedPage } = useSelectedPage();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPageValueType.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return {
    isTopOfPage, setIsTopOfPage
  }
}