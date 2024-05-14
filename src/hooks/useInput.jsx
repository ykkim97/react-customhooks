import { useState, useEffect } from 'react'

export default function useInput(initialValue) {
    const [data, setData] = useState(initialValue);

    const onChange = (e) => {
        setData(e.target.value);
    }
    
    return [data, onChange];
}
