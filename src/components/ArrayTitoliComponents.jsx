import { useState } from "react";
function useTitoli() {
    const [titoli, setTitoli] = useState([]);
    return { titoli, setTitoli };
}



export default useTitoli