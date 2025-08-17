import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    console.log(items);
    return(
        <div>
            {items.map((item) => (
            <div 
                key={item.card.info.id}
                className="p-2 m-2 border-b-2 border-gray-300 text-left "
            >   <div className="flex justify-between ">
                        
                    <div className="w-9/12">
                        <span className="font-bold py-6">{item?.card?.info?.name}</span><br/>
                        <span className="">
                            ₹ {item?.card?.info?.price/100 ||item?.card?.info?.finalPrice/100 ||item?.card?.info?.defaultPrice/100}
                        </span><br/>
                        <p className="text-xs font-light">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 ">
                        <div className=" absolute">
                            <button className="py-2 px-4 mx-17 my-20 bg-white text-green-400 shadow-xl rounded-lg m-auto">ADD</button>
                        </div>
                        <img
                            className="rounded-2xl ml-4 object-cover"
                            src={CDN_URL + item.card.info.imageId}
                            alt={item?.card?.info?.name}
                        />
                        
                    </div>
                    
                </div>
                
            </div>
            ))}
            
        </div>
    );
}

export default ItemList;