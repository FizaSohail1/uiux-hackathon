// /studio/schemaTypes/shipment.ts
export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }],
      },
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
      },
      {
        name: 'carrier',
        title: 'Carrier',
        type: 'string',
      },
      {
        name: 'shipmentStatus',
        title: 'Shipment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Not Shipped', value: 'not_shipped' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'In Transit', value: 'in_transit' },
            { title: 'Delivered', value: 'delivered' },
          ],
        },
      },
      {
        name: 'shipmentDate',
        title: 'Shipment Date',
        type: 'datetime',
      },
      {
        name: 'deliveryDate',
        title: 'Delivery Date',
        type: 'datetime',
      },
    ],
  };
  