import './BodyColumns.css';

const BodyColumns = () => {
    return (
        <div class="hero is-fullheight">
            <div class="columns">
                <div class="column">
                    <p>Topic</p>
                </div>
                <div class="column is-one-third">
                    Timer one
                </div>
                <div class="column is-one-third">
                    Timer two
                </div>
                <div class="column">
                    Control
                </div>
            </div>
        </div>
    )
}

export default BodyColumns
