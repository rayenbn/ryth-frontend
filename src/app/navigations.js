export const navigations = [
  {
    name: "Home",
    description: "Home page",
    type: "dropDown",
    icon: "nav-icon i-Bar-Chart",
    path: "/",
    type: "link"
  },
  {
    name: "Startups",
    description: "Startups list",
    type: "dropDown",
    icon: "nav-icon i-Library",
    path: "/startups",
    type: "link"
  },
  {
    name: "Investors",
    description: "Investors list",
    type: "dropDown",
    icon: "nav-icon i-Administrator",
    path: "/investors",
    type: "link"
  },
  {
    name: "Education",
    description: "Education section",
    type: "dropDown",
    icon: "nav-icon i-Computer-Secure",
    sub: [
          {
            icon: "nav-icon i-Add-File",
            name: "Universities",
            path: "/universities",
            type: "link"
          },
          {
            icon: "nav-icon i-Email",
            name: "Scholarships",
            path: "/scholarships",
            type: "link"
          },
    ]
  },
  // {
  //   name: "Sessions",
  //   description: "Lorem ipsum dolor sit.",
  //   type: "dropDown",
  //   icon: "nav-icon i-Administrator",
  //   sub: [
  //     {
  //       icon: "i-Checked-User",
  //       name: "Signin",
  //       path: "/session/signin",
  //       type: "link"
  //     },
  //     {
  //       icon: "i-Add-User",
  //       name: "Signup",
  //       path: "/session/signup",
  //       type: "link"
  //     },
  //     {
  //       icon: "i-Find-User",
  //       name: "Forgot Password",
  //       path: "/session/forgot-password",
  //       type: "link"
  //     },
  //     {
  //       icon: "i-Error-404-Window",
  //       name: "Error 404",
  //       path: "/session/404",
  //       type: "link"
  //     }
  //   ]
  // },
  // {
  //   name: "Icons",
  //   description: "600+ premium icons",
  //   type: "link",
  //   icon: "i-Cloud-Sun",
  //   path: "/icons"
  // },
  // {
  //   name: "Doc",
  //   type: "extLink",
  //   description: "Lorem ipsum dolor sit.",
  //   tooltip: "Documentation",
  //   icon: "i-Safe-Box1",
  //   path: "http://demos.ui-lib.com/gull-react-doc"
  // }
];
