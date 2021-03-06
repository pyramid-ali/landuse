import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-20"].cities["IR-2009"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        gardening: "باغداری",
        livestock: "دامداری",
        agriculture: "زراعت",
        services: "خدمات",
        birds: "طیور",
        fisheries: "شیلات",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان کامیاران یکی از شهرستان‌های استان کردستان است که در جنوبی
            ترین منطقه استان واقع شده‌است. جمعیت کامیاران طبق سرشماری سال 1395،
            حدود 102 هزار نفر اعلام شده است. فاصله این شهرستان از مرز بانه معادل
            با 322 و با مرز مهران 300 کیلومتر است که این فاصله نسبتا زیاد، باید
            در زمان طرح ریزی برای برنامه کسب و کار مورد توجه واقع شود. این‌
            شهرستان‌ از شمال‌ به‌ شهرستان‌های سنندج و سروآباد‌، از جنوب‌ به‌
            كرمانشاه‌، از شرق‌ به‌ شهرستان دهگلان و از غرب‌ به‌ پاوه‌ و استان‌
            كرمانشاه‌ محدود است‌. شکل زیر موقعیت شهرستان کامیاران را نشان
            می‌دهد.
          </p>
          <p>
            طبق بررسی پهنه بندی اقلیمی شهرستان کامیاران، بیشتر مناطق کامیاران
            دارای اقلیمی مرطوب و نیمه مرطوب است. مشخصا دررابطه با اقلیم منطقه
            امیرآباد نیز باید گفت که مدیترانه ای است.
          </p>
          <p>
            وضعیت آب‌های شهرستان کامیاران خوب است. طبق اطلاعات به دست آمده هیچ
            مشکلی در زمینه تامین آب در کامیاران وجود ندارد؛ زیرا تعداد سد، چشمه
            و رودهایی که زنده و فعال هستند، زیاد و قابل قبول است. وضعیت آب‌های
            سطحی در کامیاران به قدری خوب است که میزان برداشت از آب‌های زیرزمینی
            بسیار کم و تنها در فصولی است که آبهای سطحی کم شده باشد. دررابطه با
            آب چاه ها نیز باید گفت که در سطح بالایی قرار دارند؛ درنتیجه ارتفاع
            چاه ها خیلی زیاد نیست. همچنین کیفیت آب کامیاران برای کار در سه زمینه
            کشاورزی، دامداری و پرورش ماهی مناسب ارزیابی شده است.
          </p>
          <p>
            دررابطه با روحیه مردم شهرستان در زمینه کسب و کار باید گفت که عموما
            افراد ریسک پذیر و تلاشگری هستند؛ اما متاسفانه میزان مهاجرت در
            شهرستان زیاد بوده و اکثر جوانان علی رغم تحصیل در دانشگاه ها، به علت
            نبود کار به شهرستان‌های مجاور و یا استانهای مرکزی کشور مهاجرت می
            کنند؛ آنهایی که در شهر می مانند نیز بیشتر به کارهای تولیدی، مکانیکی
            و مرزی علاقمند هستند.
          </p>
          <p>
            همانطور که در بالاتر اشاره شد کامیاران در استان کردستان واقع است.
            کردستان استانی است که چندین مرز فعال مانند مرز مهران و بانه دارد.
            کشورهای محرومی مانند عراق که در همسایگی ایران هستند و تولیدات ویژه
            ای ندارند، بازار فروش خوبی برای محصولات تولیدی در کشور هستند. علاوه
            بر این‌ها هزینه حمل و نقل کالا از این استان به کشوری مانند عراق
            بسیار کمتر از صادرات محصولات از سایر نقاط مثل تهران به عراق خواهد
            بود؛ بنابراین ایجاد واحدهای صنعتی در این استان و شهرستانهای آن
            مخصوصا کامیاران دارای مزیت بالایی است. از مزیت های ایجاد چنین
            واحدهایی علاوه بر ارزآوری، ایجاد انگیزه برای تولیدکنندگان و همینطور
            جوانان خواهد بود.
          </p>
          <p>
            در وهله اول سوء مدیریت و در وهله های بعدتر، عدم توان مالی برای ادامه
            کار و عدم تامین بازار فروش، از مهمترین دلایل تعطیلی و نیمه تعطیل شدن
            واحدهای کامیاران بوده است. مهمترین مشکلات ایجاد کسب و کار نیز در این
            شهرستان عدم حمایت از تولیدکننده، عدم وجود سرمایه و سرمایه گذار، سوء
            مدیریت و عدم وجود زیرساخت های مناسب عنوان شده است. شهرستان کامیاران
            دارای مردمانی سخت کوش و ریسک پذیر است. همچنین موقعیت جغرافیایی
            بسیارخوبی برای ایجاد انواع کسب و کارها چه به صورت کارگاهی و چه به
            صورت کارخانه ای وجود دارد؛ ولی چنین مشکلاتی که به نظر می رسد بیشتر،
            ساختاری و ریشه ای است، مانع از به ثمر رسیدن پتانسیل های این شهرستان
            و ایجاد مشاغل سودده شده است.
          </p>
          <p>
            استانهای مرزی کشور ایران، علی الخصوص مرز غربی، از محروم‌ترین
            استان‌ها درسطح کشور هستند. لزوم توجه دولت و سازمانهای ذیربط به این
            مناطق و همچنین تخصیص درست منابع و بودجه مشخص شده برای این شهرها،
            باعث رفع بیشتر مشکلات و موانع ایجاد کسب وکار خواهد شد. درصورت حل این
            مشکلات، می توان به صرفه اقتصادی داشتن کسب و کارهای جدیدتر نیز
            امیدوار بود.
          </p>
          <p>
            میزان تولیدات باغی، دامی و زراعی در کامیاران قابل توجه است؛ اما یا
            بیشتر محصولات برای فرآوری به دیگر استانهای کشور فرستاده می شوند و یا
            به کشور عراق صادر می شوند؛ درواقع کمبود صنایع تبدیلی و غذایی در
            شهرستان به شدت احساس می شود. وجود نیروی کار و میزان آب کافی دلایل
            خوبی هستند تا بتوان ایجاد صنایع تبدیلی و فرآوری را مزیت کامیاران
            محسوب کرد.
          </p>
          <p>
            نکته ای که در آخر باید ذکر کرد این است که سطح درآمدی مردم کامیاران
            مانند دیگر مناطق کردنشین، به اندازه ای نیست که بتوانند در زمینه های
            صنعتی فعالیت های قابل توجهی انجام دهند و کارخانه های بسیار بزرگ
            احداث کنند. توانمندسازی تولیدکنندگان این منطقه جغرافیایی پر پتانسیل،
            به عنوان مثال وضع معافیت های مالیاتی، در ابتدا بر عهده دولت و
            سازمانهای ذیربط خواهد بود.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان بر مبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها
            به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار هم‌پوشاني
            اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح می‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان
            سپیدان ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان‌طوري‌كه در قسمت قبل اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            بیشتر محصولات تولیدی به علت عدم وجود صنایع تبدیلی و غذایی، به صورت
            خام، به خارج از شهرستان فرستاده می شوند و یا در خود شهرستان مصرف می
            شوند، اصلی ترین دلیلی است که می توان این رسته را جزو اولویت های اول
            مشاغل، در کامیاران برشمرد.{" "}
          </p>
          <p>
            بسته بندی فرآورده های میوه جات که به آنها اشاره خواهد شد مانند مربای
            توت فرنگی، ترشی، میوه خشک، آبمیوه و...، می تواند سود خوبی داشته
            باشد. اساسا بسته بندی، ارزش افزود قابل توجهی را برای محصولات ایجاد
            می کند و باعث می شود سود بیشتری عاید تولیدکننده شود.{" "}
          </p>
          <p>
            بسته بندی عسل ازجمله مشاغلی است که در شهرهایی با شرایط اقلیمی
            کامیاران به خوبی جواب می دهد. اگر این شغل به صورت گسترده و صنعتی تر
            دنبال شود، علاوه بر ارزآوری و سوددهی بالا، انگیزه خوبی برای
            زنبورداران و توسعه پرورش زنبورعسل ایجاد خواهد شد.{" "}
          </p>
          <p>
            فرآوری پوست دام ها مانند تولید نخ از پشم گوسفندان پیشنهاد می شود.
            همچنین به این علت که بیشتر دامداری کامیاران، پرورش دام سبک و سنتی
            است؛ درنتیجه به نظر نمی رسد فرآوری پوست گاو مزیت زیادی{" "}
          </p>
          <p>
            باتوجه به میزان دامداری و وجود شرایط برای توسعه آن در کامیاران،
            ایجاد صنایع تبدیلی مرتبط با این محصولات دامی می تواند سود قابل توجهی
            را ایجاد کند. صنایعی مانند بسته بندی گوشت ماهی، بسته بندی گوشت انواع
            طیور مانند بلدرچین، مرغ و شترمرغ، بسته بندی گوشت گوسفند دارای توجیه
            اقتصادی خواهد بود و پیشنهاد می شود. درواقع موقعیت جغرافیایی مرزی
            کامیاران علاوه بر سطح انجام دامداری، از مهمترین عواملی است که می
            توان این شغل را پیشنهاد داد.
          </p>
          <p>
            میزان تولیدات باغی و انواع میوه جات در شهرستان زیاد است. همچنین
            شرایط جغرافیایی و آب نیز برای افزایش کشت این محصولات فراهم است.
            درحال حاضر تعداد محدودی سردخانه برای نگهداری این محصولات در سطح
            شهرستان وجود دارد؛ ولی درصورت افزایش سطح تولیدات، تعداد این سردخانه
            ها پاسخگو نخواهد بود. در این شرایط می توان ایجاد سردخانه هایی برای
            نگهداری تولیدات کشاورزی را پیشنهاد داد. درصورت ایجاد این واحدها
            علاوه بر بالارفتن میزان اشتغال، می توان از این تولیدات در فصولی که
            کشت آنها میسر نیست، استفاده کرد. نکته شایان ذکر در این باره این است
            که این شغل با ایجاد تعداد واحدهای محدودی، اشباع می شوند و شرایط برای
            ایجاد واحدهای جدیدتر و رقابت با واحدهای قدیمی سخت خواهد شد؛ درنتیجه
            پیشنهاد می شود قبل از اقدام به ایجاد این واحدها، شرایط بازار و میزان
            تولیدات باغی به دقت بررسی شود.{" "}
          </p>
          <p>
            در پایان باید اشاره کرد با توجه به وجود شرایط برای توسعه پرورش
            شترمرغ و وجود پتانسیل برای صادرات به عراق، تولید محصولاتی مانند روغن
            شترمرغ پیشنهاد می شود.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            وجود مواداولیه، آب کافی، نیروی کار و... از مهمترین مولفه های ایجاد
            یک واحد صنعتیِ تبدیلی است که بیشتر این موارد در کامیاران مهیا هستند.
            نکته دیگر، بحث بازار فروش محصولات است که درصورت تامین آن، می توان
            مشاغل پیشنهاد شده در ذیل را به صورت صنعتی دنبال کرد. شایان ذکر است
            توسعه مشاغل خانگی که درحال حاضر انجام می شوند و یا ایجاد واحدهای
            صنعتی، اشتغال خوبی ایجاد خواهدکرد.{" "}
          </p>
          <p>
            درحال حاضر، تولید میزان قابل توجهی از میوه جات که در رسته باغداری به
            آنها اشاره خواهد شد، باعث شده است تا بتوان فرآورده های خوب، با کیفیت
            و با ارزش افزوده بالایی از آن‌ها تولید کرد؛ درنتیجه از تولید میوه
            خشک، چیپس میوه، خشکبار، آبمیوه و سایر فرآورده هایی مانند مربا،
            کمپوت، ترشی، رب انار، لواشک، کنسانتره، کمپوت، شهد و سرکه، به دو صورت
            صنعتی و خانگی، می توان سود خوبی را انتظار داشت.{" "}
          </p>
          <p>
            میزان کشت گوجه فرنگی در کامیاران قابل توجه و زیاد است که درنتیجه آن
            می توان ایجاد صنایع تبدیلی و فرآوری مانند تولید رب گوجه فرنگی یا
            ترشی را پیشنهاد داد.{" "}
          </p>
          <p>
            توت فرنگی از اصلی ترین محصولات تولیدی در کامیاران است. این محصول در
            شرایط فعلی اقتصادی ایران، کالایی لوکس محسوب شده و نمی توان انتظار
            زیادی از مردم شهرستان در رابطه با خرید خود آن و یا فرآورده هایش
            داشت؛ اما موقعیت جغرافیایی کامیاران باعث می شود تا بتوان در زمینه
            تولید کمپوت و مربا، اقدام و محصولات را به عراق صادر کرد. فرآوری
            انگور مانند تولید کشمش و شیره انگور و فرآوری زیتون مانند تولید زیتون
            پرورده و یا روغن گیری از آن، به علت سود زیادی که دارد، پیشنهاد می
            شود.{" "}
          </p>
          <p>
            تعداد دام در کامیاران بسیار زیاد و قابل توجه است. تا قبل از ممنوعیت
            صادرات گوشت و دام از کشور، تعداد قابل توجهی از این دام ها به کشور
            عراق صادر می شد؛ اما در شرایط فعلی به نظر می رسد باید به صنایع
            تبدیلی گوشت این دام ها توجه ویژه تری داشت. یکی از این فرآوری ها،
            سوسیس و کالباس است البته باید یادآور شد که انجام این شغل به دو صورت
            جزئی و خانگی و عمده و کارخانه ای، امکانپذیر است؛ اما باتوجه به
            دسترسی آسان به کشور عراق، به نظر می رسد بتوان در مقیاس صنعتی و به
            صورت کارخانه ای کار کرد. مورد دیگری که باید در رابطه با دامداری به
            آن توجه کرد و سود حاصل از آن را درنظر گرفت، تولید لبنیات و فرآورده
            های دیگر از شیر خواهد بود.{" "}
          </p>
          <p>داشته باشد. </p>
          <p>
            فرآوری گندم به صورت تولید آرد و نان، شیرینی پزی، تولید رشته آشی و
            پلویی و سایر محصولات مانند نشاسته گندم، کلوچه و بیسکویت، پفک گندم،
            برشته کردن گندم، نان بستنی و آرد سوخاری از مشاغل پیشنهادی در این
            حوزه است. لازم به ذکر است راه‌اندازی این مشاغل نیازمند بررسی ذائقه
            مردم و بازار فروش است.
          </p>
          <p>
            یک کارخانه چیپس در شهرستان وجود دارد که طبق اطلاعات بدست آمده به این
            علت که بیشتر کشاورزان ترجیح می دهند محصولاتشان را با قیمت خیلی
            بیشتر، به صورت خام و ازطریق مرز به عراق صادر کنند، به حالت نیمه
            تعطیل درآمده است. باتوجه به سوددهی چندبرابری فرآوری سیب زمینی، شرایط
            مساعد برای کشت و لزوم تامین بازارفروش این محصول، باید در زمینه احیای
            این کارخانه اقدامات جدی ای انجام داد. احیای این کارخانه علاوه بر
            ایجاد اشتغال در شهرستان، باعث ایجاد انگیزه برای کشاورزان و افزایش
            سطح زیرکشت سیب زمینی خواهد شد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از اصلی ترین مشاغل مردم شهرستان کامیاران است. طبق بررسی
            های انجام شده، گوجه فرنگی تولیدی در کامیاران، میزان قابل توجهی از
            تولیدات هر ساله استان را به خود اختصاص می دهد و علاوه بر فضای باز،
            در گلخانه ها نیز پرورش می یابد. بازار همیشگی و وجود شرایط برای ایجاد
            واحد فرآوری آن، باعث شده تا بتوان توسعه تولید آن را دارای مزیت
            دانست.{" "}
          </p>
          <p>
            به صورت کلی در رابطه با گلخانه ها باید گفت که بیشتر به کشت صیفی جاتی
            مانند گوجه و خیار و بعضا نشاء توت فرنگی مشغول هستند. اساسا گلخانه با
            شرایط اقلیمی کامیاران سازگار بوده و خوب جواب داده است؛ درنتیجه توسعه
            آن و ایجاد واحدهایی جدیدتر پیشنهاد می شود. طبق بررسی های انجام شده
            بیشتر خیار تولیدی در شهرستان به صورت گلخانه ای است. توت فرنگی به دو
            صورت گلخانه ای و در فضای باز کشت می شود؛ ولی کشت آن در فضای باز
            بسیار بیشتر از کشت در گلخانه است. توسعه کشت این محصول پرسود، علاوه
            بر ایجاد انگیره برای فعالان این زمینه، باعث رونق یافتن صنایع غذایی
            مرتبط با آن‌ها می‌شود.{" "}
          </p>
          <p>
            انگور نیز به دو صورت دیمی و آبی در کامیاران کاشت می شود. مهارت
            کشاورزان، سود حاصل از فروش به صورت خام و فرآورده‌های متنوع این
            محصول، از دلایل مزیت داشتن توسعه تولید انگور است.{" "}
          </p>
          <p>
            میوه جاتی مانند آلبالو، انار، سیب، به، زردآلو، گلابی، گیلاس، هلو و
            شلیل به میزان قابل ملاحظه ای تولید می شوند. سازگاری این موارد با
            اقلیم و ارزش افزوده قابل توجهی که از این محصولات درصورت افزایش سطح
            تولیداتشان به دست خواهد آمد، مزیت خوبی را برای توسعه باغات این میوه
            ها ایجاد کرده است. درضمن خشکباری مانند فندق، گردو و بادام نیز تولید
            می‌شوند که درصورت وجود شرایط مناسب مانند آب، زمین و بازار فروش،
            توسعه کشتشان پیشنهاد می شود.{" "}
          </p>
          <p>
            زیتون محصول دیگری است که به صورت محدود در کامیاران تولید می شود و
            توسعه کشت آن دارای مزیت خواهد بود.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            مراتع خوب و اقلیم آب وهوایی مساعد شهرستان کامیاران باعث شده است تا
            بیشتر دامداری که انجام می شود به دام سبک اختصاص داشته باشد.{" "}
          </p>
          <p>
            زنبورداری در استان کردستان شغلی دارای مزیت و تولیدات باکیفیت است.
            شهرستان کامیاران نیز از این قضیه مستثنی نیست و زنبورداری گسترده ای
            در آن انجام می شود. مهارت زنبورداران، سود خوب حاصل از فروش عسل و
            وجود شرایط برای صادرات این محصول باعث شده تا بتوان توسعه این شغل را
            پیشنهاد داد.{" "}
          </p>
          <p>
            در پایان باید اشاره کرد پرورش گاو نیز در سطح شهرستان انجام می شود و
            باتوجه به فرآورده های به دست آمده از این دام، توسعه پرورش آن دارای
            مزیت خواهد بود.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            گندم اصلی ترین محصول زراعی است که در کامیاران کشت می شود. گندم
            محصولی است استراتژیک که در تهیه انواع موادخوراکی مهم استفاده شده و
            بازار مصرف خوب و نسبتا تضمین شده ای دارد. در ایران، خرید گندم توسط
            دولت انجام می شود، البته خود کشاورز هم می‌تواند این محصول را به فروش
            برساند؛ درنتیجه توسعه کشت آن پیشنهاد شده و دارای مزیت خوبی خواهد
            بود. کشت جو نیز که محصولی مشابه گندم است، در سطح شهرستان انجام می
            شود و توسعه آن دارای مزیت خواهد بود.{" "}
          </p>
          <p>
            کلزا یکی از محصولاتی است که برای کشت، به آب کمی نیاز دارد. تاکنون،
            کشت این محصول در کامیاران به صورت خیلی محدود انجام شده است و طبق
            تحقیقات انجام شده، جواب می دهد و می تواند سود خوبی را عاید کشاورزان
            کند. این محصول و دیگر دانه های روغنی، ازجمله مواردی هستند که میزان
            قابل توجهی از واردات هرساله ایران را به خود اختصاص داده اند؛ درنتیجه
            بصورت کلی اگر بتوان میزان کشت این محصول را در سطح کشور افزایش داد یا
            حداقل نیاز استان را به این محصول از بین برد، سود بسیار بالایی به
            دنبال دارد. در ادامه باید گفت که سیب زمینی نیز به خوبی در کامیاران
            جواب می دهد و توسعه کشت آن دارای مزیت خواهد بود.{" "}
          </p>
          <p>
            هر دو نوع ذرت یعنی خوشه ای و دانه ای، در کامیاران تولید می شود. ذرت
            علاوه بر استفاده خوراکی، در صنعت دامداری و طیور نیز استفاده می شود.
            باتوجه به اینکه دامداری و طیور در کامیاران به میزان قابل توجهی انجام
            می شود و شرایط مساعدی نیز برای توسعه دارد، می توان میزان کشت این
            محصول را افزایش داد.{" "}
          </p>
          <p>
            کشت حبوباتی مانند عدس، لوبیا و نخود نیز انجام می شود. باتوجه به سطح
            استفاده این محصولات، می توان کشت آنها را افزایش داد و نیاز شهرستان
            به این محصولات را از بین برد. باتوجه به کیفیت این محصولات، می توان
            بر روی صادرات آنها به استانها و شهرهای همجوار نیز فکر کرد.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            کامیاران ۱۳۰ بنای تاریخی دارد که ۷۴ مورد به ثبت ملی رسیده‌است.
            همچنین دارای ۳۰ منطقه نمونه گردشگری و ۴ روستای هدف گردشگری است که
            زیباترین آنها روستایی به نام پلنگان (به زبان محلی پالنگان) است که به
            آثار طبیعی و همچنین معماری خانه‌های مردمانش مشهور است. این
            پتانسیل‌ها سبب شده‌است که کامیاران بیشترین درصد بازدید گردشگر در
            استان به ویژه در بخش گردشگری روستایی داشته باشد ؛وجود جاذبه های
            طبیعی بکر و زیبا و آثار تاریخی شناخته شده که توسط گردشگرانی از داخل
            و خارج از کشور بازدید می شود، لزوم تجهیز و ایجاد انواع امکانات رفاهی
            و اقامتی در این شهرستان را نشان می دهد؛ زیرا طبق بررسی های انجام
            شده، نبود هتل و اقامتگاهی با کیفیت، یک مساله جدی در زمینه گردشگری
            است. اگر این امکانات ایجاد شوند، می توان از پتانسیل نزدیکی به کشور
            عراق به بیشترین نحو استفاده کرده و سود خوبی را انتظار داشت.{" "}
          </p>
          <p>
            در پایان ذکر این نکته ضروری است که تجهیز راه های دسترسی به این آثار
            تاریخی، باید در دستور کار قرار گیرد تا شاهد استقبال هرچه بیشتر
            گردشگران از این موارد باشیم.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            تعداد زیادی مرغداری صنعتی و نیمه صنعتی در کامیاران مشغول به فعالیت
            هستند و این موضوع نشان‌دهنده آن است که مرغ در اقلیم آب و هوایی
            کامیاران جوابگوست. باتوجه به تفاوت قیمت گوشت مرغ با دیگر طیور، می
            توان در زمینه پرورش این پرنده به دو صورت گوشتی و تخم گذار اقدام کرد.{" "}
          </p>
          <p>
            درحال حاضر به صورت محدود پرورش طیوری مانند بوقلمون، شترمرغ، بلدرچین
            و کبک در کامیاران انجام شده و جواب داده است. مساله مهمی که در زمینه
            توسعه پرورش این موارد وجود دارد این است که طبق بررسی های انجام شده
            ذائقه بیشتر مردم شهرستان همخوانی زیادی با گوشت این طیور ندارد؛ ولی
            باتوجه به اینکه در کردستان عراق تمایل به استفاده از این موارد زیاد
            است، می توان روی بازار آن شهر حساب کرد و پرورش این طیور را توسعه
            داد.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            همانطور که در بالاتر اشاره شد، کامیاران در زمینه تامین آب مشکلی
            نداشته و در وضعیت مطلوبی قرار گرفته‌است. وجود رودخانه دائمی سیروان و
            چندین سد بزرگ ازجمله گاومیشان باعث رونق پرورش ماهی شده است. بیشتر
            ماهی هایی که پرورش داده می شوند از نوع سردآبی است. باتوجه به کیفیت
            این محصولات و وجود بستر لازم از نظر اقلیم آب و هوایی و منابع آبی،
            توسعه پرورش ماهی سودآور خواهد بود.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            تولید صنایع دستی در شهرستان کامیاران به دو صورت خانگی و کارگاهی
            انجام می شود؛ ولی آنچه که مرسوم تر بوده و همچنان درحال انجام است،
            کار به صورت خانگی است. درضمن بسیاری از کارگاه‌ها به دلیل نوسانات
            قیمتی و پایین بودن قیمت خرید، ورشکست و نیمه فعال شده اند.{" "}
          </p>
          <p>
            بافت گلیم، قالی، گیوه، کلاش، فرش و دوخت لباس های محلی انجام می شود و
            مهارت های لازم برای تولید آن‌ها وجود دارد. بصورت کلی درحال حاضر
            بیشتر فروش تولیدات صنایع دستی در بیشتر مناطق کشور یا به صورت سفارشی
            است و یا نهایتا در نمایشگاه ها به فروش می رود؛ درنتیجه برای شروع هر
            کسب و کاری در این زمینه باید بازار فروش این محصولات را فراهم کرد.{" "}
          </p>
          <p>
            به عنوان پیشنهاد برای تامین بازارفروش این محصولات، می توان توسعه
            گردشگری در کامیاران را پیشنهاد داد تا گردشگران خارجی علاوه بر
            استفاده از جاذبه های طبیعی و تاریخی، محصولات تولیدی در شهرستان را
            نیز خرید کنند.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            وجود نیروی کار جوان، میزان آب کافی و نزدیکی نسبی به مرز با عراق
            دلایل خوبی برای کار در زمینه صنعت کامیاران است.{" "}
          </p>
          <p>
            همانطور که به طور اجمالی در بالاتر اشاره شد، نزدیکی به مرز عراق و
            نیاز آنها به مصرف انواع محصولات مختلف باعث می شود تا بتوان بازار
            فروش خوبی را در آن کشور انتظار داشت. همچنین همجواری با استان ایلام
            نیز مزیت خوبی در زمینه تامین بازار فروش خواهد بود.{" "}
          </p>
          <p>
            معادن مختلفی از جمله سنگ در کامیاران وجود دارد که درحال حاضر تنها
            مواد آن استخراج می شوند. ایجاد واحدهایی برای فرآوری این محصولات
            علاوه بر ایجاد اشتغال، می تواند نیاز شهرستان به مصالح ساختمانی را از
            بین ببرد.{" "}
          </p>
          <p>
            کارخانه هایی مانند کارخانه فوم سزی، یخ سازی، چند کارخانه تولید سبد و
            کارتون و تعدادی واحد دیگر در زمینه صنعت درحال حاضر در کامیاران درحال
            فعالیت هستند. این واحدها میزان اشتغال خوبی را در شهرستان ایجاد کرده
            اند؛ هرچند که بعضی از کارگران آنها از دیگر شهرستانهای استان هستند.
            در ادامه باید اشاره کرد توسعه تولید گونی، کارتون و سبد، به علت حجم
            بالای تولیدات باغی، زراعی و دامی دارای مزیت خواهد بود. به علت نبود
            صنایع مختلف مانند تولید قطعات خودرو، می توان این صنایع را نیز
            پیشنهاد داد .
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
