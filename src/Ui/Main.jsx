import { Leftmain } from "./Leftmain";
import { Rightmain } from "./Rightmain";
import "../App.css";

export const Main = ({search}) => {
    return (
        <>
        <section className="main">
            <Leftmain />
            <Rightmain search={search}/>
        </section>
        </>
    );
}