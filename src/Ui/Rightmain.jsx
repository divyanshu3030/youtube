import { useRef, useState } from "react";

export const Rightmain = ({search}) => {

    const videos = [
        {
            img: "1.avif",
            text: "PEACEFUL Solo Camping in HEAVY RAIN 🌧️ | Cozy 2-Story Tent with 2 Dogs, Relaxing ASMR",
            link: "https://youtu.be/8-b_WRQo1TI?si=o5Dv-uO1tLfu4HK9",
            profile: "1.avif",
            views : "2M",
            time : "3 Months",
        },

        {
            img: "2.avif",
            text: "Boost Endurance Like Indian Army with These 5 Essential RUNNING Tips",
            link: "https://youtu.be/qVVYgPUhQyU?si=JGbUwZjJ3bswOjiU",
            profile: "2.avif",
            views : "3M",
            time : "3 Months",
        },

        {
            img: "3.avif",
            text: "Why 90% of New Runners Fail After Just 7 Days",
            link: "https://youtu.be/ImTBi5wO3Ro?si=ZSr3p91TQpkvxPyz",
            profile: "3.avif",
            views : "5M",
            time : "11 Months",
        },

        {
            img: "4.png",
            text: "The Morning Routine That Can Change Your Life | Dr. Sweta Adatia | Raj Shamani Clips",
            link: "https://youtu.be/0GjbIOS9Q90?si=_PvybDBcdKW0ZQ7G",
            profile: "4.webp",
            views : "2M",
            time : "3 Months",
        },

        {
            img: "5.avif",
            text: "Self Control का राज 🔥 | ब्रह्मचर्य से बनो अजेय और शक्तिशाली! Power Of Brahmcharya |",
            link: "https://youtu.be/jzEQpqIOrrg?si=nVKadsFaNFB4vlpm",
            profile: "5.avif",
            views : "1M",
            time : "4 Months",
        },

        {
            img: "6.avif",
            text: "NATURE'S PARADISE - VALLEY OF FLOWERS | UNESCO WORLD HERITAGE SITE",
            link: "https://youtu.be/rLsxK2_YwcM?si=QzT7mIxBWN_JEHQ8",
            profile: "6.avif",
            views : "1M",
            time : "3 Months",
        },

        {
            img: "7.avif",
            text: "❄️HEAVY SNOW CAMPING INSIDE A LUXURY AIR TENT",
            link: "https://youtu.be/BaiIcFt0Is4?si=8z-7Fk79HV0tRogd",
            profile: "7.avif",
            views : "1M",
            time : "6 Months",
        },

        {
            img: "8.avif",
            text: "Khat (Audio Version) | Navjot Ahuja | Devprayagii",
            link: "https://youtu.be/dun34KGC5JM?si=2dUy0V79kTVtcrFN",
            profile: "8.avif",
            views : "100K",
            time : "3 Months",
        },

        {
            img: "9.avif",
            text: "This is Bath, England | Slow British English",
            link: "https://youtu.be/wysdWQcV8_E?si=hCGRJoRDf7zfGq37",
            profile: "9.avif",
            views : "900K",
            time : "3 Months",
        },

        {
            img: "10.avif",
            text: "Unseen Meghalaya in monsoon | A village above clouds | Nishant Parmar & Dheeraj",
            link: "https://youtu.be/vXUHwJKg0cI?si=KGPZ4YiD_NU8pvtK",
            profile: "10.avif",
            views : "2M",
            time : "4 Months",
        },

        {
            img: "11.avif",
            text: "He Described the Pahalgam Atta*k Minute by Minute Ft. Nazakat Ali on Raw & Real",
            link: "https://youtu.be/Piz47JCr2DA?si=QYYFFBujnjTN6Cch",
            profile: "11.avif",
            views : "1M",
            time : "3 Months",
        },

        {
            img: "12.avif",
            text: "Road To Kedarnath | Via Helicopter From Phata",
            link: "https://youtu.be/QUYt9KouOms?si=FTL6TyAEZwbpZ2TV",
            profile: "12.avif",
            views : "2M",
            time : "3 Months",
        },

        {
            img: "13.avif",
            text: "He Left everything to Build His Dream Life in the Himalayas",
            link: "https://youtu.be/UdMQRx_eSP8?si=SsOPb3OCVnYWBd8_",
            profile: "13.avif",
            views : "890K",
            time : "4 Months",
        },

        {
            img: "14.avif",
            text: "Title ki jarurat nhi🥶🙌",
            link: "https://youtu.be/LdpZrPq-ATc?si=MdIszAV5_wlwm0ti",
            profile: "14.avif",
            views : "8M",
            time : "2 Months",
        },

        {
            img: "15.avif",
            text: "Kerala: World’s Highest Tea Gardens (7,900 ft! 😱)",
            link: "https://youtu.be/V_wANgjOeL8?si=1r0H9OjbgfeZ4UHl",
            profile: "15.avif",
            views : "5M",
            time : "3 Months",
        },

        {
            img: "16.avif",
            text: "Slow English Practice | Airport ESSENTIALS for traveling ✈️",
            link: "https://youtu.be/yIPTy4BqGSA?si=W8GTcKubHjPnONsV",
            profile: "16.avif",
            views : "3M",
            time : "1 Months",
        },

        {
            img: "17.avif",
            text: "Indian Para Commando Training | Paratroopers 100 km Run | Veer by Discovery",
            link: "https://youtu.be/oG6rSdYVZQw?si=L_l8QcfRHR31h-7b",
            profile: "17.avif",
            views : "1M",
            time : "2 Months",
        },
    ]

    const filtered = videos.filter((videos) => 
        videos.text.toLowerCase().includes(search.toLowerCase())
    );

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
        <div className={`right-main ${scrolling ? "show-scroll" : ""}`}
                onScroll={handleScroll}>
            {filtered.map((item, index) => (
                <a href={item.link} className="video" key={index}>
                    <div className="video-main">
                        <img src={item.img} alt="loading" />

                        <div className="video-info">
                            <img src={item.profile} alt="profile" className="channel-logo" />

                            <div className="video-details">
                                <div className="video-text">{item.text}</div>
                                <div className="channel-name">aa</div>
                                <div className="video-stats">{item.views} views • {item.time} ago</div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}