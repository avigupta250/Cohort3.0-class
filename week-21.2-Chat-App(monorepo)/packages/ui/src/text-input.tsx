interface Proptype{
    placeholder:string
}


export function TextInput({
    placeholder
}:Proptype){

    return (
       <input
       placeholder={placeholder}
       style={{
        padding:10,
        margin:10,
        borderColor:"black",
        borderWidth:1,
    
       }}
       >
       </input>
    )
}