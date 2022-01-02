import React from 'react'
import PropTypes from 'prop-types'

export default function Section(props) {
    const className = ['section']
    className.push(props.className)
    if (props.isCenteredContent) {
        className.push('center-content')
    }
    return (
        <div>
            <section className={className.join(" ")}>
                {props.children}
            </section>
        </div>
    )
}

Section.propTypes = {
    isCenteredContent: PropTypes.bool,
    className: PropTypes.string,

}
