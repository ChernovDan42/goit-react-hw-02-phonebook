


export function ContactItem ({name,number,onClick}){


    return (
            <li>
            <p style={{
                display:"inline-block"
            }}>{name}: {number}</p>
            <button onClick={onClick}>Delete</button>
            </li>
        )
}
