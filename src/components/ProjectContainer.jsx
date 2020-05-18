import React from "react";
import MainCard from "./MainCard";

const ProjectContainer = (props) => {
  return (
    <MainCard>
      <h1 className="card-title">Portfolio</h1>
      <hr />
      <div className="container-fluid" id="portfolio-container">
        <div className="row">{props.children}</div>
      </div>
    </MainCard>
    //   <main>
    //   <div className="container-fluid">
    //     <div className="row justify-content-center">
    //       <div className="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
    //         <div className="row">
    //           <div className="col-12 col-lg-8 card-container">
    //             <div className="card">
    //               <div className="card-body">
    //                 <h1 className="card-title">Portfolio</h1>
    //                 <hr />
    //                 <div className="container-fluid" id="portfolio-container">
    //                   <div className="row">
    //                     {props.children}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default ProjectContainer;
