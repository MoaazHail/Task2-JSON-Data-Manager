    const fs = require('fs'); 

    function search(item, object) {
        for (let i = 0; i < object.length; i++) {
            if (object[i].id === item ) {
                console.log(object[i]);
            }
        }
        
    }
    function Add_data(item, object) {
        object.push(item);
        console.log("The New Item Is Added :)");
    }

    function Delete_data(id_to_delete ,object) {
        let filter = object.filter(item => item.id !== id_to_delete);
        console.log(`The Product With Id ${id_to_delete} deleted `);

        return filter;
    }

    const new_data = {id:5,name:"product-5",price:20,status:"new"};

    fs.readFile('./Data.json', "utf-8", (err, data) => {
        if (err)console.error(err)
        const my_data = JSON.parse(data);
        console.log(my_data);

        Add_data(new_data,my_data);
        fs.writeFile("./Data.json",JSON.stringify(my_data),(err)=>console.error(err));

        search(5,my_data);
        console.log(my_data);

        let data_filter = Delete_data(5,my_data)
        fs.writeFile("./Data.json",JSON.stringify(data_filter),(err)=>console.error(err));
    });
