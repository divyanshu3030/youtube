import { Header } from "./Ui/Header";
import './App.css';
import { Main } from "./Ui/Main";
import { useState } from "react";

export const App = () => {

  const [search, setSearch] = useState("");
  return (
    <>
    <Header search={search} setSearch={setSearch}/>
    <Main search={search}/>
    </>
  );
}