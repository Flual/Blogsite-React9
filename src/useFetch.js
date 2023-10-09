import { useState, useEffect} from "react";


const useFetch = (url) => {
    const[isPending, setISPending] = useState(true);
    const[error, setError] = useState(null);
    const [data, setData] = useState(null);



    useEffect(() => {
        const abortCont = new AbortController();

        // !!!!!!!!!!!!!!!TIMEOUT!!!!!!!!!!!!!!!!!!!!!
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error("Could not fetch the Data for that Resource")
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setISPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'Aborterror'){console.log('fetch aborted')}
                    else{
                        setISPending(false);
                        setError(err.message);
                }
                    
                })
        console.log("useeffect ran ")
        }, 1000);

        return () => abortCont.abort();


    }, [url]);
    return { data, isPending, error}
}

export default useFetch;