import React, { useState } from 'react';
import "./Cart.css";

function Cart() {
    const [showAllItems, setShowAllItems] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Iphone 11 pro",
            image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
            description: "256GB, Navy Blue",
            quantity: 2,
            price: 900
        },
        {
            id: 2,
            name: "Samsung Galaxy S20",
            image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
            description: "128GB, Cosmic Gray",
            quantity: 1,
            price: 1100
        },
        {
            id: 3,
            name: "Google Pixel 5",
            image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
            description: "128GB, Just Black",
            quantity: 3,
            price: 800
        },
        {
            id: 4,
            name: "Google Pixel 5",
            image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
            description: "128GB, Just Black",
            quantity: 3,
            price: 800
        },
        {
            id: 4,
            name: "Google Pixel 5",
            image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
            description: "128GB, Just Black",
            quantity: 3,
            price: 800
        },
        {
            id: 5,
            name: "Google Pixel 5",
            image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
            description: "128GB, Just Black",
            quantity: 3,
            price: 800
        },
        // Add more items as needed
    ]);
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = window.confirm('Are you sure you want to buy?');
        if (confirmed) {
            console.log('Processing payment...');
            alert('Payment successfully completed!');
            setCardholderName('');
            setCardNumber('');
            setExpiration('');
            setCvv('');
        
        } else {
            alert('Please fill out all required fields.');
        }
    };

    const handleRemoveItem = (itemId) => {
        const isConfirmed = window.confirm("Are you sure you want to remove this item?");
        if (isConfirmed) {
            const updatedCartItems = cartItems.filter(item => item.id !== itemId);
            setCartItems(updatedCartItems);
        }
    };

    const subtotal = cartItems.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    const shippingCost = 20;
    const totalIncludingTaxes = subtotal + shippingCost;

    return (
        <section className="cart" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have {cartItems.length} items in your cart</p>
                                            </div>
                                            <div>
                                                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                            </div>
                                        </div>
                                        {/* Render cart items dynamically */}
                                        <div className="cart-items">
                                            {showAllItems ? (
                                                cartItems.map(item => (
                                                    <div className="card mb-3" key={item.id}>
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <img src={item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                                    </div>
                                                                    <div className="ms-3">
                                                                        <h5>{item.name}</h5>
                                                                        <p className="small mb-0">{item.description}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div style={{ width: '50px' }}>
                                                                        <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                                                    </div>
                                                                    <div style={{ width: '80px' }}>
                                                                        <h5 className="mb-0">${item.price}</h5>
                                                                    </div>
                                                                    <a href="#!" style={{ color: '#cecece' }} onClick={() => handleRemoveItem(item.id)}><i className="fas fa-trash-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                cartItems.slice(0, 4).map(item => (
                                                    <div className="card mb-3" key={item.id}>
                                                        <div className="card-body">
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div>
                                                                        <img src={item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                                    </div>
                                                                    <div className="ms-3">
                                                                        <h5>{item.name}</h5>
                                                                        <p className="small mb-0">{item.description}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center">
                                                                    <div style={{ width: '50px' }}>
                                                                        <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                                                    </div>
                                                                    <div style={{ width: '80px' }}>
                                                                        <h5 className="mb-0">${item.price}</h5>
                                                                    </div>
                                                                    <a href="#!" style={{ color: '#cecece' }} onClick={() => handleRemoveItem(item.id)}><i className="fas fa-trash-alt"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        {cartItems.length > 4 && (
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => setShowAllItems(!showAllItems)}
                                            >
                                                {showAllItems ? "Show less" : "Show more"}
                                            </button>
                                        )}
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card bg-primary text-white rounded-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0">Card details</h5>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: '45px' }} alt="Avatar" />
                                                </div>
                                                <p className="small mb-2">Card type</p>
                                                <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2"></i></a>
                                                <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2"></i></a>
                                                <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                                <form className="mt-4 pr-0 pl-0" id="formbox" onSubmit={handleSubmit}>
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeName"
                                                            className="form-control form-control-lg"
                                                            size="17"
                                                            placeholder="Cardholder's Name"
                                                            required
                                                            value={cardholderName}
                                                            onChange={(e) => setCardholderName(e.target.value)}
                                                        />
                                                        <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                    </div>
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeText"
                                                            className="form-control form-control-lg"
                                                            size="17"
                                                            placeholder="1234 5678 9012 3457"
                                                            minLength="16"
                                                            maxLength="16"
                                                            required
                                                            value={cardNumber}
                                                            onChange={(e) => setCardNumber(e.target.value)}
                                                        />
                                                        <label className="form-label" htmlFor="typeText">Card Number</label>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="typeExp"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="MM/YYYY"
                                                                    size="7"
                                                                    minLength="7"
                                                                    maxLength="7"
                                                                    required
                                                                    value={expiration}
                                                                    onChange={(e) => setExpiration(e.target.value)}
                                                                />
                                                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="password"
                                                                    id="typeText"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="&#9679;&#9679;&#9679;"
                                                                    size="1"
                                                                    minLength="3"
                                                                    maxLength="3"
                                                                    value={cvv}
                                                                    onChange={(e) => setCvv(e.target.value)}
                                                                />
                                                                <label className="form-label" htmlFor="typeText">CVV</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Subtotal</p>
                                                        <p className="mb-2">${subtotal.toFixed(2)}</p>
                                                    </div>
                                                    {/* Display shipping cost */}
                                                    <div className="d-flex justify-content-between">
                                                        <p className="mb-2">Shipping</p>
                                                        <p className="mb-2">${shippingCost.toFixed(2)}</p>
                                                    </div>
                                                    {/* Display total including taxes */}
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total(Incl. taxes)</p>
                                                        <p className="mb-2">${totalIncludingTaxes.toFixed(2)}</p>
                                                    </div>
                                                    {/* Checkout button */}
                                                    <button type="submit" className="btn btn-info btn-block btn-lg">
                                                        <div className="d-flex justify-content-between">
                                                            <span>${totalIncludingTaxes.toFixed(2)}</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
