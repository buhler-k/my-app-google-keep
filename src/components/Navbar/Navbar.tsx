import './Navbar.css';


const Navbar = () => {
    return(
        <nav>
            <div className="logo-area"> 
                <div className="tooltip">
                    <span className="material-symbols-outlined hover">menu</span> 
                    <span className="tooltip-text">Main Menu</span>
                </div>
                <img className="logo-img" src="https://www.gstatic.com/images/branding/productlogos/keep_2026/v2/web-48dp/logo_keep_2026_color_1x_web_48dp.png" />
                <span>KEEP</span>
            </div>

            <div className="search-area">
                <div className="tooltip">
                    <span className="material-symbols-outlined hover">search</span>
                    <span className="tooltip-text">Search</span>
                </div>
                <input type="text" placeholder="Search" />


            </div>

            <div className="settings-area">
                <div className="tooltip">
                    <span className="material-symbols-outlined hover">refresh</span>
                    <span className="tooltip-text">Refresh</span>
                </div>

                <div className="tooltip">
                    <span className="material-symbols-outlined hover">list</span>
                    <span className="tooltip-text">List view</span>
                </div>

                <div className="tooltip">
                    <span className="material-symbols-outlined hover">settings</span>
                    <span className="tooltip-text">Settings</span>
                </div>

            </div>

            <div className="profile-actions-area">
                <div className="tooltip">
                    <span className="material-symbols-outlined hover">apps</span>
                    <span className="tooltip-text">Google Apps</span>
                </div>

                <div className="tooltip">
                    <span className="material-symbols-outlined hover">account_circle</span>
                    <span className="tooltip-text">Accounts</span>
                </div>


            </div>


        </nav>
    );
}

export default Navbar;

