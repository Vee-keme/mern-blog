import { Children } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Layout({ Children }) {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
