import React from 'react'

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
  return (
    <>
        <nav>
            <div id="navBrand">
                Random Joke App
            </div>

            <div id="nav-links">
                {
                    navLinks.map ((links, index) => (
                        <a key={index} href={links.link}><i className={links.icon}></i> {links.title}</a>
                    ))
                }
            </div>
        </nav>
    </>
  )
}

export default Header