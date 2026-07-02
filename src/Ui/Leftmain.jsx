import { useRef, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaHistory, FaHome, FaHouseUser, FaPodcast, FaRegNewspaper, FaTrophy } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineFileDownload, MdOutlineWatchLater } from "react-icons/md";
import { PiFilmSlateBold } from "react-icons/pi";
import { RiPlayList2Fill } from "react-icons/ri";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { TbLivePhotoFilled } from "react-icons/tb";

export const Leftmain = () => {
    
    const menuItems = [
        { icon: <FaHouseUser />, text: "Your Channel" },
        { icon: <FaHistory />, text: "History" },
        { icon: <RiPlayList2Fill />, text: "Playlists" },
        { icon: <MdOutlineWatchLater />, text: "Watch Later" },
        { icon: <BiSolidLike />, text: "Liked Videos" },
        { icon: <MdOutlineFileDownload />, text: "Downloads" },
        { icon: <FaPodcast />, text: "Podcasts" },
    ]

    const exploreItems = [
        { icon: <IoMusicalNoteOutline />, text: "Music" },
        { icon: <TbLivePhotoFilled />, text: "Live" },
        { icon: <SiYoutubegaming />, text: "Gaming" },  
        { icon: <PiFilmSlateBold />, text: "Films" },
        { icon: <FaRegNewspaper />, text: "News" },
        { icon: <FaTrophy />, text: "Sports" },
    ]

    const [scrolling, setScrolling] = useState(false);
    const timer = useRef();

    const handleScroll = () => {
        setScrolling(true);

        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            setScrolling(false);
        }, 1000);
    };

    return (
        <div className={`left-main ${scrolling ? "show-scroll" : ""}`}
                onScroll={handleScroll}>

                <div className="left-home">
                    <span className="left-home-icon"><FaHome /></span>
                    <span className="left-home-text">Home</span>
                </div>

                <div className="left-home">
                    <span className="left-home-icon"><SiYoutubeshorts /></span>
                    <span className="left-home-text">Shorts</span>
                </div>
                <hr />

                <div className="subscription">
                    <h4 className="subscription-text">Subscriptions</h4>
                    <span className="subscription-icon"><IoIosArrowForward /></span>
                </div>
                <hr />

                <div className="subscription">
                    <h4 className="subscription-text">You</h4>
                    <span className="subscription-icon"><IoIosArrowForward /></span>
                </div>

                {menuItems.map((item, index) => (
                    <div className="left-home" key={index}>
                        <span className="left-home-icon">{item.icon}</span>
                        <span className="left-home-text">{item.text}</span>
                    </div>
                ))}

                <hr />

                {/* explore */}
                <div className="subscription">
                    <h4 className="subscription-text">Explore</h4>
                    <span className="subscription-icon"><IoIosArrowForward /></span>
                </div>

                {exploreItems.map((items, index) => (
                    <div className="left-home" key={index}>
                        <span className="left-home-icon">{items.icon}</span>
                        <span className="left-home-text">{items.text}</span>
                    </div>
                ))}
            </div>
    );
}