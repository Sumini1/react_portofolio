// import React from "react";

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   const element = document.documentElement;

//   React.useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

// const handleChange = () => {
//   if (theme === 'light') {
//     setTheme('dark')
//   }else {
//     setTheme('light')
//   }
// }

//   return (
//     <>
//       <div className="flex-row">
//         <img
//           src="/image/dark5.webp"
//           alt=""
//           onClick={handleChange}
//           className={`w-8 absolute right-70 -left-70 z-auto cursor-pointer drop-shadow-sm shadow-black transition-all duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
//         />
//         <img
//           src="/image/light1.webp"
//           alt=""
//           onClick={handleChange}
//           className="w-9 absolute right-70 left-70 z-auto cursor-pointer drop-shadow-sm shadow-black transition-all duration-300"
//         />
//       </div>
//     </>
//   );
// };
// export default DarkMode;

import React from "react";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
    const element = document.documentElement;

    React.useEffect(() =>  {
      if (theme === 'dark') {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light')
      }
    }, [theme])  

    const handleChange = () => {
      if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

  return (
    <>
      <div className="flex">
        <img
          src="/image/darkDark.webp"
          alt=""
          onClick={handleChange}
          className={`w-12  left-auto right-10 z-10 cursor-pointer drop-shadow-sm transition-all duration-300 ${theme !== 'dark ' ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="/image/modelight.jpeg"
          alt=""
          onClick={handleChange}
          className="w-10 absolute rounded-full left-auto right-90 z-10 cursor-pointer drop-shadow-sm transition-all duration-300"
        />
      </div>
    </>
  );
};

export default DarkMode;
