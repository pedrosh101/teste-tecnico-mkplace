import { useEffect, useState, useRef } from "react";

const Lista = () => {
  const [cart, setCart] = useState([] as any);
  const [category, setCategory] = useState<any>();
  const [sub, setSub] = useState<any>();
  const [search, setSearch] = useState("");
  const categoryRef = useRef<any>(null);
  const subRef = useRef<any>(null);

  interface Data {
    id: number;
    title: string;
  }

  useEffect(() => {
    handleCategoryData();
    handleSubData();
    handleSearch();
  }, []);

  async function handleCategoryData() {
    const response = await fetch("/api/category");
    const category = await response.json();
    setCategory(category);
  }

  async function handleSubData() {
    const response = await fetch("/api/subcategory");
    const sub = await response.json();
    setSub(sub);
  }

  async function handleSearch() {
    const response = await fetch("/api/product");
    const search = await response.json();
    setSearch(search);
  }

  const handleSubmit = (event: any, category: string, sub: number) => {
    event.preventDefault();
    const itemObject = { category, sub };
    setCart([...cart, itemObject]);
    console.log(subRef.current.value);
    console.log(itemObject);
  };

  if (!category) return <p>Loading</p>;
  if (!sub) return <p>Loading</p>;
  if (!search) return <p>Loading</p>;

  return (
    <>
      <section>
        <div className="header">
          <img src="/favicon-mkplace.ico" />
          <h1>Criando Lista de Compras</h1>
        </div>
        <div className="listsContainer">
          <div className="cartContainer">
            <div className="paperContainer">
              <img src="/Paper.png" />
            </div>
            <div className="listText">
              <p>Lista</p>
              <p>0 categorias / 0 itens</p>
            </div>
          </div>
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="inputs">
              <div>
                <label>Selecione categoria do produto</label>
                <select
                  className="categorySelect"
                  required
                  autoFocus
                  ref={categoryRef}
                >
                  {category.map((item: Data) => (
                    <option key={item.id}>{item.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Selecione uma subcategoria do produto</label>
                <select className="categorySelect" required ref={subRef}>
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
                />
                <div>
                  {/* {search
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? null
                      : item.name.toLowerCase().includes(search);
                  })
                  .map((item) => (
                    <div key={item.id}>
                      <h1>{item.name}</h1>
                    </div>
                  ))} */}
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
              <div className="quantidade">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className="importContainer">
              <img src="/Icons.png" />
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
