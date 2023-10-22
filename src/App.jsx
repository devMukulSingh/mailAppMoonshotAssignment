import Header from "./components/header/Header";
import MailSection from "./components/mailSection/MailSection"

function App() {

  return (
    <div style={{ padding:'2rem 4rem',display:'flex',flexDirection:'column'}}>
        <Header/>
        <MailSection/>
    </div>
  )
}

export default App
