import { useLoaderData } from "react-router-dom";
import CartSingle from "./CartSingle";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'




const Cart = () => {
  const LoadProducts = useLoaderData()
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(LoadProducts)
}, [LoadProducts])
  const deleteHandle = (name) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shope.vercel.app/cart/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        if(data.deletedCount){
          setProducts(LoadProducts.filter(product => product.name != name))
          Swal.fire(
            'Deleted!',
            'The product has been deleted.',
            'success'
          )
        }else if(data.deletedCount==0){
          Swal.fire(
            'sorry!',
            'The product no deleted. try again',
            'error'
          )
        }
        
      });
      }
    })

    
  }
  return (
    <div className="max-w-screen-xl mx-auto my-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          products?.map(product => <CartSingle key={product._id} product={product} deleteHandle={deleteHandle}></CartSingle>)
        }
      </div>
    </div>
  );
};

export default Cart;