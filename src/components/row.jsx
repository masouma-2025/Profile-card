export default function Row({label, value}){
    return(
        <div className="row">
            <span className="row-label">{label}</span>
            <span className="row-vlaue">{value}</span>
        </div>
    )
}