const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  // // fetch raw data from the randomuser api
  // const fetchRandomUser = () => axios.get(`http://localhost:4000/privacyPolicy`);
  // // await for results
  // const res = await fetchRandomUser();
  
  // const node = {
  //   // Required fields
  //   id: `${res.data[0].privacy_policy_id}`,
  //   parent: `__SOURCE__`,
  //   internal: {
  //     type: `PrivacyPolicy`, // name of the graphQL query --> allRandomUser {}
  //     // contentDigest will be added just after
  //     // but it is required
  //   },
  //   children: [],

  //   // Other fields that you want to query with graphQl
  //   text:res.data[0].privacy_policy_text
  //   // etc...
  // }

  // // Get content digest of node. (Required field)
  // const contentDigest = crypto
  //   .createHash(`md5`)
  //   .update(JSON.stringify(node))
  //   .digest(`hex`);

  // node.internal.contentDigest = contentDigest;

  // // Create node with the gatsby createNode() API
  // createNode(node);

  return;
}
