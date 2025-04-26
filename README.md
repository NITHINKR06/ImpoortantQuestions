# Important Questions Website

This website is a comprehensive study resource platform designed to provide important questions and materials for various subjects and units, primarily focused on computer science and engineering topics. It is built using React and Next.js, with a clean and responsive UI enhanced by Tailwind CSS.

## Project Structure

- `src/app/unit1/`, `src/app/unit2/`, `src/app/unit3/`: These directories contain study materials organized by academic units.
- Each unit folder includes subfolders for subjects such as:
  - `daa` (Design and Analysis of Algorithms)
  - `fcn` (Fundamentals of Computer Networks)
  - `sepm` (Software Engineering and Project Management)
  - `maths` (Mathematics)
  - `mes` (Microprocessor and Embedded Systems)
- Each subject folder contains React components that render the study materials and important questions.
- `src/components/`: Contains shared components like navigation bars and authentication context.
- `public/`: Contains static assets such as PDFs and images used throughout the site.

## Features

### Search Functionality

- Each subject page includes a search input box allowing users to search and filter content dynamically.
- The search is case-insensitive and filters questions, images, and descriptions based on user input.
- Search queries are passed as props to content components, which filter their displayed data accordingly.
- This feature is implemented consistently across all units (unit1, unit2, unit3) and subjects.

### Navigation and Content Display

- Users can switch between different important question sets or components within each subject using intuitive buttons.
- The UI layout remains consistent and user-friendly, with search inputs integrated seamlessly.
- Some pages are protected and require authorized access, ensuring secure content delivery.

### PDF Viewer and Image Galleries

- Certain subjects include embedded PDF viewers for easy access to detailed study materials.
- Image galleries with descriptions provide visual aids to enhance understanding.

## Technologies Used

- React
- Next.js
- Tailwind CSS for styling
- Lucide React icons for UI elements

## How to Use

1. Navigate to the desired unit and subject.
2. Use the search box to filter questions, images, or content by typing keywords.
3. Switch between different sections or components using the provided buttons.
4. Access PDFs and image galleries where available for comprehensive study.

## Future Enhancements

- Extend search functionality to additional components like videos and diagrams.
- Improve PDF viewer integration with advanced features.
- Implement user authentication and personalized study plans.
- Add analytics to track user engagement and popular topics.

## Contribution

Contributions are welcome! Please fork the repository and submit pull requests for improvements or new features.

## License

This project is licensed under the MIT License.

---

This README provides a detailed overview of the Important Questions Website, highlighting its structure, features, and usage to help users and contributors understand and navigate the platform effectively.
