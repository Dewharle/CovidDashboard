// generate short random number
let ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let ID_LENGTH = 8;

let generateID = function () {
  let rtn = "";
  for (let i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
};

// getting variables
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const dob = document.getElementById("dob");
const CSituation = document.getElementById("case-situation");
const HFacility = document.getElementById("health-facility");
const RSTatus = document.getElementById("result-status");
const LGovn = document.getElementById("local-govn");
const ageRange = document.getElementById("age-range");
const date = document.getElementById("date");
const gender = document.querySelector('input[name="gender"]:checked');

// submitting form
const SubmitForm = () => {
  const create_data = [];
  create_data["first_name"] = fName.value;
  create_data["last_name"] = lName.value;
  create_data["gender"] = gender.value;
  create_data["date_of_birth"] = gender.dob;
  create_data["case_situation"] = CSituation.value;
  create_data["health_facility"] = HFacility.value;
  create_data["result_status"] = RSTatus.value;
  create_data["local_gvt"] = LGovn.value;
  create_data["date"] = date.value !== "" ? date.value : new Date();
  create_data["phone"] = phone.value;
  create_data["age_bracket"] = "0-4";
  create_data.id = generateID()
  console.log(create_data)
  $.ajax({
    url: "http://covid.calminfotech.com/post-api/create.php/",
    type: "POST",
    mode: "no-cors",
    data: { create_data: create_data },
    success: function (data) {
      console.log("sending...");
      if (data == "SUCCESS") {
        alert('Data sent successfully')
        return true
      } else {
        alert("Error Occurred please try again")
      }
    },
  });
  return false;
};
