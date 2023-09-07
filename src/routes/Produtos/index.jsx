import { Link } from "react-router-dom";
import { listaProdutos } from "../../data/listarProdutos";

export default function Produtos(){

    return(
        <main>
            <hi>Produtos</hi>
            {listaProdutos.map(prod => (
                <div key={prod.id}> 
                    <Link to={'/produtos/editar/${prod.id}'}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}