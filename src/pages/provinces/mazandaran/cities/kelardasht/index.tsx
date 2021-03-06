import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-27"].cities["IR-2716"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        fisheries: "شیلات",
        services: "خدمات",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
        gardening: "باغداری",
        agriculture: "زراعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            کِلاردَشت شهرستانی در استان مازندران با وسعتی در حدود ۱۵۰۹ کیلومتر
            مربع است. این ناحیه از جنوب به قله تخت سلیمان تا حدود گردنه ی کندوان
            و از شمال به دریای خزر و شهر عباس‌آباد، از شرق به چالوس، نوشهر و
            کجور و از غرب به قزوین و الموت محدود می‌شود. جمعیت شهرستان کلاردشت
            طبق سرشماری سال1395، 23648نفر بوده است.
          </p>
          <p>
            وجود رشته کوه‌های البرز در کناره‌های دریای خزر موجب متوقف شدن رطوبت
            در دامنه‌های آن گردیده و سبب بارش باران فراوان در این ناحیه از شمال
            کشور می‌شود. بخشی از این بارندگی‌ها در ارتفاعات کلاردشت منجر به بارش
            برف می‌شود و به همین دلیل است که هوای کلاردشت در مقایسه با دیگر
            مناطق استان مازندران بسیار خنک‌تر و مطبوع‌تر است. هوا در کلاردشت مه
            نسبتاً دایمی دارد و دمای آن در برخی از روزهای سرد زمستان به حدود ۳۰
            درجه سانتی‌گراد زیر صفر می‌رسد. در شب‌های تابستان نیز گاه مردم به
            استفاده از لباس گرم نیاز دارند. شکل زیر موقعیت شهرستان کلاردشت را
            نشان می دهد.
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
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به عنوان یکی از حوزه های بخش کشاورزی با یکی از مهم ترین نیاز
            های انسان، یعنی نیاز به منابع غذایی و خصوصا منابع پروتئینی مرتبط
            است. فعالیت در این حوزه شغلی و افزایش بهره وری در آن، می تواند از
            راهکارهای کاهش وابستگی به درآمد نفتی باشد و عاملی برای توسعه صنایع
            غذایی، تبدیلی و تکمیلی کشور محسوب شود.{" "}
          </p>
          <p>
            دامداری از حرفه هایی است که تعداد زیادی از مردم شهرستان کلاردشت را
            به خود مشغول ساخته است. دامداری در شهرستان کلارشت بیشتر به صورت سنتی
            انجام می شود و ثمره این دامداری تولید شیر و گوشت به میزان خوب است و
            این محصولات خام علاوه بر اینکه از نیازهای اساسی مردم هستند، مورد
            استفاده در تولید فرآورده های پرفروشی مانند لبنیات،سوسیس و کالباس
            و...نیز می توانند قرار می گیرند. این حرفه به صورت پرورش دام سبک (بز
            و گوسفند) و دام سنگین(گاو) در حال انجام است اما با توجه به اینکه
            شهرستان مراتع زیادی دارد و پرورش دام سبک از این جهت که اگر به دام ها
            ضرری وارد شود، راحت تر جبران می شود، مورد استقبال بیشتری قرار گرفته
            است. بیشتر دام های سبک، بومی هستند و به ندرت دام های اصلاح نژادی
            پرورش داده می شود اما بیشتر دام های سنگین از نژادهای اصلاح شده
            (هلشتاین) هستند.{" "}
          </p>
          <p>
            گوسفند در مقايسه با ساير حيوانات به جيره نگهدارى کمترى احتياج دارد و
            بيشتر غذاى دريافتى را صرف رشد و نمو مى‌کند همچنین نسبت به سایر
            دام‌ها مثل بز و طیور، مقاومت خوبی به بیماری‌ها و شرایط نامناسب
            رطوبتی و دمایی دارد. بنابراین میزان تلفات در این دام بسیار پایین‌تر
            بوده و ضرر اقتصادی کمی را از این جهت به دامدار وارد می‌کند.
          </p>
          <p>
            به طورکلی بز به‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر و گوشت
            در مناطق مختلف دنیا پرورش داده می‌شود. جثه کوچک، کم توقع بودن و
            مقاومت در برابر بیماری‌ها و شرایط سخت محیطی، باعث شده تا بز به‌عنوان
            حیوانی محبوب در بین دامداران تلقی شود. در نقاط مختلف از این حیوان
            علاوه بر تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز استفاده
            می‌شود.
          </p>
          <p>
            گاو هلشتاین که به نام هولشتاین هم شناخته می شود جزء سنگین وزن ترین
            گاوهای شیری در جهان است. این نژاد که از نظر تولید شیر بهترین نژاد در
            میان گاوهای شیری است حدودا ۷۲۴۰ لیتر شیر در سال تولید می کند. درصد
            چربی این شیر 65/3 درصد و درصد پروتئین آن ۳ درصد است.
          </p>
          <p>
            زنبورداری از مشاغل دیگر در حوزه دامداری است که در سطح بسیار خوبی
            انجام می شود. سالانه بیش از 91 تن عسل در این شهرستان تولید و روانه
            بازار مصرف داخلی و خارجی می شود. زنبورداری، نیاز به سرمایه کم ولی
            درآمدزایی بالایی دارد. پوشش گیاهی خوب شهرستان کلاردشت ظرفیت خوبی را
            برای توسعه زنبورداری ایجاد کرده است. همچنین شرایط اقلیمی و نوع پوشش
            گیاهی شهرستان کلاردشت باعث شده عسل تولیدی کیفیت بسیار خوبی داشته
            باشد.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیارخوبی در کشور ما برای
            آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور ایجاد خواهد شد. شهرستان کلاردشت با توجه به
            داشتن آب و هوای سرد و منابع آبی غنی، شرایط بسیار مساعدی برای پرورش
            ماهی سردابی(قزل آلا) دارد. در حال حاضر نیز واحد های بزرگ و کوچک
            پرورش ماهی سردابی در شهرستان وجود دارد.{" "}
          </p>
          <p>
            ماهیان سردآبی در محدوده دمایی 18-12 درجه سانتیگراد بهترین رشد را
            دارند. ماهی قزل آلا یکی از معروف ترین گونه های ماهیان سردآبی است.
            قزل آلا یکی از منابع خوب آهن است، آهن در خونسازی و همچنین در حفظ
            مقاومت بدن در برابر میکروبها نقش مهمی به عهده دارد. علاوه بر آن، آهن
            موجود در قزل آلا، جذب آهن منابع گیاهی را هم افزایش می دهد؛ بنابراین
            نقش مهمی در پیشگیری از کم خونی ناشی از فقر آهن به عهده دارد. نتایج
            مطالعات نشان می دهند امگا ۳ ماهی قزل آلا می تواند فشار خون و ضربان
            قلب را در بیماران صرع تنظیم کرده و از تعداد تشنج های آن به طور قابل
            توجهی بکاهد؛ بنابراین این نوع ماهی طرفداران زیادی در بین مردم دارد؛
            لذا راه اندازی پرورش آن، علاوه بر ایجاد اشتغال پایدار، سوددهی خوبی
            را خواهد داشت.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            مشاغل خدماتی همیشه یکی از راه های مهم کسب درامد در بین مردم کشور ما
            و خصوصا در شهرستان های شمالی کشور بوده است. گردشگری از جمله مشاغل
            خدماتی است که بیشترین رونق را در این مناطق داشته است. شهرستان های
            شمالی به دلیل وفور جاذبه های طبیعی قطب گردشگری در ایران محسوب می
            شوند و طبیعتا سرمایه گذاری در این حوزه یکی از انتخاب های شغلی است که
            سوددهی بسیارخوبی دارد. شهرستان کلاردشت نیز یک منطقه توریستی است. این
            سرزمین سرسبز با اینکه دریا ندارد، ولی زیبایی‌های زیادی دارد.
            جنگل‌های انبوه اطراف این منطقه به همراه رودخانه سردآبرود و کوه‌های
            اطراف، کلاردشت را به یکی از نقاط پرطرفدار گردشگری در کشورمان تبدیل
            کرده است. همچنین کلاردشت روستاهای زیادی نیز دارد که هرکدام به نوبه
            خود زیبایی وصف‌ناپذیری دارند.{" "}
          </p>
          <p>
            تعدادی از مناطق گردشگری شهرستان کلاردشت عبارتند از: تپه باستانی
            کلار، روستای کردیچال کلاردشت، روستای لورچال، روستای مکارود، جنگل
            آزو، جنگل مجل، کوه تخت سلیمان، روستای سیاه بیشه، مازیچال، دریاچه هفت
            خان،علم کوه و یخچالهای تخت سلیمان و آبشار آکاپل.{" "}
          </p>
          <p>
            هر نوع فعالیت در حوزه گردشگری در این شهرستان مقرون به صرفه است.
            البته فعالیت های خوبی در این حوزه مانند احداث اقامتگاه بومگردی انجام
            شده است اما پتانسیل این شهرستان برای توسعه این فعالیت ها بسیار بیشتر
            است. احداث اقامتگاه های بومگردی، اقامتگاه های تفریحی، هتل های بزرگ و
            رستوران های بومی از جمله پیشنهادهای شغلی در این حوزه است.{" "}
          </p>
          <p>
            به صورت کلی ایران کشوری است غنی از اقلیم های مختلف و برای کسانی است
            که می خواهند با فرهنگ و آداب و رسوم محلی هر منطقه آشنا شوند.
            اقامتگاه های بوم گردی فرصتی مناسبی است تا ضمن گردشگری در هر منطقه و
            بازدید از جاذبه های توریستی، حس ایرانی زیستن به سبک سنتی را تجربه
            کنند. همچنین طبخ غذاهای محلی در برخی اقامتگاه ها، مصداق دیگری از
            مهمان نوازی ایرانی است.
          </p>
          <p>
            رستوران‌های با الگوی بومی نیز مکان‌هایی با فضای سنتی و متناسب با
            آداب ‌و ‌رسوم هر منطقه هستند که در آنها بیشتر به‌جای استفاده از میز
            و صندلی‌های مدرن از تخت یا سایر وسایل سنتی استفاده می‌شود و علاوه بر
            سرو غذاهای محلی،ترشیجات خانگی، نوشیدنی‌هایی مانند چای و قهوه نیز
            داده می‌شود.تمامی مناطق ایران با وجود تنوع آب هوایی و جغرافیایی ، در
            راه اندازی رستوران های سنتی و محلی همخوانی دارد.
          </p>
          <p>
            ساخت و طراحی اقامتگاه‌های تفریحی توریستی نیز به عنوان راهبردی جهت
            جذب گردشگر، یکی از اصلی‌ترین عناصر در توسعه صنعت گردشگری محسوب
            می‌گردد. طراحان و معماران، بایستی با ارائه ایده‌های جدید و جذاب،
            اقامتگاه‌هایی را طراحی نمایند که توانایی جذب توریست را داشته باشند.{" "}
          </p>
          <p>
            با توجه به اینکه شهرستان کلاردشت، هدف گردشگری است، انجام فعالیت هایی
            مانند اجاره سوئیت و ویلا از جمله پیشنهادات شغلی در حوزه خدمات است که
            درآمدزایی خوبی دارد.
          </p>
          <p>
            با توجه به ورود مسافران زیاد به این شهرستان، خرید و فروش کالاهای
            مختلف(مانند مغازه داری) از کسب و کارهای سودآور دیگری است که می توان
            انجام داد.
          </p>
          <p>
            خیاطی از دیگر مشاغل خدماتی است که در حال حاضر در این شهرستان انجام
            می شود و قابلیت گسترش دارد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            صنعت تولید غذا، از نمونه فعالیت‌های توانمند در کشور به شمار می‌رود،
            عرصه‌ای که در صورت حمایت و برنامه‌ریزی، می‌تواند به قطبی تأثیرگذار
            در توسعه صادرات غیر نفتی مبدل شود. درواقع ما می‌توانیم علاوه بر مصرف
            داخلی، محصولات موردنیاز مصرفی کشورهای همسایه را نیز تولید و تامین
            کنیم. صنعت غذا دارای ویژگی‌های مهمی است و در درجه اول باید به تامین
            امنیت غذایی کشور خودمان اشاره کرد که از اهمیت بالایی برخوردار است.
            در درجه‌ دوم کشورهای اطراف هستند که در زمینه تولید محصولات غذایی
            ضعیف بوده و ما می‌توانیم با تقویت سیستم‌های تولید، نیازهای کشورهای
            اطراف را تامین کنیم. در درجه‌ سوم مساله ظرفیت‌های خاص کشورمان در
            زمینه وجود مواد اولیه ارگانیک و طبیعی است. شهرستان های شمالی کشور
            مانند کلاردشت نیز از چنین ظرفیت هایی برخوردار است که متاسفانه توجه
            کافی و لازم به آن‌ها نشده است.
          </p>
          <p>
            {" "}
            یکی از حوزه هایی که صنعت غذا درآن می تواند موفق عمل کند، حوزه
            دامداری است. همانطور که گفته شد شیر و گوشت از تولیدات خام دامی هستند
            که میزان تولید خوبی دارند؛ اما فرآوری صنعتی برای آن ها وجود ندارد.
            در حال حاضر واحدهای تولید لبنیات سنتی موجود هستند و می توان در زمینه
            توسعه این واحدهای نیز فعالیت کرد. با توجه به توریستی بودن شهرستان،
            از طریق تولید لبنیات سنتی و فروش آن ها می توان سود بسیار خوبی کسب
            کرد، بنابراین تولید لبنیات سنتی صرفه اقتصادی دارد. اما تولید لبنیات
            صنعتی از مواردی است که در شهرستان انجام نمی شود و جای کار در این
            زمینه وجود دارد.{" "}
          </p>
          <p>
            گندم و جو از محصولات زراعی شهرستان کلاردشت است که مقدار خوبی از آن
            ها تولید می شود. اما واحدی برای فراوری آن ها وجود ندارد در صورتی که
            آرد یکی از فرآورده های قابل تولید در این منطقه است. یکی از موارد
            اصلی و مورد نیاز در تهیه غذاها آرد است که از انواع آرد می‌توان به
            آرد قنادی، آرد ستاره، آرد سبوس و آرد کامل اشاره نمود که از این میان
            آرد کامل به لحاظ میزان سبوس بالای آن، دارای ارزش غذایی قابل توجهی
            است . اما آرد تنها فراورده ای نیست که می توان از گندم تولید کرد بلکه
            فراورده هایی مانند نان (صنعتی و سنتی)، شیرینی و رشته آشی و پلویی
            قابلیت تولید دارند. تولید نان به شیوه سنتی از روش های کسب درآمد است
            که بازهم به دلیل توریستی بودن شهرستان بازار فروش بسیار خوبی خواهد
            داشت. اما تولید نان صنعتی مزایای خاص خود را دارد. در تولید نان به
            روش صنعتی، نان با استفاده از تکنولوژی روز دنیا، ماشین ¬آلات مدرن و
            به صورت مکانیزه (تمام اتوماتیک) و بدون دخالت دست و در مقیاس بالا
            تولید می گردد. از مزایای تولید صنعتی نان، ارتقاء کیفیت نان، ارزش
            غذایی بیشتر، ضایعات کمتر، تنوع محصول و بسته بندی و استفاده بهینه از
            انرژی است. رشته آشی و پلویی از جمله مواد غذایی است که در تهیه بعضی
            از غذاهای ایرانی کاربرد دارد و بازار فروش آن به راحتی و تقریبا از
            طریق تمام اقشار جامعه تامین می شود. شیرینی پزی نیز حرفه ای است که
            همیشه استقبال زیادی از تولیدات آن وجود دارد. البته باید در نظر داشت
            که یکی از راه های موفقیت در این حرفه، تولید محصولاتی به صورت مجموعه
            ای در طرح ها و اشکال متنوع است. درواقع قالب سازی باید تنوع بسیار
            بالایی داشته باشد.
          </p>
          <p>
            یکی از فراورده های باارزشی که با توجه به وجود زنبورداری در سطح خوب
            در شهرستان کلاردشت، می توان تولید کرد، ژل رویال است. ژل رویال،
            ماده‌ای بسیار مغذی و نیرو بخش و در واقع به عنوان غنی ترین ماده مغذی
            بیولوژیک شناخته شده است. ارزش افزوده بالای تولید ژل رویال زنبور عسل
            در بازارهای جهانی سبب شده تا تولید این محصول با ارزش در دستور کار
            صنایع غذایی قرار گیرد. میکروب کشی، جلوگیری از آلزایمر، جلوگیری از
            فشار خون، ضدسرطان بودن و کمک به جوانی و شادابی پوست از جمله خواص این
            ژل است. گسترش تولید در این زمینه صرفه اقتصادی و ارزآوری بالایی برای
            کشورمان خواهد داشت.
          </p>
          <p>
            از جو تولید شده علاوه بر استفاده به عنوان خوراک دام برای تولید
            فرآورده های دیگری نیز مانند آرد جو و جوپرک می توان استفاده کرد.
            جوپرک از خوراکی های پرمصرف در بین مردم است و خواص مفیدی نیز دارد
            برای مثال خطر ابتلا به بیماری های قلبی و افزایش فشارخون را کاهش می
            دهد.{" "}
          </p>
          <p>
            در شهرستان کلاردشت باغات گردو وجود دارد که قبلا مقدار تولید بسیار
            خوبی داشته است اما اخیرا به دلیل سرمازدگی باغات، مقداری از تولید آن
            کم شده است اما با این حال بازهم می توان در خصوص فرآوری آن برای احداث
            واحدی کوچک اقدام کرد. درواقع می توان با خرید دستگاه روغن گیری، روغن
            گردو تولید کرد و سودآوری خوبی داشت. روغن گردو یکی از گران‌ترین
            روغن‌های طبیعی موجود در بازار است. این روغن به‌راحتی دردسترس است و
            در تمام جهان شناخته‌شده می‌باشد. ولی بسیاری از مردم هنوز از این روغن
            همه‌کاره که خواص فراوانی دارد بهره نمی‌برند، زیرا از خواص روغن گردو
            آگاهی ندارند، اما با آگاهی دادن به مردم می توان بازار فروش این روغن
            را گسترده تر کرد. روغن گردو خواص فراوانی دارد که کمک به سلامت قلب و
            عروق، کمک به کنترل قند خون و دیابت، جلوگیری از ریزش مو، ، بهبود
            عملکرد مغز و کاهش خطر ابتلا به سرطان از این دست هستند. یکی دیگر از
            محصولاتی که از گردو می توان تولید کرد، ترشی گردو است. این ترشی
            خوشمزه علاوه بر خواص بی نظیر در کاهش سطح کلسترول نیز مفید است.
          </p>
          <p>
            علاوه بر روغن گیری می توان مغز گردو را به صورت بسته بندی شده فروخت .
            در واقع محصولات بسته بندی شده گردو بازار بهتری نسبت به فروش فله‌ای
            آن دارد.
          </p>
          <p>
            گیلاس و سیب نیز از تولیدات باغی دیگر شهرستان کلاردشت هستند که مقدار
            تولید آن ها برای احداث واحدی بزرگ در خصوص تولید فرآورده های آن ها
            کافی نیست اما می توان به صورت خانگی و یا در قالب کارگاه کوچک برای
            تولید فرآورده های آن ها مانند چیپس میوه، میوه خشک، مربا، ترشی و
            لواشک اقدام کرد. درصورت جلب اعتماد مردم برای محصولات تولیدی،
            بازارفروش خوبی برای محصولات وجود خواهد داشت.
          </p>
          <p>
            فرآوری سبزیجات به منظور تولید سبزی خشک، جداسازی، سرخ کردن و بسته
            بندی آن ها به صورت خانگی از مشاغلی است که استقبال و بازارفروش خوبی
            دارد و در صورت انجام آن می توان درآمد مناسبی کسب کرد.
          </p>
          <p>
            تولید خیار، با کیفیت بسیارخوب در شهرستان که مقدار انبوهی ندارد می
            تواند برای تولید خیارشور به صورت خانگی و یا در کارگاه کوچک برای کسب
            درآمد مورد استفاده قرار بگیرد.
          </p>
          <p>
            قارچ از محصولاتی است که مقدار تولید بسیارخوبی در شهرستان دارد.
            فرآوری قارچ از مواردی است که زیاد به آن فکر نشده است. درصورتی که
            ترشی قارچ از جمله ترشی های خوشمزه است که تعداد زیادی از مردم با آن
            اشنایی ندارند. درصورتی که با تبلیغات صحیح می توان بازار فروش بسیار
            خوبی را برای آن ایجاد کرد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی، بررسی‌ها نشان می‌دهد که سالانه
            مقداری از آن در مراحل کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند.
            از سوی دیگر برداشت و یا تولید بسیاری از محصولات کشاورزی در یک بازه
            زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال صورت می‌پذیرد. لذا
            صنایع تبدیلی می‌تواند زمان استفاده را افزایش دهد و از میزان ضایعات
            آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و
            جلوگیری از اتلاف و ضایع شدن محصولات می‌گردد. در شهرستان کلاردشت
            ظرفیت های خوبی برای راه اندازی برخی از صنایع تبدیلی و تکمیلی وجود
            دارد.
          </p>
          <p>
            با توجه به وجود کشتارگاه صنعتی دام در کلاردشت، پوست دام به میزان
            بالایی تولید می شود. اما در بسیاری از شهرستان ها مانند کلاردشت
            استفاده مفیدی از پوست دام ها نمی شود و این پوست ها با قیمتی ناچیز
            فروخته و به خارج از شهرستان ارسال می شوند و یا اینکه دورانداخته می
            شوند. درصورتی که فرآوری پوست دام یکی از راه های کسب درآمد است که سود
            خوبی را نصیب فرد تولید کننده می کند. فرآوری پوست گاو به منظور تولید
            چرم و فرآوری پشم گوسفند به منظور تولید نخ مواردی هستند که به عنوان
            گزینه های شغلی بسیار خوب پیشنهاد می شوند. البته ممکن است از چرم در
            شهرستان کلاردشت که وسعت زیادی ندارد، استقبال خوبی صورت نگیرد که در
            این صورت با ارسال به شهرستان هایی که استفاده زیادی از چرم دارند و
            بازاریابی مناسب، می توان این مشکل را حل نمود. اما با توجه به تولیدات
            صنایع دستی در شهرستان و نیاز به نخ، تولید این محصول سوددهی خوبی
            خواهد داشت. البته در حال حاضر بعضی از مردم خودشان از پشم گوسفند نخ
            تولید می کنند که این کار به روش سنتی انجام می شود.{" "}
          </p>
          <p>
            با توجه به اینکه میزان تولید عسل در شهرستان کلاردشت مناسب است بسته
            بندی عسل می تواند انتخاب شغلی خوبی باشد. بسته بندی عسل به صورت صنعتی
            تاثیر به سزایی در بازار فروش داخلی و خارجی آن دارد. (در این شهرستان
            بسته بندی عسل به صورت صنعتی وجود ندارد) تولید کندوی زنبور عسل نیز
            لازمه ی حرفه زنبورداری است که انجام آن در شهرستان پیشنهاد می شود.{" "}
          </p>
          <p>
            یکی دیگر از مواردی که بر فروش تولیدات خام بخش دامداری و شیلات تاثیر
            مثبت دارد، بسته بندی محصولاتی مانند گوشت قرمز و ماهی است. بسته‌بندی
            به عنوان یک ابزار کارآمد سالهاست که مورد توجه کارشناسان علم
            بازاریابی قرار گرفته است. استفاده از انواع مختلف بسته‌بندی ضمن اینکه
            قابلیت نگهداری بهتری را به کالا می‌بخشد در کسب سهم بالاتری از بازار
            برای کالای مورد نظر نیز مؤثر است. آلودگی و فساد مواد پروتئینی حیوانی
            و فراورده‌های دامی موجب افت قابل توجه ارزش غذایی و نهایتاً خروج مواد
            با ارزش غذایی ازچرخه مصرف می‌گردد. گوشت قرمز و گوشت سفید اعم از مرغ
            و ماهی به عنوان یکی از اقلام عمده غذایی مردم به اشکال مختلف مورد
            استفاده قرار می‌گیرند و لذا رعایت بهداشت در تهیه و عرضه آن باعث
            افزایش سطح بهداشت عمومی جامعه می‌گردد. اما مسئله ای اینجا ممکن است
            وجود داشته باشد که آن هم مناسب نبودن بازار فروش گوشت بسته بندی شده
            در شهرستان کلاردشت است. برای این مسئله نیز همان راه حل ارسال گوشت به
            خارج از شهرستان و بازاریابی مناسب مطرح می شود.
          </p>
          <p>
            غلات (گندم وجو) تولید شده در شهرستان را می توان به صورت بسته بندی
            شده به فروش رساند و سود بیشتری را نسبت به فروش فله ای کسب کرد.
          </p>
          <p>
            در پایان ذکر این نکته لازم است که مواردی مانند احداث کشتارگاه دام،
            تولید آرد و واحد فرآوری پوست، زود اشباع می شوند و بسته به نیاز و
            ظرفیت شهرستان احداث یک یا دو واحد از آن ها کفایت می کند.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز جامعه به
            منابع غذایی، از اهمیت بالایی برخوردار بوده و سود بالایی دارد. البته
            بازارفروش و ریسک های مربوط به پرورش هر پرنده ای (باتوجه به نوع
            بیماری هایی که بین آن ها شیوع پیدا می کند و مقاومت آن ها نسبت به
            بیماری ها) متفاوت است.
          </p>
          <p>
            یکی از طیوری که در شهرستان پرورش داده می شود، مرغ گوشتی است که در
            این خصوص مرغداری های صنعتی نیز وجود دارد. به صورت کلی پرورش مرغ به
            جهت تامین منابع پروتئینی مورد نیاز جامعه، کسب و کاری پرطرفدار و
            سودده است که می توان در خصوص افزایش آن در شهرستان اقدام کرد.{" "}
          </p>
          <p>
            طیور دیگری مانند غاز، اردک و بوقلمون نیز در شهرستان به میزان کم
            پرورش داده می شوند که امکان گسترش پرورش این طیور به صورت سنتی و یا
            صنعتی وجود دارد و پرورش هرکدام از آن ها مزایای خاص خود را دارد که به
            آن ها می پردازیم.{" "}
          </p>
          <p>
            از مزایای پرورش غاز این است که گوشت آن برای تامین گوشت مصرفی انسان
            اهمیت ویژه‌ای دارد. همچنین از تخم این پرنده و جگر غاز برای تهیه
            غذا‌های گران قیمت در بسیاری از کشور‌ها استفاده شده و جنبه صادراتی
            دارد. از مزایای پرورش اردک این است که تغذیه ¬ی اردک¬ ها شبیه مرغ
            است، با این تفاوت که گوشت آن گرم است و مثل مرغ واکسینه نمی‌شود. در
            نتیجه مشکل هورمونی ندارند و نگه‌داری از آن¬ها آسان است ضمن آنکه ارزش
            غذایی بالایی دارند.{" "}
          </p>
          <p>
            در رابطه با مزیت پرورش بوقلمون باید گفت که با گران شدن گوشت قرمز،
            تقاضا برای گوشت بوقلمون که ترکیبی از گوشت سفید و قرمز است بالا رفته
            و پرورش این پرنده صرفه اقتصادی خوبی به همراه دارد. همچنین گوشت
            بوقلمون خواص زیادی دارد که خوشبختانه آگاهی مردم نیز نسبت به این
            موارد بیشتر شده است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            تولید صنایع دستی از مشاغلی است که تعدادی از مردم شهرستان کلاردشت به
            آن اشتغال دارند. البته رونق صنایع دستی نسبت به قبل کمتر شده است که
            یکی از دلایل آن عدم حمایت و رسیدگی مسئولین و کاهش کیفیت محصولات
            تولیدی است که با رفع این موانع ویا بخشی از آن مانند ارتقاء کیفیت،
            مانند قبل می توان رونق خوبی در این خصوص ایجاد کرد.{" "}
          </p>
          <p>
            بیشترین تولید صنایع دستی در شهرستان مربوط به فرش است که هنوزهم
            صادارت دارد. در حال حاضر چند کارگاه در زمینه قالی بافی و جاجیم بافی
            در شهرستان وجود دارند که می توان در زمینه توسعه این کارگاه ها مشروط
            به تولید کالای باکیفیت اقدام کرد. البته تولید فرش به دلایلی مانند
            بازارفروش در بین مردم مزیت بالاتری دارد.
          </p>
          <p>
            گلیم بافی و طراحی روی کوزه از مواردی است که به صورت خانگی و محدود در
            این حوزه انجام می شود. این روزها از گلیم استفاده های مختلفی مانند
            استفاده در تولید کیف وکفش می شود و افزایش تولید گلیم صرفه اقتصادی
            خوبی خواهد داشت. کوزه های طراحی شده نیز مورد استقبال تعداد زیادی از
            مردم به عنوان یک وسیله تزئینی قرار می گیرند.
          </p>
          <p>
            در گذشته فعالیت هایی مانند جوراب بافی از پشم گوسفند و چادرشب بافی
            نیز انجام می شده که تقریبا از بین رفته است ولی با احیای این مشاغل می
            توان اشتغالزایی و کسب درآمد کرد و دوباره افراد را به این محصولات
            علاقه مند کرد. البته ایجاد واحدی برای جوراب بافی که به داخل شهرستان
            و استان عرضه داشته باشد مورد تاکید بیشتری است.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از عوامل مهم توسعه اقتصادی هر کشوری است. متاسفانه با
            اینکه ظرفیت های بسیار خوبی در کشور ما برای ایجاد مشاغل صنعتی وجود
            دارد، نقش این حوزه شغلی آن چنان که باید پررنگ نیست در صورتی که با
            اندکی ریسک پذیری می توان واحدهای سودآوری را در هرشهرستانی احداث کرد.
            متاسفانه در شهرستان کلاردشت به مشاغل صنعتی توجه بسیار کمی شده است با
            اینکه پتانسیل های خوبی در این خصوص وجود دارد. برای مثال شهرستان
            کلاردشت قابلیت احداث یک کارخانه تولید لوله پلی اتیلن ، لوله آب و حتی
            برق (روکش سیم برق) را دارد.
          </p>
          <p>
            در این شهرستان ظرفیت برای ایجاد واحدهای تولید پوشاک و لوازم خانگی
            نیز وجود دارد. مردم در زمینه پوشاک مصرف زیادی دارند و با تولید بیشتر
            می توان شهرهای اطراف را نیز پوشش داد.
          </p>
          <p>
            قابلیت احداث واحدهایی برای تولید مصالح ساختمانی، ابزار یراقات و
            شیرآلات در این منطقه وجود دارد و ازآن جایی که مصرف شهرستان در خصوص
            این محصولات زیاد است صرفه اقتصادی خوبی نیز دارد.{" "}
          </p>
          <p>
            در این شهرستان یک کارخانه ماسک سازی نیز وجود دارد که می توان در خصوص
            توسعه آن نیز اقدام کرد. همچنین لازم به ذکر است در شهرستان کلاردشت
            شهرک صنعتی وجود ندارد و لزوم ایجاد آن احساس می شود. صنایع فعال این
            شهرستان عبارتند از: یک کارخانه ماسک سازی و تولید لباس های پزشکی و
            بیمارستانی و مجموعه پرورش قارچ .{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری از کسب و کارهایی است که درآمدزایی خوبی در کشور ما دارد. زیرا
            اقلیم موجود در نقاط مختلف کشور شرایط خوبی را برای کاشت انواع محصولات
            باغی فراهم کرده است. در شهرستان کلاردشت نیز انواعی از محصولات باغی و
            زراعی تولید می شوند اما محدودیتی برای انجام کشاورزی در شهرستان وجود
            دارد که متاسفانه درحال حاضر انجام حرفه ی کشاورزی مزیت بالایی ندارد و
            آن محدودیت این است که سرمای هوا در این شهرستان گاهی باعث سرمازدگی
            محصولات و به بارآوردن خساراتی برای کشاورزان می شود. مثلا ممکن است در
            اردیبهشت برف ببارد و محصولات از بین برود. اما به هرحال بازهم
            تولیداتی (به میزان نه چندان زیاد) می توان داشت.
          </p>
          <p>
            از آن جایی که قارچ در فضای بسته ای پرورش می یابد و می توان برای رشد
            آن دما را کنترل کرد، تولید بسیار خوبی در شهرستان دارد. درواقع
            کارخانه ای در شهرستان به پرورش قارچ می پردازد و بسته بندی آن را نیز
            انجام می دهد. قارچ از محصولاتی که پرورش آن شرایط محیطی خاصی را نمی
            طلبد و برای پرورش آن به سرمایه اولیه زیادی نیاز نیست و همچنین بازار
            فروش خوبی نیز در بین مردم دارد. لذا توسعه پرورش آن مقرون به صرفه است
            خصوصا که می توان به شهرستان های اطراف (ونزدیک) نیز ارسال کرد.{" "}
          </p>
          <p>
            سیب از محصولاتی است که درحد مصرف تولید می شود اما از آن جایی که سیب
            معمولا در مناطق سردسیر کاشته می شود و مقاومت خوبی نسبت به سرما دارد،
            افزایش تولید آن پیشنهاد می شود.
          </p>
          <p>
            گردو و گیلاس از دیگر محصولات باغی هستند که قبلا به مقدار بیشتری
            تولید می شدند اما به دلیل سرمازدگی، اخیرا تولید آن ها کم شده است.
            امکان افزایش تولید این محصولات وجود دارد اما بستگی به نوع نهال
            استفاده شده دارد به این صورت که باید از نهال هایی استفاده شود که
            زمان طولانی تری برای گل دهی و محصول دادن نیاز داشته باشند یعنی مجموع
            ساعت هایی که به گرما نیاز دارند بیشتر باشد تا بتوان این محصولات را
            تولید کرد و دچار سرمازدگی نشوند. البته درخت گردو را در حال حاضر در
            حاشیه جنگل نیز می توان کاشت که مشروط بر اجازه دولت است.{" "}
          </p>
          <p>
            سبزیجات و خیار نیز در شهرستان تولید می شوند که مقدار زیادی ندارند
            اما می توان میزان تولید ان ها را بیشتر کرد به این شکل که این محصولات
            به عنوان کشت دوم کاشته نشوند. یعنی به عنوان کشت اول و درفصلی که هنوز
            سرمای زیادی وجود ندارد کاشته شوند و بعد از محصول دادن و رشد کردن
            برداشت شوند. بعضی از سبزیجات مانند کلم، کاهو و اسفناج نسبت به سرما
            مقاومند و با توجه به شرایط اقلیمی شهرستان باید از این نوع سبزی ها
            برای کاشت در این شهرستان استفاده کرد.
          </p>
          <p>
            خیار از جمله محصولاتی است که از بازارفروش خوبی برخوردار است و کاشت
            آن سوددهی مناسبی دارد اما باید توجه داشت که مقاومت خیار نسبت به سرما
            کم است و برای کاشت بیشتر آن بهتر است مشکل هدایت آب نیز حل شود.{" "}
          </p>
          <p>
            در این شهرستان گلخانه داری انجام نمی شود فقط چندمورد کاشت نهال وجود
            دارد که به صورت صنعتی نیست و بهره برداری زیادی از آن نمی شود. اما به
            صورت کلی می توان محصولاتی مانند خیار، گوجه و سبزیجات را به صورت
            گلخانه ای کاشت و کنترل دمای لازم را انجام داد البته هزینه گرمایشی
            احداث گلخانه در شهرستان هایی مانند کلاردشت به دلیل داشتن آب و هوای
            سرد بالاتر از احداث گلخانه در مکان هایی است که شرایط آب و هوایی
            بهتری دارند. بنابراین سرمایه گذار باید هزینه های تولید خود را با
            میزان سود به دست آمده مقایسه و بعد اقدام به انجام این کار کند.
          </p>
          <p>
            لوبیا سبز نیز از دیگر محصولاتی است که در این شهرستان کاشته می شود و
            می توان در زمینه افزایش تولید آن اقدام کرد.
          </p>
          <p>
            توتیا نیز از گل هایی است که در این شهرستان تولید می شود و می توان در
            خصوص توسعه تولید آن اقدام کرد. این گیاه از زمان های کهن در ایران به
            عنوان یکی از گیاهان دارویی مهم مصرف می گردید که اکثر بیماریهای چشم
            را معالجه و در تقویت دید فوق العاده مفید می باشد .این گیاه در
            اردیبهشت ماه گل می دهد و افراد زیادی از داخل کشور و کشورهای اروپایی
            نظیر فرانسه را مشتاق دیدن خود کرده است .{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی کشورهای مختلف نقش‎های متعددی
            بر عهده دارد که از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و
            اولیه مورد نیاز صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار،
            مصرف تولیدات سایر بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و
            ماشین‌آلات کشاورزی، ارزآوری برای کشور و تامین مالی سایر بخش‎های
            زیربنایی را نام برد.{" "}
          </p>
          <p>
            شهرستان کلاردشت در تولید برخی از محصولات زراعی میزان تولید خوبی
            دارد. برای مثال گندم وجو از محصولات زراعی پرمصرف در بین مردم هستند
            که در این شهرستان به میزان زیاد تولید می شوند. گسترش کشت این محصولات
            با توجه به وجود بازار فروش خوب و مناسب بودن شرایط شهرستان پیشنهاد می
            شود. در میان محصولات کشاورزی، کشت گندم نسبت به بقیه کم دردسرتر
            است.گندم در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود
            دهی می رسد. خرید تضمینی گندم همه ساله توسط دولت انجام می گیرد. البته
            خود کشاورز هم می تواند گندم را بفروشد و درآمد خوبی کسب کند. کود
            شیمیایی و بذر نیز به شکل یارانه‌ای در اختیار کشاورزان قرار می گیرد؛
            بنابراین گسترش تولید گندم ارزش افزوده زیادی را به دنبال دارد.
          </p>
          <p>
            جو نیز بعد از گندم بیشترین سطح زیر کشت را در ایران به خود اختصاص
            داده است. در ایران اراضی وسیعی وجود دارد که بدلیل شوری و عمق کم خاک
            و شور بودن آب زراعی صرفا برای تولید جو مناسب است. جو از دیرباز در
            سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و علوفه سبز مورد
            استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ استفاده می شود.
            این گیاه در تهیه غذای کودک نیز کاربرد دارد. جوشانده جو داروي خوبي
            براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین آورنده
            کلسترول است.
          </p>
          <p>
            لوبیا چیتی نیز در بین حبوبات در شهرستان کلاردشت میزان تولید مناسبی
            دارد و افزایش کشت آن نیز صرفه اقتصادی خوبی خواهد داشت.
          </p>
          <p>
            به صورت کلی اقلیم ایران یکی از مناسب‌ترین اقلیم‌ها برای پرورش گیاهان
            دارویی است. تقاضای مصرف گیاهان دارویی به علت روی گردانی از داروهای
            شیمیایی و یا حتی استفاده شدن برخی از این محصولات در تولیدات
            کارخانه‌های بزرگ دارویی همواره رو به افزایش است. گیاهان دارویی
            گونه‌ها و مصارف مختلفی دارند. از این گیاهان نه تنها برای درمان
            بیماری‌ها بلکه در صنایع کنسروسازی، نوشابه سازی، ‌عطر سازی و غذایی
            نیز استفاده می‌شود.
          </p>
          <p>
            شهرستان کلاردشت در زمینه کشت انواع گیاهان دارویی مستعد است. در حال
            حاضر نیز این گیاهان در شهرستان کشت می شوند و گل گاو زبان و گوجه بری
            انواعی از آن ها هستند. گوجی‌بری نوعی گیاه مثمر دارویی با ارزش افزوده
            بالاست که برای نخستین‌بار در ایران وارد عرصه کشاورزی مازندران شده و
            در شهرستان کلاردشت نیز کشت شده است. یکی از ویژگی های گیاه مثمر گوجه
            بری، تحمل بالای آن در برابر سرما تا 27 درجه زیر صفر است. این گیاه در
            تمامی مناطق ایران به جز مناطق جنوبی که دارای آب و هوای بسیار گرم
            است، قابل کشت و ثمردهی است. نهال گوجه بری در سال سوم به ثمر می نشیند
            و در نخستین سال پنج کیلوگرم میوه تازه یا یک کیلوگرم میوه خشک می دهد.
            پاکسازی پوست، محافظت از دستگاه ایمنی بدن، ضدپیری، کاهش دردهای بدن،
            کاهنده‌ی کلسترول و تری‌گلیسرید خون از خواص دارویی این گیاه است.
          </p>
          <p>
            زعفران نیز به میزان کم در این شهرستان کشت می شود که قابلیت گسترش کشت
            نیز وجود دارد. زعفران گیاهی است که به آب کمی نیاز دارد و دارای ارزش
            اقتصادی بالایی است و همچنین کشت این گیاه پتانسیل ایجاد اشتغال بالایی
            را نیز دارا است. مقاومت زعفران در برابر سرما زیاد می‌باشد و به علت
            داشتن رنگ زیبا، عطر و طعم بسیار مطبوع، در صنایع غذایی کاربرد زیادی
            دارد. دمنوش زعفران آرام بخش بوده و استرس و نگرانی را برطرف می کند و
            کسب و کار کشت زعفران به علت خاصیت ضد سرطانی این گیاه اهمیت دو چندان
            پیدا می کند.
          </p>
          <p>
            لازم به ذکر است در شهرستان کلاردشت به دلیل اقلیم سرد، نامناسب بودن
            خاک برای کشت برنج و نبود آب کافی در زمین ها، این محصول کشت نمی شود.{" "}
          </p>
          <p>
            بخشی از زمین های شهرستان کلاردشت به دلیل اینکه ساختار خاصی برای بهره
            برداری از ان وجود ندارد، بلااستفاده مانده اند که لازم است برای
            استفاده از آن ها برای تولید محصولات زراعی و باغی برنامه ریزی شود.{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
