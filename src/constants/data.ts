    // Simulating fetching new arrivals items
    export const items = Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      title: `New Arrival ${index + 1}`,
      price: `49.00`,
      image: `/images/cat-item${index + 1}.jpg`
  }));
  // ${(Math.random() * 100).toFixed(2)}
  export const blogs = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    title: `How to look outstanding in pastel ${index + 1}`,
    date: `12 Jan, 2022`,
    category: 'Fashion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: `/images/hero${index + 1}.jpg`
}));