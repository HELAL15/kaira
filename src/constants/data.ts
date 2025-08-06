    // Simulating fetching new arrivals items
    export const items = Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      title: `New Arrival ${index + 1}`,
      price: `$${(Math.random() * 100).toFixed(2)}`,
      image: `/images/cat-item${index + 1}.jpg`
  }));