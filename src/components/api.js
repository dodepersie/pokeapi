import React, { useEffect, useState } from "react"
import Select from 'react-select'

const Api = () => {

    const [datas, setDatas] = useState([])
    const [userSelect, setUserSelect] = useState("")
    const [isShow, setIsShow] = useState(false)

    const getBerries = async() => {
        const berries = await fetch("https://pokeapi.co/api/v2/berry/")
        const value = await berries.json()
        const result = value.results.map(data => {
            return {
                label: data.name,
                value: data.name
            }
        })

        setDatas(result.sort((a,b) => a.label.localeCompare(b.label)))
          
    }

    useEffect(() => {
        getBerries()
    }, [])

    const handleSubmit = () => {
        setIsShow(state => !state)
    }

    const handleChange = (value) => {
        setUserSelect(value)
    }


    return (
       <React.Fragment>
            <Select options={datas} onChange={(e) => handleChange(e.value)} />
            <br />
            <button className='btn btn-primary' onClick={() => handleSubmit()} disabled={!userSelect}>{isShow ? "Hide Button" : "Show values"}</button>
            <br />
            <h4>{isShow ? userSelect : ""}</h4>

       </React.Fragment>
    )
}

export default Api