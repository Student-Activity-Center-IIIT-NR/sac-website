import Header from "../components/Header";
import NavBar from "../components/NavBar";
type Props = {
  children?: JSX.Element
};

function BaseLayout({children}: Props) {
  return <>
    <Header/>
    {children}
  </>
}

export default BaseLayout;
