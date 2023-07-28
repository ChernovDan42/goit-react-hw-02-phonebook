


export function ContactItem ({name,number,id,onClick}){


    return (
            <li>
            <p style={{
                display:"inline-block"
            }}>{name}: {number}</p>
            <button type="button" name={name} onClick={()=>onClick(id)}>Delete</button>
            </li>
        )
}
