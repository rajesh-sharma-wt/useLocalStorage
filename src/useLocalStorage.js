import {useState, useEffect} from 'react'
export default function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {
        if(localStorage.getItem(key))
            return JSON.parse(localStorage.getItem(key))
        if(typeof initialValue == 'function') return initialValue()
        return initialValue
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data])

    return [data, setData]
}