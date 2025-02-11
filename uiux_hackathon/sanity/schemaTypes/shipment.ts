export default {
  name: "shipment",
  title: "Shipment",
  type: "document",
  fields: [
    {
      name: "userID",
      title: "User ID",
      type: "string",
    },
    {
      name: "userName",
      title: "User Name",
      type: "string",
    },
    {
      name: "productLength",
      title: "Total Products",
      type: "number",
    },
    {
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date & Time',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: "totalAmount",
      title: "Total Price",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In-transit", value: "In-transit" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    },
  ],
};
