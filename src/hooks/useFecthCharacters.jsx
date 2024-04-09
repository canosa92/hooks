import { useEffect,useState } from "react";

const useFecthCharacters=(url)=>{
    const[characters,setCharacters]=useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        const  fetchData=async()=>{
        try{
            const response=await fetch(url)
                const data= await response.json();
                    if(!data){
                    setError('No se encontro la peticion')
                    return;
                    }
                    setCharacters(data)
                    setLoading(false)
        }catch(error){
            setError(error);
        }finally {
            setLoading(false)
        }
        };
        fetchData();
        },[url])
    
      return { characters , loading , error} ;
      }
      
export default useFecthCharacters;

/*import { useEffect, useState } from "react";

const useFetchCharacter = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // async function fetchURL () {
    //   try {
    //     const response = await fetch(url)
    //     const dataJson = await response.json()
    //     setData(dataJson)
    //     setLoading(false)
    //   } catch (err) {
    //     console.log(setError(err))
    //   }
    // }
    fetch(url)
      .then(response => response.json())
      .then(dataJson => {
        setData(dataJson)
        setLoading(false)
      }).catch(err => {
        console.log(setError(err))
      }) 
  }, [])
  return {data, loading, error}
  
};

export default useFetchCharacter
*/
