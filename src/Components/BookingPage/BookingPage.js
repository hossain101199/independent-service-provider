import React from "react";

const BookingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-3" style={{ minHeight: "80vh" }}>
      <div className="row">
        <h3 className="text-center">Book appointment</h3>
        <div className="col-md-6">
          <form className="row g-3" onClick={handleSubmit}>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>

            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="+8801xxxxxxxxx"
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Chittagong</option>
                <option>Dhaka</option>
              </select>
            </div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12"></div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary w-25">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src={""} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title">{}</h3>
              <h5>{}</h5>
              <p className="card-text">{}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
