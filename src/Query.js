import { gql } from "@apollo/client";

export const  Query =  gql`
    query  GetData
    {
          ships {
            id
            name
            home_port
            image
            year_built
          }
        }
      

`;

export  const  Query2 =  gql`
query  GetData($id: ID)
{
    ships(find: {id: $id}) { 
      id 
      name
      home_port
      image
      weight_kg
      year_built
      status
      model
      type
      successful_landings
      speed_kn
      mmsi
      url
      }
    }
`;



