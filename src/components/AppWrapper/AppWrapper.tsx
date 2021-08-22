import './AppWrapper.module.scss';

type AppWrapperProps = {
  children: JSX.Element[] | JSX.Element;
};

const AppWrapper = ({ children }: AppWrapperProps): JSX.Element => <main>{children}</main>;

export default AppWrapper;
