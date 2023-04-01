import ModeloPetShop from '../../Assets/img/Banner1.png'
import BannerUp from '../../Assets/img/Banner2.png'
import SiteUpPoint from '../../Assets/img/Banner4.png'

import './carrocel.css'

const Carrocel = () => {
    return (

        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ModeloPetShop} className="d-block w-100" alt="Imagem de modelo de site de um petshop" />
                    </div>
                    <div className="carousel-item">
                        <img src={BannerUp} className="d-block w-100" alt="Imagem anunciando o site do cliente em todos os dispositivos" />
                    </div>
                    <div className="carousel-item">
                        <img src={SiteUpPoint} className="d-block w-100" alt="Inlustração de um site de noticias" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

           

                
        </div>

    )
}

export default Carrocel;