import React from 'react'
import './SpeakerSelector.css'

const SpeakerSelector = () => {
    return (
        <div id="SpeakerSelector">
            <div class="dropdown is-info is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Dropdown button</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                            Dropdown item
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerSelector
