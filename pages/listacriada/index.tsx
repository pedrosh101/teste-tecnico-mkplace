import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/index";

const ListaCriada = () => {
  const { cart, quantity, handleClick1, handleClick2 }: any =
    useContext(CartContext);

  return (
    <>
      <section>
        <div className="header">
          <Link href="/">
            <img src="/favicon-mkplace.ico" />
          </Link>
          <img src="/Arrow Left.png" />
          <h1>Criando Lista de Compras</h1>
        </div>
        <div className="listsContainer">
          <div className="cartContainer">
            <div className="listMain">
              <div className="paperContainer">
                <img src="/Paper.png" />
              </div>
              <div className="listText">
                <p>Lista {[cart.id]}</p>
                <p className="countInfo">categorias / itens</p>
              </div>
            </div>
          </div>
          <form className="formContainer">
            <div>
              <label>Categoria 1</label>
              <div className="itemCart">
                <label className="checkcontrol">
                  <input type="checkbox" />
                </label>
                <div className="cartItemText">
                  <p>Item 1 </p>
                  <p>R$0,00/Un</p>
                </div>
                <div className="quantidade">
                  <button onClick={handleClick2}>-</button>
                  <div>{quantity}</div>
                  <button onClick={handleClick1}>+</button>
                </div>
              </div>
              <div className="itemCart">
                <label className="checkcontrol">
                  <input type="checkbox" />
                </label>
                <div className="cartItemText">
                  <p>Item 1 </p>
                  <p>R$0,00/Un</p>
                </div>
                <div className="quantidade">
                  <button onClick={handleClick2}>-</button>
                  <div>{quantity}</div>
                  <button onClick={handleClick1}>+</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ListaCriada;
