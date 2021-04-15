import './BodyColumns.css';

const BodyColumns = () => {
    return (
        <div className="hero" id="BodyColumns">
            <div className="columns">
                <div className="column">
                    <p>Topic</p>
                </div>
                <div className="column is-one-third">
                    Timer one
                </div>
                <div className="column is-one-third">
                    Timer two
                </div>
                <div className="column">
                    Control
                </div>
            </div>
        </div>
    )
}

export default BodyColumns
