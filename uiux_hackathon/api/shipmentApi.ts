"use server"

//-getReq
export async function getReq() {
   const res = await fetch("https://api.shipengine.com/v1/carriers",{
    method: "GET",
    headers: {
      "API-Key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_TOKEN as string,
      "Content-Type": "application/json"
    }
   })

   const data = await res.json()

   return data
}

//-postReq

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

  const {to_name, to_phone, to_address, to_city,weight_value, height, width, length} = item

  const res = await fetch("https://api.shipengine.com/v1/labels",{
    method: "POST",
    headers: {
      "API-Key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_Token as string,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "shipment": {
        "carrier_id": "se-1755050",
        "service_code": "usps_priority_mail",
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
              "value": weight_value,
              "unit": "ounce"
            },
            "dimensions": {
              "height": height,
              "width": width,
              "length": length,
              "unit": "inch"
            }
          }
        ]
      }
    })
  })

  const data = await res.json()

  console.log("🍊",data);
}
