// Imports: Axios
import axios from 'axios';

// Imports: API Key


// GraphQL: Resolvers
const RESOLVERS = {

  Query: {
    getInstanceList: (parent, args) => {
      return axios.get(`http://data.unhcr.org/api/instances/list.json`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    getInstanceById: (parent, args) => {
      return axios.get(`http://data.unhcr.org/api/instances/show.json?id=${args.id}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    }
  }
};

// Exports
export default RESOLVERS;