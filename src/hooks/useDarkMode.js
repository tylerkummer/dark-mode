import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-mode', true);

    useEffect(() => {
        if(value === true){
           return document.body.classList.add('dark-mode');
        } else {
            return document.body.classList.remove('dark-mode');
        }
    }, [setValue]);

    return [value, setValue];
}