import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-02"].cities["IR-0212"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        gardening: "باغداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        agriculture: "زراعت",
        birds: "طیور",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
        fisheries: "شیلات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان سلماس یکی از شهرستان های استان آذربایجان غربی می‌باشد که در
            قسمت شمالی استان واقع شده است. این شهرستان از سمت شمال با شهرستان
            خوی، از سمت شرق با استان آذربایجان شرقی و دریاچه ارومیه، از سمت جنوب
            با شهرستان ارومیه و از سمت غرب با کشور ترکیه به طول 85 کیلومتر هم
            مرز است. مساحت کل شهرستان سلماس 2544 کیلومتر مربع می‌باشد که 8/6
            درصد مساحت استان و از نظر وسعت پنجمین شهرستان استان آذربایجان غربی
            می‌باشد. از این مقدار 550 کیلومتر مربع آن را دشت سلماس تشکیل می‌دهد
            که این دشت معادل 6/22 درصد کل مساحت شهرستان است. جمعیت سلماس نیز بر
            اساس سرشماری سال1395، 196546 نفر و 53907 خانوار اعلام شده است. شکل
            زیر موقعیت شهرستان سلماس را نشان می‌دهد. فاصله شهر سلماس از مرکز
            استان یعنی شهر ارومیه 95 کیلومتر، از شهر خوی 45 کیلومتر، از شهر
            تبریز 160کیلومتر، از شهر شبستر 90 کیلومتر و از شهر تسوج 50 کیلومتر
            می‌باشد. فاصله آن تا پایتخت نیز 790 کیلومتر است. لازم به ذکر است با
            توجه به فعال بودن مرز شهرستان خوی، می‌توان محصولات تولیدی در سلماس
            را نیز از این مرز به کشورهای ترکیه و عراق صادر کرد. البته باید دقت
            داشت که صرفه اقتصادی ناشی از این کار تامین گردد. آب و هوای این
            شهرستان در قسمت‌های مرزی و کوهستانی سرد و در سایر نقاط معتدل و خشک
            است. طبق بررسی‌های انجام شده، پس از بارش‌های اخیر، میزان آب سلماس
            افزایش یافته و آب چاه‌ها بیشتر شده است اما به نظر نمی‌رسد این بهبود
            شرایط و میزان آب پایدار و بلند مدت باشد. به صورت کلی درحال حاضر
            میزان و کیفیت آن برای کشاورزی و دامداری قابل قبول است. شهرستان
            سلماس، یکی از شهرستان‌های مرزی استان آذربایجان غربی است. بازارچه
            کوزه رش سلماس مانند بسیاری دیگر از بازارچه های مرزی به علت عدم
            همکاری کشور دیگر مانند ایجاد معابر برای عبور و مرور، راکد مانده و
            فعال نیست. طبق بررسی های انجام شده با توجه به موقعیت جغرافیایی و
            استراتژیک سلماس و قرار گرفتن آن در مسیر راه آهن، بازگشایی این مرز
            می‌تواند در رفع مشکلات مردم نقش بسزایی داشته باشد و تاثیر بسزایی در
            رونق اقتصادی منطقه ایفا کند. یکی از اصلی‌ترین معضلات شهرستان علی‌رغم
            وجود مزیت های بسیار زیاد برای تولید طیف وسیعی از محصولات و ایجاد
            انواع کسب و کارها این است که تعداد زیادی از جوانان شهرستان، به علت
            نبود کار، در رستوران‌ها و کارواش‌های تهران مشغول به کار هستند. در
            صورتی که می‌توان از ظرفیت‌های سلماس به بهترین نحو استفاده کرد و ضمن
            ایجاد شغل، مهاجرت معکوس این افراد به سلماس را انتظار داشت. کمبود
            سرمایه در گردش، بروکراسی اداری و نبود آموزش از اصلی ترین موانع ایجاد
            کسب و کار در شهرستان سلماس عنوان شده است. قطعاً این عوامل تاثیر
            بسزایی در عدم تمایل مردم به تولید در زمینه محصولاتی با ارزش افزوده
            بالا بجای دامداری و کشاورزی سنتی، دارند. در نتیجه توصیه می‌گردد برای
            رفع این موانع، گام‌های جدی‌تری برداشته شود تا بتوان از ظرفیت‌های
            شهرستان به نحو احسن استفاده کرد و رونق تولید و اقتصاد را در آن بیش
            از پیش کرد.
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب ‌و كارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب ‌و كار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد. بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان سلماس
            ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همانطوركه در قسمت مقدمه اشاره‌ شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب ‌و كارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب ‌و كارهاي رايج به
            ترتيب اولويت مشخص شده ‌است. در تحليل به مشاغل موجود، مشاغل قابل
            توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد
            آن‌ها در شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب
            اولويت در ادامه آورده شده ‌است.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            از آن جایی که حوزه دامداری با یکی از مهمترین نیازها، یعنی نیاز به
            منابع غذایی و خصوصاً منابع پروتئینی مرتبط می‌باشد، از این‌رو توجه به
            آن امری پر اهمیت و ضروری است. فعالیت در این حوزه شغلی و افزایش
            بهره‌وری در آن، می‌تواند از راهکارهای افزایش اشتغال باشد و عاملی
            برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب شود. طبق بررسی‌ها
            دامداری اصلی‌ترین شغل مردم شهرستان سلماس است. آب و هوای خوب و اقلیم
            جغرافیایی مناسب یکی از اصلی‌ترین دلایل برای رونق این شغل و میزان
            بالای تولیدات دامی در این منطقه است. هر دو نوع دام سبک و سنگین در
            این شهرستان پرورش پیدا می‌کنند البته به علت مراتع موجود در سطح
            شهرستان و آسانتر و کم هزینه تر بودن پرورش دام سبک، پرورش این نوع دام
            رونق بیشتری دارد. همچنین طبق بررسی‌های انجام شده پرورش نژادهای بومی
            و اصلاح شده دام سبک و سنگین انجام می‌شود. از انواع دام سبک اصلاح
            نژاد شده می‌توان به نژاد قزل و افشاری و دام سنگین پربازده و اصلاح
            نژاد شده به هلشتاین اشاره نمود. در واقع پرورش دام‌های اصلاح نژاد شده
            با توجه به درصد تبدیل خوراک به گوشت و شیر، عملکرد و بازدهی بالا و
            همچنین سازگاری مناسب با آب و هوای سردسیر شهرستان، جوابدهی خوبی
            داشته‌اند. همین‌طور مهارت دامداران و تقاضای بازار، از جمله مهمترین
            دلایل برای ایجاد توسعه و کار بیشتر در این حیطه است.{" "}
          </p>
          <p>
            در شهرستان سلماس پرورش گوسفند نسبت به سایر دام‌ها، بیشتر مورد توجه
            دامداران قرار گرفته زیرا توان گوسفند برای تحمل اقلیم‌های متفاوت
            بیشتر بوده و نیز جیره غذایی کمتر و در نتیجه هزینه کمتری جهت پرورش و
            نگهداری نیاز دارد. تمامی فرآورده‌های دامی مانند گوشت، شیر، ماست،
            کره، و حتی پشم و پوست این دام پرکاربرد بوده و فروش این فرآورده‌ها در
            تمامی روزهای سال انجام می‌شود. از طرفی قیمت گوشت گوسفند بالا است و
            به علاوه اجزای گوسفند مانند دل، قلوه، جگر، سیرابی، کله پاچه، خوش
            گوشت و... نیز قابل فروش هستند. خرید دام برای قربانی کردن در ایام
            مذهبی مانند عید قربان و... موجب رونق این کسب و کار می‌شود بنابراین
            گسترش پرورش گوسفند پرواری سوددهی مناسبی را به همراه خواهد داشت.
          </p>
          <p>
            همچنین پرورش دام‌های سنگین پر بازده به منظور افزایش تولید در این
            شهرستان مورد توجه واقع شده است. در این زمینه، پرورش گاوهای اصلاح
            نژاد شده هلشتاین به عنوان یک منبع تولید شیر و گوشت می تواند نقش
            موثری در تامین مواد پروتئین حیوانی و اقتصاد ایفا نماید. پوست گاو نیز
            به عنوان یک محصول با ارزش دامی امروزه به میزان 10 تا 20 درصد مصارف
            چرم‌سازی را تامین می‌کند، حتی شاخ و سم و فضولات حیوان نیز ارزش
            اقتصادی داشته و به روش‌های مختلف مورد استفاده قرار می‌گیرد.
          </p>
          <p>
            زنبورداری یا همان پرورش زنبور عسل، کسب و کار پر سود و منفعت دیگری در
            حوزه دامداری این شهرستان بوده که به دلیل شرایط مساعد جوی و بارش در
            زمان‌های مناسب، وجود گیاهان شهدزا، باغات و نیز تنوع گیاهی و مرتعی
            سطح شهرستان، مورد پیشنهاد بوده و مزیت اقتصادی مطلوبی به همراه دارد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            شهرستان سلماس در برخی محصولات باغی دارای مزیت نسبی بوده و باغداری
            یکی دیگر از پایه‌های اقتصادی این شهرستان را تشکیل می‌دهد. از سوی
            دیگر تولید اشتغال در زمینه باغ و باغداری زیاد بوده و برای رونق کسب و
            کارهای مرتبط با این بخش مؤثر می‌باشد. این شهرستان از تولید کنندگان
            محصولات متنوع و با کیفیت باغی بوده که با استقبال خوبی نیز از سوی
            بازار مواجه شده است. سیب مهمترین و اقتصادی‌ترین محصول باغی شهرستان
            سلماس است. مساعد بودن شرايط آب و هوايي، استفاده به موقع باغداران از
            سموم دفع آفات از جمله دلايل افزايش توليد این محصول است. البته نکته
            قابل توجه در این رابطه، شرایط جوی و سرمازدگی است که در مورد این
            محصول و دیگر محصولات باغی حائز اهمیت است. توسعه کشت سیب به دلایلی
            مانند بازار مصرف مطلوب، سازگاری با شرایط اقلیمی و جغرافیایی شهرستان
            و مهارت کشاورزان دارای مزیت اقتصادی است. اگر واحدهای فرآوری و صنایع
            تبدیلی این محصول باغی نیز گسترش یافته و جدی‌تر عمل کنند، مزیت کار در
            این حیطه چندین برابر خواهد شد. زمین‌های این شهرستان، زمین‌های مستعدی
            برای کشت انواع سبزیجات برگی و غده‌ای از جمله تره، جعفری، گشنیز،
            شوید، شنبلیله، نعناع، ریحان، اسفناج، کرفس، کلم، تربچه و ترب هستند.
            کشت این محصولات به دلیل اقلیم مناسب و خاک غنی، در اکثر روستاهای
            سلماس رونق خوبی داشته و افزایش کشت آنها به دلیل تامین نیاز مردم
            منطقه پیشنهاد می‌شود. صیفی‌جاتی مانند گوجه فرنگی نیز در سلماس تولید
            شده و به علت شرایط آب و هوایی و همچنین خبرگی و تجربه کشاورزان منطقه،
            کیفیت و عملکرد قابل قبولی مشاهده شده است. وجود بازار مصرف برای این
            محصولات و فرآورده‌هایی که از آنان تولید می‌شود، مهمترین مزیت جهت
            توسعه کشت آن می‌باشد.
          </p>
          <p>
            در رابطه با سایر محصولات باغی به صورت محدود و کمتر از سیب، میوه جاتی
            مانند آلو، گلابی، زردآلو و... در سطح شهرستان کشت می‌شوند. کیفیت آب و
            سازگاری اقلیم همچنین امکان تولید محصولات و خشکباری با ارزش افزوده
            بالا از آنها، دلایل خوبی برای ایجاد توسعه در این زمینه خواهد بود.
            طبق بررسی‌های صورت گرفته کشت انگور، پرورش قارچ، گل محمدی و پسته نیز
            دارای مزیت بوده و می‌توان نسبت به افزایش سطح زیر کشت این محصولات
            اقدام کرد.{" "}
          </p>
          <p>
            این منطقه پتانسیل و ظرفیت بالایی در زمینه احداث و افزایش سطح زیر کشت
            باغات انگور دارد. تنوع رنگ، طعم و مزه، ارزش غذایی، خواص دارویی و
            وجود فرآورده‌‌های تبدیلی چون کشمش، شیره انگور، روغن هسته انگور،
            کنسانتره، آب انگور، سرکه، آبغوره، انگور را به یک میوه اقتصادی و با
            ارزش افزوده بالا تبدیل کرده است. پرورش قارچ خوراکی، تصمیم سودآور
            دیگری است که می‌توان در سطح شهرستان به آسانی عملیاتی کرد. بررسی‌ها
            نشان می‌دهد میزان مصرف قارچ در سال‌های اخیر رشد خوبی داشته و سرانه
            مصرف نیز بالا رفته است. مشتری داشتن این محصول از یک سو و غنی از
            پروتئین و ویتامین بودن آن از سوی دیگر، باعث شده که جایگزین مناسبی
            برای گوشت باشد. پرورش قارچ از شغل‌هایی است که می توان با سرمایه
            اولیه کم و محیط کوچک شروع کرد. یک دوره کامل پرورش قارچ 60 روز طول
            می‌کشد که در صورت اعمال مدیریت صحیح، قابلیت کاهش به 35 روز را نیز
            دارد.
          </p>
          <p>
            کشت گل محمدی و افزایش کمی و کیفی تولید آن به دلیل مقاومت به کم آبی،
            آفات و امراض و برخورداری از خواص درمانی مورد پیشنهاد است. کشت این
            گیاه دارای مزیت‌های اقتصادی فراوانی مانند ارزش صادراتی، جذب گردشگر و
            اشتغال‌زایی است. غنچه خشک، مایع گلاب، روغن و اسانس، فرآورده‌های بدست
            آمده از گل محمدی است که علاوه بر عرضه در بازار، قابلیت صادرات را هم
            دارا است. بنابراین کاشت گل محمدی نیز در صورت توجه در شهرستان سلماس
            دارای مزیت است.
          </p>
          <p>
            درختان پسته از ۷ تا ۹ سال پس از کاشت نهال و پیوند، شروع به تولید
            محصول می‌نماید. لذا کسانی که قصد احداث باغ پسته را دارند برای داشتن
            سود اقتصادی باید کمی صبور باشند. بهترین خاک برای کاشت درخت پسته، خاک
            لومی شنی است. کیفیت آب مصرفی برای آبیاری درخت پسته به گونه‌ای است که
            در کاشت سایر محصولات کشاورزی با آن آب، غیر ممکن یا غیر اقتصادی است.
            شرایط مناسب آب و هوایی برای کاشت نهال پسته اقلیم گرم و خشک در
            تابستان (گرمای سوزان نباشد) و زمستان سرد و معتدل است. انتخاب پایه
            مناسب نکته دیگری است که لازم است درنظر گرفته شود. یک پایه پسته قوی و
            ایده آل باید نسبت به بیماری های مختلف مقاوم و دارای رشد بالایی باشد،
            همچنین مقاومت و سازگاری زیادی در برابر کم آبی و شوری داشته باشد. با
            عنایت به موارد ذکر شده و در صورت رعایت اصول کامل علمی و عملی کاشت،
            داشت و برداشت پسته، می‌توان به سودآوری قابل توجهی نائل شد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید انواع محصولات کشاورزی، بررسی‌ها نشان می‌دهد که
            سالانه مقداری از محصولات در مراحل برداشت و عرضه به بازار مصرف به
            ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از
            محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد اما مصرف آن‌ها در
            طی سال صورت می‌پذیرد. لذا صنایع تبدیلی و تکمیلی می‌تواند زمان
            استفاده را افزایش دهد و از میزان ضایعات آن بکاهد. همچنین گسترش این
            صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از اتلاف و ضایع شدن
            محصولات می‌گردد. از این‌رو جمعیت جوان و روبه رشد شهرستان سلماس،
            می‌تواند صرفه اقتصادی خوبی را برای بسیاری از مشاغل در حوزه صنایع
            تبدیلی و تکمیلی فراهم آورده و باعث ایجاد و گسترش آنها شود. در واقع
            بازار مصرف که یکی از اصلی‌ترین فاکتورها برای ایجاد این صرفه اقتصادی
            است، در سلماس وجود دارد. در همین رابطه نیز باید اشاره کرد که اگر
            شرایطی برای صادرات به ترکیه ایجاد شود، می تواند باعث رونق هرچه بیشتر
            این کسب و کارها و انگیزه خوبی برای توسعه آنها باشد. در ضمن باید
            اشاره کرد که با توجه به میزان ورود گردشگر به شهر، در صورت فعالیت
            بیشتر در زمینه صنایع تبدیلی و تکمیلی، می توان درآمد خوبی نیز از این
            بخش کسب کرد. با توجه به شرایط اقتصادی بیشتر مناطق ایران از جمله
            منطقه سلماس، بسیاری از کالاهای تولیدی در رسته صنایع تبدیلی، به نوعی
            کالای لوکس محسوب شده و نمی‌توان بازار فروش خیلی خوبی را برای آنها،
            حداقل در بین اقشار متوسط جامعه انتظار داشت. اما اگر شرایط برای
            صادرات آنها به دیگر نقاط ایران و حتی ترکیه فراهم شود، مزیت و صرفه
            اقتصادی زیادی پیدا خواهند کرد.
          </p>
          <p>
            به علت وجود سطح بالای انواع تولیدات باغی مخصوصاً سیب در سلماس، تعداد
            زیادی سردخانه در سطح شهرستان وجود داشته و مشغول به فعالیت هستند. با
            توجه به این که سردخانه از جمله واحدهایی است که برای ایجاد به سرمایه
            اولیه زیادی نیاز دارند و همچنین وجود تعداد قابل توجهی سردخانه، به
            نظر نمی‌رسد مزیتی برای ایجاد واحدهای جدیدتر وجود داشته باشد. البته
            باید گفت واحدهای سورتینگ و بسته‌بندی به ویژه برای سیب در این حیطه
            آن‌طور که باید فعال نیستند. در صورتی که با وجود صادرات داخلی و خارجی
            این محصول، کار در این زمینه‌ها سود بسیار خوبی ایجاد خواهد کرد. در
            ضمن ایجاد چنین واحدهایی می‌تواند مشوق خوبی برای کشاورزان جهت فعالیت
            بیشتر در این زمینه خواهد بود.{" "}
          </p>
          <p>
            همانطور که در رسته دامداری اشاره شد، عسل خوب و با کیفیتی در سطح
            سلماس تولید می شود. از این‌رو بسته‌بندی عسل یکی از مشاغل دارای مزیت
            در این شهرستان است. البته با توجه به این که سلماس درجوار شهرستان خوی
            که قطب زنبورداری و تولید عسل در استان آذربایجان غربی است قرار دارد،
            در صورت ورود به این شغل می‌تواند حداقل نیاز خود شهرستان را مرتفع
            نمود.{" "}
          </p>
          <p>
            به دلیل رونق دامداری میزان تولیدات دامی مانند پوست و پشم در سطح
            شهرستان بسیار زیاد است. از این‌رو کار در زمینه فرآوری پوست دام مانند
            تولید نخ علاوه بر سوددهی بالا و افزایش آن، می‌تواند انگیزه دامداران
            برای تولید بیشتر و حتی ورود افراد جدیدتر و نسل جوان به این کار را
            افزایش دهد. البته قبل از ورود به این عرصه، باید بازار فروش و عرضه آن
            را به دقت مورد بررسی قرار داد. بسته بندی انواع محصولات غذایی نیز
            دارای مزیت می‌باشد زیرا کار در این حیطه‌ علاوه بر ایجاد سود بیشتر،
            انگیزه افراد برای کار بیشتر را افزایش می‌دهد. همچنین طبق بررسی‌های
            انجام شده و نظر کارشناسان ایجاد کشتارگاه صنعتی مخصوص دام از نیازهای
            اصلی شهرستان محسوب می‌شود. در حال حاضر بسیاری از دام‌ها برای کشتار
            به دیگر شهرها مانند ارومیه برده می‌شوند. باید اشاره کرد که برای
            ایجاد کشتارگاه‌ به سرمایه اولیه زیادی نیاز است در نتیجه برای کار در
            این زمینه باید دقت و بررسی بیشتری انجام داد.
          </p>
          <p>
            {" "}
            در ادامه و با توجه به پرورش مرغ و بوقلمون و وجود مزیت برای ایجاد
            توسعه در این زمینه‌ها، ایجاد کشتارگاه این طیور پیشنهاد می‌شود. البته
            در این زمینه یک کشتارگاه نیمه صنعتی فعال بوده که بسته‌بندی گوشت نیز
            انجام می‌دهد. تاکید می‌شود در صورتی که واحدهای کشتار به فرآوری
            بسته‌بندی مجهز نبودند، از بسته‌بندی گوشت طیور و دام‌ می‌توان به
            عنوان یک شغل مجزا نام برد.
          </p>
          <p>
            همچنین دو یا سه کارخانه در زمینه تولید خوراک دام در شهرستان فعال
            هستند که طبق بررسی‌های انجام شده حتی بیش از ظرفیت شهرستان تولید
            می‌کنند. در نتیجه به نظر نمی‌رسد ایجاد واحدی جدید سودده باشد مگر این
            که توان رقابت با واحدهای با سابقه را داشته باشد. در پایان تاکید می
            شود با ایجاد رونق در زمینه صنایع تبدیلی و تکمیلی، علاوه بر این که می
            توان سود بیشتری برای دامداران و کشاورزان ایجاد کرد و صادرات این
            محصولات به داخل و خارج از کشور را توسعه داد، میزان اشتغال قابل توجهی
            نیز ایجاد خواهد شد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری انواع محصولات کشاورزی مهمترین روش برای
            ایجاد اشتغال پایدار و کاهش وابستگی به درآمدهای نفتی و عاملی مهم در
            توسعه پایدار امنیت غذایی است. ایجاد صنایع غذایی متناسب با ظرفیت
            شهرستان، علاوه بر اشتغال‌زایی، باعث ارتقاء سطح درآمد اهالی آن می‌شود
            که کاهش هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد
            امکان ممکن می‌کند. جمعیت حدود صد هزار نفری سلماس، می تواند صرفه
            اقتصادی خوبی را برای بسیاری از واحدهای صنایع غذایی فراهم آورده و
            باعث ایجاد آنها شود زیرا بازار مصرف آن در سلماس وجود دارد. در همین
            رابطه نیز باید اشاره کرد که اگر شرایطی برای صادرات به ترکیه ایجاد
            شود، می تواند باعث رونق هر چه بیشتر باشد.{" "}
          </p>
          <p>
            میزان تولیدات دامی مانند شیر و گوشت در سطح شهرستان بسیار زیاد است
            زیرا شغل اصلی مردم دامداری است. احداث واحدهایی در زمینه تولید انواع
            سوسیس و کالباس و فرآوری شیر جهت تولید انواع لبنیات، علاوه بر سوددهی
            بالا می‌تواند انگیزه دامداران برای تولید بیشتر و حتی ورود افراد
            جدیدتر و نسل جوان به این کار را افزایش دهد. نکته مهمی که باید در این
            رابطه تاکید کرد این است که درحال حاضر واحدهای فعالی در زمینه فرآوری
            شیر و تولید لبنیات فعال هستند در نتیجه برای ورود به این عرصه، قبل از
            هر اقدامی، باید بازار فروش و توان رقابت با این واحدها را به دقت
            موردبررسی قرار داد. در ضمن باید اشاره کرد چندین واحد جمع آوری شیر
            وجود دارند که شیر تولیدی در سلماس را به کارخانه‌های اطراف مانند
            کارخانه‌های ارومیه و... منتقل می‌کنند.{" "}
          </p>
          <p>
            میزان تولید سیب در سطح سلماس بسیار زیاد بوده تا حدی که به گفته برخی
            از کارشناسان، به حد اشباع رسیده و باید به سمت تولید دیگر محصولات
            باغی هسته‌دار رفت. کار در زمینه فرآوری این محصول باغی مانند تولید
            سرکه، آبمیوه، میوه خشک، چیپس میوه، کنسانتره و مربا علاوه بر ایجاد
            اشتغال و جلوگیری از هدررفت محصول می‌تواند جای کار بیشتری برای توسعه
            کشت این محصول ایجاد کند. البته باید اشاره کرد چند واحد در زمینه
            تولید محصولات غذایی در حال فعالیت است ولی با توجه به سطح تولیدات و
            سود حاصله، به نظر می‌رسد همچنان ظرفیت کار و فعالیت در این حیطه وجود
            دارد.{" "}
          </p>
          <p>
            گندم یکی از اصلی ترین محصولات زراعی تولیدی در سطح شهرستان است که
            برای فرآوری این محصول جهت تولید آرد، یک کارخانه فعال در سطح شهرستان
            سلماس واقع است. لذا از این ظرفیت می‌توان برای ایجاد مشاغلی مانند
            تولید نان و شیرینی‌پزی که از نیازهای اصلی هر منطقه‌ای به شمار
            می‌رود، بهره برد. وجود بازار برای این محصولات و وجود اصلی‌ترین ماده
            تولیدی آنها یعنی گندم در کنار جمعیت قابل توجه سلماس، باعث شده که
            فعالیت در این زمینه‌ها را پیشنهاد داد. علاوه بر این در زمینه تولید
            سایر فرآورده‌های حاصل از گندم مانند کلوچه و بیسکویت، پفک گندمی،
            نشاسته گندم، نان بستنی و آرد سوخاری نیز می‌توان نسبت به احداث
            واحدهای غذایی اقدام کرد.{" "}
          </p>
          <p>
            روغن كلزا به دليل تركيب مناسب اسيدهاي چرب غير اشباع و درصد پايين
            اسيدهاي چرب اشباع، جزء با كيفيت‌ترين روغن‌هاي خوراكي است. كشت اين
            محصول و برنامه‌ریزی تولید آن مي‌تواند از خروج ارز از کشور جلوگيري
            كند. کشت کلزا و وجود تجهیزات مدرن برای برداشت آن، کار در زمینه تولید
            فرآورده های آن مانند روغن کلزا را دارای مزیت کرده است. تولید
            محصولاتی مانند میوه خشک، چیپس میوه، مربا و سایر فرآوری‌ها مانند
            آبمیوه، ترشی، کمپوت، شهد، کنسانتره و لواشک می‌تواند از مزیت و سود
            خوبی برخوردار باشد. علت این امر نیز به رونق باغداری در سطح شهرستان
            مربوط بوده و ظرفیت برای افزایش کشت نیز وجود دارد. فرآوری گیاهان
            دارویی مانند تولید عرقیجات و بسته بندی آنها از مزیت و سود بالایی
            برخوردار است زیرا بازار فروش خوبی خواهد داشت. توسعه فرآوری صیفی جات
            و سبزی جات مانند خشک کردن، بسته بندی و تولید رب گوجه فرنگی نیز دارای
            مزیت خواهد بود. تولید گلاب نیز در صورت افزایش سطح زیرکشت گل محمدی
            پیشنهاد می‌شود.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی بخش‌های مختلف شهرستان سلماس
            نقش‎های متعددی بر عهده دارد که از جمله مهمترین آن‎ها می‎توان تامین
            مواد خام و اولیه مورد نیاز صنایع، تامین نهاده‎هایی مانند نیروی کار،
            مصرف تولیدات سایر بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و
            ماشین‌آلات کشاورزی، سودآوری برای فعالان این بخش و تامین مالی سایر
            بخش‎های زیربنایی را نام برد. زراعت یکی دیگر از حوزه‌های شغلی مردم
            شهرستان سلماس است که البته نسبت به دامداری کمتر انجام می‌شود. وجود
            خاک حاصلخیز و آب و هوای مناسب، مهمترین دلایل برای رونق داشتن این نوع
            از کسب و کارها در منطقه هستند. گفتنی است طبق بررسی‌های انجام شده
            عمده آب مورد استفاده در زمینه زراعت از آب‌های زیرزمینی تامین می‌شود.
            گندم و جو اصلی‌ترین محصولات زراعی تولیدی در سلماس هستند. گستردگی
            مصرف این دو محصول، نیاز به مصرف فرآورده‌های این محصولات و خرید
            تضمینی دولت از مزایای اقتصادی توسعه سطح زیرکشت این محصولات می‌باشد.
          </p>
          <p>
            زراعت گیاه روغنی کلزا پیشنهاد مقرون به صرفه دیگری در حوزه زراعت
            شهرستان است. سالانه بيش از 55 ميليون تن كلزا در كشورهاي عضو اتحاديه
            اروپا، چين و كانادا به عنوان سه توليدكننده اصلي اين محصول به دست مي
            آيد ولی ميزان توليد اين محصول در ايران بسيار اندك و كمتر از 300 هزار
            تن در سال برآورد مي شود كه اين رقم نيز در سال هاي اخير با توجه ويژه
            وزارت جهاد كشاورزي به دست آمده است. در سال زراعی 1397، يك هزار و 200
            هكتار از اراضی سلماس زير كشت كلزا بوده است. که با قیمت تضمینی از
            کشاورزان خریداری شد. در واقع خرید تضمینی یکی از سیاست‌های انگیزشی
            برای توسعه کشت این محصول است. ایجاد توسعه در زمینه کشت کلزا می‌تواند
            ضمن اشتغال‌زایی بالا، سالانه از خروج میزان قابل توجهی ارز جلوگیری
            کند. کدو آجیلی و آفتابگردان از دیگر محصولات زراعی هستند که در آب و
            هوای سلماس عملکرد مطلوبی داشته و زارعین زیادی مشغول به کشت و کار این
            محصولات هستند. سلماس در تولید این دو محصول مزیت دارد اما به دلیل
            نزدیکی با قطب تولید این دو محصول یعنی خوی، قبل از هر اقدامی برای
            افزایش توسعه کشت، باید بازار فروش را به خوبی بررسی و ارزیابی کرد.
          </p>
          <p>
            گیاهان دارویی خودرو به وفور در کوهستان‌های شهرستان سلماس وجود دارد.
            با توجه به شرایط محیطی و اقلیمی نیز می‌توان کشت آنها را پیش گرفت. در
            واقع افزایش تمایل مردم در زمینه مصرف این محصولات و فرآورده‌های آن،
            می‌تواند انگیزه خوبی برای کار در این زمینه باشد که البته سودآوری
            مناسبی نیز در پی دارد. ذرت علوفه‌ای از جمله محصولاتی است که در
            سالهای گذشته از زمین های کشاورزی منطقه برداشت شده است. اصلی‌ترین
            مزیت توسعه کشت این محصول را می‌توان در استفاده از آن در دامداری ها
            به عنوان خوراک دام دانست. البته طبق بررسی های انجام شده واحدهایی در
            زمینه تولید خوراک دام در سطح شهرستان فعالیت دارند که این محصول می
            تواند بعنوان ماده اولیه آن واحدها نیز مورد استفاده قرار گیرد. هر چند
            در این زمینه باید بررسی‌های دقیق‌تری انجام شود.{" "}
          </p>
          <p>
            کشت و زراعت یونجه نیز در سلماس به علت رونق بخش دامداری انجام می شود
            و به نظر می‌رسد هر میزان تولید از این محصول اقتصادی و ارزشمند به
            فروش رفته و افزایش کشت آن پیشنهاد می شود. لازم به تاکید است که در
            لیست مزیت سنجی، کشت زعفران پیشنهاد شده است البته طبق بررسی‌های انجام
            شده کشت این محصول به طور محدود درحال انجام است و می‌تواند توسعه
            یابد. همچنین در این لیست به مزیت کشت چغندرقند به علت وجود ظرفیت در
            منطقه اشاره شده که در این مورد نیز باید به میزان آب مورد استفاده در
            کشت این محصول توجه ویژه‌ای داشت. همچنین کشت و کار نخود نیز دارای
            مزیت شمرده شده است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور یکی از مشاغل سخت و پرکاری است که به دلیل نیاز به منابع
            غذایی، از اهمیت بالایی برخوردار است و سود سرشاری دارد. در این زمینه
            برای پرورش بسیاری از طیور شرایط مساعدی در شهرستان وجود دارد اما نکته
            مهم و قابل توجه، بازاریابی جهت فروش محصولات تولیدی است. در واقع وجود
            بازار فروش دائمی و مطمئن می‌تواند زمینه را برای گسترش طرح های پرورش
            طیور چه به صورت سنتی و چه صنعتی فراهم نماید. بنابراین طیوری که به آن
            پرداخته می‌شوند، به شرط بازاریابی مناسب مزیت پرورش دارند. تعداد
            زیادی مرغداری به صورت صنعتی و نیمه صنعتی و در دو نوع گوشتی و
            تخمگذار، در سطح شهرستان سلماس، مشغول به فعالیت هستند. سازگاری این
            پرنده با اقلیم آب و هوایی سلماس، وجود بازار مصرف و قیمت مناسب تر
            گوشت آن نسبت به دیگر طیور باعث شده که بازار آن رونق داشته باشد و
            بتوان توسعه بیشتری نیز ایجاد کرد. البته باید به این نکته توجه داشت
            که جدیداً اعطای مجوزهای لازم برای احداث مرغداری کمی سخت گیرانه‌تر
            شده و به عنوان مثال به واحدهای کمتر از چند هزار قطعه مجوز تعلق نمی
            گیرد. در نتیجه برای ورود به این عرصه باید شرایط را به دقت مورد بررسی
            قرار داد. بوقلمون پرنده دیگری است که با شرایط محیطی شهرستان سلماس
            سازگاری مناسبی دارد و ظاهراً بازار فروش خوبی هم برای گوشت آن مهیاست.
            این شرایط باعث می‌شود تا بتوان کار در این زمنیه را به صورت صنعتی و
            سنتی پیشنهاد داد.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            کلیسای آخته خانه، محلم، هفتوان، آبشارها و آب گرم از مهمترین
            جاذبه‌های طبیعی و باستانی در سطح شهرستان است. شهر سلماس به عنوان
            اولین شهر شطرنجی ایران شناخته می‌شود و تنها شهری است که به این شیوه
            مدرن در استان آذربایجان غربی احداث گردیده ‌است. این شیوه مدرن از
            شهرسازی با خیابان‌های شطرنجی و هندسی منظم، جلوه‌های ویژه‌ای به این
            شهر بخشیده‌است که نظیر آن را در کمتر شهری در ایران می‌توان مشاهده
            کرد. میزان بازدید سالیانه از این جاذبه های توریستی قابل توجه و زیاد
            است اما آن طور که باید به امکانات رفاهی و اقامتی توجه نشده است. با
            توجه به این که سلماس شهری مرزی است و می تواند از این مزیت جغرافیایی
            به بهترین نحو استفاده کند، توسعه امکانات گردشگری مانند اقامتگاه‌های
            بومگردی، رستوران‌های محلی و... علاوه بر ایجاد اشتغال پایدار و افزایش
            گردشگر داخلی، می‌تواند ارزآوری خوبی داشته باشد.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            قالی و قالیچه از اصلی‌ترین تولیدات در منطقه سلماس محسوب می‌شوند.
            کیفیت این محصولات بالا بوده و به گفته برخی کارشناسان در داخل مشتری
            داشته و بعضاً خارج از کشور صادر می‌شود. مهارت زنان و افراد شهرستان
            در این زمینه یکی از مهمترین دلایل وجود پتانسیل برای افزایش کار در
            این زمینه محسوب می‌شود اما ابتدا بازار فروش آنها باید تضمین شود.
            مجسمه سازی یکی دیگر از مشاغل مهم مردم در این شهرستان است که میزان
            قابل توجهی از مردم به آن مشغول هستند. تعداد زیادی کارگاه در این
            زمینه فعالیت دارند که به سراسر کشور صادرات دارند. ایجاد توسعه در این
            زمینه و وارد شدن افراد جدید به این حیطه، درصورت توان رقابت با
            واحدهای قدیمی تر می تواند دارای مزیت باشد و اشتغال زیادی ایجاد کند.
            طبق لیست مزیت سنجی تولید لباس های محلی به علت وجود مذاهب مختلف در
            سطح شهرستان، مزیت دارند.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            یک شهرک صنعتی در شهرستان سلماس وجود دارد ولی تعداد زیادی از واحدهای
            آن تعطیل شده و یا با کمترین ظرفیت مشغول به فعالیت هستند. شهرک صنعتی
            شهر سلماس قطب تولیدی درب‌های ضد سرقت و ضد حریق در سطح کشوری است که
            این برند در سطح کشور شناخته شده است. این واحدها یکی از موفق‌ترین و
            معروف‌ترین واحدهای صنعتی در سطح شهرستان هستند که به سراسر کشور و
            بعضاً خارج از کشور صادرات دارند. البته واحدهای صنعتی دیگری نیز درسطح
            شهرستان مشغول به فعالیت هستند. باید اشاره کرد که طبق تحقیقات انجام
            شده، اکثر کارگران این واحدهای صنعتی فعال، بومی خود شهرستان هستند. با
            توجه به میزان تولیدات بالای کشاورزی و دامی و اهمیت داشتن صنایع بسته
            بندی مواردی نظیر تولید گونی، کارتون و سبد می‌تواند دارای مزیت باشد و
            سود خوبی را ایجاد کند البته طبق بررسی‌های انجام شده یک واحد در زمینه
            تولید انواع کارتن در شهرک صنعتی مشغول به فعالیت است. در لیست مزیت
            سنجی به تولید ذغال چوب نیز اشاره شده است که به نوبه خود می‌تواند
            سودآور باشد.{" "}
          </p>
          <p>
            همچنین تولید مبل و مصنوعات چوبی به علت وجود ظرفیت تولید در منطقه
            قابل سرمایه‌گذاری است.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه‌های شغلی سوددهی است که ظرفیت قابل ملاحظه‌ای برای آن
            وجود دارد که اگر از این ظرفیت‌های شیلاتی استفاده شود سودآوری بسیار
            خوبی ایجاد خواهد شد. شهرستان سلماس با برخورداری از منابع آب زیرزمینی
            پتانسیل خوبی در زمینه پرورش شیلات و آبزی پروری دارد. باتوجه به شرایط
            آب شهرستان سلماس و وجود سد زولاچای، می توان در زمینه شیلات مخصوصا
            ماهی‌های سردآبی فعالیت کرد و نیاز شهرستان به این محصولات را برطرف
            کرد. هر چند طبق نظر کارشناسان به علت زمستان های سردی که در سلماس
            وجود دارد، برای ورود به این حیطه باید تجهیزات خاصی را فراهم آورد و
            بررسی‌ها دقیق‌تری انجام داد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
