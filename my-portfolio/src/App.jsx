import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Skill } from "./Components/Skill/Skill";
import { Contact } from "./Components/Contact/Contact";
import { Projects } from "./Components/Projects/Projects";


function App() {
return (
 <div className={styles.App}>

<Navbar />
<Hero />
<About />
<Skill />
<Projects />
<Contact />

</div>
)
};

export default App;
