const Product = require("../models/productModel");

// search products
exports.getAllproducts = async (options, sort) => {
    console.log(options)
    let pipeline = []
    if (options.name) {
        pipeline.push({ $match: { name: { $regex: options.name, $options: "i" } } })
    }
    pipeline.push(
        { $sort: sort/*{name:1}*/ },
        {
            $project: {
                _id: 1,
                name: '$name',  // Rename 'name' to 'productName'
                price: 1,               // Project 'price' as is
                images: 1,
                discount: 1
            }
        },

    );
    return await Product.aggregate(pipeline);
}

