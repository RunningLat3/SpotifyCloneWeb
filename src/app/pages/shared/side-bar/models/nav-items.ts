import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
  label: string;
  path: string;
  icon?: IconDefinition;
  exact?: boolean;
}
