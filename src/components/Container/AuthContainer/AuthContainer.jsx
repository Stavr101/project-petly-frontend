import React from "react";
import { AuthContainerSection } from "./AuthContainer.styled";

export default function AuthContainer({ children }) {
  return <AuthContainerSection>{children}</AuthContainerSection>;
}
