import { ReactNode } from "react";

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="movie-card">
      <div className="movie-card card">
        {children}
      </div>
    </div>
  );
}
