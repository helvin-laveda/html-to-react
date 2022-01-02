import React from 'react'
import PropTypes from 'prop-types'

export default function Feature(props) {
    return (
        <div className="tiles-item">
        <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
                <div
                    className="features-tiles-item-image mb-16"
                >
                    <img
                        src={props.data.img}
                        alt={props.data.alt}
                        width="64"
                        height="64"
                    />
                </div>
            </div>
            <div
                className="features-tiles-item-content"
            >
                <h4 className="mt-0 mb-8">
                {props.data.title}
                </h4>
                <p className="m-0 text-sm">
                {props.data.description}
                </p>
            </div>
        </div>
    </div>
    )
}

Feature.propTypes = {
    data: PropTypes.object
}
