import React, {useEffect, useState} from "react";
// create your App component here

function App(){
    const [content, setContent] = useState(<p>Loading...</p>)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(json => setContent(<img src={json.message} alt="A Random Dog" />))
    }, [])

    return (
        content
    )
}

export default App