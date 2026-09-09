import React from "react";
import Chat from "./Chat";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";

export default function CommonComponents() {
  return (
    <>
      <Chat />
      <Sidebar />
      <MobileMenu />
    </>
  );
}
