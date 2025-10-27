// Import JSX type from React for type definitions
import { JSX } from "react";

/**
 * Props for the reusable Button component
 */
export interface ButtonProps {
  // Optional icon displayed on the left side of the button
  leftIcon?: JSX.Element;
  // Content or label inside the button
  children: React.ReactNode;
  // CSS classes for button background styling
  background: string;
  // URL for navigation when button is clicked
  link: string;
  // Optional icon displayed on the right side of the button
  rightIcon?: JSX.Element;
  // Optional CSS classes for flex styling
  flex?: string;
}

/**
 * Props for the Badge component used to display labels or tags
 */
export interface BadgeProps {
  // Text displayed inside the badge
  text: string;
  // CSS classes for badge text color
  textColor: string;
  // CSS classes for badge background color
  background: string;
}

/**
 * Props for the Project component representing a portfolio project
 */
export interface ProjectProps {
  // Unique identifier for the project
  projectId: number;
  // URL of the project's image
  imageUrl: string;
  // Title of the project
  title: string;
  // Short description of the project
  description: string;
  // Link to the project's GitHub repository
  githubLink: string;
  // Link to the live demo of the project
  demoLink: string;
  // Array of badges associated with the project
  badgeArray: BadgeProps[];
}
