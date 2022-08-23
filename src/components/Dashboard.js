import React from 'react'

function Dashboard() {

  let products = [
    {
      "id": 1,
      "name": "Rice",
      "qty": 25,
      "price": 1300
    },
    {
      "id": 2,
      "name": "Soap",
      "qty": 25,
      "price": 150
    },
    {
      "id": 3,
      "name": "Shampoo",
      "qty": 10,
      "price": 120
    }
  ];

  const editProduct = () => {
    alert("edit working")
  }
  const deleteProduct = () => {
    alert(" deleting")
  }
  const productList = products.map(product => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.qty}</td>
        <td>{product.price}</td>
        <td>
          <button className='btn btn-primary' style={{ margin: "10px" }} onClick={editProduct}>Edit</button>
          <button className='btn btn-danger' onClick={deleteProduct}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <div className='container'>
      <h1>Create Product</h1>
      <hr />
      <form>
        <div className='mb-3'>
          <label htmlFor='productid' className='form-label'>Enter Product id</label>
          <input type="text" className='form-control' id='productid' value={id} />
        </div>
        <div className='mb-3'>
          <label htmlFor='productname' className='from-label'>Enter Product Name</label>
          <input type="text" className='form-control' id='productname' value={name} />
        </div>
        <div className='mb-3'>
          <label htmlFor='qty' className='form-label'>Enter Product Quantity</label>
          <input type="text" className='form-control' id='qty' value={qty} />
        </div>
        <div className='mb-3'>
          <label htmlFor='Price' className='form-label'>Enter product Price</label>
          <input type="text" className='form-control' id='Price' value={price}  />
        </div>
        <button type="submit" className='btn btn-primay'>Create</button>
      </form>
      <h2>Products List</h2>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Product Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
      </table>
      <h1>Update Product</h1>
      <hr />
      <form>
        <div className='mb-3'>
          <label htmlFor='text' className='form-control' >Enter Product id</label>
          <input type="text" className='form-control' id='productid' value={id}  />
        </div>
        <div className='mb-3'>
          <label htmlFor='productname' className='from-label'>Enter Product Name</label>
          <input  type="text" className='form-control' id='productname' value={name} />
        </div>
        <div className='mb-3'>
          <label htmlFor='qty' className='form-label' >Enter Quantity</label>
          <input type="text" className='form-control' id='qty' value={qty} />
        </div>
        <div className='mb-3'>
          <label htmlFor='price' className='form-label'>Enter Price</label>
          <input />
        </div>
      </form>


    </div>

  )
}

export default Dashboard