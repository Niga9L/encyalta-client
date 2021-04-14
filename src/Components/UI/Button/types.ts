export type ButtonPropsType = {
  text?: string;
  size?: 'large' | 'middle' | 'small';
  type?: 'primary' | 'default';
  onClick?: () => void;
  loading?: boolean;
};
