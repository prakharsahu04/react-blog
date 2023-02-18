import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://cdn.pixabay.com/photo/2021/10/15/01/57/women-6710736_960_720.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit ameisicing elit. Fac Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas minus et aliquid.
                    </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                     </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> Follow Us</span>
                <div className="sidebarSocial">
                <i className="sidebaricon fa-brands fa-square-facebook"></i>
                <i className="sidebaricon fa-brands fa-twitter"></i>
                <i className="sidebaricon fa-brands fa-pinterest"></i>
                <i className="sidebaricon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    );
}
