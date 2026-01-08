import AcountDetiles from "./AcountDeatiles";
import PersonalInfocard from "./personalInfocard";
import StatCard from "./StatCard";
import Topheader from "./Topheader";

export default function ProfilPage({user}){
    return(
     <div className="layout">
       <Topheader
       name={user.name} 
       username={user.username} 
       avaterImage={user.avaterImage}>
       </Topheader>

       <div className="statsGrid">
        <StatCard
         title="Xp"
         bigValue={user.xp}
         footerText={`Last Active: ${user.lastActive}`}
        ></StatCard>

        <StatCard
         title="STRIAK"
         bigValue={`${user.streakDays}`}
         footerText={`longestStreak: ${user.longestStreak} days`}
         icon="🎇"
        ></StatCard>

         <StatCard
         title="RECENT BAGES"
         footerText={user.recentBadgesText}
         icon="🎇"
        ></StatCard>
        
       </div>
       
       <div className="bottomGrid"> 
        <PersonalInfocard info={user.personalInfo}></PersonalInfocard>
        <AcountDetiles detalis={user.accountDetails}></AcountDetiles>
       </div>
       

     </div>

    )
}