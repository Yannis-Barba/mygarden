import Fiche from "../../components/Fiche";
import Layout from "../../components/Layout";
import { getProducts, getOneProduct } from "../../models/product";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CreateProduct from "../../components/CreateProduct";

export default function FicheDetails({ product }) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <Layout pageTitle={"Fiche details"}>
      <div className="p-2 max-w-[500px]">
        <Fiche product={product} />
      </div>
      <div className="flex gap-2">
        <div
          className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-secondary"
          onClick={() => setShowEdit(!showEdit)}
        >
          <h2 className="text-third font-medium">
            {showEdit ? "Annuler" : "Éditer :"}{" "}
          </h2>
          {showEdit ? (
            <CloseIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
          ) : (
            <EditIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
          )}
        </div>
        <div className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-brownSemis">
          <h2 className="text-third font-medium">Supprimer</h2>
          <DeleteIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
        </div>
      </div>
      {showEdit && (
        <CreateProduct
          setShowCreateProduct={setShowEdit}
          showCreateProduct={showEdit}
          forUpdate={true}
          product={product}
        />
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await getProducts();
  console.log("products : ", products);
  return {
    paths: products.map((product) => {
      return {
        params: { id: product._id.toString() },
      };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = JSON.parse(JSON.stringify(await getOneProduct(id)));
  console.log("product", product);
  return {
    props: { product },
  };
}
