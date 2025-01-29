// "use server"

// //-getReq
// export async function getReq() {
//    const res = await fetch("https://api.shipengine.com/v1/carriers",{
//     method: "GET",
//     headers: {
//       "API-Key" : process.env.SHIPENGINE_API_KEY as string,
//       "Content-Type": "application/json"
//     }
//    })

//    const data = await res.json()
//    return data
// }

// //-postReq

// interface Data {
//   to_name: string
//   to_phone: string
//   to_address: string
//   to_city: string
//   to_email: string
//   to_country: string
//   to_postal_code: string,
//   weight:number
// }

// export async function postReq(item: Data) {

//   const {
//     to_name, to_phone, to_address, to_city, to_email, to_country,weight
//   } = item

//   console.log('name,',to_name,to_phone,to_email);
  

  
//   const res = await fetch("https://api.shipengine.com/v1/labels", {
    
//     method: "POST",
//     headers: {
//       "API-Key": process.env.SHIPENGINE_API_KEY as string,
//       "Content-Type": "application/json"
//     },

    
//     body: JSON.stringify({
//       "shipment": {
//         "carrier_id": "se-1755050",
//         "service_code": "usps_priority_mail",
//         "ship_to": {
//           "name": to_name,
//           "phone": to_phone,
//           "address_line1": to_address,
//           "city_locality": to_city,
//           "state_province": "CA",
//           "email": to_email,
//           "postal_code": "95128",
//           "country_code": "US",
//           "address_residential_indicator": "yes"
//         },
//         "ship_from": {
//           "name": "Hekto",
//           "company_name": "Hekto (Furniture)",
//           "phone": "0123-4567",
//           "address_line1": "525 S Winchester Blvd",
//           "city_locality": "New York",
//           "state_province": "TX",
//           "postal_code": "78731",
//           "country_code": "US",
//           "address_residential_indicator": "no"
//         },
//         "packages": [
//           {
//             "weight": {
//               "value": weight,
//               "unit": "ounce"
//             },
//             "dimensions": {
//               "height": 12,
//               "width": 22,
//               "length": 33,
//               "unit": "inch"
//             }
//           }
//         ]
//       }
//     })
    
//   })

//   const data = await res.json()


//   console.log("🍊", data);

//   return data;
// }


"use server"

//--------------------------------------------------------getReq
export async function getReq() {
   const res = await fetch("https://api.shipengine.com/v1/carriers",{
    method: "GET",
    headers: {
      "API-Key" : process.env.SHIPENGINE_API_KEY as string,
      "Content-Type": "application/json"
    }
   })

   const data = await res.json()

   return data
}

//--------------------------------------------------------postReq

interface Data {
  to_name : string
  to_phone: string
  to_address: string
  to_city: string
  weight_value: number
  height: number
  width: number
  length: number
}

export async function postReq(item: Data) {

  const {to_name, to_phone, to_address, to_city} = item

  const res = await fetch("https://api.shipengine.com/v1/labels",{
    method: "POST",
    headers: {
      "API-Key": process.env.SHIPENGINE_API_KEY as string,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "shipment": {
        "carrier_id": "se-1755050",
        "service_code": "usps_priority_mail_express",
        "ship_to": {
          "name": to_name,
          "phone": to_phone,
          "address_line1": to_address,
          "city_locality": to_city,
          "state_province": "CA",
          "postal_code": "95128",
          "country_code": "US",
          "address_residential_indicator": "yes"
        },
        "ship_from": {
          "name": "Hekto",
          "company_name": "Hekto (Furniture)",
          "phone": "0123-4567",
          "address_line1": "525 S Winchester Blvd",
          "city_locality": "New York",
          "state_province": "TX",
          "postal_code": "78731",
          "country_code": "US",
          "address_residential_indicator": "no"
        },
        "packages": [
          {
            "weight": {
              "value": 12,
              "unit": "ounce"
            },
            "dimensions": {
              "height": 12,
              "width": 22,
              "length": 33,
              "unit": "inch"
            }
          }
        ]
      }
    })
  })

  const data = await res.json()

  console.log("🍊",data);

  return data
  
}
