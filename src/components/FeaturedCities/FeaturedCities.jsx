import './featuredcities.css';

export const FeaturedCities = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/976539.webp?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o=" alt="Amsterdam" 
            className='featuredImg'
            />
            <div className="featuredTitles">
                <h4>Amsterdam</h4>
                <h5>345 Properties</h5>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/976560.webp?k=860549c314b03e11d9573c5d80ecff821e365943dcc335b3dc6f2a767ff08af3&o=" alt="Maastricht" 
            className='featuredImg'
            />
            <div className="featuredTitles">
                <h4>Maastrict</h4>
                <h5>35 Properties</h5>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/976525.webp?k=28ab37ad52e0b672e0d84806232679ce7ec6d2fcd6ac633e4365b3097d880c51&o=" alt="Rotterdam" 
            className='featuredImg'
            />
            <div className="featuredTitles">
                <h4>Rotterdam</h4>
                <h5>223 Properties</h5>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/976532.webp?k=ef4136bcaa313abcac85b4d1680b273426095d4837898354b6939db7505022db&o=" alt="Den Haag" 
            className='featuredImg'
            />
            <div className="featuredTitles">
                <h4>Den Haag</h4>
                <h5>119 Properties</h5>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/region/square250/68890.webp?k=2a858966fa5e8143f71b05f6604cedca2c22394fcb0c03118d2b7b7f42396d2a&o=" alt="Nederland Kust" 
            className='featuredImg'
            />
            <div className="featuredTitles">
                <h4>Nederland Kust</h4>
                <h5>91 Properties</h5>
            </div>
        </div>
    </div>
  )
}
