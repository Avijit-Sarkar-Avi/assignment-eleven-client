import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - Avi Photography`;
    }, [title])
};

export default UseTitle;