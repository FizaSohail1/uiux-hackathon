'use client'
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/Hero/page';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import ShipmentResponseViewer from '../components/shipmentResponse/shipmentResponseViewer';

interface ShipmentData {
  shipment_id:string,
  shipment_cost: {
    currency: string
    amount: number
  }
  ship_to: {
    name: string;
    phone: string;
    address_line1: string;
    city_locality: string;
    email: string;
    country_code: string;
    postal_code: string;
  };
  tracking_url: string;
  tracking_status:string

  label_download: {
    pdf: string
    png: string
    zpl: string
    href: string
  }
}

function Orders() {
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  useEffect(() => {
    const storedShipmentDetails = localStorage.getItem('shipment');
    console.log('Stored Shipment Details:', storedShipmentDetails);

    const addressDetails = localStorage.getItem('addressDetails');
    console.log('Stored address Details',addressDetails);
    

  
    if (storedShipmentDetails && addressDetails) {
      try {
        const parsedData = JSON.parse(storedShipmentDetails);
        const parseUserInfo = JSON.parse(addressDetails)
        console.log('Parsed Shipment Data:', parsedData);

        const transformedData = {
          shipment_id: parsedData.shipment_id,
          status: parsedData.status,
          shipment_cost: {
            currency: parsedData.shipment_cost?.currency || 'USD',
            amount: parsedData.shipment_cost?.amount || 0,
          },
          ship_to: {
            name: parseUserInfo.to_name,
            phone: parseUserInfo.to_phone, 
            address_line1: parseUserInfo.to_address,
            city_locality: parseUserInfo.to_city,
            email: parseUserInfo.to_email  , 
            country_code: parseUserInfo.to_country,
            postal_code: parseUserInfo.to_postal_code,
          },
          tracking_status: parsedData.tracking_status  ,
          tracking_url: parsedData.tracking_url || '#',

          label_download: {
            pdf: parsedData.label_download.pdf,
            png: parsedData.label_download.png,
            zpl: parsedData.label_download.zpl,
            href: parsedData.label_download.href
          }
        };
  
        console.log('Transformed Shipment Data:', transformedData);
        setShipment(transformedData);
      } catch (error) {
        console.error('Error parsing stored shipment details:', error);
      }
    }
  }, []);
  

  return (
    <div>
      <HeroSection name={'Order Completed'} />

      <div className="my-16 lg:my-32 mx-auto lg:mx-[200px] 2xl:mx-default-margin">
        <div className="h-[360px] w-[250px] lg:h-[370px] lg:w-[630px] border-b-2 border-l-2 border-dashed border-gray-300 relative mx-auto justify-center lg:justify-start">
          <div className="absolute -top-4 -left-4 bg-white rounded-full p-1 border border-gray-300 shadow">
            <FiClock className="text-secondary text-xl lg:text-5xl" />
          </div>

          <div className="h-[326px] w-[260px] lg:h-[326px] lg:w-[600px] mx-auto relative p-2">
            <div className="h-[40px] w-[48px] lg:w-[88px] lg:h-[80px] border-[1px] border-solid flex items-center bg-[#f6f7fa] justify-center mx-auto rounded-full">
              <div className="h-[35px] w-[35px] lg:h-[65px] lg:w-[65px] rounded-full bg-white justify-center items-center flex">
                <FaCheck className="text-xl lg:text-4xl text-secondary text-center" />
              </div>
            </div>

            <div className="my-3">
              <h1 className="text-2xl lg:text-[36px] lg:leading-[42px] text-center text-headingsText">
                Your Order Is Completed!
              </h1>
            </div>

            <div className="text-center">
              <p className="font-bold text-sm lg:text-[16px] lg:leading-[30px] text-[#8d92a7]">
                Thank you for your order! Your order is being processed and will be
                completed within 3-6 hours. You will receive an email confirmation when
                your order is completed.
              </p>
            </div>

            {shipment && (
              <div className="mt-6">
                <ShipmentResponseViewer data={shipment} />
              </div>
            )}
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-1 border border-gray-300 shadow">
            <GoChecklist className="text-secondary text-2xl lg:text-5xl" />
          </div>
        </div>
      </div>

      <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto my-20">
        <Image src={'/logos.png'} alt="logos" height={93} width={904} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default Orders;