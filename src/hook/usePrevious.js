import React from 'react'

function usePrevious() {
    const value = React.useRef()

    const setValue = (newValue) => value.current = newValue;
    return [value.current, setValue];
}

export default usePrevious