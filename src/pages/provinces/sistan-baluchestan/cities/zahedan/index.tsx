import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-16"].cities["IR-1610"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        birds: "طیور",
        food_industry: "صنایع غذایی",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        services: "خدمات",
        agriculture: "زراعت",
        gardening: "باغداری",
        fisheries: "شیلات",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان زاهدان با وسعت ۳۱۲۵۰ کیلومتر مربع معادل ۱۷ درصد از کل مساحت
            استان سیستان و بلوچستان را به خود اختصاص داده است. این شهرستان از
            شمال و شمال شرق به شهرستان‌های هامون و نیمروز و استان خراسان جنوبی
            از شرق به کشور پاکستان و افغانستان، از غرب به استان کرمان و از جنوب
            و جنوب شرق به شهرستان‌های خاش، ایرانشهر و میرجاوه محدود می شود. اکثر
            مردم این شهر با توجه به قومیت‌هایی که در اینجا ساکن شده‌اند از نژاد
            آریایی هستند و به زبان‌ها و گویش های فارسی، بلوچی، سیستانی، کرمانی،
            یزدی و خراسانی سخن می‌گویند. مسافت زاهدان تا تهران ۱۴۹۴ کیلومتر است
            و از سطح دریا ۱۳۸۵ متر ارتفاع دارد. هوای زاهدان گرم و خشک بوده و در
            روزهای تابستان هوا بسیار گرم و در شب ها حرارت به نحو محسوسی کاهش می
            یابد. بادهای ۱۲۰ روزه سیستان به طور غیر مستقیم در کاهش دمای شهرستان
            زاهدان تاثیر دارند و در این شهر به ندرت برف می بارد. این شهرستان
            دارای موقعیت ممتاز جغرافیایی است و در مسیر تردد بین المللی پاکستان و
            هندوستان – خراسان و کرمان قرار دارد. شکل زیر موقعیت شهرستان زاهدان
            را نشان می دهد.جمعیت این شهرستان طبق آخرین سرشماری در سال 95، 67257
            نفر بوده که شامل 168480 خانوار است.زاهدان شهر پرآوازه چند دروازه ای
            است که به دلیل مهاجرت پذیری تاکنون فرهنگی یک دست نیافته است. دین و
            مذهب مهمترین عامل اتحاد و همدلی مردم زاهدان است. وجود اقوام و ادیان
            و مذاهب اسلامی مختلف در شهر، آن را به الگویی نمادین برای دیگر شهرها
            در ایران و کشورهای دیگر تبدیل کرده است.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب ‌و كارهاي موجود در هر شهرستان بر مبناي
            يک روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب ‌و كار تدوين مي‌شود. اين
            شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده‌ شده و خروجي نرم‌افزار
            هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين
            اولويت‌بندي‌ها توسط كارشناسان و افراد خبره هر شهرستان بازبيني و
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده‌
            است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست‌ يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان
            زاهدان ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان‌طوري‌كه در قسمت قبل اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده ‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌ و كارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب ‌و كارهاي رايج به
            ترتيب اولويت مشخص شده‌است. در تحليل به مشاغل موجود، مشاغل قابل توسعه
            و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد آن‌ها در
            شهرستان وجود دارد، اشاره شده ‌است. مزيت‌هاي شغلي به ترتيب اولويت در
            ادامه آورده شده‌ است.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری در شهرستان زاهدان همواره به دلایل اقتصادی، فرهنگی و اجتماعی
            از قبیل منبع درآمد، باروری خاک و محصولات دامی مورد توجه مردم این
            منطقه قرار داشته است. دامداری سهم مهمی در اقتصاد مردم این منطقه ایفا
            می‌کند و توسعه آن می‌تواند باعث بهبود شرایط اقتصادی و کاهش درصد
            بیکاری در این شهرستان شود.
          </p>
          <p>
            دامداری در این شهرستان بیشتر به صورت سنتی است و مردم تمایلی به پرورش
            دام های اصلاح نژاد شده ندارند . در زمینه دام سبک بیشتر بز بلوچی و
            گوسفند و در زمینه دام سنگین بیشتر گاو بومی و شتر پرورش می‌یابد که
            این موارد همچنان ظرفیت توسعه را دارند و با توجه به اینکه با اقلیم
            این شهرستان سازگار هستند، ارزش افزوده زیادی را به همراه خواهند داشت.
          </p>
          <p>
            پرورش گوسفند بومی در میان سایر حیوانات بیشتر مورد توجه دامداران است؛
            زیرا توان بالای گوسفند برای تحمل اقلیم‌های متفاوت بیشتر است و جیره
            غذایی کمتری نیز مصرف می‌کند و در نتیجه هزینه کمتری نیز دارد. تمامی
            فرآورده‌های دامی مانند گوشت، شیر، ماست، کره و حتی پشم و پوست دام
            پرکاربرد هستند و فروش این فرآورده ها در تمامی روزهای سال انجام
            می‌شود. همچنین قیمت گوشت گوسفند بالا بوده و به علاوه اجزای گوسفند
            مانند دل، قلوه، جگر، سیرابی، کله پاچه، خوش گوشت و … قابل فروش هستند
            و خرید دام برای قربانی کردن در ایام مذهبی مانند عید قربان و … موجب
            رونق این کسب و کار می‌شود؛ بنابراین گسترش پرورش گوسفند سوددهی خوبی
            را به همراه خواهد داشت.
          </p>
          <p>
            بز منطقه بلوچستان یکی از زیرک ترین و گوشتی ترین حیوان این منطقه است.
            همچنین این نوع بز شیر نیز می دهد و برخلاف بقیه حیوانات خیلی چالاک
            است.
          </p>
          <p>
            پرورش شتر در این شهرستان در حد کم انجام می‌شود، اما قابلیت توسعه را
            دارد؛ زیرا شترداری یک کار پرسود است و مرگ و میر و بیماری های آن نسبت
            به بقیه دام ها کمتر بوده و هزینه نگهداری کمتری نیز دارد.
          </p>
          <p>
            امروزه با توجه به رشد جمعیت کشور و نیاز روزافزون جامعه به گوشت و
            مواد گوشتی و نقش مهم این محصولات در تامین پروتئین و غذای افراد
            جامعه، پرورش دام های پر بازده به منظور افزایش تولید و خودکفایی غذایی
            کشور، امری لازم و ضروری است. گاوهای بومی ایران به لحاظ تنوع و اختلاف
            ژنتیکی، ویژگی های خاص نژادی و مقاومت های طبیعی ایجاد شده در آن ها طی
            قرن ها زیست در شرایط سخت محیطی و آب و هوایی مختلف به عنوان یک منبع
            عظیم تولید شیر و گوشت می تواند نقش موثری در تامین مواد پروتئین
            حیوانی و اقتصاد جامعه ایفا نماید. در ضمن به عنوان مثال طبق آماری که
            اخیرا تهیه و ارائه شده است حدود 95.5 درصد از شیر مصرفی و حدود 50
            درصد از گوشت مصرفی انسان در سطح جهان از گاو به دست می آید. پوست گاو
            نیز به عنوان یک محصول با ارزش دامی امروزه به میزان 10 تا 20 درصد از
            مصارف چرم سازی را تامین می کند. حتی شاخ، سم و امحاء و احشاء این
            حیوان نیز ارزش اقتصادی داشته و به روش های مختلف مورد استفاده قرار می
            گیرد.
          </p>
          <p>
            البته در زمینه پرورش گاو های شیری مانند هلشتاین نیز در این شهرستان
            کار شده و همچنان ظرفیت توسعه را دارد .
          </p>
          <p>
            امروزه می‌توان برای رونق دامداری از پرورش گاو هلشتاین نیز استفاده
            کرد، زیرا این گاو جزء سنگین وزن ترین گاوهای شیری در جهان است که
            نگهداری آن توجیه اقتصادی دارد. این نژاد که از نظر تولید شیر بهترین
            نژاد در میان گاوهای شیری است، حدودا ۷۲۴۰ لیتر شیر در سال تولید می
            کند.
          </p>
          <p>
            با توجه به پوشش گیاهی شهرستان، می‌توان روی توسعه زنبورداری نیز کار
            کرد. مسلما اتکا به درآمدهای نفتی همیشگی نیست و یکی از راهکارهای
            توسعه اقتصادی کشور، توجه به صادرات غیر نفتی است. پرورش زنبور عسل از
            این نوع بوده که می تواند سود خوبی را به همراه داشته باشد. باردهی گل
            ها و میوه ها با گرده افشانی توسط زنبور عسل افزایش می یابد. این مسئله
            باعث شده ارزش اقتصادی زنبور عسل بسیار بیشتر از ارزش ریالی حاصل از
            تولید عسل باشد.
          </p>
          <p>
            در طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد کندوها می توان به
            فروش کندو نیز فکر کرد و به سود خوبی دست یافت. در مناطق گرمسیری از هر
            کندو یک بچه کندو گرفته می شود. در ضمن محصول مزرعه پرورش زنبور عسل
            صرفاً کندو و عسل نیست بلکه می‌توان موم، زهر و ژل حاصل از آن را نیز
            به فروش رساند.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            در این شهرستان تعدادی مرغداری گوشتی وجود دارد که تجهیزات به روزی
            دارند و دو یا سه سال است که فعالیت می‌کنند . توسعه این مورد نیز با
            توجه به بازار فروشی که دارد، قابلیت توسعه را دارد.
          </p>
          <p>
            در سال‌های نه‌چندان دور، بیشتر نیاز شهرها به گوشت مرغ از طریق
            روستاها و پرورش‌دهندگان سنتی تأمین می‌شد اما با افزایش جمعیت و محدود
            بودن منابع روستایی، پرورش متراکم مرغ رونق یافت. پرورش جوجه‌های گوشتی
            تجاری، داخل سالن‌های مجهز به تجهیزات کنترل دما و تهویه انجام
            می‌گیرد، به همین علت در اکثر نقاط کشور می‌توان پرورش مرغ گوشتی را
            انجام داد تا علاوه بر سود اقتصادی که برای پرورش‌دهنده دارد، موجب
            کاهش نیاز کشور به واردات این محصول و ایجاد اشتغال برای جوانان شود.
            از مزیت‌های اقتصادی این طرح می‌توان به بازار مطمئن‌تر گوشت مرغ،
            بازگشت سریع سرمایه، دسترسی نسبتاً آسان به مواد اولیه و خوراک، ضریب
            تبدیل غذایی کم و تولید گوشت بیشتر، وجود اتحادیه و تعاونی های متعدد
            را نام برد.{" "}
          </p>
          <p>
            پرورش بلدرچین در زاهدان به صورت سنتی و خانگی انجام می‌شود و بازار
            فروش خوبی نیز دارد ؛ بنابراین توسعه واحدهای پرورش بلدرچین و یا صنعتی
            کردن آن سودآور خواهد بود.
          </p>
          <p>
            بلدرچین پرنده‌ای پرجنب و جوش از خانواده ماکیان و زیرخانواده
            کبک‌سانان است و دارای گوشت بسیار لذیذ، خوش‌طعم و مقوی است. دلیل طعم
            مطبوع گوشت این پرنده وحشی، جست‌و‌خیز فراوان و پروازهای متناوبی است
            که در طول حیات خود انجام می‌دهد. با توجه به موفقیت واحدهای پرورش
            بلدرچین موجود، ایجاد چنین کسب و کاری، بازدهی بالایی خواهد داشت.
          </p>
          <p>
            پرورش مرغ بومی هم در این منطقه دنبال می‌شود و از دیگر مزیت های مناسب
            حوزه طیور است. یکی از دلایل استقبال از پرورش مرغ بومی، سوددهی بسیار
            خوب پرورش مرغ بومی یا محلی است. مرغ بومی یا همان مرغ های محلی ایران،
            نوعی نژاد بسیار مقاوم به شمار می آیند. آن ها در مقابل بیماری ها،
            گرما و سرما تحمل بالایی دارند و این مزیت باعث می شود که ایجاد
            واحدهای تولیدی مرغ بومی برای تولید کنندگان سوددهی داشته باشد. یکی
            دیگر از مزیت های پرورش مرغ بومی این است که این کار نیاز به تجهیزات
            زیادی ندارد. هرچند اگر در پرورش مرغ بومی یا همان مرغ محلی از تجهیزات
            مدرن استفاده شود، سود بیشتری نصیب پرورش دهنده خواهد شد. منظور از
            تجهیزات مواردی مانند آبخوری، دان خوری ، لانه تخم گذاری و... است.
          </p>
          <p>
            بعد از موارد فوق می‌توان روی توسعه پرورش بوقلمون در این شهرستان کار
            کرد و حتی اگر سرمایه گذار پیدا شود، می‌توان در جهت احداث واحد های
            صنعتی نیز اقدام کرد.
          </p>
          <p>
            در طي چند دهه گذشته توجه به بوقلمون و محصولات آن موجب شده تا پرورش
            آن به صورت صنعتي در ايران و جهان آغاز و طي چند سال اخير نيز به مرز
            قابل قبولی برسد تا جایي که امروزه شاهد افزايش روز افزون مصرف گوشت و
            ساير فرآورده هاي آن هستيم. از آنجا که گوشت بوقلمون دارای خواص غذایي
            ويژه ای بوده و محدوديت مصرف خاصي نيز ندارد؛ لذا مي تواند به عنوان
            جايگزين مناسبی براي گوشت قرمز علی الخصوص در بيمارانی که مصرف گوشت
            قرمز برای آنها با محدوديت هایی همراه است، مطرح گردد. از ديگر
            امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز در يک لاشه
            است. گوشت سفيد 65 درصد و گوشت قرمز 35 درصد از وزن يک لاشه 8 کيلوگرمی
            را تشکيل مي دهد. عواملی چون افزایش استانداردهای سطح معیشتی و رشد
            سریع شهرنشینی، افزایش توجه به غذاهای غربی و همچنین اهمیت به جذب هر
            چه کمتر چربی، سبب افزایش تولید و مصرف گوشت بوقلمون در دهه گذشته شده
            است و نیز تولید بوقلمون گوشتی به دلیل به صرفه بودن تولید، در دسترس
            بودن نهاده های بوقلمون، نیاز بازار داخلی و نیز امکان انجام صادرات به
            کشورهای منطقه حائز اهمیت است.
          </p>
          <p>
            در ادامه نیز می‌توان به پرورش کبک، قرقاول و شتر مرغ اشاره کرد. این
            موارد هم اکنون نیز در این منطقه پرورش می‌یابند و قابلیت سرمایه گذاری
            و توسعه را دارند؛ زیرا با اقلیم این منطقه سازگار بوده و به سبب وجود
            دروازه گمرک در شهرستان زاهدان، می‌توان آنها را به کشور های همسایه
            صادر کرد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            کارخانه فراوری محصولات کشاورزی مهم‌ترین روش برای ایجاد اشتغال پایدار
            و کاهش وابستگی به درآمد های نفتی و عاملی مهم در توسعه پایدار امنیت
            غذایی کشور است. ایجاد صنایع غذایی در شهرستان زاهدان، علاوه بر ایجاد
            اشتغال و کاهش هدررفت محصولات کشاورزی، باعث ارتقای سطح درآمد مردم این
            منطقه شده و موجبات کاهش فقر در این شهرستان را فراهم می‌آورد.
          </p>
          <p>
            میزان تولید گوشت در این شهرستان به حدی است که بتوان واحد فراوری گوشت
            مانند تولید سوسیس و کالباس را احداث کرد.
          </p>
          <p>
            در بین فراورده‌های عمل‌‌آوری شده از گوشت، سوسیس و کالباس به دلیل
            آماده سازی سریع و همچنین طعم و مزه مطلوب، مصرف بیشتری دارند. برای
            حفظ این جایگاه و افزایش تقاضای این محصولات، علاوه بر انتخاب روش های
            مناسب تولید و فراوری، باید به نوع و شکل بسته بندی آنها نیز توجه
            نمود. سوسیس و کالباس از رایج ترین فراورده های گوشتی عمل آوری شده
            هستند که مورد توجه مردم قرار گرفته اند. سوسیس و کالباس حاوی پروتئین
            های حیوانی کافی، چربی، کربوهیدرات و ویتامین بوده و می توان آنها را
            از جمله غذاهای آماده در سفره خانواده ها نام برد؛ بنابراین ایجاد
            واحدی برای تولید سوسیس و کالباس با توجه به وجود مواد اولیه آنها در
            این شهرستان، سودآور خواهد بود. تولید محصولات فرآوری شده از گوشت، در
            هر زمانی سوددهی دارد و از شغل‌های آزاد پردرآمد محسوب می‌شود. در
            صورتی که بتوان محصولات فرآوری شده گوشتی با کیفیت بالا و ضریب سلامتی
            مناسب در خط تولید داشت؛ به سرعت برند تجاری به شهرت رسیده و درصد فروش
            دائمی خواهد داشت.
          </p>
          <p>
            با توجه به تولید بالای خرما در استان سیستان و بلوچستان، فراوری خرما
            ارزش افزوده زیادی را به همراه خواهد داشت. در حال حاضر خرمای استان به
            صورت فله ای از استان خارج می‌شود و اگر فراوری آن در شهرستان زاهدان
            انجام شود، می‌توان خرما را از دیگر شهرستان ها وارد کرد و پس از
            فراوری به فروش رساند تا سود بیشتری نیز نصیب باغدار شود.
          </p>
          <p>
            فرآوری خرما با دو هدف تبدیل کردن خرما به یک محصول دیگر با ارزش
            اقتصادی بیشتر و افزایش عمر ماندگاری آن انجام می‌شود. همچنین در این
            شیوه می‌توان با تنوع بخشیدن و افزایش عمر ماندگاری، باعث گسترش بازار
            مصرفی این محصول شده و طیف گسترده‌ای از مصرف‌کنندگان را جذب کرد. نحوه
            تولید فراورده‌های خرما، به‌صورت سنتی و صنعتی انجام می‌شود، که این دو
            شیوه تولید با هم متفاوت هستند. از جمله فرآورده‌های خرما می‌توان به
            محصولاتی مانند شیره، سرکه، کارامل، قند مایع، عسل، خمیر خرما (برای
            تهیه شیرینی و بیسکوئیت و رولت خرما)، شهد، کرم، مخمرهای خوراکی، آرد
            هسته خرما، سس، کمپوت، لواشک، ترشی، بستنی و حلوای خرما اشاره کرد.
            فرآورده‌هایی که از خرما تهیه می‌شوند، به دلیل اینکه در ساختار خود
            دارای ترکیبات افزودنی غیرطبیعی نیستند و ارزش غذایی بالایی دارند،
            مورد توجه مصرف‌کنندگان قرار دارند. از طرفی تولید فرآورده‌های خرما،
            منطبق بر استانداردهای جهانی، زمینه را برای صادرات هر چه بیش‌تر این
            نوع محصولات افزایش می‌دهد.
          </p>
          <p>
            فراوری انبه شامل تهیه چیپس میوه، کنسانتره و ترشی انبه نیز از مزیت
            های خوب این حوزه است؛ البته مواد اولیه آن را باید از شهرستان های
            اطراف و پاکستان تهیه کرد .{" "}
          </p>
          <p>
            ظرفیت افزایش واحد فراوری لبنیات نیز در شهرستان وجود دارد؛ البته این
            مورد در صورتی سودآوری خواهد داشت که دامداری ها توسعه یابند و یا شیر
            از سایر مناطق وارد شود؛ زیرا در حال حاضر واحدهایی برای فراوری شیر
            وجود دارند که برای شیر تولیدی در شهرستان کفایت می‌کند.
          </p>
          <p>
            شیر و فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان
            می‌باشند که از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز
            و پروتئین غنی هستند و همیشه استقبال بسیار خوبی از این نوع محصولات می
            شود. البته باید توجه داشت که برای موفقیت در زمینه تولید لبنیات باید
            به بالا بردن توانایی در زمینه رقابت با برندهای معروف نیز فکر کرد.
          </p>
          <p>
            توسعه فراوری شیر شتر شامل تهیه دوغ و سایر لبنیات شتر هم در صورت
            فرهنگسازی مصرف این موارد در بین مردم، توجیه اقتصادی دارد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            بیشتر معادن شهرستان شامل گرانیت و مس است، اما هنوز به بهره برداری
            نرسیده است؛ لذا فراوری معادن در صورت سرمایه گذاری، ارزش افزوده زیادی
            دارد .
          </p>
          <p>
            وجود نور خورشید و عدم وجود هوای ابری در شهرستان باعث می‌شود که احداث
            نیروگاه خورشیدی از دیگر مزیت های مناسب برای شهرستان زاهدان باشد.
            خورشید منبعی پایان ناپذیر به شمار می آید و جایگزینی مناسب برای
            سوخت‌های فسیلی است. به کارگیری پنل خورشیدی فواید قابل توجهی برای
            اقتصاد و محیط زیست به دنبال دارد و انرژی تولید شده توسط پنل های
            خورشیدی پاک و قابل تکیه است.
          </p>
          <p>
            فلز روی نیز به صورت خام به بندر ارسال شده و سپس به خارج از کشور صادر
            می‌شود ؛ بنابراین فراوری این مورد نیز به دلیل وجود مواد اولیه در این
            شهرستان قابلیت سرمایه گذاری را دارد.
          </p>
          <p>
            روی مانند بسياری از فلزهای ديگر در طبيعت يافت می‌شود و جهت آسان تر
            کردن زندگی انسان در بخش‌های زيادی کاربرد دارد. برای مثال اکسيد روی
            در شيشه، لعاب‌ها، لاستيک، رنگيزه‌ها، سفالينه، پلاستيک سازی و
            کاغذسازی تحت عنوان سفيد روی يا سفيد برفی استفاده می شود. کلريد روی
            جهت جلوگيری از پوسيدن چوب استفاده می شود. آلياژ روی نیز در صنعت به
            دليل قابليت‌های منحصر به فردش اهميت بسيار بالايی دارد.
          </p>
          <p>
            سرمایه گذاری روی صنعت چوب و مبلمان نیز در شهرستان زاهدان جواب می‌دهد
            .
          </p>
          <p>
            در زمینه تولید لوازم بهداشتی، لوازم شوینده، پوشاک، قطعات ماشین و
            لوازم و مصالح ساختمانی نیز در این شهرستان جای کار وجود دارد. این
            موارد در حال حاضر وارداتی هستند و در داخل شهرستان نمایندگی دارند .
          </p>
          <p>
            یک کارخانه تولید کود و سموم شیمیایی در شهرستان وجود دارد که تحت
            عنوان اریا شیمی فعالیت می‌کند .
          </p>
          <p>
            در این شهرستان یک شهرک صنعتی و یک شهرک کارگاهی وجود دارد. در شهرک
            کارگاهی واحدهای نجاری، مکانیکی، قالی شویی و جوشکاری فعال هستند و در
            شهرک صنعتی نیز واحدهای تولید تور ماهیگیری، پودر لباسشویی، تولید سموم
            کشاورزی و آفات، پوشاک نظامی، سیمان، لبینات، کیک و کلوچه و مبلمان
            فعالیت می‌کنند .
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            در شرایط فعلی که بیکاری از مشکلات اساسی جامعه می باشد و پیامدهای
            اقتصادی و اجتماعی بسیاری به دنبال دارد، راه اندازی و توسعه کسب و کار
            خانگی راهکاری کم هزینه و پر بازده است. مشاغل خانگی علاوه بر
            درآمدزایی برای اقشار گوناگون، سهمی نیز در افزایش تولید ناخالص داخلی
            دارد؛ به همین دلیل مورد توجه و حمایت مراجع سیاست گذاری می باشد. واضح
            است زنان به عنوان نیمی از جمعیت کشور، می توانند نقشی بسزایی در رونق
            اقتصادی کشور داشته باشند؛ مخصوصا اگر زمینه های اشتغال آن ها در خانه
            فراهم گردد، فرصتی است تا با بهره گیری از محیط امن خانه کسب درآمد
            داشته باشند. سوزن دوزی های سنتی بخشی از صنایع دستی در شهرستان است که
            قدمتی طولانی دارد و غالبا از گذشته در خانه توسط بانوان انجام می شده
            است. این هنر ظرفیت آن را دارد تا به عنوان زمینه ای برای ایجاد کسب و
            کار خانگی توسط زنان مطرح شود؛ زیرا مردم شهرستان لباس محلی سوزن دوزی
            شده را می‌پوشند؛ بنابراین بازار فروش خوبی در شهرستان و تهران خواهد
            داشت .
          </p>
          <p>
            بازار فروش صنایع دستی به غیر از استان، نمایشگاه‌های خارج از استان
            مثل تهران است که استقبال خوبی هم دارد؛ بنابراین سیاه دوزی، خامه دوزی
            و دوزندگی لباس محلی که کمرنگ شده بود، توسط اموزشگاه ها در حال احیا
            است و کار کردن در این حوزه علاوه بر اشتغال زایی، صرفه اقتصادی نیز
            دارد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان زاهدان، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از محصولات تولید شده در شهرستان در مراحل
            کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا
            تولید بسیاری از محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛
            اما مصرف آن‌ها در طی سال صورت می‌پذیرد؛ لذا احداث صنایع تبدیلی در
            این شهرستان می‌تواند زمان استفاده از محصولات کشاورزی را افزایش دهد و
            از میزان ضایعات آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی،
            ایجاد درآمد و جلوگیری از اتلاف و ضایع شدن محصولات کشاورزی در این
            شهرستان می‌گردد.{" "}
          </p>
          <p>
            شهرستان زاهدان دارای مراتع با اررشی است که به دلیل پایین بودن هزینه
            تأمین علوفه از آنها در مقایسه با هزینه تولید علوفه از طریق کشت آبی
            فشار زیادی بر آن وارد می شود و با توجه به افزیش دامپروری و
            مرغداری‌ها و پایین بودن ظرفیت تولیدی مراتع این فشار بیشتر و بیشتر
            می‌شود و برای جلوگیری از تخریب مراتع باید به فکر منابع غذایی غیر
            مرتعی باشیم. با توجه به اینکه محصول تولیدی توسط دام های موجود در
            شهرستان به مصرف می رسد و از طرفی آمار تعداد دام نیز هر روز رو به
            افزایش است؛ لذا هر سال نسبت به سال گذشته مقدار بیشتری علوفه و خوراک
            دام مورد نیاز است؛ بنابراین می‌توان با فراوری ضایعات کشاورزی و ...،
            خوراک دام و طیور با ارزش غذایی بالا تولید کرد و کشور را به خودکفایی
            در این زمینه سوق داد. استفاده از مواد اولیه ارزان در تولید این
            خوراک‌ها سبب می‌شود تا قیمت تمام شده آن پائین تر و در نتیجه قیمت
            فروش آن نیز پایین باشد. تولید خوراک دام و طیور می تواند زمینه اشتغال
            خوبی را به طور مستقیم و غیر مستقیم برای افراد در این شهرستان ایجاد
            کند.
          </p>
          <p>
            طبق لیست مزیت، بسته‌بندی ادویه مخصوص سیستانی نیز از جمله مواردی است
            که در بین مردم طرفداران زیادی داشته و قابل سرمایه گذاری است.
          </p>
          <p>
            یک سردخانه محصولات کشاورزی در تره بار شهرستان و یک کشتارگاه صنعتی
            دام نیز در این شهرستان وجود دارد که در آنجا گوشت قرمز نیز بسته بندی
            می‌شود؛ بنابراین واحدهای فوق نیاز شهرستان در این خصوص را رفع
            می‌کنند.
          </p>
          <p>
            حجم پوست و پشم دام تولید شده در شهرستان در مراسمات مذهبی به حدی است
            که یک کارگاه فراوری پوست در شهرستان باید به صورت مداوم 6 ماه از سال
            را کار کند تا این میزان پوست را فرآوری نماید؛ بنابراین ایجاد واحد
            فراوری پوست دام شامل استفاده از پوست گاو در صنعت چرم دوزی و همچنین
            استفاده از پشم و کرک گوسفند و بز در صنعت ریسندگی، ضمن ایجاد درآمد
            مناسب برای سرمایه گذار، سود خوبی هم نصیب دامدار می‌کند؛ زیرا در حال
            حاضر پوست دام در این شهرستان فراوری نمی‌شود.
          </p>
          <p>
            پسته تولید شده در شهرستان زاهدان به صورت فله‌ای به فروش می‌رسد؛ اما
            مقدار آن به اندازه‌ای نیست که بسته بندی و فراوری آن قابلیت
            سرمایه‌گذاری داشته باشد .
          </p>
          <p>
            لازم به ذکر است در صورت دقت نکردن به بازارفروش و ظرفیت شهرستان، تمام
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد.
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازارفروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            با توجه به حجم مسافر در شهرستان زاهدان می‌توان در زمینه احداث
            اقامتگاه، سینما چند بعدی، شهربازی و مجتمع تفریحی-سرگرمی کار کرد. این
            موارد در حال حاضر در شهرستان وجود دارند؛ ولی امکانات آن‌ها کم است و
            یا قدیمی شده‌اند .
          </p>
          <p>
            مجتمع تفریحی- سرگرمی به تاسیساتی گفته می‌شود که مجموعه ای از واحدهای
            گردشگری در آن ساخته شده باشد. فروشگاه ها، رستوران ها، اغذیه فروشی
            ها، تسهیلات ورزشی، فضای بازی و تفریحی، اقامتگاه ها، مراکز توریست
            گردانی و ... از جمله امکاناتی است که در این مجتمع ها ارائه می‌شود.
          </p>
          <p>
            همچنین در اکثر این تاسیسات، واحدهای ساخته شده دارای اتاق، مانند هتل،
            کلبه و ویلا عرضه می‌شود.
          </p>
          <p>طبق لیست مزیت سنجی، ایجاد خدمات خودرو هم سودآور خواهد بود.</p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی کشورهای مختلف نقش‎های متعددی
            بر عهده دارد که از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و
            اولیه مورد نیاز صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار،
            مصرف تولیدات سایر بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و
            ماشین‌آلات کشاورزی، ارزآوری برای کشور و تامین مالی سایر بخش‎های
            زیربنایی را یاد کرد. شهرستان زاهدان با داشتن آب و هوایی مناسب و خاک
            حاصلخیز می‌تواند در حوزه زراعت پیشرفت‌هایی خوبی داشته باشد و زمینه
            اشتغال تعداد زیادی از جوانان را از این طریق فراهم آورد.
          </p>
          <p>
            کشت هر دو نوع ذرت علوفه ای و دانه ای در این شهرستان به مقدار زیاد
            انجام می‌شود و همچنان هم قابلیت توسعه و سوددهی را دارد. ذرت با هر آب
            و هوایی سازگاری دارد و در برابر خشکی مقاوم بوده و میزان ثمردهی آن
            نیز در هکتار بالا است. در ضمن دولت برای تشویق به کشت این گیاه، اقدام
            به خرید تضمینی ذرت از کشاورزان می کند. روغن ذرت، کنسرو بلال و دانه
            ذرت به مصارف انسانی می رسد و همچنین دانه ذرت در مرغداری ها و علوفه
            تر، خشک، سیلو شده و کنجاله دانه آن نیز در دامداری‌ها استفاده می شود.
            کاکل ذرت در داروسازی به کار می رود و از ساقه و برگ ذرت نیز در صنایع
            کاغذ، مقواسازی و تولید کاغذ دیواری استفاده می کنند. نشاسته ذرت در
            صنایع رنگرزی، داروسازی و پلاستیک سازی کاربرد دارد.{" "}
          </p>
          <p>
            بررسی های انجام شده نشان می‌دهد که سطح زیر کشت یونجه در این شهرستان
            خوب است و هنوز هم جای کار دارد .
          </p>
          <p>
            در میان گیاهان علوفه ای، یونجه به دلیل ارزش غذایی بالا و عملکرد خوب
            از اهمیت خاصی برخوردار است. همچنین به علت وجود باکتری‌های ریزوبیوم
            در ریشه های خود قادر به تثبیت ازت هوا بوده که این ازت برای کشت بعدی
            قابل استفاد است و می توان حداقل تا ۳ سال محصول برداشت نمود و امکان
            تامین بخشی از علوفه مورد نیاز جهت تعلیف احشام را فراهم نمود که علاوه
            بر ایجاد اشتغال مولد و حصول درآمد مناسب برای زارعین، در استفاده
            بهینه از ظرفیت های پرورش دام کشور نیز موثر بوده و موجب کاهش وابستگی
            به خارج از کشور در زمینه پروتئین دامی می گردد.
          </p>
          <p>
            کشت گندم در حال حاضر در این شهرستان در حال انجام است و قابلیت توسعه
            را نیز دارد.
          </p>
          <p>
            در میان محصولات کشاورزی، کاشت گندم نسبت به بقیه محصولات کم دردسرتر و
            کم آفت تر است. گندم در بازه زمانی حدودا هشت ماه به ثمر نشسته و به
            مرحله سوددهی می رسد. خرید تضمینی گندم همه ساله توسط دولت انجام می
            گیرد؛ البته خود کشاورز نیز می تواند گندم خود را به صورت آزاد به فروش
            برساند و درآمد خوبی را نیز کسب کند. کشاورزان با کاشت گندم علاوه بر
            اعطای تسهیلات بانکی، کود شیمیایی و بذر را نیز به صورت یارانه ای
            دریافت می‌کنند.
          </p>
          <p>
            توسعه کشت جو نیز با توجه به سازگاری آن با اقلیم شهرستان، از جمله
            گزینه های شغلی مناسب است که سوددهی مناسبی را به همراه خواهد داشت. از
            جو برای تهیه نان و پخت سوپ استفاده می شود. این گیاه در تهیه غذای
            کودک نیز کاربرد دارد. جو از دیر باز در سبد تغذیه دام جایگاه ویژه
            داشته و به صورت دانه و علوفه سبز مورد استفاده قرار می‌گیرد. جوشانده
            جو داروي خوبي براي مبتلايان به تب و كم خوني و سوء هاضمه بوده و پایین
            آورنده کلسترول است؛ لذا افزایش تولید این مورد نیز زمینه های لازم
            برای رشد و پیشرفت را دارد؛ زیرا با اقلیم این شهرستان سازگار بوده و
            هم اکنون نیز به صورت انبوه کشت می‌شود.
          </p>
          <p>
            کشت گیاهان دارویی در منطقه، به لحاظ دارا بودن شرایط جوی مناسب انجام
            شده است و همچنان هم جای کار دارد؛ زیرا امروزه افراد زیادی به استفاده
            از گیاهان دارویی متمایل شده اند. خواص بی نظیر این گیاهان و نداشتن
            عوارض جانبی ناشی از مصرف باعث شده تا افراد زیادی به صور مختلف از آن
            ها استفاده کنند. به همین جهت به کشت گیاهان دارویی می توان به چشم یک
            مزیت پر سود نگریست. از آن جا که این گیاهان برای کشت به مراقبت خاصی
            نیاز ندارند، می‌توان روی کشت آن‌ها سرمایه گذاری کرد.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری از جمله رسته‌های شغلی است که با توجه به شرایط آب و هوایی و
            حاصلخیزی خاک شهرستان زاهدان قابلیت توسعه و پیشرفت را دارد و می‌تواند
            زمینه‌ساز اشتغال بسیاری از جوان این منطقه شود.
          </p>
          <p>
            پسته از گذشته به عنوان یکی از محصولات کشاورزی و خشکبار صادراتی ایران
            در دنیا شناخته شده است. به حدی که در کنار فرش ایرانی و زعفران جایگاه
            ویژه‌ای در صادرات غیرنفتی کشورمان دارد . همچنین به دلیل شرایط زیست
            محیطی ایران و نیز سابقه درخشان در تولید و صادرات پسته در جهان، این
            محصول می تواند در بالاترین رنج سودآوری باشد. درختان پسته را به آسانی
            می‌توان در اکثر خاک ها با بافت و جنس مختلف کاشت، به شکلی که در زمين
            ‌های آهکی و شور هم طاقت و تحمل آن بهتر از ساير درختان ميوه است.
          </p>
          <p>
            محصول پسته به لحاظ اهمیتی که اندام های مختلف گونه های متعدد درختان
            پسته از نظر خوراکی و صنعتی دارد همواره حائز اهمیت فراوانی بوده و
            انسان از میوه، پوست، هسته، برگ، ساقه و حتی صمغ آن نیز استفاده می
            برده است. پسته این شهرستان نیز از جمله محصولات باغی است که ظرفیت و
            پتانسیل های لازم برای گسترش را دارد و با توجه به موارد گفته شده،
            سودآور خواهد بود.
          </p>
          <p>
            طبق بررسی های انجام شده، توسعه باغات خرما در شهرستان زاهدان بازدهی
            خوبی خواهد داشت.
          </p>
          <p>
            خرما از جمله محصولات باغی است که با آب و هوای گرم و اقلیم جغرافیایی
            کویری سازگاری دارد. نخل خرما یکی از بهترین انواع درخت برای سرمایه
            گذاری است و هیچ محصول بیهوده ای ندارد. برگ آن خوراک گوسفند و برای
            هنرهای جارو بافی، سبد بافی و حصیر بافی کاربرد فراوان دارد و به دلیل
            فواید بی شماری که دارد، علی رغم افزایش قیمتی که داشته، بازار فروش
            خوبش را در بین مردم کشور ما حفظ کرده است. این خوراکی سرشار از انواع
            ویتامین‌ها، مواد معدنی و فیبر است. این میوه خوشمزه حاوی روغن، کلسیم،
            گوگرد، آهن، پتاسیم، فسفر، منگنز، مس و منیزیم است که همگی برای حفظ
            سلامتی بدن مفید هستند.
          </p>
          <p>
            تعداد باغات انجیر در شهرستان زاهدان کم است اما قابلیت گسترش آن تا دو
            برابر نیز در این شهرستان وجود دارد. در اکثر نقاط ایران و در بسیاری
            از استان‌ها ارقام مختلف انجیر در سطح وسیعی قابل ‌کشت و تولید است.
            نیاز آبی بسیار کم و سازگاری با محیط و استقامت در برابر گرما و
            خشکسالی از ویژگی‌های بارز این گیاه محسوب می‌شود.
          </p>
          <p>
            از آنجا که باغ‌های انجیر معمولاً در دامنه‌های شیب‌دار احداث
            می‌گردند، احداث چنین باغ‌هایی علاوه بر ایجاد اشتغال و پوشش گیاهی
            مناسب برای منطقه و بیابان‌زدایی، می‌تواند به کنترل سیلاب و جلوگیری
            از فرسایش خاک و استفاده بهینه از آب باران کمک کند.{" "}
          </p>
          <p>
            وجود باغات زیتون در برخی از مناطق شهرستان نشان دهنده وجود پتانسیل
            های لازم برای توسعه این کسب و کار است. زیتون به موجب مقاومت به
            کم‌آبی و سازگاری با خاک‌های فقیر و کم بازده و تولید محصول ارزشمند،
            از نظر اقتصادی حائز اهمیت بوده و به محصول ثروتمند خاک‌های فقیر مشهور
            است. بدون شک کسب درآمد، اصلی‌ترین هدف از تولید هر نوع محصولی است.
            زیتون به دلیل استقامت و طول عمر و سازش با محیط‌های مختلف به دیگر
            درختان برتری دارد تا جایی که علاوه بر کشت در باغات و اراضی کشاورزی
            در توسعه فضای سبز شهری نیز از این درخت مقاوم استفاده می‌شود. زیتون
            علاوه بر خواص درمانی، دارای مزیت‌های اقتصادی ارزشمندی از جمله تولید
            روغن، کنسرو زیتون، کمک به معیشت کشاورزان با زیر کشت بردن اراضی کم
            بازده فقیر و شور، اشتغال‌زایی و جلوگیری از مهاجرت است.
          </p>
          <p>
            گل محمدی، گیاهی مقاوم به کم آبی، آفات و امراض است که علاوه بر خواص
            درمانی، دارای مزیت‌های اقتصادی فراوانی مانند ارزش صادراتی، جذب
            گردشگر و اشتغال‌زایی است. غنچه خشک، مایع گلاب، روغن و اسانس،
            فرآورده‌های برگرفته از گل محمدی است که علاوه بر عرضه در بازارهای
            داخلی، قابلیت صادرات به کلیه کشورهای جهان را دارا هستند. کشور ما
            می‌تواند بالاترین مرجع تولید و بهترین تولیدکننده گل محمدی در دنیا
            باشد، چرا که این پتانسیل در ایران وجود دارد. در مورد بازار جهانی
            نیز، پرورش و کشت گل محمدی، بیش از 30 میلیارد یورو در دنیا گردش مالی
            دارد. از آنجایی که بحران کمبود آب در کشور در چند سال اخیر به حد
            هشدار خود رسیده، تغییر الگوی کشت در کلیه فعالیت‌های کشاورزی متناسب
            با شرایط منطقه جزء سیاست های دستگاه‌های ذی‌ربط قرار گرفته است. گل
            محمدی، مصرف آب کمتری نسبت به دیگر محصولات دارد و از این رو توجه به
            کشت این محصول ضمن افزایش راندمان آب و به دست آوردن ارزش افزوده محصول
            کشاورزی، حائز اهمیت است و می‌توان جایگزین کشت گندم شود.{" "}
          </p>
          <p>
            کاشت آلوئه ورا از جمله مواردی است که با توجه به شرایط این شهرستان،
            پتانسیل های توسعه را دارد. از ویژگی‌های مثبت برای پرداختن به این
            کسب‌ و کار می‌توان به بازار رو به رشد، رسیدن به تولید با سرمایه کم،
            نیاز کم به آبیاری، قابلیت برداشت محصول در فصول مختلف سال، عدم نیاز
            به استفاده از کود و سموم شیمیایی و داشتن مصارف مختلف مانند مایع،
            پودر، ژل، کرم، لوسیون، کپسول، عصاره و نوشیدنی اشاره کرد.
          </p>
          <p>
            با توجه به وجود باغات آناناس، زردآلو و مرکباتی مانند پرتقال در این
            شهرستان، توسعه این موارد هم سوداوری خوبی را به همراه خواهد داشت.
          </p>
          <p>
            تعداد گلخانه‌های این شهرستان به دلیل مسئله بحران آب، خیلی کم است و
            گلخانه‌دارها بیشتر در منطقه میرجاوه فعالیت می‌کنند؛ بنابراین به نظر
            می‌رسد کار کردن در این حوزه سوددهی خوبی نداشته باشد .
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی با توجه به کمبود آب در این شهرستان انجام نمی‌شود و به نظر
            می‌رسد، سرمایه گذاری در این زمینه سودآوری نداشته باشد .
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
