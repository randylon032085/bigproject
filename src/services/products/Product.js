import { get, getDatabase, push, ref, set } from "firebase/database";
import { app } from "../FirebaseConfig";

export async function CreateProducts(productName, productType) {
  const db = getDatabase(app);
  const newProduct = push(ref(db, "products"));

  set(newProduct, {
    productName: productName,
    productType: productType,
  }).then(() => {
    alert("added succesfully");
  });
}

export async function getProduct() {
  const db = getDatabase(app);
  const dbRef = ref(db, "products");
  const products = await get(dbRef);
  if (products.exists()) {
    const productsData = products.val();
    const productOBJ = Object.keys(productsData).map((el) => ({
      id: el,
      ...productsData[el],
    })); 
    return productOBJ;
  } else {
    return [];
  }
}
