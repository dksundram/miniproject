// import React from 'react';
// import './Products.css';

// function ProductsSlider() {
//     const laptops = [
//         { id: 1, src: '/1.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
//         { id: 2, src: '/2.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
//         { id: 3, src: '/10.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
//         { id: 4, src: '/10.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' }
//     ];

//     const mobiles = [
//         { id: 1, src: '/11.webp', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
//         { id: 2, src: '/12.webp', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
//         { id: 3, src: '/13.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
//         { id: 4, src: '/10.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' }
//     ];

//     return (
//         <div className='Products-display'>
//             <h1>Laptops</h1>
//             <div className='Product-info'>
//                 {laptops.map((item) => (
//                     <div key={item.id} className='Laptops-info'>
//                         <div className='image-css'>
//                             <img src={item.src} alt={item.alt} />
//                         </div>
//                         <p>{item.text}</p>
//                         <p>{item.subText}</p>
//                     </div>
//                 ))}
//             </div>
//             <h1>Mobiles</h1>
//             <div className="Product-info">
//                 {mobiles.map((item) => (
//                     <div key={item.id} className='Laptops-info'>
//                         <div className='image-css'>
//                             <img src={item.src} alt={item.alt} />
//                         </div>
//                         <p>{item.text}</p>
//                         <p>{item.subText}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductsSlider;

import React from 'react';
import { useState, useEffect } from 'react';
import './Products.css';

function Products() {
    // const laptops = [
    //     { id: 1, src: '/1.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
    //     { id: 2, src: '/2.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
    //     { id: 3, src: '/10.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' },
    //     { id: 4, src: '/10.jpg', alt: 'laptop', text: 'lorem epsum', subText: 'jugukyfuikyfgk' }
    // ];

    const [mobiles, setMobiles] = useState([]);
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        async function fetchLaptops() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const { products } = await response.json();

                if (Array.isArray(products)) {
                    const laptopsData = products.filter(product =>
                        product.category === 'laptops'
                    ).slice(0, 4).map(product => ({
                        id: product.id,
                        src: product.images[0],
                        alt: product.title,
                        text: product.description,
                        subText: `Price: $${product.price}`,
                    }));

                    setLaptops(laptopsData);
                } else {
                    console.error('Products data is not an array:', products);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchLaptops();
    }, []);


    useEffect(() => {
        async function fetchMobiles() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const { products } = await response.json();

                if (Array.isArray(products)) {
                    const mobilesData = products.slice(0, 4).map(product => ({
                        id: product.id,
                        src: product.images[0],
                        alt: product.title,
                        text: product.description,
                        subText: `Price: $${product.price}`,
                    }));

                    setMobiles(mobilesData);
                } else {
                    console.error('Products data is not an array:', products);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchMobiles();
    }, []);
    function truncateText(text, maxLength) {
        const words = text.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        }
        return text;
    }


    return (
        <div className='container-fluid'>
            <h1>Laptops</h1>
            <div className='row'>
                {laptops.map((item) => (
                    <div key={item.id} className='col-md-3'>
                        <div className='Laptops-info'>
                            <div className='image-css'>
                                <img src={item.src} alt={item.alt} className='img-fluid' />
                            </div>
                            <p className='ptext'>{truncateText(item.text, 5)}</p>
                            <p className='ptext'>{item.subText}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1>Mobiles</h1>
            <div className='row'>
                {mobiles.map((item) => (
                    <div key={item.id} className='col-md-3'>
                        <div className='Laptops-info'>
                            <div className='image-css'>
                                <img src={item.src} alt={item.alt} className='img-fluid' />
                            </div>
                            <p className='ptext'>{truncateText(item.text, 5)}</p>
                            <p className='ptext'>{item.subText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;