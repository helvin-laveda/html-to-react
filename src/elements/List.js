import React from 'react'
import PropTypes from 'prop-types'


export default function List(props) {
    const className = ['list-reset']
    className.push(props.className)
    if (props.isSmall) {
        className.push('text-xs')
    }
    // if (props.isChecked) {
    //     className.push('is-checked')
    // }

    return (
        <ul className={className.join(" ")}>
            {
                props.data.map((list, index) => {
                    return (
                        <li key={index} className={list.isChecked ? "is-checked" : ""}>{list.content}</li>
                    )
                })
            }
            
        </ul>
    )
}

List.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    isChecked: PropTypes.bool,
    isSmall: PropTypes.bool
}
