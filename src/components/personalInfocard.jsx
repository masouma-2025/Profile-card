import Row from "./row";

export default function PersonalInfocard({info}){
   return(
    <div className="card indoCard">
        <h2 className="cardTitle">personal Information</h2>
        <div className="rows">
            {
                object.key(info).map((label)=>{
                    <Row label={label} value={info[label]}></Row>
                } )
            }
        </div>
    </div>
   )
}