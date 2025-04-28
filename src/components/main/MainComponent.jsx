import { useEffect, useRef, useState } from "react";
import aroosi from "../../assets/audio/aroosi.mp3";
import "../../App.css";
import "../../font.css";
import { Link } from "react-router-dom";

const slideTimings = {
  slide1: 13000,
  slide2: 18000,
//   slide3Text: 25000,
  slide3Image: 3000,
};
const textsSlide1 = [
  {
    text: "به‌نام عشق",
    fontSize: "4xl",
    marginBottom: "40px",
    justify: "justify-center",
    classNames: "animate-drop-in",
  },
  {
    text: "الهام و امیرپاشا",
    fontSize: "6xl",
    marginBottom: "40px",
    fontFamily: "IranNastaliq",
    classNames: "animate-drop-in1",
  },
  {
    text: "به سنت عشق گرد هم می‌آییم",
    fontSize: "4xl",
    marginBottom: "20px",
    classNames: "animate-drop-in2",
  },
  {
    text: "آنجا که دوست داشتن تنها کلام زندگی است",
    fontSize: "4xl",
    marginBottom: "40px",
    marginRight: "30px",
    classNames: "animate-drop-in3",
  },
  {
    text: "عبدالملکی - ضرغامی",
    fontSize: "4xl",
    marginBottom: "40px",
    justify: "justify-end",
    marginLeft: "40px",
    classNames: "animate-drop-in4",
  },
  {
    text: "شادی وقتی زیباتر می‌شود",
    fontSize: "4xl",
    marginBottom: "20px",
    classNames: "animate-drop-in5",
  },
  {
    text: "که با عزیزانمان تقسیمش کنیم",
    fontSize: "4xl",
    marginBottom: "20px",
    justify: "justify-end",
    classNames: "animate-drop-in6",
  },
  {
    text: "ممنون که این لحظه را در کنار ما می‌سازید",
    fontSize: "4xl",
    marginBottom: "20px",
    justify: "justify-center",
    classNames: "animate-drop-in7",
  },
];

function MainComponent({ title }) {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [slide, setSlide] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false); // حالت جدید برای fade-out

  const handleStart = () => {
    audioRef.current.play();
    setStarted(true);
  };

  useEffect(() => {
    if (!started) return;

    if (slide === 0) {
      let timer1 = setTimeout(() => setSlide(1), slideTimings.slide1);
      return () => clearTimeout(timer1);
    }
    if (slide === 1) {
      let timer2 = setTimeout(() => setSlide(2), slideTimings.slide2);
      return () => clearTimeout(timer2);
    }
    if (slide === 2) {
        let fadeTimer = setTimeout(
          () => setFadeOut(true),
          // slideTimings.slide3Text - 2000
        );
        let timer3 = setTimeout(() => {
          setSlide(3);
          setFadeOut(false);
        }, slideTimings.slide3Text);
        return () => {
          clearTimeout(fadeTimer);
          clearTimeout(timer3);
        };
      // 2 ثانیه قبل از پایان اسلاید سوم، fade-out شروع می‌شود
    }
    if (slide === 3) {
      let timer4 = setTimeout(() => setSlide(0), slideTimings.slide3Image);
      return () => clearTimeout(timer4);
    }
  }, [slide, started]);

  useEffect(() => {
    if (slide !== 0 || currentLine >= textsSlide1.length) return;
    const line = textsSlide1[currentLine];

    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + line.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCharIndex(0);
        setTypedText("");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine, slide]);

  const slide1Content = (
    <div>
      {textsSlide1.map((item, index) => (
        <p
          key={index}
          className={`w-full flex ${item?.justify} text-${item.fontSize} ${item.classNames}`}
          style={{
            marginBottom: item.marginBottom,
            marginRight: item.marginRight || "0",
            marginLeft: item.marginLeft || "0",
          }}
        >
          {item.text}
        </p>
      ))}
      {currentLine < textsSlide1.length && (
        <p
          className="flex w-full text-4xl justify-center"
          style={{ marginBottom: "20px", fontFamily: "IranNastaliq" }}
        >
          {typedText}
        </p>
      )}
    </div>
  );

  const slide2Content = (
    <div>
      <p
        className="w-full flex justify-center text-4xl animate-drop-down"
        style={{ marginBottom: "20px" }}
      >
        موعد دیدار ما
      </p>
      <p
        className="flex w-full text-5xl justify-center animate-drop-down1"
        style={{ marginBottom: "20px" }}
      >
        پنج‌شنبه | ۱ | خرداد ۱۴۰۴
      </p>
      <p
        className="flex w-full text-5xl justify-center animate-drop-down2"
        style={{ marginBottom: "20px" }}
      >
        از ساعت ۱۹:۳۰ تا ۲۳:۰۰
      </p>
      <p
        className="flex w-full text-4xl justify-center animate-drop-down3"
        style={{ marginBottom: "20px" }}
      >
        میزبان شماییم در دفتر عقد نقره
      </p>
      <p
        className="flex justify-center w-full text-4xl animate-drop-down4"
        style={{ marginBottom: "10px" }}
      >
        اندرزگو - بلوار صبا - نبش خیابان کریمی
      </p>
      <p
        className="flex justify-center w-full text-4xl animate-drop-down5"
        style={{ marginBottom: "20px" }}
      >
        پلاک ۱۳۷ - واحد ۳
      </p>
      <p
        className="flex justify-center text-center leading-[70px] w-full text-5xl animate-drop-down6"
        style={{ marginBottom: "20px" }}
      >
        برای اینکه بتونیم همه چیز رو با نظم پیش ببریم ممنون میشیم حضور قشنگتون
        رو تا تاریخ ۱۸اردیبهشت بهمون اطلاع بدین.
      </p>
      <p
        className="flex justify-center w-full text-4xl animate-drop-down7"
        style={{ marginBottom: "20px" }}
      >ما را در این عاشقانه همراه باشید.
      </p>
    </div>
  );

  return (
    <div>
      {!started ? (
        <div>
          <div className='flex flex-col items-center justify-center w-full h-screen  bg-cover bg-center bg-local bg-[url("./images/Beige.png")]'>
          {title ? <div className="text-4xl flex justify-start w-full" style={{ padding: '16px 32px'}}>{title}</div> : null}
            <button
              onClick={handleStart}
              className="px-8 py-4 rounded-full cursor-pointer font-medium text-6xl shadow-xl"
              style={{ padding: "16px 32px" }}
            >
              ورود به دعوتنامه
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`w-full h-screen bg-cover bg-center bg-local bg-[url("./images/IMG_1060.JPG")]`}
        >
          <div className="h-screen w-full overflow-y-scroll text-justify flex items-center justify-center">
            <div
              className={`${
                slide === 3
                  ? slide === 2
                    ? "drop-in"
                    : "bg-transparent drop-in"
                  : "bg-white/40 backdrop-blur-xs drop-in"
              }  h-full w-full flex flex-col justify-center drop-in`}
              style={{ padding: "20px 10px" }}
            >
              {slide === 0 && slide1Content}
              {slide === 1 && slide2Content}
              {/* {slide === 2 && slide3Text} */}
            </div>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={aroosi} loop />
    </div>
  );
}

export default MainComponent;
