import { ReactElement } from "react";

export default function ProjectContent(props: ProjectContentProps){
    return(
        <>
            <h3>Superior</h3>

            {props.children}
            
            <h3>Inferior</h3>
        </>
    )
}

interface ProjectContentProps {
    children: ReactElement
}