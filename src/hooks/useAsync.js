import {useState,useEffect} from 'react'

export const useAsync=(asyncFunc,dependencies)=>{
    const [data,setData] = useState(null)
    const [error,setErro] = useState(null)
    const [loading,setLoading] = useState(true)

    if(!Array.isArray(dependencies)){
        console.error('No se paso un Array como paramento en useAsync')
        dependencies=[]
    }
    useEffect(()=>{
        setLoading(true)
        asyncFunc()
            .then(data=>{
                setData(data)
            })
            .catch(error=>{
                setErro(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    },dependencies) //eslint-disable-line

    return{
        data,
        error,
        loading
    }

}