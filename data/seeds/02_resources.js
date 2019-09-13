exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      resource_name: "Computer",
      resource_description: "Any computer will do"
    },
    {
      id: 2,
      resource_name: "Blockstack Account",
      resource_description: "https://browser.blockstack.org/sign-up"
    },
    {
      id: 3,
      resource_name: "Laundry Detergent",
      resource_description: "Any detergent will do"
    },
    {
      id: 4,
      resource_name: "Washer & Dryer",
      resource_description: "Any washer and dryer will do"
    },
    {
      id: 5,
      resource_name: "Google Developers Account",
      resource_description: "https://developers.google.com/sign-up"
    }
  ]);
};
