import Jumbotron from "../components/home/Jumbotron";

function Home() {
    return (
        <>
            <Jumbotron
                contentLeft={
                    <>
                        <h1>Read More</h1>
                        <h1>Have Fun</h1>
                        <p>Providing tools to meet your reading goals.</p>
                    </>
                }
                contentRight={
                    <>
                        <img src="https://placehold.it/150x80?text=Image" className={"img-responsive"} style={{ width: "100%" }} alt="Image" />
                    </>
                }
            />
            <Jumbotron
                contentLeft={
                    <>
                        <img src="https://placehold.it/150x80?text=Image" className={"img-responsive"} style={{ width: "100%" }} alt="Image" />
                    </>
                }
                contentRight={
                    <>
                        <h1>Stay focussed while reading</h1>
                        <p>blah blah look at this cool example</p>
                    </>
                }
            />
            <Jumbotron
                contentLeft={
                    <>
                        <h1>Manage your libary</h1>
                        <p>blah blah keep track of your books and progress</p>
                    </>
                }
                contentRight={
                    <>
                        <img src="https://placehold.it/150x80?text=Image" className={"img-responsive"} style={{ width: "100%" }} alt="Image" />
                    </>
                }
            />
        </>
    );
}

export default Home;