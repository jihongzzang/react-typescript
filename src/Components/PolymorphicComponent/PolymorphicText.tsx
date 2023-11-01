type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'childern'>;

const Text = <C extends React.ElementType>({
  as,
  children,
  ...rest
}: TextProps<C>) => {
  const Component = as || 'span';

  return <Component {...rest}>{children}</Component>;
};

export default Text;
