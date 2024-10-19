"use client";
import { useState } from "react";
import Search from "./Search";
import SidebarItem from "./SidebarItem";

const datas = [
  {
    id: "1",
    imageUrl: "/images/avatar-2.png",
    name: "Felecia Rower",
    post: "I will purchase it for sure.",
    date: "Apr 10",
  },
  {
    id: "2",
    imageUrl: "/images/avatar-1.png",
    name: "Adalberto Granzin",
    post: "UI/UX Designer",
    date: "Apr 10",
  },
  {
    id: "3",
    imageUrl: "/images/avatar-3.png",
    name: "Zenia Jacobs",
    post: "Building surveyor",
    date: "Apr 10",
  },
  {
    id: "4",
    imageUrl: "/images/avatar-4.png",
    name: "Heather Gislason",
    post: "UI Designer",
    date: "Apr 10",
  },
  {
    id: "5",
    imageUrl: "/images/avatar-5.png",
    name: "Rosemary Hettinger",
    post: "Direct Mobility Manager",
    date: "Apr 10",
  },
  {
    id: "6",
    imageUrl: "/images/avatar-6.png",
    name: "Gerardo Bogisich",
    post: "Forward Communications Coordinator",
    date: "Apr 10",
  },
  {
    id: "7",
    imageUrl: "/images/avatar-7.png",
    name: "Nicole Nolan",
    post: "Dynamic Factors Assistant",
    date: "Apr 10",
  },
  {
    id: "8",
    imageUrl: "/images/avatar-3.png",
    name: "Roxanne Schamberger",
    post: "Dynamic Web Engineer",
    date: "Apr 10",
  },
  {
    id: "9",
    imageUrl: "/images/avatar-8.png",
    name: "Katie Lakin",
    post: "Future Integration Designer",
    date: "Apr 10",
  },
  {
    id: "10",
    imageUrl: "/images/avatar-9.png",
    name: "Lucille Kub III",
    post: "International Mertrics Agent",
    date: "Apr 10",
  },
];

export default function Sidebar() {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <div className="bg-white w-1/3 border">
      {/* avatar and search */}
      <Search />

      {/* chats */}
      <div className="p-2">
        <h3 className="p-4 text-primary-400 text-lg pb-2 pt-3">Chats</h3>

        <ul>
          {datas.map((data) => (
            <SidebarItem
              user={data}
              key={data.id}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
