import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
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
        <span style={{ marginBottom: 2 }}>
          <Image
            src="/logo-mkplace.png"
            alt="Mkplace Logo"
            width={200}
            height={35}
          />
        </span>
        <Link href="/lista">
          <button className="createBtn">
            <p
              style={{
                width: "183px",
                height: "21px",
                color: "#ED1B49",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Criar uma lista de compras
            </p>
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
