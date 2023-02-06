export type ActionButtonItemProps = React.FC<
  React.HTMLAttributes<HTMLButtonElement> & {
    /**
     * Text to display
     */
    text: string;
    /**
     * Iconify icon
     */
    icon: string;
  }
>;
