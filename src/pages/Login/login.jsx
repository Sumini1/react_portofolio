import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // tempat penyimpanan data, data dinamis harus disimpan dalam state
  // state mempunyai 2 parameter yaitu nama state dan cara merubah state nya.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    setLoading(true);
    // function buat ngambil username dan password. tidak ada inputan, langsung proses
    e.preventDefault();
    const bodyPayload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", bodyPayload)
      .then((respon) => {
        console.log(respon);
        setLoading(false);
        Swal.fire({
          title: "Login Berhasil",
          icon: "succes",
          showConfirmButton: true,
        });
        // cara menyimpan token ketika login sudah berhasil
        const token = respon.data.data.token;
        localStorage.setItem("token", token);
        setSucces("Login Berhasil");
        // pindah halaman ke menu setelah login berhasil
        navigate("/menu");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          title: "Login Gagal",
          icon: "error",
          showCancelButton: true,
        });
      });
  };

  return (
    <div className=" bg-slate-800">
      <section
        className=" dark:bg-gray-800 mb-0 p-0 w-[100%] h-[100vw] z-50 backdrop-blur"
        style={{
          backgroundImage: `url(/logobaju.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <a
            href="#"
            className="flex items-center mb-28 text-2xl font-semibold text-gray-900 "
          ></a>
          <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8  dark:bg-gray-800">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary text-center">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm  text-primary font-bold"
                  >
                    Your email
                  </label>
                  <input
                    type=""
                    name="username"
                    id="email"
                    onChange={onChangeUsername}
                    className="bg-gray-500 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm  text-primary font-bold"
                  >
                    Password
                  </label>
                  <input
                    type=""
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={onChangePassword}
                    className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border rounded  focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className=" text-primary font-semibold">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-primary-600 hover:underline text-primary font-bold"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={loading ? true : false}
                  onClick={onSubmit}
                  className="w-full text-primary font-bold bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {loading ? "Loading....." : "Submit"}
                </button>
                <p className="text-sm  text-primary font-bold text-center">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
