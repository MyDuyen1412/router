import React from 'react'

const Animation = ({children,timeout, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default Animation
