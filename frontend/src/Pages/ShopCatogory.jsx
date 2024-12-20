import React, { useContext } from 'react';
import './css/shopCatogery.css'
import { ShopContext } from '../Context/ShopContext.jsx';
import Item from '../Components/items/item.jsx'

const ShopCatogory = (props) => {
    const { all_product } = useContext(ShopContext)

    return (
        <div className='shop-category'>
            <img src={props.banner} alt="" className='shopCategory-banner' />
            <div className="shopCategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
            </div>

            <div className='shopCategory-products'>
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item 
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null; 
                })}
            </div>
            <div className='shopCategory-loadmore'> 
                End stock
            </div>
        </div>
    );
}

export default ShopCatogory;
