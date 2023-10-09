import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    // const[isPending, setISPending] = useState(true);
    // const[error, setError] = useState(null);
    // const [blogs, setBlogs] = useState(null);
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    const title = "Welcome to the new Blog!";


const [name, setName] = useState("mario");

    // let name = "mario";
    // const [name, setName] = useState("mario");

    const Handleclick = () => {
        setName("luigi");
        // console.log("Ja es geht!");
        // document.getElementById("zwo").style.visibility ="visible";
    }

    // const handledelete = (id) => {

    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);

    // }

    // const pasteclick = () => {
    //     document.getElementById("container").style.visibility ="visible";
    //     document.getElementById("drei").style.visibility ="visible";
        
        
    // }

    // const writeinP = () => {
    //     window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    // }

    // useEffect(() => {
    //     // !!!!!!!!!!!!!!!TIMEOUT!!!!!!!!!!!!!!!!!!!!!
    //     setTimeout(() => {
    //         fetch("http://localhost:8000/blogs")
    //             .then(res => {
    //                 if(!res.ok){
    //                     throw Error("Could not fetch the Data for that Resource")
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 setBlogs(data);
    //                 setISPending(false);
    //                 setError(null);
    //             })
    //             .catch((err) => {
    //                 setISPending(false);
    //                 setError(err.message);
    //             })
    //     console.log("useeffect ran ")
    //     }, 1000);



    // }, []);



    return (  
        <div className="Home">
        <h1>{title}</h1>
            <h2>App Component</h2>
                <p>{name}</p>
                    <button onClick={Handleclick}>Click Me!</button>
        <br />
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        { isPending && <div>Loading...</div>}
        {error && <div> { error } </div>} 
        {/* <button onClick={() => setName("luigi")}>Change Name</button>
        <p>{name}</p> */}
        {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/>} */}
{/* list in react */}
        {/* {blogs.map((blog) => (

            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>

            </div>

        ))} */}
        
        {/* <br />
        <button id="zwo" onClick={pasteclick} style={{visibility: "hidden",}}>No! Click ME!</button>
        <br />
        <p id="container" style={{visibility: "hidden",}}>Hello!</p>
        <br />
        <button id="drei" onClick={writeinP} style={{visibility: "hidden",}}>????????</button> */}
        </div>
    );
}
 
export default Home;