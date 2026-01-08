import Row from "./row"
export default function AcountDetiles({detalis}){
    return(
        <div className="card infoCard">
            <h3 className="CardTitle">Acount Detalis</h3>

            <div className="rows">
                <Row label="Role" Value={detalis.Role}></Row>
                <Row label="Status" Value={<span className="pill">Active</span>}></Row>
                <Row label="Verification" Value={<span className="verified">Verified</span>}></Row>
            </div>
        </div>
    )
}