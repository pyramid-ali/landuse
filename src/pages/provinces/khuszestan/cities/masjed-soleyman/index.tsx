import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-13"].cities["IR-1324"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        livestock: "دامداری",
        industry: "صنعت",
        services: "خدمات",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        gardening: "باغداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        fisheries: "شیلات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان مسجد سلیمان با وسعتی بالغ بر 6986 کیلومتر مربع در شمال شرقی
            استان خوزستان واقع شده و مرکز آن شهر مسجد سلیمان می باشد. این
            شهرستان از جنوب به شهرستان باغ ملک و هفتکل، از شمال به شهرستان لالی
            و گتوند، از غرب به شهرستان شوشتر و از شرق به شهرستان ایذه محدود
            می‌شود. طبق سرشماری سال 1395 جمعیت مسجد سلیمان برابر با 113419 نفر
            اعلام گردیده است. مسجدسليمان از لحاظ اقليمي داراي آب و هواي نيمه
            صحرايي است. نواحي شمالي آن به دليل واقع شدن در حاشيه سلسله جبال
            زاگرس داراي زمستانهاي سرد همراه با برف و تابستان هاي معتدل است، اما
            نواحي جنوبی داراي بهاري معتدل و تابستانی گرم و خشک می‌باشد. شکل زیر
            موقعیت شهرستان مسجد سلیمان را نشان می دهد.
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
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی یک منطقه نقش‎های متعددی بر
            عهده دارد که از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه
            مورد نیاز صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف
            تولیدات سایر بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات
            کشاورزی، ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام
            برد. در این قسمت به بررسی محصولات زراعی متناسب با شرایط موجود در
            شهرستان پرداخته می شود و مزایای کشت هر کدام به تفکیک آورده می شود.
          </p>
          <p>
            گندم و جو از دیرباز در شهرستان مسجد سلیمان کشت شده و همواره بخشی از
            زمین های زراعی منطقه به این دو محصول اختصاص یافته است . سازگاری گندم
            و جو با اقلیم های خشک، امکان کشت دیم و خرید تضمینی آن توسط دولت موجب
            شده تا کشاورزان این مناطق بخش زیادی از زمین های زراعی را به کشت این
            دو محصول مهم اختصاص دهند. گندم از نظر تغذیه‌ای برای انسان بسیار حائز
            اهمیت است و دانه‌ی آن برای ساخت آرد بکار می رود، همچنین از علوفه
            گندم و محصول کم کیفیت تر آن در خوراک دام و طیور استفاده می شود.
          </p>
          <p>
            جو نیز از دیرباز در سبد تغذیه دام و انسان جایگاه ویژه داشته و به
            صورت دانه جو و علوفه مورد استفاده قرار می‌گیرد. در مصارف انسانی از
            جو برای تهیه نان، پخت سوپ، تهیه غذای کودک و... استفاده می شود. با
            بکارگیری ادوات مکانیکی مدرن در بخش کشت و برداشت محصولات گندم و جو،
            می توان علاوه بر افزایش سطح زیر کشت آنها، هزینه های تولید را کاهش
            داد؛ بنابراین گسترش پرورش این محصولات زراعی مطابق با روش های مدرن
            برای شهرستان مسجد سلیمان دارای مزیت است.
          </p>
          <p>
            در شهرستان مسجد سلیمان کشت کلزا به صورت دیم در فصل پاییز انجام می
            شود و در نیمه نخست اردیبهشت محصول آن برداشت می گردد. در سالیان اخیر
            روند کاشت این محصول به دلیل سازگاری آن با اقلیم منطقه و وجود کارخانه
            های فرآوری آن در شهرستان های اطراف مسجد سلیمان رو به افزایش بوده
            است. کشت کلزا باعث از بین رفتن چرخه زندگی آفات و علف های هرز مزرعه
            گردیده و با کاهش جمعیت آنها موجب صرفه جویی در مصرف سموم کشاورزی و
            کاهش آلودگی های زیست محیطی می گردد. با توجه به آنکه زمان کشت کلزا در
            فصل پاییز است، نیاز گیاه به آبیاری کم خواهد بود و با استفاده از
            نزولات جوی می توان به کشت آن اقدام نمود. کلزا با تولید مقادیر قابل
            توجهی علوفه می تواند در تغذیه دام های منطقه نیز نقش موثری داشته
            باشد. همچنین برگردان بقای کلزا به خاک باعث افزایش حاصلخیزی خاک و
            بهبود ساختمان خاک خواهد شد. روغن کلزا ازجمله مشتقات اصلی این گیاه
            بوده که امروزه به دلیل سالم بودن و داشتن کمترین کلسترول و اسیدهای
            چرب اشباع ‌شده مورد استقبال قرارگرفته است. تحقیقات دانشمندان نشان
            می‌دهد که دانه کلزا 40-30 درصد روغن و کنجاله‌اش50-40 درصد پروتئین
            گیاهی دارد. با توجه به ظرفیت شهرستان مسجد سلیمان کشت این گیاه به روش
            های نوین و با استفاده از ادوات مکانیکی، دارای مزیت می باشد.
          </p>
          <p>
            طبق سیاست های سازمان جهاد کشاورزی شهرستان مسجد سلیمان، کلاس های
            آموزشی در زمینه کشت گیاهان داروئی در این شهرستان برگزار می شود و در
            حال حاضر نیز در بخش های از مسجد سلیمان گیاهان دارویی نظیر رازیانه،
            گل همیشه بهار و ختمی بصورت محدود کشت می شود. با توجه به شرایط آب و
            هوایی شهرستان مسجد سلیمان، کشت گیاهان داروئی مقاوم به کم آبی برای
            ایجاد اشتغال گزینه مناسبی می باشد.{" "}
          </p>
          <p>
            تقاضای مصرف گیاهان دارویی به علت کاهش علاقه مردم به مصرف داروهای
            شیمیایی و استفاده از این گیاهان در تولیدات کارخانه‌های بزرگ دارویی
            همواره رو به افزایش است. از این گیاهان نه تنها برای درمان بیماری‌ها
            بلکه در صنایع کنسروسازی، نوشابه سازی، ‌عطر سازی و غذایی نیز استفاده
            می‌شود. با توجه به شرایط مساعد شهرستان مسجد سلیمان برای کاشت این
            گیاهان داروئی، گسترش کشت آنها علاوه بر کاهش بیکاری، موجب ایجاد شغل
            هایی جدید در بخش فرآوری آنها می گردد، به همین جهت کشت آنها دارای
            مزیت است.
          </p>
          <p>
            از دیگر محصولات زراعی که به صورت محدود در مسجد سلیمان کشت می شود، می
            توان به محصول سیب زمینی اشاره کرد. کشت سیب زمینی در برخی از نواحی
            شهرستان مرسوم است، اما به دلیل نیاز آبی زیاد، کشت این محصول در
            اولویت های بعدی مزیت های شغلی قرار می گیرد. سیب زمینی از نظر تغذیه
            ای بسیار حائز اهمیت است و در انواع غذاهای ایرانی کاربرد دارد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در ایران از قدیم رواج داشته و نژادهای مختلف دام سنگین و سبک
            در مناطق مختلف کشور پرورش داده می شوند. در شهرستان مسجد سلیمان نیز
            پرورش گاو، گوسفند و بز به صورت سنتی و صنعتی (به صورت محدود) انجام می
            شود و در این بین پرورش گوسفند به صورت سنتی بطور وسیع صورت می گیرد.
            سود اقتصادی حاصل از دامداری برای مردم این شهرستان مناسب است و علاوه
            بر آن در تأمین گوشت قرمز مسجد سلیمان و شهرستان های اطراف نقش مهمی
            دارد. از آن جایی که حوزه دامداری با یکی از مهم ترین نیازهای انسان،
            یعنی نیاز به منابع غذایی و خصوصاً منابع پروتئینی مرتبط می‌باشد، توجه
            به آن ضروری بوده و فعالیت در این حوزه شغلی و افزایش بهره وری در آن،
            می تواند عاملی برای توسعه صنایع غذایی، تبدیلی و تکمیلی در این
            شهرستان محسوب شود.{" "}
          </p>
          <p>
            همانطور که اشاره شد، پرورش گوسفند در این شهرستان عمدتاً بصورت سنتی
            بوده و تعداد کمی واحد نیمه صنعتی پرورش گوسفند در مسجد سلیمان فعال می
            باشند. گوسفندهای پرورشی در شهرستان از نژادهای بومی (نژاد بختیاری) می
            باشند. گوسفند یک دام مقاوم، کم توقع و ارزشمند است که محصولات آن به
            دلیل ذائقه مردم، وجود اعیاد و مراسمات مختلف مذهبی و نیاز گوشت قرمز
            کشور، همواره دارای مشتری و بازار فروش مناسب می باشد. یکی دیگر از
            ویژگی های مهم کسب و کار پرورش گوسفند امکان چرای دام در مراتع و تولید
            بخش زیادی از اقلام خوراکی آن در داخل کشور می باشد که پرورش آن را به
            صرفه تر می کند. یکی از مشکلات دامداری سنتی کم بودن عملکرد و سود کم
            است که با استفاده از روش های پرورش صنعتی و نیمه صنعتی می توان میزان
            تولید و صرفه اقتصادی را افزایش داد؛ بنابراین برای گسترش پرورش گوسفند
            در شهرستان مسجد سلیمان احداث واحدهای صنعتی و نیمه صنعتی دارای مزیت
            هستند.
          </p>
          <p>
            پرورش بز در شهرستان مسجد سلیمان به صورت سنتی و معمولاً توسط عشایر و
            روستائیان انجام می شود، اما جهاد کشاورزی این شهرستان فعالیت هایی
            برای اصلاح نژاد بزهای بومی انجام داده است و به نظر می رسد انجام
            فعالیت های بیشتر و در سطح صنعتی و نیمه صنعتی در این زمینه، در بخش
            دامداری دارای مزیت خواهد بود.
          </p>
          <p>
            در شهرستان مسجد سلیمان پرورش گاو نیز به صورت سنتی و صنعتی (محدود)
            انجام می شود و به تازگی فعالیت هایی در زمینه احداث واحدهای صنعتی
            پرورش گاو شیری و پرواربندی گوساله صورت گرفته است. واحد جمع آوری شیر
            نیز در این شهرستان فعال است و تولیدات دامداران را به کارخانه تولید
            لبنیات ارسال می کند. با توجه به نیاز روزافزون جامعه به لبنیات و
            ظرفیت مسجد سلیمان برای پرورش دام، احداث واحدهای جدید پرورش گاو
            سودمند خواهد بود.
          </p>
          <p>
            زنبورداری در مناطق خوش آب و هوای شهرستان مسجد سلیمان انجام می شود و
            علاوه بر کندوداران شهرستان، زنبورداران میهمان نیز از این مناطق
            استفاده می کنند. تولید عسل علاوه بر ایجاد اشتغال، باعث ایجاد مشاغل
            جدیدی در بحث فرآوری و بسته بندی آن می شود که این مورد نیز به جلوگیری
            از مهاجرت جوانان کمک زیادی می کند. با توجه به نیاز شهرستان به ایجاد
            مشاغل جدید، ارزش تغذیه‌ای و سود اقتصادی پرورش زنبور، گسترش این کسب و
            کار با توجه به کوهستانی بودن و زود فرا رسیدن فصل بهار در منطقه دارای
            مزیت می باشد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است، اما در کشور ما
            آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر
            شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان
            مسجد سلیمان، تعدادی واحد صنعتی در زمینه های مختلف وجود دارند، اما
            پتانسیل های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد
            واحدهای صنعتی جدید ظرفیت وجود دارد. در زیر به برخی از مشاغل صنعتی
            دارای مزیت در شهرستان اشاره شده است.
          </p>
          <p>
            در شهرستان مسجد سلیمان صنایع بزرگی همچون پتروشیمی، نفت و گاز فعال
            هستند و بخش بزرگی از نیروی کار شهرستان نیز در این واحدها مشغول به
            کار می باشند. علاوه بر این کارخانه های آلومینیوم سازی، کارخانه
            سیمان، کارخانه یخ سازی و کارخانه بازیافت لاستیک در شهرستان فعال
            هستند. در مسجد سلیمان یک شهرک صنعتی وجود دارد، اما متأسفانه تنها
            تعداد بسیار کمی واحد صنعتی در آن فعال اند و بقیه واحدها بدون استفاده
            رها شده‌اند. در مسجد سلیمان معدن سنگ ساختمانی وجود دارد، اما طبق
            گفته های کارشناسان حوزه اشتغال شهرستان تولیدات آن بصورت خام از
            شهرستان خارج می شود و برای فرآوری به شهرستان الیگودرز فرستاده می
            شوند ، بنابراین با ایجاد واحد فرآوری و برش سنگ می توان علاوه بر
            اشتغال زایی، نیاز شهرستان به محصول سنگ ساختمانی را مرتفع کرد.
          </p>
          <p>
            با توجه به وجود کارخانه آلومینیوم سازی در شهرستان و طبق پیشنهاد
            کارشناسان حوزه اشتغال، احداث واحدهای قوطی سازی و ساخت در و پنجره
            آلومینیومی، دارای مزیت است. قوطی‌های فلزی همواره به ‌عنوان یکی از
            مهمترین ابزار در صنعت بسته‌بندی به شمار می‌آیند. صرفه اقتصادی، شکیل
            و متنوع بودن، مقاومت، استحکام و در نتیجه ماندگاری بالای این مصنوعات
            فلزی موجب شده است تا امروزه در بسته‌بندی بسیاری از انواع محصولات
            غذایی و غیر غذایی استفاده شوند. در و پنجره های آلومینیومی عمر بسیار
            طولانی دارند و در برابر عناصر آب و هوایی بسیار مقاوم اند؛ به همین
            جهت امروزه در بیشتر خانه های نوساز از این نوع در و پنجره ها استفاده
            می کنند.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از فعالیت هایی است که با
            سودآوری بسیاری همراه است و در شهرستان مسجد سلیمان نیز ظرفیت های
            مناسبی برای سرمایه گذاری در زمینه گردشگری وجود دارد. در زیر به برخی
            از امکان تاریخی و طبیعی شهرستان و برخی امکان دارای مزیت احداث اشاره
            شده است.
          </p>
          <p>
            در مسجد سلیمان آثار تاریخی همچون آتشکده دوره ساسانی، کلگه زرین، معبد
            بردشانده و چاه نفت قدیمی وجود دارند که در برخی از مواقع سال
            گردشگرانی را به خود جذب می کنند. طبق گفته کارشناسان حوزه مشاغل
            شهرستان، امکانات رفاهی خاصی در نزدیکی این آثار تاریخی پیش بینی نشده
            است و به همین جهت میزان بازدید کمتر از حد مورد انتظار است. در حال
            حاضر انواع شهربازی های بزرگ و کوچک برای سنین مختلف در شهرستانهای
            مختلف ایجاد شده که اکثر آنها نیز با حمایت و مشارکت بخش خصوصی صورت
            گرفته است؛ بنابراین ایجاد چنین امکاناتی دارای سوددهی خواهد بود و یک
            مزیت برای سرمایه گذاری می باشد. احداث سینما و سالن های ورزشی مانند
            استخر، فوتبال و... همواره مورد استقبال جوانان و نوجوانان قرار می
            گیرد و علاوه بر ایجاد اشتغال در حفظ روحیه و سلامت جامعه نیز
            تأثیرگذارند.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            امروزه یکی از معیارهای پیشرفت جوامع، وضعیت تغذیه به ویژه تغذیه
            پروتئین توسط افراد آن جامعه است. وظیفه متخصصین علوم دامی تولید
            پروتئین با حداکثر کیفیت و حداقل هزینه می باشد. فرآورده های طیور از
            مهم ترین منابع پروتئینی در اغلب کشورها هستند، به طوری که تولید و
            مصرف آن ها در اغلب کشورها با سرعت روز افزون در حال افزایش است. در
            این زمینه برای پرورش برخی از طیور شرایط مساعدی در شهرستان مسجد
            سلیمان وجود دارد اما نکته مهم و قابل توجه، بازاریابی جهت فروش
            محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می تواند
            زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه صنعتی
            فراهم نماید؛ بنابراین طیوری که به آن پرداخته می شوند، به شرط
            بازازیابی مناسب مزیت پرورش دارند.
          </p>
          <p>
            در شهرستان مسجد سلیمان واحدهای زیادی جهت پرورش مرغ گوشتی وجود دارد
            که تولیدات آنها در کشتارگاه طیور خود شهرستان کشتار می شود. بنابر
            گفته کارشناسان حوزه اشتغال شهرستان مسجد سلیمان، تولید مرغ گوشتی بیش
            از نیاز شهرستان است، اما با توجه به امکان ارسال مرغ و با ایجاد
            واحدهای فرآوری، امکان گسترش واحدهای صنعتی پرورش مرغ گوشتی وجود داشته
            و سرمایه گذاری در این کسب و کار مزیت دارد.
          </p>
          <p>
            طبق گفته کارشناسان بخش اشتغال شهرستان، تعداد واحدهای مرغ تخمگذار
            صنعتی در استان خوزستان کم است و در شهرستان مسجد سلیمان نیز همه
            واحدهای مرغداری، مرغ گوشتی پرورش می دهند؛ بنابراین ظرفیت احداث واحد
            مرغ تخمگذار در مسجد سلیمان وجود دارد. با توجه به اینکه واحد صنعتی در
            شهرستان اطراف مسجد سلیمان راه اندازی شده است (شهرستان رامهرمز)؛
            بنابراین امکان ایجاد مرغداری مرغ تخمگذار در مسجد سلیمان از نظر شرایط
            آب و هوایی وجود دارد.
          </p>
          <p>
            در زمینه پرورش طیور دیگری همچون مرغ بومی فعالیت های محدودی در سطح
            پرورش خانگی صورت گرفته است که با توجه به بازار فروش مناسب و سازگاری
            این طیور با آب و هوای شهرستان، گسترش واحدهای تولیدی آنها و ایجاد
            واحدهای صنعتی مزیت دارد و مشاغل جدیدی را نیز ایجاد می کنند. ضمن
            اینکه وجود ایستگاه تحقیقاتی مرغ بومی در استان خوزستان یک امتیاز مثبت
            برای افرادی است که قصد شروع این کسب و کار را دارند زیرا در این مراکز
            تحقیقاتی مرغ های بومی اصلاح نژادشده تولید می شود.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوان خود روح و جان فرهنگ و هنر به یادگار مانده از نیاکان
            خویش را جاودانه می‌سازند. صنایع دستی نماد فرهنگ اصیل، تاریخ کهن و
            هنر بی‌مثال مردم ایران زمین است. نکته ای که در رابطه با صنایع دستی
            وجود دارد این است که برخلاف زحمتی که هنرمند می کشد تا یکی از صنایع
            دستی را تولید کند، متاسفانه به علت عدم حمایت و بازار فروش داخلی و
            خارجی، رغبت به سمت فعالیت در این زمینه کاهش یافته است و بسیاری از
            هنرهای دستی به همین دلیل به فراموشی سپرده شده اند. در ادامه توضیحاتی
            راجع به پتانسیل های صنایع دستی در شهرستان مسجد سلیمان ارائه شده است
            اما در هر صورت اگر توجهی به آن از سمت دولت و نهادهای مربوطه نشود،
            نمی توان انتظار چندانی برای موفقیت داشت.
          </p>
          <p>
            قالیبافی از هنرهایی است که از قدیم نزد جهانیان جایگاه ویژه ای داشته
            و ایران را به این هنر می‌شناسند. آمارها نشان می دهد فرش ایرانی از
            کیفیت خوبی برخوردار بوده و تولیدات این بخش قابلیت رقابت با کشورهای
            دیگر را دارد. قالیبافی از مشاغل خانگی پردرآمدی است که تسهیلات خوبی
            به آن تعلق می گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی
            مناسب می دانند چون در کنار کارهای روزمره می توانند به این کار
            بپردازند و درآمد خوبی کسب کنند. از آن جایی که قالی انواع مختلفی دارد
            می توان با آموختن دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه
            افراد تولید و به بازار عرضه کرد. همچنین با تولید فرش با کیفیت می
            توان به صادرات در این زمینه نیز فکر کرد. این کسب و کار را می توان در
            فضای کوچک و با سرمایه اولیه کم راه انداخت و با فروش محصول و افزایش
            مشتری، این کار را گسترش داد و زمینه اشتغال بسیاری از جوانان را فراهم
            کرد. در حال حاضر فعالیت در حوزه قالیبافی و تولید تابلو فرش در مسجد
            سلیمان بصورت محدود صورت می گیرد، اما گسترش این کسب و کار برای ایجاد
            اشتغال برای افراد مختلف از جمله بانوان دارای مزیت می باشد.
          </p>
          <p>
            یکی از صنایع دستی زیبای زنان بختیاری چوقا (چوخا) می باشد که به عنوان
            سوغاتی نیز در مسجد سلیمان و سایر نقاط بختیاری نشین کشور به فروش می
            رسد. چوقا از پشم گوسفند ساخته می شود و به عنوان بالاپوش مردان
            استفاده می شود. یکی از ویژگی های خاص چوقا عدم نفوذ آب باران در آن می
            باشد. ایجاد کارگاه چوقا بافی و بازاریابی آن می تواند به گسترش این
            کسب و کار کمک کند و برای ایجاد اشتغال بانوان شهرستان مزیت دارد.
          </p>
          <p>
            گلیم بافی نیز در شهرستان مسجد سلیمان به عنوان یک هنر دستی بصورت
            گسترده انجام می شود. کسب و کار گلیم بافی برای افرادی با سرمایه اولیه
            کم و فضای محدود گزینه بسیار مناسبی می باشد، ضمن اینکه تسهیلاتی در
            قالب مشاغل خانگی به افراد متقاضی گلیم بافی اعطا می شود. با تبلیغات و
            بازاریابی مناسب می توان این کسب و کار را از سطح خانگی به سطح صنعتی
            هم ارتقاء داد. با توجه به علاقه مردم و ظرفیت شهرستان، گسترش این کسب
            و کار دارای مزیت می باشد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            کشاورزی و از جمله باغبانی در توسعه ملی و افزایش رفاه عمومی،
            فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع درآمد و
            عدالت اجتماعی موثر هستند. در یک نگاه کلی می توان گفت نقش کشاورزی و
            به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری الگوی
            صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه
            شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای
            بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.
          </p>
          <p>
            با توجه به اقلیم شهرستان مسجد سلیمان و زودرس بودن محصولات باغی، کاشت
            محصولاتی مانند هندوانه رونق دارد. معمولاً اولین هندوانه هایی که وارد
            بازارهای کشور می شوند متعلق به مناطق جنوبی کشور می باشند و قیمت آنها
            نیز در این موعد برای کشاورزان مناسب است. سازگاری آب و هوایی این
            محصول و بازار مناسب آن در فصل برداشت، کشت آن را در این شهرستان
            سودمند کرده است.{" "}
          </p>
          <p>
            سبزی و صیفی جات در سطح محدودی در شهرستان مسجد سلیمان تولید می شود و
            بیشتر نیاز شهرستان بصورت واردات از دیگر شهرستان ها تأمین می شود. یکی
            از راه های تأمین نیاز شهرستان ایجاد گلخانه های سبزی و صیفی جات می
            باشد که در حال حاضر بصورت خیلی محدود در این شهرستان وجود دارد.
            گياهان براي داشتن رشد مطلوب نياز به شرايط خاصي از نظر شدت نور، دماي
            روزانه، دماي‌شبانه، ميزان رطوبت نسبي هوا و رطوبت خاک دارند. براي
            توليد و پرورش تجاري گياهان با کيفيت بالا و در تمام طول سال بايد
            شرايط محيطي مطلوب مهیا شده و عوامل خسارت زا نظير آفات و بیماری ها،
            باد، طوفان هاي ويرانگر، سرما و يخبندان و ...کنترل شوند. گلخانه محیطی
            است که به راحتی می توان در داخل آن شرایط محیطی را تحت کنترل درآورد و
            به سمت رشد مطلوب گیاه سوق داد. گلخانه‌ها که از نظر اندازه متغیرند
            گیاهان را از سرمای بیش از حد زمستان یا گرمای بیش از حد تابستان حفظ
            می‌کنند. کشاورزی در گلخانه ها نسبت به کشاورزی در فضای آزاد و در زمین
            های کشاورزی دارای دردسر و مشکلات کمتری است، به علاوه بازه‌ی زمانی
            برای به ثمر نشستن و برداشت محصولات نیز نسبت به کشاورزی سنتی، کوتاه
            تر است. اما با این وجود پرورش گلخانه ای محصولات نیز نیاز به مراقبت
            های خاص خود را دارد. با توجه به مطالب گفته شده ایجاد گلخانه در مسجد
            سلیمان مزیت دارد.
          </p>
          <p>
            تولید انگور به عنوان یک محصول باغی با ارزش در مسجد سلیمان به صورت
            محدود انجام می شود. گرمای هوا به عنوان یک عامل منفی در برخی از سالها
            تولید این محصول را در مسجد سلیمان کاهش داده است. گسترش کاشت انگور در
            نواحی خوش آب و هوای شهرستان می تواند به ایجاد اشتغال و افزایش بهره
            وری باغها کمک کند. از جمله محصولات تهیه شده از انگور می توان به
            کشمش، شیره انگور و آبمیوه اشاره کرد. با گسترش باغات انگور می توان
            انتظار ایجاد مشاغل جدیدی در حوزه بسته بندی و فرآوری آن را داشت.{" "}
          </p>
          <p>
            در مسجد سلیمان کسب و کار پرورش گیاه آلوئه ورا در سطحی کم انجام می
            شود و سالانه مقداری مناسبی برگ و پاجوش آلوئه ورا از این مزارع برداشت
            می شود. گونه های مختلف آلوئه ورا گیاهانی مقاوم به گرما، خشکی،
            بیماری‌ها، آفات و حتی شوری هستند. علت مقاومت زیاد آن ها ساختار
            مرفولوژیکی این گیاه است. این گیاهان به سرما بسیار حساس هستند به
            طوریکه در دمای زیر 10 درجه سلسیوس رشد آن ها متوقف می شود. چنانچه این
            گیاه در مناطق گرم و خشک کاشته شود باید تحت آبیاری به موقع قرار
            بگیرد. آلوئه ورا را در هر نوع خاکی می توان کاشت ولی خاک های سبک که
            از زهکشی مناسبی برخوردار باشند برای کاشت این گیاه توصیه می شود.
            بازار و جایگاه آلوئه ورا در کشور جدید می‌باشد و آن چنان که باید
            جایگاه خود را پیدا نکرده اما این گیاه از اندک گیاهان دارویی است که
            علاوه بر مصرف دارویی در حوزه های آرایشی (مایع، ژل، کرم، لوسیون) و
            تغذیه ای (عصاره و نوشیدنی) نیز کاربرد دارد. با توجه به اقلیم شهرستان
            مسجد سلیمان گسترش کاشت این گیاه مزیت دارد.
          </p>
          <p>
            در شهرستان مسجد سلیمان توجه چندانی به پرورش قارچ نشده است و قارچ
            مورد نیاز شهرستان از شهرستان های دیگر تأمین می شود؛ بنابراین فرصت
            خوبی جهت سرمایه گذاری در این زمینه وجود دارد. قارچ غنی از پروتئین و
            ویتامین است و همین امر باعث شده که جایگزین مناسبی برای گوشت باشد. در
            برخی از شهرها و روستاها به دلیل عدم آشنایی با فواید قارچ، میزان مصرف
            این محصول پایین است که می توان با تبلیغ و معرفی این محصول، میزان
            مصرف را افزایش داد. همچنین پرورش قارچ از شغل هایی است که می توان با
            سرمایه اولیه کم و محیط کوچک شروع کرد.{" "}
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تولید محصولات کشاورزی و دامی مختلف در شهرستان مسجد سلیمان،
            بررسی‌ها نشان می‌دهد که سالانه مقداری از این محصولات در مراحل کاشت،
            داشت و برداشت به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید
            بسیاری از محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف
            آن‌ها در طی سال صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی و تکمیلی در
            این شهرستان می‌تواند زمان استفاده از محصولات را افزایش دهد و از
            میزان ضایعات آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی،
            ایجاد درآمد و جلوگیری از اتلاف و ضایع شدن محصولات در این شهرستان
            خواهد شد.
          </p>
          <p>
            در شهرستان مسجد سلیمان تعداد زیادی دام و واحد مرغداری وجود دارد که
            خوراک مورد نیازشان را از خارج از شهرستان تهیه می کنند؛ بنابراین
            احداث واحدهای تولید خوراک دام و طیور در شهرستان دارای مزیت است. این
            واحدها در صورتی که بتواند علاوه بر بازار فروش شهرستان در سایر نقاط
            نیز مشتری داشته باشد توجیه اقتصادی خواهند شد. با اجرای پروژه های
            تولید خوراک دام از ضایعات کشاورزی، هم خوراک مورد نیاز دام‌ها تأمین
            می شود و هم شهرستان را به خودکفایی از این نظر سوق می دهد. تولید
            خوراک دام می تواند زمینه اشتغال خوبی را به طور مستقیم و غیر مستقیم
            برای افراد ایجاد کند. در بخش طیور نیز حدود 60 درصد هزینه های پرورش
            مربوط به بخش تغذیه می باشد؛ بنابراین سرمایه زیادی جهت خرید خوراک
            هزینه می شود که با ایجاد کارخانه تولید خوراک طیور می توان از خروج
            سرمایه از شهرستان نیز جلوگیری کرد.
          </p>
          <p>
            در شهرستان مسجد سلیمان مقدار قابل توجهی عسل تولید می شود، اما در
            زمینه بسته بندی و برند سازی آن فعالیت چندانی صورت نگرفته است و عسل
            تولیدی در شهرستان های دیگر بسته بندی می شود؛ احداث کارگاه بسته بندی
            عسل هم باعث ایجاد اشتغال و هم افزایش ارزش افزوده محصول می شود. ویژگی
            مهم عسل آن است که این ماده طبیعی به دلیل نداشتن آب، به شرط دوری از
            رطوبت، در مدت طولانی فاسد نمی‌شود. این ماده فقط در صورتی ارزش غذایی
            خود را از دست می‌دهد که بیش از ۶۰ درجه، حرارت ببیند. البته برای حفظ
            قدرت ضد میکروبی عسل باید آن را در مکانی تاریک و یا در ظرف شیشه ای
            مات یا تیره خارج از یخچال نگه داشت. نگهداری عسل در ظروف فلزی برای
            مدت طولانی مناسب نیست. بدین منظور امروزه بسته بندی عسل به شکل های
            جذاب، خلاقانه و مناسب جهت نگهداری رو به افزایش است. بسته‌بندی های
            شکیل، باعث جذب بیشتر مشتری و همچنن تسهیل در حمل و نقل عسل می‌شود..
          </p>
          <p>
            در استان خوزستان و شهرستان مسجد سلیمان محصولات مختلف کشاورزی و باغی
            تولید می شود، اما نبود صنایع تبدیلی و تکمیلی بخصوص در بحث بسته بندی،
            باعث کاهش رغبت کشاورزان و سود اقتصادی تولیدات شده است و به نحوی می
            توان گفت که صنایع بسته بندی و فرآوری حلقه گمشده این کسب و کارها
            هستند. بسته بندی محصولات کشاورزی و باغی موجب جذب بیشتر مشتری و امکان
            ارسال آنها به نقاط دوردست می شود؛ بنابراین ایجاد واحدهای بسته بندی
            مرکبات برای شهرستان مزیت دارد.
          </p>
          <p>
            در شهرستان مسجد سلیمان تعداد زیادی دام پرورش داده می شود که محصولات
            فرعی آنها مانند پوست و پشم اغلب بدون استفاده دور ریخته می شود و یا
            اینکه در خارج از شهرستان فرآوری می گردد؛ بنابراین ایجاد یک واحد
            فرآوری پوست و پشم دام می تواند باعث اشتغال زایی و استفاده از فرآورده
            های فرعی دام شود. البته این کسب و کار در اولویت های بعدی مزیت شغلی
            قرار می گیرد. پوست دام در صنایع چرم سازی و پشم آن در صنایع ریسندگی
            کاربرد دارد.
          </p>
          <p>
            لازم به ذکر است که در صورت دقت نکردن به بازار فروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد؛
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازار فروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و عاملی مهم در توسعه پایدار امنیت غذایی شهرستان محسوب
            می‌شود. ایجاد صنایع غذایی در شهرستان مسجد سلیمان، علاوه بر
            اشتغالزایی، باعث ارتقای سطح درآمد کارآفرینان این حوزه نیز می‌شود.
            فرآوری محصولات غذایی باعث کاهش هدررفت محصولات کشاورزی و ایجاد ارزش
            افزوده از منابع می شود.
          </p>
          <p>
            با توجه به رونق دامداری و وجود کشتارگاه های دام و طیور در شهرستان
            مسجد سلیمان، راه‌اندازی کسب ‌و کار تولید محصولات فرآوری شده از گوشت
            نظیر سوسیس و کالباس مزیت دارد. محصولات غذایی فرآوری شده‌ای مانند
            سوسیس و کالباس معمولاً در هر زمانی سوددهی دارند و از کسب و کارهای
            پردرآمد محسوب می‌شوند. سوسیس و کالباس به دلیل آماده سازی سریع و
            همچنین طعم و مزه مطلوب، طرفداران خود را دارد. سوسیس و کالباس حاوی
            پروتئین های حیوانی کافی، چربی، کربوهیدرات و ویتامین است و می توان
            آن‌ها را از جمله غذاهای آماده در سفره خانواده ها نام برد. برای حفظ
            این جایگاه و افزایش تقاضای این محصولات، علاوه بر انتخاب روش های
            مناسب تولید و فراوری، باید به نوع و شکل بسته بندی آنها نیز توجه
            نمود.{" "}
          </p>
          <p>
            ترشی و خیارشور به طور معمول در سفره خانواده‌های ایرانی یافت می شوند
            و مصرف زیادی در کشور دارند. در شهرستان مسجد سلیمان نیز به تازگی
            فعالیت‌هایی جهت تولید صنعتی این مواد غذایی انجام شده است. فعالیت های
            مانند تولید ترشی و خیارشور را می توان بصورت خانگی و با سرمایه اندک
            راه اندازی کرد.{" "}
          </p>
          <p>
            در مسجد سلیمان میزان قابل توجهی شیر تولید می شود، اما بخش زیادی از
            این شیر برای فرآوری به کارخانه لبنیات در شهرستان شوش ارسال می شود .
            طبق بررسی های انجام شده به تازگی یک کارخانه فرآوری لبنیات در شهرستان
            راه اندازی شده است و طبق گفته کارشناسان بخش اشتغال شهرستان، قابلیت
            توسعه واحدهای فرآوری لبنیات در شهرستان وجود دارد.{" "}
          </p>
          <p>
            فعالیت در حوزه فرآوری گیاهان دارویی به دلیل بازار مصرف بسیار خوب
            دارای مزیت است. فرآوری آنها علاوه بر ارزش افزوده، نياز به
            سرمايه‌گذاري زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته
            باشد. یکی از فرآوری‌های گیاهان دارویی تولید عرقیات مختلف می باشد،
            تولید عرقیات دارای تکنولوژی و دانش فنی پیچیده ای نمی باشد و می‌توان
            به راحتی در این حوزه فعالیت کرد. عرقیات گیاهی بعنوان درمان، طعم
            دهنده و چاشنی کاربرد دارند و همواره استقبال خوبی از آنها می شود. کشت
            زراعی گیاهان داروئی در مسجد سلیمان چندان گسترش نیافته به همین دلیل
            این کسب و کار در اولویت های بعدی مزیت شغلی قرار می گیرد. برای کسب و
            کار عرق گیری در سطح کوچک می توان از گیاهان داروئی خودرو نیز استفاده
            کرد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در کشور ما
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود بخشی از
            مشکلات اشتغال رفع خواهد شد. در شهرستان مسجد سلیمان فعالیت در زمینه
            شیلات هم به صورت کاملاً‌ محدود انجام شده است اما در صورتی که منابع
            آبی تامین شود و یا از استخرهای دومنظوره کشاورزی برای این منظور
            استفاده گردد، می توان در زمینه پرورش ماهیان گرمابی مانند کپور در
            شهرستان فعالیت کرد. ماهیان گرمابی در محدوده دمایی 27-20 درجه
            سانتیگراد بهترین رشد را دارند. بزرگ‌ترین خانواده ماهيان آب شيرين،
            کپورماهیان هستند این ماهی در مقایسه با سایر گونه‌های پرورشی در
            آب‌های گرم و معتدل، ارزشمندترین ماهی ازلحاظ اقتصادی است و نیز
            ارزش‌های تغذیه‌ای فراوانی دارد.{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
