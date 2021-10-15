import logo from './logo.svg';
import './App.scss';
import { Card } from './components/Card';

function App() {
  const data = [
    {
      id: 1,
      title: 'Homer S',
      img: 'http://sitesnobrasil.com/imagens-fotos/homens/h/homero-simpson2.jpg',
      description: 'description',
    },
    {
      id: 2,
      title: 'Bart S',
      img: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
      description: 'description',
    },
    {
      id: 3,
      title: 'Lisa S',
      img: 'https://w7.pngwing.com/pngs/334/66/png-transparent-lisa-simpson-snowball-bart-simpson-marge-simpson-the-simpsons-tapped-out-bart-simpson-cartoon-simpsons-lisa-simpson.png',
      description: 'description',
    },
    {
      id: 4,
      title: 'Maggi S',
      img: 'https://cdn.imgbin.com/22/1/22/imgbin-maggie-simpson-bart-simpson-lisa-simpson-marge-simpson-homer-simpson-simpsons-the-simpsons-girl-character-illustration-K5hMJS167AzZ5THq2U2RYsCyk.jpg',
      description: 'description',
    },
  ];
  return (
    <>
      <h1>Simpson</h1>
      <div className='container'>
        {data.map((element) => (
          <Card
            title={element.title}
            img={element.img}
            description={element.description}
            key={element.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
