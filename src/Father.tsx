import { useContext } from "react"
import Child from "./Child";
import ContextValue from "./ContextValue"

export default function Father(){
    const value = useContext(ContextValue);

    return (
        <>
        <h3>Father Component: Context value is: {value}</h3>
        <Child />
        </>
    )
}