// /studio/schemaTypes/order.ts
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
      },
      {
        name: 'createdAt',
        title: 'Order Date',
        type: 'datetime',
      },
    ],
  };
  