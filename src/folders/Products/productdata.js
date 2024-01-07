const productData = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1...',
      price: 99.99,
      category: 'Geyser',
      images: ['path_to_image_1.jpg', 'path_to_image_2.jpg'],
      variations: [
        {
          type: 'Size',
          options: [
            { name: 'Small', price: 99.99 },
            { name: 'Medium', price: 109.99 },
            { name: 'Large', price: 119.99 },
          ],
        },
        {
          type: 'Color',
          options: [
            { name: 'Red', price: 99.99 },
            { name: 'Blue', price: 99.99 },
            { name: 'Black', price: 109.99 },
          ],
        },
        {
          type: 'Material',
          options: [
            { name: 'Plastic', price: 99.99 },
            { name: 'Metal', price: 119.99 },
            { name: 'Glass', price: 129.99 },
          ],
        },
        {
          type: 'Style',
          options: [
            { name: 'Modern', price: 99.99 },
            { name: 'Vintage', price: 119.99 },
            { name: 'Contemporary', price: 109.99 },
          ],
        },
        {
          type: 'Capacity',
          options: [
            { name: '32GB', price: 99.99 },
            { name: '64GB', price: 129.99 },
            { name: '128GB', price: 149.99 },
          ],
        },
        {
          type: 'Pattern',
          options: [
            { name: 'Striped', price: 99.99 },
            { name: 'Floral', price: 99.99 },
            { name: 'Checkered', price: 109.99 },
          ],
        },
        
      ],
      pdfUrl: 'path_to_product1_pdf.pdf',
      // Add more detailed information as needed for each product
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2...',
      price: 149.99,
      category: 'Clothing',
      images: ['path_to_image_3.jpg', 'path_to_image_4.jpg'],
      variations: [
        {
          type: 'Size',
          options: [
            { name: 'Small', price: 149.99 },
            { name: 'Medium', price: 159.99 },
            { name: 'Large', price: 169.99 },
          ],
        },
        {
          type: 'Color',
          options: [
            { name: 'White', price: 149.99 },
            { name: 'Black', price: 149.99 },
            { name: 'Blue', price: 159.99 },
          ],
        },
        {
          type: 'Material',
          options: [
            { name: 'Cotton', price: 149.99 },
            { name: 'Polyester', price: 159.99 },
            { name: 'Silk', price: 169.99 },
          ],
        },
        {
          type: 'Style',
          options: [
            { name: 'Casual', price: 149.99 },
            { name: 'Formal', price: 159.99 },
            { name: 'Partywear', price: 169.99 },
          ],
        },
        {
          type: 'Pattern',
          options: [
            { name: 'Striped', price: 149.99 },
            { name: 'Solid', price: 159.99 },
            { name: 'Floral', price: 159.99 },
          ],
        },
        // Add more variations as needed
      ],
      pdfUrl: 'path_to_product2_pdf.pdf',
      // Add more detailed information as needed for each product
    },
    // Add more products as necessary
  ];
  
  export default productData;
  