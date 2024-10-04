export interface JumbotronProps {
    color: string;
    contentLeft: JSX.Element;
    contentRight: JSX.Element;
}

/**
 * Builds a 2-column jumbotron, provided left and right content
 */
function Jumbotron(props: JumbotronProps) {
    const { contentLeft, contentRight, color } = props;

    return (
        <div className={"p-5 mb-4 rounded-3 " + color} style={{ /* remove default margin */ marginBottom: 0, borderRadius: 0 }}>
            <div className={"container-fluid py-5"}>
                <div className="row align-text-center">
                    <div className={"col-sm-6"}>{contentLeft}</div>
                    <div className={"col-sm-6"}>{contentRight}</div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;