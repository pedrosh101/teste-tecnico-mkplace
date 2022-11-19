import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext/index";

const Lista = () => {
  const [categoryTitle, setCategoryTitle] = useState<any>();
  const [sub, setSub] = useState<any>();
  const [search, setSearch] = useState("");
  const [productResponse, setProductResponse] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const { cart, setCart, quantity, handleClick1, handleClick2 }: any =
    useContext(CartContext);

  interface Data {
    id: number;
    title: string;
  }

  useEffect(() => {
    handleCategoryData();
    handleSubData();
    handleResponse();
  }, []);

  async function handleCategoryData() {
    const response = await fetch("/api/category");
    const categoryTitle = await response.json();
    setCategoryTitle(categoryTitle);
  }

  async function handleSubData() {
    const response = await fetch("/api/subcategory");
    const sub = await response.json();
    setSub(sub);
  }

  async function handleResponse() {
    const response = await fetch("/api/product");
    const resToJson = await response.json();
    setProductResponse(resToJson);
  }

  const onSuggestHandler = (search) => {
    setSearch(search);
    setSuggestions([]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const categoryTitle = event.target[0].value;
    const sub = event.target[1].value;
    const name = [event.target[2].value];
    const type = event.target[3].value == "Unidade" ? "unit" : "kg";
    const price = event.target[4].value;
    const counter = event.target[5].value;
    //const img = event.target[6].value;
    const res = await fetch("../api/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [
          {
            categoryTitle,
            sub,
            name,
            type,
            price,
            quantity,
          },
        ],
      }),
    });
    const response = await res.json();
    setCart(response);
    console.log(cart);
  };

  if (!categoryTitle) return <p>Loading</p>;
  if (!sub) return <p>Loading</p>;
  if (!productResponse) return <p>Loading</p>;

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
          <div>
            <div className="cartContainer">
              <div className="listMain">
                <div className="paperContainer">
                  <img src="/Paper.png" />
                </div>
                <div className="listText">
                  <p>Lista {[cart.id]}</p>
                  <p className="countInfo">
                    {" "}
                    {[cart.categoryTitle]} categorias / itens
                  </p>
                </div>
              </div>
            </div>
            {!(Object.keys(cart).length === 0) && (
              <Link href="/">
                <button className="concluirLista">Concluir lista</button>
              </Link>
            )}
          </div>
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="inputs">
              <div>
                <label>Selecione categoria do produto</label>
                <select className="categorySelect" required autoFocus>
                  {categoryTitle.map((item: Data) => (
                    <option key={item.id}>{item.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Selecione uma subcategoria do produto</label>
                <select className="categorySelect" required>
                  {sub.map((item: Data) => (
                    <option key={item.id}>{item.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Nome do produto</label>
                <input
                  required
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="e.g Milho verde em conserva"
                  type="text"
                />
                <div>
                  {Object.values(productResponse)
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? null
                        : item.name.toLowerCase().includes(search);
                    })
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onSuggestHandler(item.name)}
                      >
                        <h1 className="suggestions">{item.name}</h1>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="finalInputs">
              <div className="tipo">
                <label>Tipo</label>
                <select required>
                  <option>Unidade</option>
                  <option>Kg</option>
                </select>
              </div>
              <div className="tipo">
                <label>Preço</label>
                <input required placeholder="R$" />
              </div>
              <div className="tipo">
                <label>Quantidade</label>
                <div className="quantidade">
                  <button onClick={handleClick2}>-</button>
                  <div>{quantity}</div>
                  <button onClick={handleClick1}>+</button>
                </div>
              </div>
            </div>
            <div className="importContainer">
              <img src="/Icons.png" />
              <div>
                <p>Arraste o arquivo ou clique aqui para selecionar</p>
                <p>PNG, GIF ou JPEG. Tamanho máximo de arquivo 1Mb.</p>
              </div>
            </div>
            <button className="addItem" type="submit">
              Adicionar item
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Lista;
