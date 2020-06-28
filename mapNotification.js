
const dataNotification = [
  {
    "email":      "email@example.com",
    "first_name": "Tony",
    "last_name":  "Nguyen",
    "avatar_url": "http://example.com/pic.jpg",
    "createdAt": "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    "group":   "Billing", // | "Collaboration" | "Simulation", 
    "type":    "warning", // "info" | "warning" | "alert" | "success",
    "title":   "Up to 100 characters text",
    "message": `Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message`,
    "seen": 0, //   0 | 1,
    "user_options": {
        // Number of options and keys will vary
        // So, loop trough them
        // Can be null, if no actions are available for this notification
      "Accept": "https://some-api/long_key/accept",
      "Reject": "https://some-api/long_key/reject"
    },
    "action_response": null, //"Up to 50 characters string" | null
  },
  {
    "email":      "email@example.com",
    "first_name": "John",
    "last_name":  "Doe",
    "avatar_url": "http://example.com/pic.jpg",
    "createdAt": "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    "group":   "Collaboration", // | "Collaboration" | "Simulation", 
    "type":    "info", // "info" | "warning" | "alert" | "success",
    "title":   "Up to 100 characters text",
    "message": `Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message`,
    "seen": 0, //   0 | 1,
    "user_options":    null,
    "action_response": null, //"Up to 50 characters string" | null
  },
  {
    "email":      "email@example.com",
    "first_name": "Thang",
    "last_name":  "Doe",
    "avatar_url": "http://example.com/pic.jpg",
    "createdAt": "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    "group":   "Simulation", // | "Collaboration" | "Simulation", 
    "type":    "warning", // "info" | "warning" | "alert" | "success",
    "title":   "Up to 100 characters text",
    "message": `Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message`,
    "seen": 0, //   0 | 1,
    "user_options":    null,
    "action_response": null, //"Up to 50 characters string" | null
  },
  {
    "email":      "email@example.com",
    "first_name": "Stefan",
    "last_name":  "Doe",
    "avatar_url": "http://example.com/pic.jpg",
    "createdAt": "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    "group":   "Billing", // | "Collaboration" | "Simulation", 
    "type":    "alert", // "info" | "warning" | "alert" | "success",
    "title":   "Up to 100 characters text",
    "message": `Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message`,
    "seen": 0, //   0 | 1,
    "user_options": {
        // Number of options and keys will vary
        // So, loop trough them
        // Can be null, if no actions are available for this notification
      "Accept": "https://some-api/long_key/accept",
      "Reject": "https://some-api/long_key/reject"
    },
    "action_response": null, //"Up to 50 characters string" | null
  },
  {
    "email":      "email@example.com",
    "first_name": "John",
    "last_name":  "Doe",
    "avatar_url": "http://example.com/pic.jpg",
    "createdAt": "2020-06-24T07:51:48.659Z",
    // String - define how to group notifications in stack
    "group":   "Billing", // | "Collaboration" | "Simulation", 
    "type":    "success", // "info" | "warning" | "alert" | "success",
    "title":   "Up to 100 characters text",
    "message": `Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message. 
      Up to 300 characters text message`,
    "seen": 0, //   0 | 1,
    "user_options": {
        // Number of options and keys will vary
        // So, loop trough them
        // Can be null, if no actions are available for this notification
      "Accept": "https://some-api/long_key/accept",
      "Reject": "https://some-api/long_key/reject"
    },
    "action_response": null, //"Up to 50 characters string" | null
  },
];

// const output =  {
//   Billing: [
//     {}
//   ],
//   Collaboration: [
//     {}
//   ],
//   Simulation: [
//     {}
//   ],
// }



const expectObj = {};

const mapNotificationByGroup = (data) => {
  for(let item of data) {
    if(!expectObj[item.group]) {
      expectObj[item.group] = []
    }
    expectObj[item.group].push(item)
  }

  return expectObj;
}

const result = mapNotificationByGroup(dataNotification);

console.log('===result====', result)