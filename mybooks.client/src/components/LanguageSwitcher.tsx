import useLanguage from "./UseLanguage";

interface ILanguages<T> { [index: string]: T }

const lngs: ILanguages<string> = {
    en: 'English',
    es: 'Spanish'
};

function LanguageSwitcher() {
    const { currentLanguage, changeLanguage } = useLanguage();

    return (
        <li className="nav-item dropdown">
            <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {currentLanguage}
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                {Object.keys(lngs).map((lng: string) => (
                    <li>
                        <button key={lng} className="dropdown-item" type="submit" onClick={() => {
                            changeLanguage(lng);
                        }}>
                            {lngs[lng]}
                        </button>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default LanguageSwitcher;