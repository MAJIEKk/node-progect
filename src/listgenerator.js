import { data } from "./data";

function listGenerator(data){

    let list = document.createElement("ul");
    const table = data.map((item) => {
        const listItem = document.createElement("li");

            for(let key in item){
                listItem.innerHTML+=`${key}: ${item[key]}<br>`;
            }
     
       list.appendChild(listItem);

        console.log(listItem,item,list);
        return list;
    })

    return list;
}
export const tmp = listGenerator(data);

console.log(tmp);

