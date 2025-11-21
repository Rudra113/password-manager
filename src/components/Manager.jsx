import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [credentialArray, setCredentialArray] = useState([]);

  useEffect(() => {
    let credentials = localStorage.getItem("credentials");
    if (credentials) {
      setCredentialArray(JSON.parse(credentials));
    }
  }, []);

  const showPassword = () => {
    passRef.current.type = "text";
    if (ref.current.src.includes("closeeye.webp")) {
      ref.current.src = "eye.png";
      passRef.current.type = "password";
    } else {
      ref.current.src = "closeeye.webp";
      passRef.current.type = "text";
    }
  };

  const copyText = (text) => {
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const savePassword = () => {
    console.log(form);
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setCredentialArray([...credentialArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "credentials",
        JSON.stringify([...credentialArray, { ...form, id: uuidv4() }])
      );
      console.log([...credentialArray, form]);
      setform({ site: "", username: "", password: "" });
      toast("Credentials saved.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Credentials not valid!!!");
    }
  };
  const deletePassword = (id) => {
    console.log("deleting credential with id " + id);
    let c = confirm("Do you want to delete this!!!");
    if (c) {
      setCredentialArray(credentialArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "credentials",
        JSON.stringify(credentialArray.filter((item) => item.id !== id))
      );
      toast("Credentials deleted.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const editPassword = (id) => {
    console.log("editting credential with id " + id);
    setform(credentialArray.filter((i) => i.id === id)[0]);
    setCredentialArray(credentialArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="absolute top-0 -z-10 h-full w-full bg-green-100">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(104,233,97,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className=" p-3   md:myContainer min-h-[82.5vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your own Password Manager.
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-900 w-full p-5 py-2"
            type="text"
            name="site"
            id="websites"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-900 w-full p-5 py-2"
              type="text"
              name="username"
              id="usernames"
            />
            <div className="relative flex justify-center items-center">
              <input
                ref={passRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-900 w-full p-5 py-2"
                type="password"
                name="password"
                id="passwords"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1 "
                  width={35}
                  src="/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-3 bg-green-500
          hover:bg-green-300 rounded-full px-4 py-2 w-fit text font-bold border-2 border-black"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="Credentials">
          <h2 className="text-3xl font-bold text-center py-3">
            Your Credentials
          </h2>
          {credentialArray.length === 0 && (
            <div className="text-center font-mono text-xl">
              No data to show!!!
            </div>
          )}
          {credentialArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-lg mb-12">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-3">Website</th>
                  <th className="py-3">Username</th>
                  <th className="py-3">Password</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-200">
                {credentialArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center ">
                        <div className="flex justify-center items-center text font-mono text-xl gap-2">
                          <a href={item.site} target="_blank">
                            <span>{item.site}</span>{" "}
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center ">
                        <div className="flex justify-center items-center text font-mono gap-2  text-xl">
                          <span>{item.username}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center ">
                        <div className="flex justify-center items-center text font-mono text-xl gap-2">
                          <span>{item.password}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px" }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center ">
                        <div className="flex justify-center items-center text font-mono text-xl gap-8">
                          <span
                            className="edit-btn cursor-pointer"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/zfzufhzk.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="delete-btn cursor-pointer"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
