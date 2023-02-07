export type MobileSettingsLinkProps = React.FC<{
  id: number;
  link?: string;
  name: string;
  icon: string;
  handleModal(): void;
}>;
