import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/index";

const Home: NextPage = () => {
  const { cart }: any = useContext(CartContext);

  return (
    <div>
      <main
        style={{
          minHeight: "100vh",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginBottom: 30 }}>
          <Image
            src="/logo-mkplace.png"
            alt="Mkplace Logo"
            width={200}
            height={35}
          />
        </span>
        {!(Object.keys(cart).length === 0) && (
          <Link href="/listacriada">
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
          </Link>
        )}

        <Link href="/lista">
          <button className="createBtn">
            <div className="plusContainer">
              <img src="/plus.png" />
            </div>
            <p>Criar uma lista de compras</p>
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
