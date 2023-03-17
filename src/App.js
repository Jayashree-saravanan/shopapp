import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  //state hook
  const data = [
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: 40,
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImage:
     "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: 95000,
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: 70000,
      rating:"⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: 64000,
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: 64000,
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: 40000,
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      price: 64000,
      rating:"⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: 40000,
      rating:"⭐⭐⭐⭐⭐",
    },
    
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      
      <div className="cart-value">
        <div className="nav">
    <h3>Start Bootstrap</h3>
    <p>Home</p>
    <p>About</p>
    <p>Shop</p>
        </div>
      <Badge bg="dark">
        CART {count}
      </Badge>
      </div>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center">
            <h1 className="display-4 fw-bolder">
              Shop in style
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">with this shop homepage template</p>
          </div>
        </div>

      </header>

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}
      </div>
<footer className="py-5 bg-dark">
  <div className="container">
    <p className="m-0 text-center text-white">Copyright @ Your Website 2022</p>
  </div>
</footer>



    </div>



  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(true);

  function addToCart(){
    setShow(!(show))
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card key = {idx} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>{prod.price} RS</Card.Text>
          <Card.Text>{prod.rating} </Card.Text>

        {/* conditional rendering */}

         {show ? <Button //false 
           variant="outline-dark"
           onClick={addToCart}
           >Add cart</Button> : ""}


           {!show ? <Button //true
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""}
        </Card.Body>
      </Card>



  )
}