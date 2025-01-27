// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Download, Package, Truck, DollarSign, MapPin} from 'lucide-react'
// import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
// import Link from 'next/link'

// interface ShipmentResponse {
//   label_id: string
//   status: string
//   shipment_id: string
//   tracking_number: string
//   ship_date: string
//   shipment_cost: {
//     currency: string
//     amount: number
//   }
//   carrier_code: string
//   tracking_status: string
//   tracking_url: string
//   label_download: {
//     pdf: string
//     png: string
//     zpl: string
//     href: string
//   }
//   packages: Array<{
//     weight: {
//       value: number
//       unit: string
//     }
//     dimensions: {
//       unit: string
//       length: number
//       width: number
//       height: number
//     }
//   }>
//   ship_to: {
//     to_name : string
//     to_phone: string
//     to_address: string
//     to_city: string
//     to_email:string
//     to_country:string
//     to_postal_code:string
//   }
// }

// interface JsonResponseViewerProps {
//   data: ShipmentResponse
// }

// export default function ShipmentResponseViewer({ data }: JsonResponseViewerProps) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleDownload = () => {
//     const pdfUrl = data.label_download?.pdf;
//     if (pdfUrl) {
//       window.open(pdfUrl, '_blank');
//     } else {
//       alert("Download link not available.");
//     }
//   };

//   if (!data || !data.ship_to) {
//     return <p>Shipment information is unavailable.</p>
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <Button
//         className="bg-secondary  hover:bg-pink-600 text-white text-sm lg:text-base py-3 px-6 rounded-md shadow-md transition-all"
//         onClick={() => setIsDialogOpen(true)}
//       >
//         View Shipment Details
//       </Button>

//       <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle className="text-2xl font-bold">Shipment Details</AlertDialogTitle>
//           </AlertDialogHeader>
//           <div className="grid gap-4 mt-4">
//             <div className="flex items-center space-x-2">
//               <Package className="text-blue-500" />
//               <span className="font-semibold">Shipment ID:</span>
//               <span>{data.shipment_id}</span>
//             </div>

//             <div className="flex items-center space-x-2">
//               <Truck className="text-green-500" />
//               <span className="font-semibold">Status:</span>
//               <span className="capitalize">{data.status}</span>
//             </div>

//             <div className="flex items-center space-x-2">
//               <DollarSign className="text-yellow-500" />
//               <span className="font-semibold">Cost:</span>
//               {/* <span>{`${data.shipment_cost.amount} ${data.shipment_cost.currency}`}</span> */}
//             </div>

//             <div className="flex items-center space-x-2">
//               <MapPin className="text-red-500" />
//               <span className="font-semibold">Ship To:</span>
//               <span>{`${data.ship_to.to_name || 'N/A'}, ${data.ship_to.to_address || 'N/A'} ${data.ship_to.to_address || 'N/A'}, ${data.ship_to.to_postal_code|| 'N/A'}, ${data.ship_to.to_country|| 'N/A'}`}</span>
//             </div>
//           </div>
//           <AlertDialogFooter>
//             <Button
//               className="mt-4 bg-secondary hover:bg-pink-600 text-white"
//               onClick={handleDownload}
//             >
//               <Download className="mr-2 h-4 w-4" />
//               Download Label
//             </Button>
//             <Link href={data.tracking_url}>
//             <Button
//               className="mt-4 bg-secondary hover:bg-pink-600 text-white"
//               onClick={handleDownload}
//             >
//               Track Order
//             </Button>
//             </Link>
            
//             <Button
//               variant="outline"
//               className="mt-4"
//               onClick={() => setIsDialogOpen(false)}
//             >
//               Close
//             </Button>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Download, Package, Truck, DollarSign, MapPin } from 'lucide-react'
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import Link from 'next/link'

interface ShipmentResponse {
  label_id: string
  status: string
  shipment_id: string
  tracking_number: string
  ship_date: string
  shipment_cost: {
    currency: string
    amount: number
  }
  carrier_code: string
  tracking_status: string
  tracking_url: string
  label_download: {
    pdf: string
    png: string
    zpl: string
    href: string
  }
  packages: Array<{
    weight: {
      value: number
      unit: string
    }
    dimensions: {
      unit: string
      length: number
      width: number
      height: number
    }
  }>
  ship_to: {
    name: string
    phone: string
    address_line1: string
    city_locality: string
    email: string
    country_code: string
    postal_code: string
    
  }
}

interface JsonResponseViewerProps {
  data: ShipmentResponse
}

export default function ShipmentResponseViewer({ data }: JsonResponseViewerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDownload = () => {
    const pdfUrl = data.label_download?.pdf;
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      alert("Download link not available.");
    }
  };

  if (!data || !data.ship_to) {
    return <p>Shipment information is unavailable.</p>
  }

  return (
    <div className="container mx-auto p-4">
      <Button
        className="bg-secondary hover:bg-pink-600 text-white text-sm lg:text-base py-3 px-6 rounded-md shadow-md transition-all"
        onClick={() => setIsDialogOpen(true)}
      >
        View Shipment Details
      </Button>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold">Shipment Details</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="grid gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <Package className="text-blue-500" />
              <span className="font-semibold">Shipment ID:</span>
              <span>{data.shipment_id}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Truck className="text-green-500" />
              <span className="font-semibold">Status:</span>
              <span className="capitalize">{data.status}</span>
            </div>

            <div className="flex items-center space-x-2">
              <DollarSign className="text-yellow-500" />
              <span className="font-semibold">Cost:</span>
              <span>{`${data.shipment_cost.amount} ${data.shipment_cost.currency}`}</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="text-red-500" />
              <span className="font-semibold">Ship To:</span>
              <span>{`${data.ship_to.name || 'N/A'}, ${data.ship_to.address_line1 || 'N/A'}, ${data.ship_to.city_locality || 'N/A'}, ${data.ship_to.postal_code || 'N/A'}, ${data.ship_to.country_code || 'N/A'}`}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Tracking Status:</span>
              <span>{data.tracking_status || 'N/A'}</span>
            </div>
          </div>
          <AlertDialogFooter>
            <Button
              className="mt-4 bg-secondary hover:bg-pink-600 text-white"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Label
            </Button>
            <Link href={data.tracking_url}>
              <Button
                className="mt-4 bg-secondary hover:bg-pink-600 text-white"
              >
                Track Order
              </Button>
            </Link>

            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
