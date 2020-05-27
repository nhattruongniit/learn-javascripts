const _ = require("lodash");

const data = [
  {
    id: "d6e85248-031e-41ed-bbbf-a3a8fcc0d3a7",
    addOnName: "tony",
    description: "tony",
    icon: null,
    applicationId: "8e20aeb6-2d1a-4aa0-81f5-8060dbd07338",
    isPublic: false,
    views: 0,
    likes: 0,
    downloads: 0,
    comments: 0,
    isSuspended: false,
    ownerId: "d72f59fd-bed4-4c9d-985a-96535c694a64",
    insertedAt: "2020-05-25T15:35:58.000Z",
    updatedAt: "2020-05-25T15:35:58.000Z",
    current: {
      id: "38537db4-7f18-4f05-86bb-a5a2c055688a",
      version: 1,
      url: "https://csb-k86oz.netlify.app/",
      data: {
        name: "Thang Addon",
        tags: ["addon", "bem", "usonia"],
        icons: [
          "https://www.google.com/logos/doodles/2020/celebrating-nkosi-johnson-6753651837108279-2x.jpg",
        ],
        version: 1,
        homepage: "https://google.com",
        whatsnew: ["new function", "fixbug"],
        categories: ["electronic", "car", "bicycle", "book"],
        repository: "https://github.com/quaywin/cloud-demo",
        description: "BEM add ons ",
        versionName: "0.1",
      },
      addOnStateId: "d6e85248-031e-41ed-bbbf-a3a8fcc0d3a7",
      insertedAt: "2020-05-25T15:35:59.000Z",
      updatedAt: "2020-05-25T15:35:59.000Z",
    },
  },
  {
    id: "ed4d9c14-c979-467f-aa2c-bbd11d7c364b",
    addOnName: "tony-test-add-on",
    description: "tony test add-on",
    icon: null,
    applicationId: "8e20aeb6-2d1a-4aa0-81f5-8060dbd07338",
    isPublic: true,
    views: 0,
    likes: 0,
    downloads: 0,
    comments: 0,
    isSuspended: false,
    ownerId: "d72f59fd-bed4-4c9d-985a-96535c694a64",
    insertedAt: "2020-05-25T16:22:01.000Z",
    updatedAt: "2020-05-25T16:22:01.000Z",
    current: {
      id: "cbf90f7e-7964-4a37-9831-88a5b8fddf31",
      version: 1,
      url: "https://csb-k86oz.netlify.app/",
      data: {
        name: "Thang Addon",
        tags: ["addon", "bem", "usonia"],
        icons: [
          "https://www.google.com/logos/doodles/2020/celebrating-nkosi-johnson-6753651837108279-2x.jpg",
        ],
        version: 1,
        homepage: "https://google.com",
        whatsnew: ["new function", "fixbug"],
        categories: ["electronic", "car", "bicycle", "book", "sports"],
        repository: "https://github.com/quaywin/cloud-demo",
        description: "BEM add ons ",
        versionName: "0.1",
      },
      addOnStateId: "ed4d9c14-c979-467f-aa2c-bbd11d7c364b",
      insertedAt: "2020-05-25T16:22:03.000Z",
      updatedAt: "2020-05-25T16:22:03.000Z",
    },
  },
];

const extractCategories = [];

// away 1
// for (const item of data) {
//   for (const cate of item.current.data.categories) {
//     extractCategories.push(cate);
//   }
// }
// const newCategories = [...new Set(extractCategories)];

// away 2
const mergedCategories = [];
const listCategories = data.map((item) => item.current.data.categories);
const result = [...new Set(mergedCategories.concat.apply([], listCategories))];

console.log(result);
