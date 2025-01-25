# Marketplace Development Journey (Day 1 - Day 6)

## Introduction

Welcome to the documentation of my **Marketplace-based Hackathon (HEKTO)**. This project showcases the development of a dynamic marketplace over six days, focusing on creating a responsive, feature-rich, and user-friendly web application.

---

## Table of Contents
1. [Day 1: Foundation of Marketplace ](#day-1-setting-foundation-of-marketplace)
2. [Day 2: Technical Foundation of Hekto](#day-2-technical-foundation-of-hekto)
3. [Day 3: API-Integeration](#day-3-api-integeration)
4. [Day 4: Dynamic Frontend Functionality](#day-4-dynamic-frontend-functionality)
5. [Day 5: Testing and Refinment Of HEKTO](#day-5-testing-and-refinement)
6. [Day 6: Deployment and Setting Envoirment Variables](#day-6-deployment-and-setting-envoirment-variables)
[Conclusion](#conclusion)

---

## Day-wise Progress

### Day 1: Setting Foundation of Marketplace
- **Task Completed**:
  - On the first day, I laid the foundation for my marketplace project by deciding on the type of marketplace I wanted to create. I carefully analyzed and defined my business goals, focusing on identifying my target audience and the specific problem my marketplace aims to solve. Using paper and pen, I mapped out the initial concepts, including a detailed data schema for products, users, and transactions. This exercise helped me clarify the project's vision and establish a clear roadmap for the development process.
---

### Day 2: Technical Foundation of Hekto
- **Tasks Completed**:
  - On the second day, I focused on refining my business goals and establishing the technical foundation for the marketplace project. I defined the key frontend requirements, choosing Next.js and Tailwind CSS for a responsive and dynamic UI. 

  - For the backend, I decided to use Sanity CMS to manage data efficiently.I created a detailed workflow diagram outlining the entire process of how users will interact with the website.

  - Using third-party APIs for enhanced functionality, such as Mock API for product data and ShipEngine  for creating labels and tracking features.

  - Created Api-endpoints for Products,Users,Shipments,Orders.

  - Created Scheema's for Product, User, Orders, Shipment.

---

### Day 3: API-Integeration
- **Tasks Completed**:
  - On Day 3, I successfully focused on  the integration of Sanity CMS with my Next.js application. I set up Sanity in my project, configured the environment variables for secure API communication, and migrated data from an external API to the Sanity database.

  - I utilized GROQ queries to fetch and display the data dynamically in my Next.js application. 

  - Additionally, I made adjustments to old schemas to better align with the updated data structure, enhancing compatibility and efficiency.

-  **Achievements**: 

   Successfully, integerated sanity with my next.js application and migerated data from the external api to the sanity database.

---

### Day 4: Dynamic Frontend Components 
- **Tasks Completed**:
  - On Day 4, I successfully created dynamic frontend components for the website, including some main such as Product Listing, Single Product Page, Cart, Checkout and Shipment details and more resuable components.

  - I also developed several other important fully functional components for the website. These include the Search Bar, Related Products, FAQ, Header, and Footer components.
 
- **Achievements**:

  - Successfully created dynamic frontend components, including key pages such as: Product Listing Page, Dynamic Product page, Cart Page, Checkout Page, Shipment Details Page.

  - Developed reusable components to enhance efficiency and maintainability in the project.

  - Built fully functional supporting components, such as:

**Search Bar**: Allows users to quickly find products.

**Related Products**: Displays suggestions based on the current product.

**FAQ**: Provides answers to common user queries.

**Header and Footer**: Ensures a consistent layout and navigation throughout the website.

---

### Day 5: Testing and Refinement
- **Tasks Completed**:
  - Conducted comprehensive functionality testing to ensure all components and features of the website were working as expected.

  - Implemented error handling mechanisms using try-catch blocks to gracefully manage unexpected errors and improve the website's performance.

  - Performed performance optimization using Google Lighthouse, identifying areas for improvement and optimizing load times, accessibility, and overall site performance.

  - Compiled a detailed testing report, documenting.


---

### Day 6: Deployment and Setting Envoirment Variables
- **Tasks Completed**:
  - Selected Vercel as the deployment platform for its simplicity and performance.

  - Connected Git repository and linked it to Vercel to enable seamless deployments directly from the repository.

  - Created a .env file in the project to store sensitive variables (e.g., API keys, database URLs).

  - Added the same environment variables in the Vercel dashboard under the Environment Variables section for both preview and production environments.


---

## Technologies Used
- **For Frontend**: Next.js, Tailwind CSS
- **For Database**: Sanity CMS
- **Hosting**: Vercel

---

## Future Implementation
- Add Authentication
- Add a Payment gateway.
- Improve product recommendations.
- Enable multi-language support.

---

## Conclusion
This six-day journey of developing a marketplace has been a rewarding experience. It allowed me to deepen my skills in full-stack development and solve real-world challenges. I'm excited to continue improving this project further.

---

