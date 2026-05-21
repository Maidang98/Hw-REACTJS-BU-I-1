function FeatureItem(props) {
    return (
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="card h-100 text-center border-0 shadow-sm">
          <div className="card-body p-4">
  
            <div
              className="bg-primary text-white rounded-3 d-inline-flex
              align-items-center justify-content-center mb-4"
              style={{
                width: "70px",
                height: "70px",
                marginTop: "-60px",
              }}
            >
              <i className={`bi ${props.icon} fs-2`}></i>
            </div>
  
            <h3 className="fw-bold">{props.title}</h3>
  
            <p className="text-muted">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default FeatureItem;