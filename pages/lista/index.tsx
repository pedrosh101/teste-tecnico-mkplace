import Link from "next/link";
import { useEffect, useState } from "react";



const Lista = () => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>Loading</p>;

  return (
    <>
      <section>
        <div className="cartContainer">cart</div>
        <form className="formContainer">
          <div className="inputs">
            <div>
              <h3>Selecione categoria do produto</h3>
              <select>
                {data.map((item) => (
                  <option key={item.title}>{item.title}</option>
                ))}
              </select>
            </div>
            <div>
              <h3>Selecione uma subcategoria do produto</h3>
              <select>
                <option>tomate</option>
                <option>cebola</option>
              </select>
            </div>
            <div>
              <h3>Nome do produto</h3>
              <input placeholder="e.g Milho verde em conserva" />
            </div>
          </div>
          <div className="finalInputs">
            <div>
              <h3>Tipo</h3>
              <select>
                <option>tomate</option>
                <option>cebola</option>
              </select>
            </div>
            <div>
              <h3>Preço</h3>
              <input placeholder="R$" />
            </div>
            <div className="quantidade">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
          <Link href="/">
            <button className="addItem">Adicionar item</button>
          </Link>
        </form>
      </section>
    </>
  );
};

export default Lista;
