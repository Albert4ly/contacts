import  React from "react"

interface TitleComponent {
   content: string;
}

export const ComponentName: React.FC<TitleComponent> = (props) => {
   return (
       <h1>{props.content}</h1>
   )
}