// Imports: GraphQL
import { gql } from 'apollo-server-express';


// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getInstanceList: [Instance]
    getInstanceById(id: ID): Instance
  }

  type Instance {
    application_path: String
    countries: String
    name: String
    site_name: String
    type: String
    updated_at: String
  }

  type Country {
    name_en: String
    country_code: String
    region_code: Int
    region_code_en: String
  }

  type Region {
    name: String
    country: String
    settlements: String
  }
`;


// Exports
export default TYPEDEFS;