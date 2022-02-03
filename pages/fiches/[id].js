import Fiche from "../../components/Fiche";
import Layout from "../../components/Layout";
import { getProducts, getOneProduct } from "../../models/product";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CreateProduct from "../../components/CreateProduct";
import axios from "axios";
import { useRouter } from "next/router";

export default function FicheDetails({ product }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const router = useRouter();

  async function deleteProduct() {
    console.log("delete front ");
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/products`,
      {
        params: { id: product._id },
      }
    );
    if (res.status === 204) {
      router.push({
        pathname: "/fiches",
      });
    }
  }
  return (
    <Layout pageTitle={"Fiche details"}>
      <div className="p-2 max-w-[500px]">
        <Fiche product={product} />
      </div>
      <div className="flex gap-2">
        {!showConfirmDelete && (
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
        )}
        <div
          className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-brownSemis"
          onClick={() => {
            setShowConfirmDelete(true);
            setShowEdit(false);
          }}
        >
          <h2 className="text-third font-medium">Supprimer</h2>
          <DeleteIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
        </div>
      </div>
      {showConfirmDelete && (
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-five">
            Êtes vous sûr de vouloir supprimer ce produit ?{" "}
          </h2>
          <div className="flex w-full justify-center gap-2">
            <div
              className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-secondary"
              onClick={() => setShowConfirmDelete(false)}
            >
              <h2 className="text-third font-medium">Annuler</h2>
              <CloseIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
            </div>
            <div
              className="w-fit flex justify-center items-center gap-4 cursor-pointer rounded-xl py-1 px-2 border-2 bg-brownSemis"
              onClick={() => deleteProduct()}
            >
              <h2 className="text-third font-medium">Oui</h2>
              <DeleteIcon sx={{ color: "#FFFFF4", fontSize: 30 }} />
            </div>
          </div>
        </div>
      )}
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
  return {
    props: { product },
  };
}
