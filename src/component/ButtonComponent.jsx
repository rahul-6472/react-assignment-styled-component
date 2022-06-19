import  styled from "styled-components" 


const ButtonComponent = ({backgroundColor,text,color,border}) => {

const Button = styled.button`
 margin-right: 1rem;
 padding: .5rem;
 border-radius: .1rem;
 background-color: transparent;
 background-color: ${backgroundColor};
 color:${color};
 border:${border};
 font-size:0.96rem;
`

return <Button border = {border} backgroundColor = {backgroundColor} color = {color}>{text}</Button>
}

export default ButtonComponent