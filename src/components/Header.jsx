"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  //route'u belirlememiz için useRouter fonks kullanıyoruz
  const router = useRouter();

  const menu = [
    {
      name: "About",
      url: "/",
    },
    {
      name: "Sign In",
      url: "/",
    },
  ];

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-red-500 rounded-lg p-3 text-2xl font-bold">
        Netflix-Clone
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          disabled
          type="text"
          className="outline-none flex-1 bg-transparent"
          placeholder="Arama yapın.."
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
