import { JSX } from "react";

export interface ButtonProps {
  leftIcon?: JSX.Element;
  children: React.ReactNode;
  background: string;
  link: string;
  rightIcon?:JSX.Element;
}

export interface BadgeProps {
  text: string;
  textColor: string;
  background: string;
}

export interface ProjectProps {
  projectId: number;
  imageUrl: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  badgeArray: BadgeProps[];
}
