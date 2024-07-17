import React from "react"

interface TitleProps {
   content: string;
}

export const ContactListGroupName: React.FC<TitleProps> = (props) => {
   return (
      <h1>{props.content}</h1>
   )
}
  