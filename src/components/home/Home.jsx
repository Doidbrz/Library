import React from "react";
import style from "./Home.module.css";
import Livro from "../../assets/Livro.jpg";
import Livrod from "../../assets/Livrod.jpg";
import Livrot from "../../assets/Livrot.jpg";
import Livroq from "../../assets/Livroq.jpg";

const Home = () => {
  return (
    <div>
      <div className={style["search-bar"]}>
        <input type="text" placeholder="Digite o título do livro"></input>
        <button>Pesquisar</button>
      </div>
      <div>
        <ul className={style["books"]}>
          <li>
            <img src={Livro} alt="Livro Harry Potter" />
            <p>Harry Potter</p>
            <button>Detalhes</button>
          </li>
          <li>
            <img src={Livrod} alt="Livro Harry Potter" />
            <p>O Hobbit</p>
            <button>Detalhes</button>
          </li>
          <li>
            <img src={Livrot} alt="Livro Harry Potter" />
            <p>Amigo Imaginário</p>
            <button>Detalhes</button>
          </li>
          <li>
            <img src={Livroq} alt="Livro Harry Potter" />
            <p>Jogos Vorazes</p>
            <button>Detalhes</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
