function Home(props){
    let user=props.user;
    console.log(user);
    return(
        <>
        <h1> Hi {user.username} welcome to home</h1>
        </>
    )
}
export default Home;