import { Layout } from "antd";
import "./layout.sass";
import QuranImg from "../../assets/svg/quran";
import { NavComponent } from "../navbar/Navbar";

const { Header, Content, Footer } = Layout;

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const LayoutComponent = ({ children }: Props) => {
  return (
    <Layout className="layout">
      <Header className="layoutHeader">
        <NavComponent />
      </Header>
      <Content className="layoutContent">
        <div className="layoutContent__promo">
          <div className="layoutContent__promo__img">
            <QuranImg />
          </div>
        </div>
        <div className="container">{children}</div>
      </Content>
      <Footer className="layoutFooter">
        Quronim ©2023 Created by Usmanov Shakhzod
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
