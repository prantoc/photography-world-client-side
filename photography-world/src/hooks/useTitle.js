const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Photography World`;
    }, [title])
}

export default useTitle;