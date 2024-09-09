import { useState } from "react";

export enum SelectedPageValueType {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
};

type SelectedPageType = {
  selectedPage: SelectedPageValueType;
  setSelectedPage: (value: SelectedPageValueType) => void
}

export function useSelectedPage(): SelectedPageType {
  const [selectedPage, setSelectedPage] = useState<SelectedPageValueType>(SelectedPageValueType.Home);

  return {
    selectedPage, setSelectedPage,
  }
}