import React from "react";

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color : 'Black',
    //     backgroundColor :'white' 
    // })   
    let myStyle  = {
      color : props.mode === 'dark'? 'white':' rgb(12 70 104)',
      backgroundColor : props.mode === 'dark'?' rgb(12 70 104)':'white'
    }
     
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'? 'white':' rgb(12 70 104)',}}>
          <h1 className="mt-3">About Us</h1>
        <div className="accordion my-3" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyse Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show  "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text Utils Gives you a way to analyze your text quickly and efficently.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed " style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse" 
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text Utils is a free character counter tool that provides instant character count & word count statistics for a given text.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                The word counter software works in any web-browsers such as Chrome,Firefox,Edge,Mozzila.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
