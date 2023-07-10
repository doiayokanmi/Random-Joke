import React, { useState } from 'react'

const Header = () => {

    const navLinks = [
        {
            title: "About",
            link: "#",
            icon: "fa-solid fa-thumbs-up"
        },
        {
            title: "Docs",
            link: "#",
            icon: "fa-solid fa-circle-dollar-to-slot"
        },
        {
            title: "Donate",
            link: "#", 
            icon: "fa-solid fa-folder-open"
        }
    ]

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navOpen = () => {
        setIsNavOpen(!isNavOpen)
    }
  return (
    <>
        <nav>
            <div id="navBrand">
                <img className='img-fluid' width={"150px"} src="/logo.PNG" alt="" />
            </div>

            <div id="nav-links" className={isNavOpen ? "open" : ""}>
                {
                    navLinks.map ((links, index) => (
                        <a key={index} href={links.link}><i className={links.icon}></i> {links.title}</a>
                    ))
                }
            </div>

            <i className={isNavOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} id='menu' onClick={navOpen}></i>
        </nav>
    </>
  )
}

export default Header