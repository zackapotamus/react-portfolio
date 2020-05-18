import React from 'react';

const MainCard = (props) => {
  return (
    <main>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 px-0 mt-3 mt-sm-4 mt-md-5">
          <div className="row">
            <div className="col-12 col-lg-8 card-container">
              <div className="card shadow">
                <div className="card-body">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default MainCard;