import './featuredProperties.css'

export const FeaturedProperties = () => {
  return (
    <div className='featuredProperties'>
        <div className="featuredPropertiesItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXynZWPuXx2dgbCGxo2ut8anqTr6zLKv9K7g&usqp=CAU" alt="" className="featuredPropertiesImg" />
            <span className="fpName">Villa Domina</span>
            <span className="fpCity">Venice</span>
            <span className="fpCost">Starting €126</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Execllent</span>
                <span>1345 Bekijken</span>
            </div>

        </div>
        <div className="featuredPropertiesItem">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQKIxYw1XoAJRlLSRF5_G0EnkXHxyk9ZElg&usqp=CAU' alt='' className="featuredPropertiesImg"/>
            <span className="fpName">Villa Habbana</span>
            <span className="fpCity">Mekelle</span>
            <span className="fpCost"> Starting €67</span>
            <div className="fpRating">
                <button>6.9</button>
                <span>Good</span>
                <span>134 Bekijken</span>
            </div>

        </div>
        <div className="featuredPropertiesItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWve5-jS9liZ5wQbm-AfewY8exA2RYQeZiAA&usqp=CAU" alt="" className="featuredPropertiesImg" />
            <span className="fpName">Villa NewYork</span>
            <span className="fpCity">NewYork</span>
            <span className="fpCost">Starting €204</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Execllent</span>
                <span>9000 Bekijken</span>
            </div>

        </div>
        <div className="featuredPropertiesItem">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnxsWmCNTQN_kknMZE5cj1qOhGztcw9B4Jw&usqp=CAU' alt='Villa Axum' className='featuredPropertiesImg'/>
            <span className="fpName">Villa Aksum</span>
            <span className="fpCity">Axum</span>
            <span className="fpCost">Starting €145</span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Execllent</span>
                <span>3567 Bekijken</span>
            </div>

        </div>
        <div className="featuredPropertiesItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwevRxBRe4jq4unylSsgYs3MEQv1_DAeA0Sw&usqp=CAU" alt="" className="featuredPropertiesImg" />
            <span className="fpName">Villa Washingon</span>
            <span className="fpCity">DC</span>
            <span className="fpCost">Starting €130</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Wonderfull</span>
                <span className='Bekijken'>945 Bekijken</span>
            </div>

        </div>
    </div>
  )
}
