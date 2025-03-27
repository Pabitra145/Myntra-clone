import sale_item_1 from "../images/offers/1.png"
import sale_item_2 from "../images/offers/2.png"
import sale_item_3 from "../images/offers/3.png"
import sale_item_4 from "../images/offers/4.png"
import sale_item_5 from "../images/offers/5.png"
import sale_item_6 from "../images/offers/6.png"
import sale_item_7 from "../images/offers/7.png"


import sale_item_8 from "../images/offers/8.png"
import sale_item_9 from "../images/offers/9.png"
import sale_item_10 from "../images/offers/10.png"
import sale_item_11 from "../images/offers/11.png"
import sale_item_12 from "../images/offers/12.png"
import banner from "../images/banner.jpg"


import categories_item_1 from "../images/categories/1.jpg"
import categories_item_2 from "../images/categories/2.jpg"
import categories_item_3 from "../images/categories/3.jpg"
import categories_item_4 from "../images/categories/4.jpg"
import categories_item_5 from "../images/categories/5.jpg"
import categories_item_6 from "../images/categories/6.jpg"
import categories_item_7 from "../images/categories/7.jpg"
import categories_item_8 from "../images/categories/8.jpg"
import categories_item_9 from "../images/categories/9.jpg"
import categories_item_10 from "../images/categories/10.jpg"
const Shop = () => {
    return(
            <main>
        <div className="banner_container">
            <img className="banner_image" src={banner} alt="Main Banner"/>
        </div>
        <div className="category_heading">MEDAL WORTHY BRANDS TO BAG</div>
        <div className="category_items">
            <a href="#"><img className="sale_item" src={sale_item_1}/></a>
            <a href="#"><img className="sale_item" src={sale_item_2}/></a>
            <a href="#"><img className="sale_item" src={sale_item_3}/></a>
            <a href="#"><img className="sale_item" src={sale_item_4}/></a>
            <a href="#"><img className="sale_item" src={sale_item_5}/></a>
            <a href="#"><img className="sale_item" src={sale_item_6}/></a>
            <a href="#"><img className="sale_item" src={sale_item_7}/></a>
            <a href="#"><img className="sale_item" src={sale_item_8}/></a>
            <a href="#"><img className="sale_item" src={sale_item_9}/></a>
            <a href="#"><img className="sale_item" src={sale_item_10}/></a>
            <a href="#"><img className="sale_item" src={sale_item_11}/></a>
            <a href="#"><img className="sale_item" src={sale_item_12}/></a>
        </div>
        <div className="category_heading">SHOP BY CATEGORY</div>
        <div className="category_items">
            <a href="#"><img className="sale_item" src={categories_item_1}/></a>
            <a href="#"><img className="sale_item" src={categories_item_2}/></a>
            <a href="#"><img className="sale_item" src={categories_item_3}/></a>
            <a href="#"><img className="sale_item" src={categories_item_4}/></a>
            <a href="#"><img className="sale_item" src={categories_item_5}/></a>
            <a href="#"><img className="sale_item" src={categories_item_6}/></a>
            <a href="#"><img className="sale_item" src={categories_item_7}/></a>
            <a href="#"><img className="sale_item" src={categories_item_8}/></a>
            <a href="#"><img className="sale_item" src={categories_item_9}/></a>
            <a href="#"><img className="sale_item" src={categories_item_10}/></a>
        </div>
    </main>
    )

    
}
export default Shop