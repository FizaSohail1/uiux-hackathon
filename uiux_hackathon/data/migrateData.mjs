"use server"
import { client } from "@/sanity/lib/client";

export async function uploadImage (imageUrl) {
 
    try {
        const respone = await fetch(imageUrl);
        const blob = await respone.blob();
        const asset = await client.assets.upload('image',blob);
        return asset;
    }

    catch(err){
        console.error('An error occured ', err);
      throw err
    }
}

export async function fetchData() {
    try {
        const response = await fetch('https://next-ecommerce-template-4.vercel.app/api/product');
        const data = await response.json();
        const products= data.products
        console.log("Products Response ==> ", products);

        if ((products)) {
            for (const product of products) {
                try {
                    const imageAsset = await uploadImage(product.imagePath);

                    const productFromSanity = {
                        _id: `${product.id}`,
                        _type: 'product',
                        name: product.name,
                        price: product.price,
                        discountPercentage: product.discountPercentage,
                        description: product.description,
                        image: {
                            _type: 'image',
                            asset: { _type: 'reference', _ref: imageAsset._id },
                        },
                        category: product.category,
                        isFeaturedProduct: product.isFeaturedProduct,
                        stockLevel: product.stockLevel,
                    };

                    const result = await client.createOrReplace(productFromSanity);
                } catch (error) {
                    console.error(`Error processing product ${product.name}:`, error);
                }
            }
        } else {
            console.error("Products is not an array:", products);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

