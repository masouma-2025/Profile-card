import './App.css'
import profilePhoto from './assets/profile.png'
import ProfilePage from './components/profilePage'
function App() {
    const user = {
    name: "Asma",
    username: "@Asmamohamade",
    avatarImage: profilePhoto, // if you are using image later, we can replace this with avatarUrl
    xp: 180,
    lastActive: "Dec 22, 2025",
    streakDays: 2,
    longestStreak: 2,
    recentBadgesText: "No badges earned yet.",
  
    personalInfo: {
      Email: "Asmamohamad@gmail.com",
      Gender: "FMale",
      Country: "Afghanistan",
      "Province orState ": "Herat",
      "Teaching Experience (in years)": "21",
      "Date Of Birth": "2/16/86",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "Open the Link",
      Languages: "farsi, english",
      Bio: "Mentor @CodeToInspire",
    },
  
    accountDetails: {
      Role: "Mentor",
      Status: "Active",
      Verification: "Verified",
    },
  };

  return (
   <>
     <div className="Page">
       <ProfilePage user={user}></ProfilePage>
     </div>
   </>
  )
}

export default App
