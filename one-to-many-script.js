
import  sequelize  from "./config/db.js";
import { Category , Products } from "./models/index.js";




async function  checkConnection() {
    
    //Проверяем подключение к базе данных
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully');


         // Создаём категорию, если её ещё нет
        const [category, created] = await Category.findOrCreate({
            where:{
                 name: "Electronics",
            }
                });
       
         console.log("Category created:", category.toJSON());


          // Создаём первый продукт
        const product1 = await Products.create({
            name: "Laptop",
            price: 2500,
            categoryName: category.name,
        });
        
        const product2 = await Products.create({
            name: "Phone",
            price: 1500,
            categoryName: category.name,
        });


        // Находим категорию вместе с её продуктами
        const categoryWithProducts = await Category.findOne({  //Category.findOne() — ищет одну категорию в базе данных.
            where: {  //where — указывает, какую именно категорию искать.
                name: "Electronics",
            },
            include: Products, //-загружает вместе с категорией все связанные с ней продукты.
        });
        console.log("Category with products:",
       categoryWithProducts.toJSON());
        
   
        
    } catch (error) {
        console.error("Error:", error);
    }finally{
        await sequelize.close();
        console.log("Database connection closed");
    }
}

checkConnection();