import { useEffect } from 'react';

const useTitle = (tittle) => {
    useEffect(() => {
        document.title = `${tittle} - BD News`
    }, [tittle])
};

export default useTitle;