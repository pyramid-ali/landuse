import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-08"].cities["IR-0801"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        industry: "صنعت",
        livestock: "دامداری",
        gardening: "باغداری",
        agriculture: "زراعت",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        fisheries: "شیلات",
        handicrafts: "صنایع دستی",
        services: "خدمات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان اسلامشهر با مساحت ۱۹۵ کیلومتر یکی از شهرستان‌های استان تهران
            است. این شهرستان در جنوب غربی استان تهران قرار دارد و مرکز آن شهر
            اسلام‌شهر است. این شهرستان از شرق و جنوب به ری از غرب به رباط کریم و
            از شمال غرب به شهریار محدود است . این شهرستان در سال ۱۳۹۵، ۵۴۸٬۶۲۰
            نفر جمعیت داشت که ۲۷۹٬۲۸۲ نفر آن مرد و ۲۶۹٬۳۳۸ نفر آن زن می‌باشند.
            شکل زیر موقعیت شهرستان اسلام شهر را نشان می دهد.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها
            به عنوان ورودي به نرم‌افزار داده‌شده و خروجي نرم‌افزار هم‌پوشاني اين
            دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين اولويت‌بندي‌ها
            توسط كارشناسان و افرادخبره هر شهرستان بازبيني و اصلاح مي‌شوند. يكي
            از منابع تحليل همين ليست مزيت‌سنجي اصلاح‌شده‌است. يكي ديگر از منابع
            تحليل، مصاحبه با كارشناسان و متخصصين حوزه اشتغال هر شهرستان است. در
            هر شهرستان با حداقل 3 نفر از اين افراد مصاحبه انجام مي‌شود. اين
            مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در صورت وجود تناقض و ابهام
            بين اين 3 مصاحبه و ليست مزيت‌سنجي، مصاحبه‌هاي تكميلي و حتي مصاحبه
            بيشتر هم صورت مي‌گيرد تا تيم تحليل به نتيجه نهايي مطلوب دست‌يابد.
            بنابراين خروجي هر شهرستان از تجميع مصاحبه‌ها و ليست مزيت‌سنجي حاصل
            مي‌شود. در ادامه تحليل شهرستان اسلامشهر ارائه‌شده‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همانطوريكه در قسمت مقدمه اشاره‌شده مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به
            ترتيب اولويت مشخص شده‌است. در تحليل به مشاغل موجود، مشاغل قابل توسعه
            و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد آن‌ها در
            شهرستان وجوددارد، اشاره شده‌است. مزيت‌هاي شغلي به ترتيب اولويت در
            ادامه آورده شده‌است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            اسلامشهر، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما پتانسیل
            های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای
            صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            تولید مصنوعات چوبی مانند مبل و کابینت در شهرستان جایگاه ویژه ای دارد
            و با توجه به تقاضای زیاد این محصولات، می توان جهت احداث کارگاه های
            بیشتر در این زمینه سرمایه گذاری کرد.
          </p>
          <p>
            از گذشته تا کنون چوب و کالاهای ساخته شده از ان بخش عمده ای از
            نیازهای بشری را فراهم کرده اند.این ماده طبیعی دارای خصوصیاتی است که
            آن را از بسیاری از مواد دیگر مجزا میکند. به همین دلیل است که این
            صنعت تا به امروز پا بر جا بوده و مواد جایگزین نتواسته اند جایگزین آن
            شوند. صنعت مبلمان نیز یکی از مهمترین صنایع وابسته به صنعت چوب بوده؛
            که در بسیاری از کشورهای جهان و از جمله ایران دارای رونق بسیار خوبی
            است. در کشور خودمان امروزه دیگر مبل به عنوان یک وسیله لوکس شناخته
            نمی شود و در بسیاری از منازل می توان آن را مشاهده کرد؛ بنابراین
            گسترش استفاده از مبلمان در بین خانواده های ایرانی باعث شده است که
            این صنعت برای کسانی که می خواهند یک کسب و کار جدید را راه اندازی
            کنند یک فرصت بسیار عالی باشد.
          </p>
          <p>
            کابینت از دیر باز در منازل وجود داشته و به شکل های مختلفی استفاده
            می‌شده است؛ اما با پیشرفت معماری داخلی منازل، شکل، طرح و جنس آنها
            تغییر کرده و به شکل های امروزی درامده است.
          </p>
          <p>
            کابینت در هر محلی که استفاده شود، تاثیر زیادی روی زیبایی و دکوراسیون
            محیط اطراف و شکل دهی فضا می‌گذارد؛ بنابراین کابینت می‌تواند در روحیه
            و افکار کسانی که در آن محیط هستند، تاثیر بگذارد. لذا کابینت سازی
            دارای ظرفیت های فراوری جهت کسب درآمد و به کارگیری نیرو های جوان و
            خلاق است؛ ولی تاکنون اقدامی در زمینه آن صورت نگرفته و یا دارای ابعاد
            کوچکی هستند؛ بنابراین ایجاد کارگاهی تقریبا بزرگ با امکانات به روز
            دنیا سوددهی قابل توجهی را به همراه خواهد داشت.
          </p>
          <p>
            علیرغم اینکه تولیدی پوشاک و کفش در این شهرستان وجود دارد اما زمینه
            صادرات به شهرستان های مجاور فراهم است؛ لذا کار کردن در زمینه تولید
            پوشاک و کفش از جمله پیشنهادات مناسب برای دستیابی به اشتغال پایدار
            است .{" "}
          </p>
          <p>
            مشاغلی مانند تولید قطعات خودرو، تراشکاری و مونتاژکاری، کارگاه های
            تولید تیرچه و بلوک و...نیز زیر ساخت های توسعه را دارند.{" "}
          </p>
          <p>
            تجهیزات و لباس های بیمارستانی نیز از جمله پیشنهاداتی است بدلیل کیفیت
            بالا و فراهم بودن زمینه صادرات، پتانسیل های سوددهی را دارد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به عنوان یکی از حوزه های بخش کشاورزی، در سطح گسترده ای در
            کشور انجام می شود و در نتیجه ی انجام این حرفه، سود اقتصادی خوبی کسب
            شده است. از آن جایی که حوزه دامداری با یکی از مهم ترین نیازهای
            انسان، یعنی نیاز به منابع غذایی و خصوصا منابع پروتئینی مرتبط
            می‌باشد، توجه به آن امری ضروری است. فعالیت در این حوزه شغلی و افزایش
            بهره وری در آن، می تواند از راهکارهای کاهش وابستگی به درآمد نفتی
            باشد و عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی کشور محسوب شود.
          </p>
          <p>
            دامداری در شهرستان اسلامشهر محدود به تعداد کمی واحد صنعتی و سنتی می
            شود که غالبا سنتی هستند. گاو های نگهداری شده از نوع بومی و دورگ و
            هلشتاین دورگ و گوسفند ها از نوع بومیو افشار هستند.
          </p>
          <p>
            توان گوسفند برای تحمل اقلیم های متفاوت بالا است، جیره غذایی کمتر و
            در نتیجه هزینه کمتری نیاز دارد، تمامی فرآورده های دامی مانند گوشت،
            شیر، ماست، کره، و حتی پشم و پوست دام پرکاربرد هستند و فروش این
            فرآورده ها در تمامی روزهای سال انجام می‌شود. با توجه به فروش گوشت و
            سایر اجزای گوسفند و دست‌یابی به سود بالا، فعالیت در این زمینه مزیت
            دارد.
          </p>
          <p>
            گوسفند افشاری یکی از نژادهای بسیار مهم گوسفند داشتی است که بومی
            استان زنجان است. مدیریت پرورشی بهینه این نژاد می تواند سودآوری واحد
            گوسفندداری را افزایش دهد. دلایل زیادی باعث شده است که امروزه
            گوسفندان نژاد افشاری جزء پر فروش ترین گوسفندان باشند. این نژاد به آب
            و هوای سرد عادت داشته و دارای جثه ای بزرگی است. گوسفند افشاری جزء
            گوسفندان سنگین ‌دنبه کشور محسوب می‌گردد. سرعت رشد بالا، تولید شیر
            خوب و پرچرب و بهترین گوشت قرمز (که باعث‌شده است که جزء گوسفندان دو
            منظوره گوشتی – شیری قرار بگیرد.)، بهبود کمی و کیفی پشم گوسفند،
            سازگاری و عادت پذیری با شرایط آب و هوایی مناطق سردسیر، قدرت
            راهپیمایی و کوه پیمایی خوب، توان چند قلو زایی، مقاومت در برابر امراض
            و انگل‌های منطقه و بالا بودن ضریب تبدیل و داشتن بازده اقتصادی مطلوب
            از جمله مزایای پرورش گوسفند افشاری است.
          </p>
          <p>
            امروزه با توجه به رشد جمعیت کشور و نیاز روز افزون جامعه به گوشت و
            مواد گوشتی و نقش مهم این محصولات در تامین پروتئین و غذای افراد
            جامعه، پرورش دام های پر بازده به منظور افزایش تولید و خودکفایی غذایی
            کشور، امری لازم و ضروری است. گاوهای بومی به لحاظ تنوع و اختلاف
            ژنتیکی، ویژگی های خاص نژادی و مقاومت های طبیعی ایجاد شده در آن ها طی
            قرن ها زیست در شرایط سخت محیطی و آب و هوایی مختلف به عنوان یک منبع
            عظیم تولید شیر و گوشت می تواند نقش موثر در تامین مواد پروتئین حیوانی
            و اقتصاد جامعه ایفا نماید. پوست گاو به عنوان یک محصول با ارزش دامی
            در صنعت چرم‌سازی استفاده می‌شود، حتی شاخ و سم و فضولات حیوان نیز
            ارزش اقتصادی داشته و به روش های مختلف مورد استفاده قرار می گیرد.
          </p>
          <p>
            امروزه به منظور بهره برداری بهینه، از گاو های دورگ استفاده می‌شود.
            که این دام‌ها، حاصل تلقیح نژاد اصلی و نژاد بومی هستند. گوساله ای که
            از طریق آمیخته گری متولد می شود هم برخی خصوصیات ارثی گاو نر اصیل و
            هم برخی خصوصیات ارثی گاو ماده بومی را دارا است. در نسل های بعدی به
            تدریج صفات منتقل شده از گاو های اصیل در گوساله ها ظاهر می شود و
            تولیدات شیر و گوشت اغلب آنها نیز به نحو قابل توجهی بیشتر می شود.
          </p>
          <p>
            امروزه به منظور بهره برداری بهینه، از گاو های دورگ استفاده می‌شود.
            که این موارد حاصل تلقیح نژاد اصلی و نژاد بومی هستند. گوساله ای که از
            طریق آمیخته گری متولد می شود هم برخی خصوصیات ارثی گاو نر اصیل را
            دارا می باشد و هم برخی خصوصیات ارثی گاو ماده بومی را دارد. در نسل
            های بعدی به تدریج صفات منتقل شده از گاو های اصیل در گوساله ها ظاهر
            می شود و تولیدات شیر و گوشت اغلب آنها نیز به نحو قابل توجهی بیشتر می
            شود. در شهرستان اسلامشهر نیز پرورش گاو هلشتاین دورگ انجام می‌شود و
            با توجه به سازگاری که با اقلیم منطقه داشته، همچنان قابلیت توسعه و
            سرمایه گذاری را دارد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            در شهرستان اسلامشهر به دلیل مشاغل صنعتی فراوان باغداری به مقدار
            محدودی انجام می شود. بصوریکه گلخانه و پرورش قارچ در اولویت قرار
            دارند. باغ ها و محصولات باغی عمدتا شخصی هستند و جهت رفع نیاز های خود
            خانوار به مصرف می رسند و وارد بازار فروش نمی شوند.
          </p>
          <p>
            گياهان براي داشتن رشد مطلوب نياز به شرايط خاصي از نظر شدت نور، دماي
            روزانه، دماي‌شبانه، ميزان رطوبت نسبي هوا و رطوبت خاک دارند. براي
            توليد و پرورش تجاري گياهان با کيفيت بالا و در تمام طول سال بايد
            شرايط محيطي مطلوب مهیا شده و عوامل خسارت زا نظير آفات و بیماری ها،
            باد، طوفان هاي ويرانگر، سرما و يخبندان و ...کنترل شوند. گلخانه محیطی
            است که به راحتی می توان در داخل آن شرایط محیطی را تحت کنترل درآورد و
            به سمت رشد مطلوب گیاه سوق داد. گلخانه‌ها که از نظر اندازه متغیرند
            گیاهان را از سرمای بیش از حد زمستان یا گرمای بیش از حد تابستان حفظ
            می‌کنند. کشاورزی در گلخانه ها نسبت به کشاورزی در فضای آزاد و در زمین
            های کشاورزی دارای دردسر و مشکلات کمتری است، به علاوه بازه ی زمانی
            برای به ثمر نشستن و برداشت محصولات نیز نسبت به کشاورزی سنتی، کوتاه
            تر است. اما با این وجود پرورش گلخانه ای محصولات نیز نیاز به مراقبت
            های خاص خود را دارد.
          </p>
          <p>
            میزان مصرف قارچ در سال های اخیر رشد خوبی داشته و سرانه مصرف بالا
            رفته است. مشتری داشتن این محصول از یک سو و غنی از پروتئین و ویتامین
            بودن آن از سوی دیگر، باعث شده که جایگزین مناسبی برای گوشت باشد.
            پرورش قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک
            شروع کرد. یک دوره کامل پرورش قارچ 60 روز طول می کشد که قابلیت کاهش
            به 35 روز را دارد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            زراعت نیز در این شهرستان همانند باغداری سطح زیر کشت کمی دارد و با
            توجه به کم بودن زمین در این شهرستان مزیت کمتری نسبت به مشاغل صنعتی
            دارد. محصولاتی شامل گندم، جو، کلزا و کمی علوغه دام کشت می شود.
          </p>
          <p>
            در میان محصولات کشاورزی، کاشت گندم نسبت به بقیه کم دردسرتر است.گندم
            در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد
            و در دو نوع بهاره و پاییزه کشت می شود که محصول دهی پاییزه آن بیشتر
            است. علاوه بر خود گندم، کاه آن نیز مشتری خاص خودش را دارد. بعد از
            برداشت محصول، زمین آن هم چراگاه گوسفندان می‌شود. همچنین مورد حمایت
            های دولت واقع شده و کود شیمیایی و بذر نیز به شکل یارانه ای در اختیار
            کشاورزان قرار می گیرد؛ بنابراین توسعه این کشت توجیه اقتصادی دارد.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            نیز استفاده می شود و در تهیه غذای کودک کاربرد دارد. جوشانده جو داروي
            خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین آورنده
            کلسترول است.
          </p>
          <p>
            کشت کلزا باعث از بین رفتن چرخه زندگی آفات، بیماری ها و علف های هرز
            گردیده و با کاهش جمعیت آنها موجب صرفه جویی در مصرف سموم و کاهش
            آلودگی های زیست محیطی می گردد. با توجه به آنکه زمان کشت کلزا در فصل
            پاییز است، نیاز گیاه به آب کم می‌باشد و با استفاده از نزولات جوی می
            توان به کشت آن اقدام نمود. کلزا با تولید مقادیر قابل توجهی علوفه می
            تواند در تغذیه دام های منطقه نقش موثری داشته باشد. همچنین برگردان
            بقای کلزا به خاک باعث افزایش حاصلخیزی خاک و بهبود ساختمان خاک خواهد
            شد. کشت کلزا به عنوان یک دانه روغنی بسیار مهم در تولید محصولات حوزه
            صنایع غذایی و یا تولید انواع نهاده‌های خوراکی دام و طیور متداول است.
            روغن کلزا ازجمله مشتقات این گیاه است که امروزه به دلیل سالم بودن و
            داشتن کمترین کلسترول و اسیدهای چرب اشباع ‌شده مورد استقبال قرارگرفته
            است. تحقیقات دانشمندان نشان می‌دهد که دانه کلزا 40-30 درصد روغن و
            کنجاله‌اش50-40 درصد پروتئین دارد.
          </p>
          <p>
            گیاه کلزا را می‌توان بین گندم و جو کاشت و مانع از رشد علف های هرز
            شد. کنجاله آن برای خوراک دام استفاده می‌شود و درضمن با هرآب وهوایی
            سازگار است. روغن کلزا به دلیل ترکیب مناسب، با کیفیت ترین روغن خوراکی
            است. تحقیقات دانشمندان نشان می‌دهد که دانه کلزا 40-30 درصد روغن و
            کنجاله‌اش50-40 درصد پروتئین دارد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            بدلیل محدود بودن باغداری و دامداری، صنایع غذایی نیز در سطح محدودی در
            حال انجام است.
          </p>
          <p>
            یکی از مشاغل پیشنهادی این حوزه فرآوری صیفی جات است که تقاضای زیادی
            دارد و درمورد فروش مشکلی ندارد.
          </p>
          <p>
            صنعت تولید رب گوجه فرنگی دارای کاربردهای فراوانی از قبیل چاشنی و
            بهبود دهنده رنگ و طعم انواع غذا، ماده اولیه سس‌ها و کنسروها است.
            پودر گوجه‌فرنگي محصولي است كه زمان زیادی از توليد آن در كشور
            نمي‌گذرد و در همین مدت هم توانسته جاي خود را در بازار باز كند. اين
            پودر به دليل داشتن وزن و حجم كمتر نسبت به ساير فراورده‌هاي
            گوجه‌فرنگي، باعث سهولت و صرفه‌جويي در حمل‌ونقل و بسته‌بندي شده و
            ماندگاري و عمر مفيد بيشتري دارد. از طرفي برخی آنتي ‌اكسيدان‌های
            موجود در گوجه‌فرنگي طی فرايند توليد رب از بين مي‌ رود اما اين مواد
            در پودر گوجه حفظ شده و از بين نمي‌روند. مزيت ديگر اين پودر نداشتن
            مواد نگهدارنده در تركيبات آن نسبت به رب است چرا كه رب، ماندگاري
            كمتري دارد و براي جلوگيري از اين حالت از مواد نگهدارنده بيشتري در
            ترکیب آن استفاده می‌ شود. پودر گوجه فرنگی در صنایع غذایی و دارویی
            دارای کاربردهای متنوعی است. از جمله کاربردهای گسترده این محصول
            می‌توان به کاربرد آن در مواد غذایی منجمد شده و نیمه آماده، سوپ‌های
            آماده، اسنک‌ها (شامل پفک، چیپس،...) و... اشاره نمود. به طور کلی می
            توان گفت از این محصول به عنوان چاشنی در تولید محصولات مختلف استفاده
            می‌شود.{" "}
          </p>
          <p>
            ترشی و شور، بیشتر به‌عنوان یک چاشنی در کنار غذا مصرف می شود و به
            دلیل خاصیت اسیدی که دارد، باعث افزایش اشتها و میل به غذا خوردن در
            افراد می‌شود. این محصول یکی از فرآیندهای نگهداری طولانی‌ مدت صیفی‌ و
            سبزیجات است. در جوامع امروزی به دلیل افزایش مشغله افراد و شاغل بودن
            بسیاری از زنان، فرصت کافی برای تهیه آن در منزل و توسط خود افراد وجود
            ندارد و اکثر خانواده‌ها تمایل دارند ترشی و شور موردنیاز خود را
            به‌صورت آماده تهیه نمایند. بنابراین راه اندازی کسب‌ وکار تهیه ترشی و
            شور می‌تواند راهی برای پاسخ به این نیاز افراد جامعه و کسب درآمد
            باشد. همچنین یکی از محصولاتی که از گردو می توان تولید کرد، ترشی گردو
            است. این ترشی خوشمزه علاوه بر خواص بی نظیر در کاهش سطح کلسترول نیز
            مفید است.
          </p>
          <p>
            روغن کشی از کلزا نیز در شهرستان صورت نمی گیرد ولی پتانسیل برای ایجاد
            شدن دارد.
          </p>
          <p>
            در سال‌های اخیر با توجه به اهمیتی که مصرف‌کنندگان جهانی به مصرف روغن
            گیاهی به جای روغن حیوانی می‌دهند، میزان تقاضا برای این روغن‌ها بیشتر
            شده و در نتیجه رشد چشمگیری را در این صنعت مشاهده می‌کنیم. ضمن اینکه
            کشت برخی از دانه های روغنی مانند کلزا، کنجد و ذرت در این شهرستان به
            مقدار قابل توجهی انجام می‌شود، ایجاد صنایع روغن کشی از دانه ها
            روغنی، فرصتی مناسب برای سرمایه گذاران است.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            در این حوزه نیز یکی از مشاغل پیشنهادی بسته بندی محصولات کشاورزی است
            که در صورت کمبود مواد اولیه امکان واردات از شهرستان های دیگر وجود
            دارد.
          </p>
          <p>
            با افزایش جمعیت، رشد تکنولوژی و افزایش سطح استانداردهای زندگی در
            جوامع امروزی، مصرف محصولات با محتوای بسته بندی های کوچک افزایش یافته
            است. جامعه مصرفی نیازمند محصولاتی با اندازه‌ها و بسته بندی های
            متفاوت است و اهمیت صنعت بسته بندی به تدریج برای بنگاه ها و برنامه
            ریزان اقتصادی در حال آشکار شدن می‌باشد. در بیشتر موارد شاهد هستیم که
            محصولات با بسته بندی های نامناسب در بازار عرضه شده یا به صورت فله ای
            و با قیمت های ناچیز به بازرگانان خارجی فروخته می‌شوند. این محصولات
            بعد از انتقال به خارج و انجام بسته بندی های مناسب بر روی آنان، با
            ارزش افزوده بالا و با قیمت های چند برابری و به اسم و برند همان
            کشورها به بازار کشورهای دیگر عرضه می شوند و این کار ضمن برندسازی
            برای آن کشورها، تجارت آن ها را هم توسعه می‌دهد و این نشان دهنده
            رابطه مستقیم توسعه صنعت بسته بندی با رشد و توسعه تجاری کشورهاست.
          </p>
          <p>
            کشتارگاه دام نیز از واحدهای مورد نیاز شهرستان است ولی تاکنون احداث
            نشده است و احداث آن دارای مزیت است.
          </p>
          <p>
            کشتارگاه‌های صنعتی نقش مهمی در حفظ محیط زیست دارند؛ به دلیل اینکه
            ضایعات حاصل از کشتار دام نظیر خون و اجزای گوشتی غیر قابل مصرف، در
            محل تبدیل ضایعات به پودرگوشت که خوراک دام است، تبدیل می شود و علاوه
            بر قرار گرفتن مجدد در چرخه اقتصادی، از آلودگی محیط زیست نیز جلوگیری
            می‌کند. فاضلاب حاصل از کشتار در تصفیه خانه های مجهز تصفیه شده و پساب
            حاصله به مصرف کشاورزی می رسد. البته در کشتارگاه ها باید فضای مناسب
            برای کشتار دام سبک و سنگین به صورت همزمان وجود داشته باشد و همچنین
            باید آب مورد نیاز در زمان کشتار نیز تامین شده و تجهیزات و امکانات
            لازم برای رعایت مسائل بهداشتی و زیست محیطی فراهم شود.
          </p>
          <p>
            تولید و بسته بندی کمپوست (افزودن کود شیمیایی به کود حیوانی) هم از
            کسب و کار های خوبی است که قابلیت سرمایه گذاری را دارد؛ زیرا با وجود
            کم بودن دامداری و باغداری شهرستان، امکان صادر به شهرستان های دیگر
            وجود دارد. كود حيواني علاوه بر تأمين قسمتي از نياز غذایي محصول،
            ساختمان فيزيكي خاك را بهبود بخشيده تا ريشه محصول بهتر بتواند تنفس
            كند و فضاي بهتري را برای رشد و گسترش ريشه در اختيار داشته باشد؛
            بنابراین طرفداران زیادی مخصوصا در بین باغداران دارد.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            طبق بررسی های صورت گرفته پرورش طیور با آب و هوای شهرستان سازگار
            نیست. به همین دلیل پرورش طیور در اسلامشهر انجام نمی شود. بوقلمون
            پرنده ای است که توانایی سازگاری با آب و هوای شهرستان را دارد و
            پتانسیل جهت پرورش دارد.
          </p>
          <p>
            گوشت بوقلمون دارای خواص غذائي ويژه ای است و محدوديت مصرف خاصي نيز
            ندارد؛ بنابراین مي تواند جايگزين مناسبی براي گوشت قرمز علی الخصوص در
            بيمارانی که مصرف گوشت قرمز برای آنها با محدوديت هایی همراه است، مطرح
            گردد. از ديگر امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز
            در يک لاشه است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد وزن يک لاشه 8
            کيلوئي را تشکيل مي دهد. تولید بوقلمون گوشتی به دلیل به صرفه بودن
            تولید، در دسترس بودن نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز
            امکان انجام صادرات به کشورهای منطقه حائز اهمیت است.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در حوزه ی شیلات نیز فعالیت های اندکی در شهرستان در زمینه ی پرورش
            ماهیان سردابی و گرمابی صورت گرفته است و که در صورت بازخورد مثبت
            قابلیت توسعه دارند.
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
            توجهی بکاهد؛ بنابراین این نوع ماهی با توجه به قیمت و طعم مناسب
            طرفداران زیادی در بین مردم دارد؛ لذا راه اندازی پرورش آن، علاوه بر
            ایجاد اشتغال پایدار، سوددهی خوبی را خواهد داشت.
          </p>
          <p>
            ماهیان گرمابی در محدوده دمایی 27-20 درجه سانتیگراد بهترین رشد را
            دارند. بزرگ‌ترین خانواده ماهيان آب شيرين، کپورماهیان هستند. این ماهی
            در مقایسه با سایر گونه‌های پرورشی در آب‌های گرم و معتدل، ارزشمندترین
            ماهی ازلحاظ اقتصادی است و نیز ارزش‌های تغذیه‌ای فراوانی دارد.
            ازاین‌رو آموزش توسعه پرورش این ماهی می‌تواند در راستای تأمین غذای
            جمعیت کشور و نیز افزایش سطح معیشتی مردم مؤثر باشد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی شهرستان اسلامشهر مربوط به قالیبافی، چرمدوزی و سفالگری می
            شود و در صورت فراهم بودن بازار فروش قابلیت گسترش دارند.
          </p>
          <p>
            با توجه به اینکه قالی بافی در حال حاضر انجام می‌شود و برخی از مردم
            در انجام آن مهارت دادن، این مورد را می‎‌توان گسترش داد و با استفاده
            از بازاریابی مناسب، سودچشمگیری را ایجاد کرد.
          </p>
          <p>
            قالیبافی از مشاغل خانگی پردرآمدی است که تسهیلات خوبی به آن تعلق می
            گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب می دانند
            چون در کنار کارهای روزمره می توانند به این کار بپردازند و درآمد خوبی
            کسب کنند. از آن جایی که قالی انواع مختلفی دارد می توان با آموختن
            دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و به
            بازار عرضه کرد. همچنین با تولید فرش با کیفیت می توان به صادرات در
            این زمینه فکر کرد. این کسب و کار را می توان در فضای کوچک و با سرمایه
            اولیه کم راه انداخت و با فروش محصول و افزایش مشتری، این کار را گسترش
            داد و زمینه اشتغال بسیاری از جوانان را فراهم کرد.
          </p>
          <p>
            تولید مصنوعات چرمی نیز از جمله مشاغلی است که به صورت کارگاهی در حال
            انجام و از جمله گزینه های شغلی مناسب برای سرمایه گذاری است.
          </p>
          <p>
            با استناد به تاریخ با گذشت هزاران سال و شاید هم بیشتر از استفاده چرم
            توسط بشر و پیشرفت های گوناگون در صنعت، هنوز ماده دیگری نتوانسته است
            جایگزین این ماده طبیعی گردد. علی رغم تفکر برخی بر این موضوع که چرم
            ماده اولیه بسیار گران و غیر قابل دسترس است، باید گفت در حقیقت قیمت
            بالاتر محصولات چرمی به سبب هزینه های زیادی است که در فرآیندهای بسیار
            برای تهیه آن مصروف می شود، علاوه بر آن دلایل دیگری هم مانند انعطاف
            پذیری، مقاومت در برابر ضربه و حرارت، سازگاری با محیط زیست و ...
            طبیعتا در افزایش قیمت آن تاثیر گذار خواهد بود. با توجه به آنچه گفته
            شد، تولید و توسعه محصولات چرمی از جمله مزیت های خوب این شهرستان در
            حوزه صنایع دستی است که صرفه اقتصادی دارد.
          </p>
          <p>
            هنر سفالگری در واقع یکی از ارزشمندترین هنرها و صنایع دستی به شمار می
            رود و سفال های ساخته شده در هر قرن نمادی از فرهنگ و روند زندگی در آن
            دوران می باشد. بنابراین هنر سفالگری یکی از مهارت های بسیار ارزشمند
            با ابزار مناسب و در دسترس می باشد که می توان از آن برای خلق آثار
            هنری بسیار زیبا و بی نظیر بهره مند شد. هنر سفالگری، فرصت مناسبی را
            برای کسب تجربه ها و مهارت های جدید در زندگی افراد فراهم می آورد و با
            ورود به این صنعت می توان از مزایای بی نظیر این هنر برای سنین مختلف
            بهره مند شد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            شهرستان اسلامشهر جاذبه ی دیدنی و گردشگری خاصی ندارد و به هتل یا
            اقامتگاه نیاز ندارد. احداث رستوران بومی و مجتمع خدماتی رفاهی می
            تواند سبب پیشرفت شهرستان و اشتغالزایی و سوددهی شود.
          </p>
          <p>
            رستوران‌های بومی، مکان‌هایی با فضای سنتی و متناسب با آداب ‌و ‌رسوم
            هر منطقه است که در آن‌ها بیشتر به‌جای استفاده از میز و صندلی‌های
            مدرن از تخت یا سایر وسایل سنتی استفاده و علاوه بر سرو غذاهای محلی،
            ترشیجات خانگی، نوشیدنی‌هایی مانند چای و قهوه نیز داده می‌شود.
            رستوران‌ بومی جزء مهم‌ترین نمادهای فرهنگی محسوب می‌شود و می تواند در
            خانه های قدیمی موجود در هر منطقه اجرا شود. بسیاری از گردشگران و
            توریست های غذایی برای امتحان کردن غذاهای مختلف به سفر می روند و این
            مسئله برای مناطق مختلف قابل استفاده و بهره برداری است؛ بنابراین
            ایجاد رستوران بومی نیز از کسب و کارهای زود بازده است؛ زیرا هم تمایل
            مردم به سمت سرو غذا های محلی بیشتر شده و هم معاملات این کسب و کار به
            صورت نقدی انجام می‌شود.
          </p>
          <p>
            چند سالی است که احداث مجتمع های خدماتی رفاهی بین راهی در جاده های
            کشور به منظور ساماندهی خدمات بین راهی و افزایش رفاه رهگذران جاده ها
            مورد توجه قرار گرفته است. لیکن قابلیت های بالقوه بسیاری در این مجتمع
            ها نهفته است که می توان از آنها در جهت نیل به اهداف بزرگتری همچون
            توسعه و توازن منطقه ای بهره برد. از سوی دیگر در نظر گرفتن نقش های
            جدید برای این مجتمع ها، می تواند گام های مهمی در جهت توسعه پایدار
            مناطق تلقی گردد و باعث شود که ادامه فعالیت مجتمع های خدماتی – رفاهی
            بین راهی و گسترش دامنه فعالیت آنها از نظر اقتصادی توجیه پذیر باشد.
            در این زمینه تبعات مثبت احداث این مجتمع ها، به ویژه جنبه های گردشگری
            همراه با تاثیرات متقابل آنها بر مردم منطقه و رهگذران جاده ها تا حدی
            است که بعضا این الزام را ایجاب می کند که نهادهای اجرایی برای احداث
            این مجتمع ها و کمک به استقرار فعالیت آن‌ها پیشقدم شوند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
