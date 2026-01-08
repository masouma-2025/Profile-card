export default function StatCard({title,bigValue,footerText, icon}){
    return(
        <div className="card statCard">
            <div className="statTop">
                <p className="statTitle">
                    {title}
                </p>

                {icon ? <span className="staticon">{icon}</span> : null}
            </div>

            {bigValue ? <span className="statvalue">{bigValue}</span> : null}

            <p className="statfooter">
                {footerText}
            </p>
        </div>
    )
}