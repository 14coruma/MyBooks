import Footer from "../components/home/Footer";
import Jumbotron from "../components/home/Jumbotron";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Jumbotron
                color={"bg-white"}
                contentLeft={
                    <>
                        <h1 className={"display-4"}>{t('home.j1.readMore')}</h1>
                        <p className={"lead"}>{t('home.j1.explanation')}</p>
                        <a href={"/signin"} type={"button"} className={"btn btn-primary"}>{t('home.j1.signupBtn')}</a>
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
                } contentRight={
                    <>
                        <h1 className={"display-4"}>{t('home.j2.readingCompanion')}</h1>
                        <p className={"lead"}>{t('home.j2.explanation')}</p>
                    </>
                }
            />
            <Jumbotron
                color={"bg-white"}
                contentLeft={
                    <>
                        <h1 className={"display-4"}>{t('home.j3.manageLibrary')}</h1>
                        <p className={"lead"}>{t('home.j3.explanation')}</p>
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