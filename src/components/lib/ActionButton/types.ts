/**
 * Can only have two actions
 */
export type ActionButtonProps = React.PropsWithChildren & {
  /**
   * Only two actions should be provided
   */
  actions?: [React.ReactNode?, React.ReactNode?];
};
