import  OutputField  from '../components/outputField';
import '../styles/home.scss';

function URLShow(){
  return (
    <div id="home-page">
      <aside>
        <h1 className="title">URL Layers</h1>
        <p>Facilite sua vida, utilize o encurtador de URL da Layers</p>
      </aside>
      <main>
        <OutputField></OutputField>
      </main>
    </div>
  )
}

export default URLShow;