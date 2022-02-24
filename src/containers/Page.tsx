import React, { FC } from "react";
import "./styles/Page.css"

const Page: FC = ({children}) => {
    return (
        <div className="Page">
            {children}
        </div>
    )
}

export default Page;