import express from'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();
productRouter.get("/", expressAsyncHandler(async(req, res)=>{
    const product = await Product.find({});
    res.send(product);
    })
);
productRouter.get('/seed', expressAsyncHandler(async(req, res)=>
{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.product);
    res.send({createdProducts});
    })
);

productRouter.get('/:id',expressAsyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id);
    if (product){
        res.send(product);
    }
    else{
        res.statusCode(404).send({message:'Produit Non Trouvé'});
    }
})
);
export default productRouter;