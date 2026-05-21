function Banner() {
    return (
      <div className="container my-5">
        <div className="bg-light rounded-3 p-5 text-center">
          <h1 className="fw-bold display-4">A warm welcome!</h1>
  
          <p className="lead my-4">
            Bootstrap utility classes are used to create this jumbotron since the
            old component has been removed from the framework.
          </p>
  
          <button className="btn btn-primary btn-lg">
            Call to action
          </button>
        </div>
      </div>
    );
  }
  
  export default Banner;