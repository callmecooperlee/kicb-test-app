import {FC, ReactNode, useEffect, useState} from "react";
import ReactDOM  from "react-dom";

interface ReactPortalProps {
    children?: ReactNode
}

export const ReactPortal: FC<ReactPortalProps> = ({ children }) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}

