import { createGlobalStyle } from "styled-components";

export const GlobalSytle = createGlobalStyle`
    :root{
        --text-primary:#000;
        --bgPrimary:#fff;
        --bgSecondary: #F9F9F9;
        --pink: #0071bd;
        --light-blue: #e6f7ff;
        --border: #d9d9d9;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a:hover{
    color: var(--pink) !important;
    }

    .app{
        display: flex;
        overflow: hidden;
    }

    .navbar{
        flex: 0.2;
        background-color: rgb(0, 21, 41);
    }

    .main{
        flex: 0.8;
        width: 100%;
        min-height: 100vh;
        max-height: 100%;
    }
    .ant-layout{
        min-height: 100vh;
    }
    .routes{
        padding: 20px;
    }

    .nav-container{
        position: fixed;
        left: 0;
        margin: 10px;
        height: 100vh;
        margin: 0px;
        background-color: rgb(0, 21, 41);
    }

    .logo-container{
        background-color: #001529;
        display: flex;
        padding: 20px;
        align-items: center;
        width: 100%;
    }

    .logo{
        margin:0 0 0 15px;
    }

    .logo a{
       color: white;
    }
    .menu-control-container{
        display: none !important;
        position: absolute !important;
        right: 10px !important;
        top: 25px !important;
        font-size: 1.2rem !important;
        background-color: var(--bgSecondary) !important;
        border: none !important;
    }

    .loader{
        height: 81vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:1300px){
        .main{
            margin-left: 50px;
        }
    }

    @media screen and (max-width:1170px){
        .main{
            margin-left: 50px;
        }
    }

    @media screen and (max-width:1000px){
        .main{
            margin-left: 100px;
        }
    }

    @media screen and (max-width:800px){
        .app{
            flex-direction: column;
            overflow: hidden;
        }

        .navbar{
            flex: 1;
        }

        .main{
            flex: 1;
            margin-top: 90px;
            margin-left: 0px;
            margin-right: 10px;
        }

        .nav-container{
            height: 8vh;
            position:fixed;
            width: 100%;
            z-index: 100;
            background-color: var(--bgSecondary);
        }
    
        .menu-control-container{
            display: block !important;
        }

        .ant-menu{
            position: absolute;
            right: 0px;
        }
        .home-title{
            font-size: 1.4rem !important;
        }
        .show-more{
            font-size: 1.3rem !important;
        }
    }

    .coin-detail-container{
        margin: 30px;
    }

    .coin-heading-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid var(--border);
        padding-top: 20px;
        padding-bottom: 20px;
        gap: 10px;
    }

    .coin-heading-container .coin-name{
        font-weight: 900;
        color: var(--pink);
    }

    .coin-heading-container p{
        font-size: 1rem;
        opacity: 0.9;
        margin-bottom: 20px;
    }

    .stats-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
    }

    .stats-container h2{
        font-weight: 700;
        font-size: 1.4rem;
        margin-top: 20px;
        color: var(--pink);
    }

    .coin-details-heading{
        font-weight: 700 !important;
        margin-top: 20px !important;
        color: var(--pink) !important;
    }

    .coin-stats{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--border);
        font-size: 1rem;
        opacity: 0.9;
        padding: 20px;

    }

    .coin-stats-name{
        display: flex;
        gap: 10px;
        font-size: 1rem;
    }

    .stats{
        font-weight: 800;
    }

    .coin-value-statistics-heading p{
        font-size: 1rem;
        opacity: 0.9;
    }

    .coin-desc-link{
        display: flex;
        gap: 40px;
        margin-top: 40px;
        padding-top: 20px;
    }

    .coin-desc-link h2{
        font-weight: 700;
        color: var(--pink);
    }

    .coin-desc-link p{
        font-size: 1rem;
        opacity: 0.9;
    }

    .coin-desc-link a{
        color: var(--pink);
    }

    .coin-desc-link h3{
        font-weight: 700;
    }

    .coin-desc{
        flex: 0.5;
    }

    .coin-links{
      padding: 0px 20px;
        flex: 0.5;
    }

    .coin-link{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border);
        padding: 20px;
    }

    .link-name{
        text-transform: capitalize;
        font-size: 1rem;
    }

    .coin-link a{
        color: var(--pink);
        font-weight: 700;
        font-size: 1rem;
    }

    .coin-link:hover, .coin-stats:hover{
        background-color: var(--bgSecondary);
    }

    @media screen and (max-width:1000px){
        .stats-container{
            flex-direction: column;
        }

        .coin-desc-link{
            flex-direction: column;
        }

        .stats-container h2{
            margin-top: 0px;
        }
    }

    @media screen and (max-width: 500px){
        .coin-links{
            padding: 0px;
        }

        .coin-detail-container{
            margin: 0;
        }
    }
    @media screen and (max-width: 500px){
        .heading{
            margin-top: 20px;
        }
    }

    .select-news{
        width: 180px;
    }

    .news-card{
        min-height: 300px !important;
    }

    .news-image-container{
        display: flex !important;
        justify-content: space-between !important;
    }

    .news-title{
    width: 70%;
    }

    .news-image-container .img{
        width:100px;
        height:100px;
    }

    .news-card p{
        color: black;
        margin: 10px 0px !important;
    }

    .provider-container{
        display: flex;
        justify-content: space-between;
    }

    .provider-name{
        margin-left: 10px;
    }

    .chart-header{
        display: flex;
        justify-content: space-between;
        gap: 50px;
        color: #0071bd;
    }

    .chart-title{
        color: #0071bd !important;
    }

    .price-container{
        display: flex !important;
        gap: 20px !important;
        align-items: center !important;
        flex-wrap: wrap !important;
    }

    .price-change{
        font-weight: 900 !important;
    }

    .current-price{
        margin-top: 0px !important;
        font-weight: 900 !important;
    }

    .home-heading-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
    }

    .show-more{
        margin-top: 0px !important;
    }

    .exchange-image{
        margin: 0px 10px !important;
    }

    .search-crypto{
        margin: 20px auto 30px auto;
        width: 250px;
    }

    .crypto-card-container{
        min-height: 65vh !important;
    }

    .crypto-card{
        min-width: 250px;
    }

    .crypto-card .crypto-image{
        width:35px;
    }

    .select-timeperiod{
        width: 200px !important;
        margin-top: 20px !important;
    }

    .footer {
        background-color: #001529;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: center;
    }
`;
