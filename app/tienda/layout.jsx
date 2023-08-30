import Link from "next/link";

const TiendaLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Sección tienda</h3>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default TiendaLayout;
