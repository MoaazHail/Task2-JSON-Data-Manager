    const fs = require('fs'); 
    const readline = require('readline-sync');

    function search(id, object) {
        for (let i = 0; i < object.length; i++) {
            if (object[i].id == id ) {
                return object[i];
            }
        }

    }

    function Add_data(item, object) {
        object.push(item);
        console.log("The New Item Is Added :)");
    }

    function Delete_data(id ,object) {
        let filter = object.filter(item => item.id != id);
        console.log(`The Product With Id ${id} deleted `);

        return filter;
    }

    const message = 
    `
    Enter " 1 " : Display All Data
    Enter " 2 " : Add New Product
    Enter " 3 " : Search for Product By ID
    Enter " 4 " : Delete Product By ID
    ---------------------------------------\n`;
    let choice = readline.question(message)
    switch(choice){
        case '1':
            fs.readFile('./Data.json', "utf-8", (err, data) => {
                if (err)console.error(err)
                const myData = JSON.parse(data);
                console.log(myData);
            })
            break;
        case '2':
            fs.readFile('./Data.json', "utf-8", (err, data) => {
                if (err)console.error(err)
                const myData = JSON.parse(data);
                let newProduct = readline.question(`Please Enter The New Product \nLike this {id:5,name:"product-5",price:20,status:"new"}\n`);
                newProduct = JSON.parse(newProduct);
                Add_data(newProduct,myData);
                
                fs.writeFile("./Data.json",JSON.stringify(myData),(err)=>console.error(err));
            })
            break;
        case '3':
            fs.readFile('./Data.json', "utf-8", (err, data) => {
                if (err)console.error(err)
                const myData = JSON.parse(data);
                let idForSearch = readline.question("Please Enter ID For Search :");
                let searchProduct = search(idForSearch,myData);
                console.log(searchProduct ? searchProduct : "This Product IS Not Found :(");
            })
            break;
        case '4':
            fs.readFile('./Data.json', "utf-8", (err, data) => {
                if (err)console.error(err)
                const myData = JSON.parse(data);
                let idToDelete = readline.question("Please Enter ID To Delete :");
                let data_filter = Delete_data(idToDelete,myData);

                fs.writeFile("./Data.json",JSON.stringify(data_filter),(err)=>console.error(err));
            })
            break;
        default:
            console.log("Please Choice Only One Of This (1, 2, 3, 4)");
            

    }

