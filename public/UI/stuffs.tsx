export const CenterY = ({children}) => {
    const stcenty = {
        width: "auto",
        position: "relative",
        height:"auto",
        top:"50%",
        transform:"translateY(-50%)",
        margin:"auto",
        textAlign:"center",
    } as React.CSSProperties
    return (
        <div style={stcenty} >
            {children}
        </div>
    )
}
export const Shadow = ({children}) =>{
    const stshadow = {
        width : "100%",
        height:"100%",
        background:"#000000a6"
    } as React.CSSProperties
    return(
        <div style={stshadow}>
            {children}
        </div>
    )
}