import "./style/app.sass";
import LayoutComponent from "./components/layout/Layout";
import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";
import { ContentComponent } from "./pages/home/ContentComponent";
import { SingleSurah } from "./pages/singleSurah/SingleSurah";
import Time from "./pages/prayerTime/PrayerTime";
function App() {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
        }}
      >
        <LayoutComponent>
          <Routes>
            <Route path='/' element={<ContentComponent />}/>
            <Route path='/surahs/:id' element={<SingleSurah />}/>
            <Route path='/time' element={<Time />}/>
          </Routes>
        </LayoutComponent>
      </ConfigProvider>
    </>
  );
}

export default App;
