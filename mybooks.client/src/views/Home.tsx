import Footer from "../components/home/Footer";
import Jumbotron from "../components/home/Jumbotron";

function Home() {
    return (
        <>
            <Jumbotron
                color={"bg-white"}
                contentLeft={
                    <>
                        <h1 className={"display-4"}>Read More</h1>
                        <h1 className={"display-4"}>Have Fun</h1>
                        <p className={"lead"}>Providing tools to meet your reading goals.</p>
                    </>
                }
                contentRight={
                    <>
                        <img src="https://placehold.it/150x80?text=Image" className={"img-responsive"} style={{ width: "100%" }} alt="Image" />
                    </>
                }
            />
            <Jumbotron
                color={"bg-light"}
                contentLeft={
                    <>
                        <img src="https://placehold.it/150x80?text=Image" className={"img-responsive"} style={{ width: "100%" }} alt="Image" />
                    </>
                }
                contentRight={
                    <>
                        <h1 className={"display-4"}>Reading Companion</h1>
                        <p className={"lead"}>blah blah look at this cool example</p>
                    </>
                }
            />
            <Jumbotron
                color={"bg-white"}
                contentLeft={
                    <>
                        <h1 className={"display-4"}>Manage your libary</h1>
                        <p className={"lead"}>blah blah keep track of your books and progress</p>
                    </>
                }
                contentRight={
                    <>
                        <img src="https://placehold.it/150x80?text=Image" className={"img-responsive"} style={{ width: "100%" }} alt="Image" />
                    </>
                }
            />
            <Footer />
        </>
    );
}

export default Home;