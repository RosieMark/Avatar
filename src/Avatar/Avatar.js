import './Avatar.css'

export default function Avatar(props) {
    return <div className="Avatar" >
                <img src={props.url} alt="Avatar"/>
           </div>
}
