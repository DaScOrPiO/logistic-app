/* eslint-disable react/prop-types */
import delivery from "../../assets/images/delivery-1.jpg";

export default function Signup(props) {
  const changeState = () => props.setShowME(!props.showMe);

  return (
    <section className="signin-contents w-full lg:h-screen h-auto px-5 flex flex-col items-center justify-center py-24">
      <div className="flex flex-col lg:flex-row items-center px-6 py-2">
        <div className="image lg:w-2/4 w-full lg:h-full md:h-2/4 h-full flex items-center">
          <img src={delivery} alt="delivery" className="" />
        </div>

        <div
          className="form-contents lg:w-2/4 lg:h-full md:h-2/4 w-full px-5 py-3
        flex flex-col items-center justify-center"
        >
          <form action="" className="w-full mb-3">
            <div className="flex flex-col mb-3">
              <label htmlFor="mail">E-mail</label>
              <input type="email" name="" id="mail" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="sign-key">Password</label>
              <input type="password" name="" id="sign-key" />
            </div>

            <button className="bg-red-600 px-4 py-2 mt-3">Sign in</button>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <p type="button">
          Don&apos;t have an account?
          <button
            type="button"
            role="button"
            className="ml-2 bg-transparent text-blue-900"
            onClick={changeState}
          >
            Register
          </button>
        </p>
      </div>
    </section>
  );
}
