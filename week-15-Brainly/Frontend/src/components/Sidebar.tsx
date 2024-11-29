import { FaTwitter, FaYoutube } from "react-icons/fa";
import { SidebarItems } from "./SidebarItems";
import { useState } from "react";

export function SideBar() {
  const [activeFilter, setActiveFilter] = useState<string>(""); // Track the active filter

  return (
    <div className="h-screen pl-4 text-blue- bg-white border-r pr-4 w-72 fixed left-0 top-0">
      <div className="flex font-bold pt-4 text-2xl">
        Brainly
      </div>
      <div className="pt-4 ">
        <SidebarItems
          text="Twitter"
          icon={<FaTwitter className="text-blue-600" />}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <SidebarItems
          text="YouTube"
          icon={<FaYoutube className="text-red-700" />}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </div>
  );
}
