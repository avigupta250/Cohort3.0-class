import { ReactElement } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allContentAtom, contentAtom } from "../Recoil/store/atoms/content";

interface SidebarItemsProps {
  text: string;
  icon: ReactElement;
  activeFilter: string; // Prop to check the currently active filter
  setActiveFilter: (filter: string) => void; // Function to update the active filter
}

export function SidebarItems({ text, icon, activeFilter, setActiveFilter }: SidebarItemsProps) {
  const setContent = useSetRecoilState(contentAtom);
  const allContent = useRecoilValue(allContentAtom);

  function filterHandler() {
    // Filter content and update state
    const typeItem = allContent.filter((c) => c.type === text.toLowerCase());
    setContent(typeItem);
    setActiveFilter(text); // Set the clicked item as the active filter
  }

  // Determine if this item is the active filter
  const isActive = activeFilter === text;

  return (
    <div
      onClick={filterHandler}
      className={`flex transition-all duration-200 mb-2 rounded-md cursor-pointer items-center ${
        isActive ? "bg-blue-400 text-white" : "hover:bg-slate-200 text-gray"
      }`}
    >
      <div className="p-2 text-[20px]">{icon}</div>
      <div className="p-2">{text}</div>
    </div>
  );
}
