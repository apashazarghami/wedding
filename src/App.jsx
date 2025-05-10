import { Route, Routes } from "react-router-dom";
import MainComponent from "./components/main/MainComponent";

function App() {
  return (
    <Routes>
      <Route
        path="/family"
        element={<MainComponent title="مادر و پدر عزیزمون" />}
      />
      <Route
        path="/kian-zahra"
        element={<MainComponent title="کیان و زهرای عزیز" />}
      />
      {/* <Route path='/elahe-nader' element={<MainComponent title='الهه و نادر عزیز' />} /> */}
      <Route
        path="/amoo-taghi"
        element={
          <MainComponent title="عمو تقی عزیزم به همراه خانواده قشنگتون" />
        }
      />
      <Route
        path="/amoo-mojtaba"
        element={
          <MainComponent title="عمو مجتبی عزیزم به همراه خانواده قشنگتون" />
        }
      />
      <Route
        path="/amoo-hisi"
        element={
          <MainComponent title="عمو هیسی عزیزم به همراه خانواده قشنگتون" />
        }
      />
      <Route
        path="/amoo-reza"
        element={
          <MainComponent title="عمو رضا و عمه عزیزم به همراه خانواده قشنگتون" />
        }
      />
      <Route
        path="/elnaz-mohammadreza"
        element={<MainComponent title="الناز و محمدرضا عزیز" />}
      />
      <Route
        path="/daie-mehdi"
        element={
          <MainComponent title="دایی مهدی عزیزم به همراه خانواده قشنگتون" />
        }
      />
      <Route path="/hadi" element={<MainComponent title="هادی عزیزم" />} />
      <Route path="/jamali" element={<MainComponent title="" />} />
      <Route
        path="/zahra"
        element={<MainComponent title="زهرا جانم به همراه علی آقا" />}
      />
      <Route
        path="/fati-hossein"
        element={<MainComponent title="فاطی جونم به همراه حسین جونم" />}
      />
      <Route
        path="/meli-ehsan"
        element={<MainComponent title="ملیکا جونم به همراه احسان جونم" />}
      />
      <Route path="/nahid" element={<MainComponent title="ناهید جونم" />} />
      <Route
        path="/firouzeh-maryam"
        element={<MainComponent title="فیروزه جونم به همراه مریم عزیزم" />}
      />
      <Route
        path="/faezeh"
        element={<MainComponent title="فائزه جونم به همراه زهرا جون" />}
      />
      <Route path="/bahareh" element={<MainComponent title="بهاره قشنگم" />} />
      <Route
        path="/ghazaleh-mohammad"
        element={<MainComponent title="غزاله و محمد عزیز" />}
      />
      {/* <Route path='/niousha' element={<MainComponent title='نیوشا قشنگم' />} /> */}
      <Route
        path="/zari-joon-shahin"
        element={<MainComponent title="زری جون و شاهین عزیز" />}
      />
      <Route
        path="/hajian"
        element={<MainComponent title="آقا مرتضی و اعظمی عزیز" />}
      />
      <Route
        path="/parisa"
        element={<MainComponent title="حسین آقا به همراه خانواده عزیزشون" />}
      />
      <Route
        path="/ali-sara"
        element={<MainComponent title="علی عزیز به همراه خانواده گرامی" />}
      />
      <Route
        path="/pouya-sara"
        element={<MainComponent title="پویا عزیز به همراه خانواده گرامی" />}
      />
      <Route
        path="/shamsavi"
        element={
          <MainComponent title="عمو شمسوی عزیزم به همراه خانواده عزیزشون" />
        }
      />
      <Route
        path="/ehsan-nazi-anahid"
        element={<MainComponent title="احسان جونم به همراه خانواده عزیزشون" />}
      />
      <Route
        path="/amiri"
        element={<MainComponent title="دایی کاظم به همراه همسر گرامی" />}
      />
      <Route
        path="/bahador-naghmeh-donya"
        element={<MainComponent title="بهادر جونم به همراه خانواده عزیزشون" />}
      />
      <Route
        path="/askan-saghar"
        element={<MainComponent title="اشکان جونم به همراه ساغر عزیز" />}
      />
      {/* <Route path='/parham' element={<MainComponent title='پرهام جونم' />} /> */}
      <Route
        path="/eslami"
        element={<MainComponent title="آقای اسلامی به همراه خانواده گرامی" />}
      />
      <Route
        path="/dr-ghalamchi"
        element={<MainComponent title="جناب آقای دکتر قلم‌چی" />}
      />
      <Route
        path="/lotfi"
        element={<MainComponent title="جناب آقای لطفی و همسر گرامی" />}
      />
      <Route
        path="/asadolahi"
        element={<MainComponent title="جناب آقای اسدالهی و همسر گرامی" />}
      />
      <Route path="/reza" element={<MainComponent title="رضا  عزیزم" />} />
      <Route
        path="/elaheh-nader"
        element={<MainComponent title="الهه و نادر  قشنگمون" />}
      />
      <Route
        path="/maryam-navid"
        element={<MainComponent title="نوید و مریم  عزیز" />}
      />
      <Route
        path="/zandaie"
        element={
          <MainComponent title="زن دایی فاطمه عزیزم به همراه  نیلوفر جان" />
        }
      />
      <Route path="/mahnaz" element={<MainComponent title="مهناز عزیزم" />} />
      <Route path="/daie-naser" element={<MainComponent title="دایی جانم" />} />
      <Route path="/niousha" element={<MainComponent title="نیوشای قشنگم" />} />
      <Route path="/parham" element={<MainComponent title="پرهام جونم" />} />
      <Route
        path="/khale-parvaneh-kimia"
        element={<MainComponent title="خاله پروانه و کیمیای عزیز" />}
      />
      <Route
        path="/khale-mahrokh-mahour"
        element={<MainComponent title="خاله ماهرخ و ماهور عزیز" />}
      />
      <Route
        path="/khale-parvin"
        element={<MainComponent title="خاله پروین عزیز" />}
      />
      <Route path="/maryam" element={<MainComponent title="مریم جون" />} />
      <Route
        path="/mansour-mohadeseh"
        element={<MainComponent title="محدثه و منصور عزیز" />}
      />
      <Route path="/mahdieh" element={<MainComponent title="مهدیه‌ی عزیز" />} />
      <Route path="/mahsa" element={<MainComponent title="مهسای عزیز" />} />
      <Route
        path="/azad"
        element={<MainComponent title="جناب آقای آزاد و خانواده گرامی" />}
      />
      <Route
        path="/jamali"
        element={<MainComponent title="جناب آقای جمالی" />}
      />
      <Route
        path="/amir-mahtab"
        element={<MainComponent title="امیر و مهتاب عزیز" />}
      />
    </Routes>
  );
}

export default App;
