/*function Home(props){
    let user=props.user;
    console.log(user);
    return(
        <>
        <h1> Hi {user.username} welcome to home</h1>
        </>
    )
}
export default Home;
*/

import About from "./About.jsx"
//import Banner from "./Banner.jsx"
function Home() {
    return (
        <>
        <h1>Welcome Home</h1>
        <About/>
        </>
    )
}
export default Home;