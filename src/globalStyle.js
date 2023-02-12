import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        font-family:"Montserrat",sans-serif;
    }
    a{
        text-decoration:none;
        font-size:1rem;
    }
    body{
        overflow-x:hidden;
    }
    button{
        font-family:"Montserrat",sans-serif;
    }
    h1{
        font-size:70px;
        font-weight:bold;
    }
    h2{
        font-size:60px;
        font-weight:normal;
    }
    h3{
        font-size:45px;
        font-weight:bold;
    }
    h4{
        font-size:32px;
        font-weight:500;
    }
    h5{
        font-size:22px;
        font-weight:normal;
    }
    .h1{
        font-size:70px;
        font-weight:bold;
    }
    .h2{
        font-size:60px;
        font-weight:normal;
    }
    .h3{
        font-size:45px;
        font-weight:bold;
    }
    .h4{
        font-size:32px;
        font-weight:500;
    }
    .h5{
        font-size:26px;
        font-weight:normal;
    }
    p,li{
        font-size:20px;
    }
    span{
        font-weight:bolder;
    }
    .layout-main-smaller{
        max-width:1080px;
        width:100%;
        margin-left:auto;
        margin-right:auto;
        padding:1rem 1rem;
    }
    .layout-main{
        max-width:1340px;
        width:100%;
        margin-left:auto;
        margin-right:auto;
        padding:1rem 1rem;
    }
    .carousel {
        max-height: 700px;
        
        .carousel-status {
            font-size: 1rem;
            color: black;
        }
    }
    .line {
    height: 1px;
    background: ${(props) => props.theme.primaryBackgroundColor};
    }
    .input-error {
      color: #b90e0e;
    }
   @media (max-width:900px){
   div.carousel{
    border-radius:0;
   }
    .carousel-1.layout-main{
        padding:0;
        .control-arrow{
            padding:1rem;
        }
    }
   }
   @media (max-width:740px){}
   @media (max-width:550px){
  
    .carousel-root.layout-main{
        padding:0;
        .control-arrow{
            padding:0.5rem;
        }
        .carousel{
            .control-dots{
            li{
            width:14px;
            height:14px;
            } 
        }
        }
     
      
    }
   }
   @media (max-width:390px){
  
    .layout-main-smaller{
        padding:0.5rem 0.5rem;
        margin-bottom:0;
    }
    .carousel-root.layout-main{
        padding-bottom:5rem;
        .carousel{
            .control-arrow{
            padding:0.1rem;
        }
        .control-dots{
            li{
            width:10px;
            height:10px;
            } 
        }
    }
    }
   
   }
   @media (max-width:300px){}
`;

export default GlobalStyle;
