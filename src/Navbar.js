const Navbar = () => {
    return ( 
        <nav className="navbar"> 
        <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <br />
                {/* Inline Style */}
                <a href="/create" syle={{
                    color: "blue",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>New Blog</a>

            </div>       
        </nav>
            );
}
 
export default Navbar ;