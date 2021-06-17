import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="profile">
      <div className="row">
        <div className="col-lg-7 mx-auto text-white text-center pt-5"></div>
      </div>
      {/* End */}
      <div className="row">
        <div className="col-xl-8 col-md-6 col-sm-10 mx-auto">
          {/* Profile widget */}
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 bg-dark">
              <div className="media align-items-end profile-header">
                <div className="profile mr-3">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="..."
                    width={130}
                    className="rounded mb-2 img-thumbnail"
                  />
                  <a href="#" className="btn btn-dark btn-sm btn-block">
                    Edit profile
                  </a>
                </div>
                <div className="media-body mb-5 text-white">
                  <h3 className="mt-0 mb-0">{user && user.name}</h3>
                  <h4 className="small mb-4">
                    {" "}
                    <i className="fa fa-map-marker mr-2" />
                    {user && user.email}
                  </h4>{" "}
                  <h4 className="small mb-4">
                    {" "}
                    <i class="fas fa-phone"></i>
                    {user && user.phone}
                  </h4>
                </div>
              </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">241</h5>
                  <small className="text-muted">
                    {" "}
                    <i className="fa fa-picture-o mr-1" />
                    Photos
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">84K</h5>
                  <small className="text-muted">
                    {" "}
                    <i className="fa fa-user-circle-o mr-1" />
                    Followers
                  </small>
                </li>
              </ul>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent photos</h5>
                <a href="#" className="btn btn-link text-muted">
                  Show all
                </a>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-2 pr-lg-1">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-lg-6 mb-2 pl-lg-1">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-lg-6 pr-lg-1 mb-2">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-lg-6 pl-lg-1">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>
              <div className="py-4">
                <h5 className="mb-3">Recent posts</h5>
                <div className="p-4 bg-light rounded shadow-sm">
                  <p className="font-italic mb-0">
                  Can I share with you a bit of feedback that I/we have been hearing?
                  </p>
                  <ul className="list-inline small text-muted mt-3 mb-0">
                    <li className="list-inline-item">
                      <i className="fa fa-comment-o mr-2" />
                      12 Comments
                    </li>
                    <li className="list-inline-item">
                      <i className="fa fa-heart-o mr-2" />
                      200 Likes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End profile widget */}
        </div>
      </div>
    </div>
  );
};

export default Profile;