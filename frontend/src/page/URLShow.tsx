import {useParams} from 'react-router-dom';
import  OutputField  from '../components/outputField';
import '../styles/home.scss';

export function URLShow(){
  const params = useParams();
  return (
    <div id="home-page">
      <aside>
        <h1 className="title">URL Layers</h1>
        <p>Facilite sua vida, utilize o encurtador de URL da Layers</p>
      </aside>
      <main>
        <OutputField params={params}></OutputField>
      </main>
    </div>
  )
}

