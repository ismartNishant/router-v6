
import { SunIcon, MoonIcon } from 'lucide-react'
import { useState } from 'react';


const Theme = () => {
    const [theme, setTheme] = useState(true);
    return (
        <div className=" cursor-pointer ">
            {theme ? <SunIcon size={38} className="p-2 bg-yellow-300 rounded-full" onClick={() => setTheme(!theme)} /> :
                <MoonIcon size={38} className="p-2 bg-sky-300 rounded-full" onClick={() => setTheme(!theme)} />}
        </div>
    )
}

export default Theme
