import React from 'react';

const grains = [
    { id: 1, name: 'Rice', price: '$5.99', image: '/grains/rice.jpg' },
    { id: 2, name: 'Wheat', price: '$4.99', image: '/grains/wheat.jpg' },
    { id: 3, name: 'Quinoa', price: '$6.99', image: '/grains/quinoa.jpg' },
];

const GrainsPage = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Healthy Grains</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {grains.map(({ id, name, price, image }) => (
                    <div key={id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-lg text-primary font-bold">{price}</p>
                        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryDark transition">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrainsPage;
