import { useState } from "react"
import './style.css'

export default function Home () {
    const [count, setCount] = useState<number>(0)

    const handleTambah = (): void => {
        setCount(count + 1)
    }
    const handleKurang = (): void => {
        setCount(count - 1)
    }
    const handleReset = (): void => {
        setCount(0)
    }

    return (
        <>
        <div className="container">
        <h1>Counter app</h1>
        <h1>Count: {count}</h1>
        <div className="btn-container">
        <button onClick={handleTambah}>Tambah</button>
        <button onClick={handleKurang}>Kurang</button>
        <button onClick={handleReset}>Reset</button>
        </div>
        </div>
        </>
    )
}