import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaPlus, FaRegUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdMicNone, MdOutlineNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = ({search , setSearch}) => {

    const [showUpload, setShowUpload] = useState(false);

    return (
        <nav className="navbar">
            <div className="menu">
                <BsList />
            </div>

            <Link to="/"><div className="name">
                <div className="logo">
                    <img src="./public/youtube.png" alt="Logo" />
                </div>
                YOUTuBE</div>
            </Link>

            <div className="search">
                <input type="text" 
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
                <button>
                    <GoSearch className="search-icon" />
                </button>
            </div>

            <div className="mic">
                <MdMicNone />
            </div>

            <div className="create-wrapper">
                <div className="create" onClick={() => setShowUpload(!showUpload)}>
                    <span className="plus"><FaPlus /></span>
                    <span className="create-text">Create</span>
                </div>

                {showUpload && (
                    <div className="upload-menu">
                        <div className="upload-item">📤 Upload Video</div>
                        <div className="upload-item">🎥 Go Live</div>
                    </div>
                )}
            </div>

            <div className="notification">
                <MdOutlineNotificationsNone />
            </div>

            <div className="profile">
                <FaRegUser />
            </div>
        </nav>
    );
}