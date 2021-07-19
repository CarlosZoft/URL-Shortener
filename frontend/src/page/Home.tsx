
import InputField from "../components/inputField";
import '../styles/home.scss';



export function Home(){


  return (
    <div id="home-page">
      <aside>
        <h1 className="title">URL Layers</h1>
        <p>Facilite sua vida, utilize o encurtador de URL da Layers</p>
      </aside>
      <main>
        <InputField/>
      </main>
    </div>
  )
}
