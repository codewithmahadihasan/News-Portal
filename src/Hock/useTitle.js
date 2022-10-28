import { useEffect } from 'react';

const useTitle = (tittle) => {
    useEffect(() => {
        document.title = tittle
    }, [tittle])
};

export default useTitle;