import express from 'express';

const app = express();

app.get('/api/products', (req,res) => {
    const products = [
            {
                id: 1,
                name: 'table wooden',
                price: 200,
                image: 'https://picsum.photos/200'
            },
            {
                id: 2,
                name: 'chair wooden',
                price: 150,
                image: 'https://picsum.photos/201'
            },
            {
                id: 3,
                name: 'sofa modern',
                price: 800,
                image: 'https://picsum.photos/202'
            },
            {
                id: 4,
                name: 'lamp vintage',
                price: 75,
                image: 'https://picsum.photos/203'
            },
            {
                id: 5,
                name: 'bed king size',
                price: 1200,
                image: 'https://picsum.photos/204'
            },
            {
                id: 6,
                name: 'bookshelf large',
                price: 300,
                image: 'https://picsum.photos/205'
            },
            {
                id: 7,
                name: 'dining table set',
                price: 700,
                image: 'https://picsum.photos/206'
            },
            {
                id: 8,
                name: 'coffee table',
                price: 100,
                image: 'https://picsum.photos/207'
            },
            {
                id: 9,
                name: 'TV stand',
                price: 250,
                image: 'https://picsum.photos/208'
            },
            {
                id: 10,
                name: 'armchair',
                price: 220,
                image: 'https://picsum.photos/209'
            }     
    ];  

    //http://localhost:3000/api/products?search=metal
    if(req.query.search){
        const filterProducts = products.filter((product) => product.name.includes(req.query.search));

        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    },3000);


})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
