import Logo from '../logo_imgs/fteam-logo2.png';
import MenuSelect from './MenuSelect';
import { Link } from 'react-router-dom';
const Navbar = ({ auth }) => {
  console.log(auth);
  return (
    <>
      <div className="w-100 top-grid d-flex">
        <div className="col-4 h-100 d-flex align-items-center">
          <div className="logo-wrap">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="col-4 h-100"></div>
        <div className="col-4 h-100 ">
          <MenuSelect />
          <div className="nav-icon-wrap w-100 h-100 d-md-flex d-none justify-content-end align-items-center">
            <div className="like-icon-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <Link to={auth === null ? '/login' : '/member'}>
              <div className="user-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </Link>
            <Link to={'/carts'}>
              <div className="cart-icon-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </Link>
            <Link className=" text-decoration-none text-black" to={'/carts'}>
              <div className="auth-text-wrap">LOGOUT</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
