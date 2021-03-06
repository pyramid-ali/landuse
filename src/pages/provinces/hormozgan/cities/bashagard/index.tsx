import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-29"].cities["IR-2903"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        agriculture: "زراعت",
        gardening: "باغداری",
        livestock: "دامداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        services: "خدمات",
        birds: "طیور",
        food_industry: "صنایع غذایی",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            بشاگرد (یا در گویش محلی بَشکَرد) یکی از شهرستان‌های استان هرمزگان
            واقع در جنوب ایران است. مرکز این شهرستان، شهر سردشت است. این شهرستان
            قبلا بخشی از شهرستان جاسک در استان هرمزگان بود که در سال ۱۳۸۵ به
            شهرستان ارتقاء یافت. شهرستان بشاگرد از شمال به استان کرمان، از شرق
            به استان سیستان و بلوچستان، از جنوب به شهرستان جاسک و از غرب به
            شهرستان های میناب و سیریک محدود می شود.
          </p>
          <p>
            جمعیت این شهرستان طبق سرشماری عمومی نفوس و مسکن در سال 1395، برابر
            با 35058 نفر برآورد شده است. این شهرستان شامل بیش از ۲۷۰ روستا و
            آبادی کم‌جمعیت است که در شمال شرق استان هرمزگان و همجوار با استان
            کرمان و سیستان و بلوچستان پراکنده هستند .
          </p>
          <p>
            شهرستان بشاگرد دارای آب و هوای گرم و خشک و در محدوده شمالی، مناطق
            دهستان درابسر و بخش گوهران به دلیل وسعت کوهستانی، آب و هوای معتدل
            دارد . شکل زیر موقعیت شهرستان بشاگرد را نشان می دهد.
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
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی را
            نام برد. با توجه به نظر کارشناسان و داده های آمارنامه سازمان جهاد
            کشاورزی، کاشت سیر در شهرستان بشاگرد بسیار رایج بوده و بعد از آن
            پیاز، گندم و باقلا رتبه های بعدی را از نظر سطح زیر کشت دارند. در
            ادامه می توان به کاشت جو، یونجه و گیاهان دارویی در شهرستان اشاره کرد
            که در ادامه توضیحاتی راجع به آن ها داده می شود.
          </p>
          <p>
            مردم شهرستان بشاگرد به دلیل آفات کمتر و بازار فروش خوب سیر، تمایل
            زیادی به کشت این گیاه دارند ؛ به طوری که سطح زیر کشت آن در این
            شهرستان، بیش از 170 هکتار می باشد. بازار مصرف خوب این محصول باعث شده
            است که کشت آن برای شهرستان مزیت داشته باشد. سالاری، روستا‌های تیدر،
            شهرشیب کلاه، خمینی شهر، ملکن، کاهکن، شه بابک وگوهران از مناطق مهم
            کشت سیر در این شهرستان هستند. سیر گیاهی است که نسبت به سایر محصولات
            آفت و بیماری کمتری دارد؛ بنابراین می توان آن را با دردسر کمتری به
            صورت کاملا ارگانیک تولید کرد. سیر از جمله محصولاتی است که می توان
            تمام مراحل کاشت، داشت، برداشت و انبارداری آن را مکانیزه نمود. آب
            مورد نیاز برای تولید سیر از نزولات جوی تأمین می‌شود. این گیاه با آب
            و هوا و خاک شهرستان بشاگرد سازگاری بسیار مناسبی دارد و عملکرد مناسبی
            از این گیاه در شهرستان گزارش شده است؛ از این رو توسعه کشت آن می
            تواند گزینه مناسب و سوددهی باشد.
          </p>
          <p>
            در ادامه می‌توان به توسعه سطح زیر کشت پیاز در این شهرستان اشاره کرد
            که تاکنون عملکرد خوبی در شهرستان داشته و در صورت مدیریت منابع آبی،
            گزینه‌ مناسبی برای اشتغالزایی و سوددهی خواهد بود. پیاز از جمله
            محصولاتی است که در اکثر غذاها مورد استفاده قرار می گیرد و فرهنگ مصرف
            بالایی دارد. در شهرستان بشاگرد مناطق و زمین های کشاورزی بسیار خوبی
            برای کاشت این محصول وجود داشته و برخی از کشاورزان علاقه خاصی به کاشت
            آن در مزارع خود دارند. با توجه به نیاز شهرستان و امکان صادرات این
            محصول به استان های دیگر توسعه کشت آن از توجیه اقتصادی خوبی برخوردار
            است.
          </p>
          <p>
            در میان محصولات کشاورزی، کاشت گندم نسبت به بقیه دارای ریسک کمتری
            است. گندم در بازه زمانی حدودا هشت ماهه به ثمر نشسته و به مرحله
            سوددهی می رسد و در دو نوع بهاره و پاییزه کشت می شود که محصول دهی
            پاییزه آن بیشتر است. علاوه بر خود گندم، کاه آن نیز مشتری خاص خودش را
            دارد. بعد از برداشت محصول، زمین آن نیز چراگاه گوسفندان می‌شود.
            همچنین مورد حمایت های دولت واقع شده و کود شیمیایی و بذر نیز به شکل
            یارانه ای در اختیار کشاورزان قرار می گیرد؛ بنابراین توسعه سطح زیر
            کشت آن توجیه اقتصادی مناسبی را به دنبال خواهد داشت.{" "}
          </p>
          <p>
            طبق نظر کارشناسان و داده های آمارنامه جهاد کشاورزی، در این شهرستان
            تولید باقلا نیز دارای مزیت است. باقلا محصول فصل خنک است و قادر است
            دمای 4- درجه سانتی گراد را نیز تحمل کند، ولی در دمای 7- درجه سانتی
            گراد بوته آن خشک شده و از بین می رود. با توجه به سازگاری باقلا با آب
            هوای شهرستان بشاگرد، مزیت خاصی برای کشت باقلا ایجاد شده است. باقلا
            به علت داشتن دوره نمو طولانی و دارا بودن شاخ و برگ زیاد احتیاج زیادی
            به آب دارد؛ زیرا در موقع خشکی خاک رشد ریشه های فرعی کم شده و گیاه
            خیلی زود پژمرده می شود و بنابراین رطوبت کافی زمین از شرایط اولیه کشت
            موفقیت آمیز این گیاه است که در شهرستان بشاگرد این رطوبت در برخی
            مناطق به راحتی قابل تامین است.
          </p>
          <p>
            جو از دیرباز در سبد تغذیه دام جایگاه ویژه داشته و به صورت دانه و
            علوفه سبز مورد استفاده قرار می‌گیرد. از جو برای تهیه نان و پخت سوپ
            استفاده می شود و در تهیه غذای کودک نیز کاربرد دارد. جوشانده جو داروي
            خوبي براي مبتلايان به تب، كم خوني و سوء هاضمه بوده و پایین آورنده
            کلسترول است. کاشت این گیاه زراعی در کنار گندم، در شهرستان رایج بوده
            و با توجه به سازگاری خوب برخی از ارقام این گیاه با شرایط اقلیمی
            شهرستان، امکان استفاده از اراضی دیم وجود دارد. بازار فروش مطمئن،
            کاشت، داشت و برداشت مکانیزه از عواملی هستند که باعث ایجاد مزیت برای
            کاشت این گیاه شده و با توجه به تولید پایین جو در کشور نسبت به میزان
            مورد نیاز، توسعه کاشت این محصول پیشنهاد می شود.
          </p>
          <p>
            شهرستان بشاگرد در زمینه تولید علوفه های دامی مانند یونجه وضعیت خوبی
            دارد. یونجه را می توان به میزان بیشتری در شهرستان تولید و کسب سود
            کرد. در میان گیاهان علوفه ای، یونجه به دلیل ارزش غذایی بالا و عملکرد
            خوب آن از اهمیت خاصی برخوردار است. همچنین یونجه به علت وجود
            باکتریهای ریزوبیوم در ریشه های خود قادر به تثبیت ازت هوا بوده و به
            این طریق باعث باروری خاک می شود. از طرفی دیگر یونجه گیاهی چندساله
            است و تا چند سال می توان آن را برداشت کرد؛ بنابراین توسعه کشت یونجه
            توجیه اقتصادی داشته و امکان تامین بخشی از علوفه مورد نیاز دام، فراهم
            می‌شود که علاوه بر ایجاد اشتغال مولد و حصول درآمد مناسب برای زارعین،
            در استفاده بهینه از ظرفیت های پرورش دام نیز موثر خواهد بود و نیاز
            شهرستان برای وارد کردن نهاده های مورد نیاز دام از سایر مناطق را
            برطرف خواهد کرد. هر مقدار تولید یونجه در این شهرستان به دلیل رونق
            دامداری فوری به فروش می رسد و اکثر مواقع یونجه را پس از برداشت در
            محل خریداری می کنند؛ از این رو کاشت این محصول با توجه به سازگاری
            خوبی که با شرایط جغرافیایی شهرستان دارد، از مزیت و ظرفیت خوبی
            برخوردار است.
          </p>
          <p>
            بیش از 80 نوع گیاه دارویی در شهرستان بشاگرد می روید و در یکی از
            روستاهای این شهرستان درحال آماده کردن زمینی به مساحت 35 هکتار جهت
            کاشت گیاهان دارویی هستند . توسعه کشت گیاهان دارویی به دلیل داشتن
            آستانه تحمل بالا در برابر تنش های محیطی و نیاز کم به منابع آبی حرکتی
            هوشمندانه و در خور توجه است. تقاضای مصرف گیاهان دارویی به علت روی
            گردانی از داروهای شیمیایی و یا حتی استفاده برخی از این محصولات در
            تولیدات کارخانه‌های بزرگ دارویی همواره رو به افزایش است. همین امر
            مزیت خوبی برای کاشت گیاهان دارویی در شهرستان به ارمغان آورده است.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج بخش کشاورزی در شهرستان بشاگرد است.
            تولید اشتغال توسط بخش باغداری بسیار زیاد می‌باشد و می تواند به
            اقتصاد شهرستان و فضای کسب و کار رونق بخشد. کشاورزی و از جمله باغبانی
            در توسعه ملی و افزایش رفاه عمومی، فقرزدایی، تنوع بخشیدن و پایدار
            کردن الگوی توسعه شهری، توزیع درآمد و عدالت اجتماعی موثر است. همانطور
            که قبلا نیز اشاره شد، با توجه به پایین بودن سطح آب های زیرزمینی در
            شهرستان بشاگرد، کاشت درختان مقاوم به کم آبی رایج تر می باشد که در
            ادامه به برخی از ان‌ها اشاره می شود.
          </p>
          <p>
            در شهرستان بشاگرد بالغ بر 700 هکتار نخلستان وجود دارد . خرما از جمله
            محصولات باغی است که با آب و هوای گرم و اقلیم جغرافیایی شهرستان
            سازگاری بسیار خوبی دارد. خرما میوه ای با ارزش غذایی بالا است که به
            علت دارا بودن مواد قندی قابل توجه (حدود 70 درصد) علاوه بر مصرف
            غذایی، در صنعت نیز موارد استفاده فراوان دارد. مصارف مختلف خرما در
            صنعت شامل موارد خوراکی مانند شیره، شهد و شکلات خرما است. همچنین از
            ضایعات آن نیز در ترکیب خوراک دام و طیور و از برگ آن نیز در ساخت
            انواع ظروف بافتنی و حصیر و از تنه و چوب آن در کارخانجات نئوپان سازی
            و کاغذ سازی و همین طور پوشش ساختمان ها و پل ها استفاده می کنند. با
            توجه به موارد مذکور، احداث نخلستان در شهرستان می تواند به عنوان مزیت
            محسوب شود که سوددهی خوبی را به دنبال خواهد داشت.{" "}
          </p>
          <p>
            مطابق با نظر کارشناسان، با احداث گلخانه سبزیجات و صیفی‌جات در این
            شهرستان می توان میوه های خارج از فصل را برای بازار میناب و بندر عباس
            تهیه کرد . هر چند کاشت محصولات مذکور در فضای آزاد توصیه می شود، ولی
            مصرف بالای آب در روش فضای آزاد و کمبود آب در شهرستان یک مشکل اساسی
            در این زمینه بوده و گلخانه های تولید صیفی جات می توانند راه حلی برای
            تولید صیفی جات بیشتر باشند. در واقع گلخانه محیطی است که به راحتی می
            توان در داخل آن شرایط محیطی را تحت کنترل درآورد و به سمت رشد مطلوب
            گیاه سوق داد. گلخانه‌ها که از نظر اندازه متغیرند گیاهان را از سرمای
            بیش از حد زمستان یا گرمای بیش از حد تابستان حفظ می‌کنند. در نتیجه
            تولید صیفی جات به صورت گلخانه ای نیز برای شهرستان مزیت دارد.
          </p>
          <p>
            در شهرستان بشاگرد، برخی مناطق که دارای آب و هوای خنک می باشند، کاشت
            درخت سیب با موفقیت بیشتری همراه است. درختان سیب نسبتاً به شرایط خاک
            شهرستان بی‌تفاوت هستند و در دامنه گسترده‌ای از مقادیر pH و سطوح
            حاصلخیزی رشد می کنند. این درختان حتماً باید در مقابل باد مراقبت شده
            و نباید در مناطق پست که در معرض آخرین سرماهای بهاری می باشند، کاشته
            شوند. سرمای دیررس بهاره در این شهرستان تقریبا وجود ندارد و همین امر
            یک مزیت عالی برای کاشت سیب در این شهرستان ایجاد کرده است و توسعه
            کاشت آن را می توان در دستور کار قرار داد.
          </p>
          <p>
            انار از جمله محصولات باغی تولید شده در شهرستان بشاگرد می باشد. شرایط
            آب وهوایی مناسب در این شهرستان زمینه را برای رشد انار فراهم کرده
            است؛ لذا می توان سطح زیر کشت این میوه باارزش را افزایش داد. نهال
            انار حداقل سه سال نیاز به رشد دارد و از سال چهارم به بعد شروع به
            باردهی می کند. درخت انار بیش از 40 سال عمر مفید داشته و در مقابل کم
            آبی مقاوم است؛ اما میزان و نوع آب در کیفیت و کمیت میوه آن تاثیر مهمی
            دارد. مصرف انار در سال های اخیر افزایش یافته است. خواص این میوه و
            ابعاد مختلف محصولی آن از دلایل افزایش مصرف است. از انار در تولید
            داروهای تقویتی و صنایع آرایشی و بهداشتی استفاده می شود. مصرف رب و آب
            انار نیز از گذشته رواج داشته و در سال های اخیر به اشکال متنوع و
            بهتری انجام می شود. کاشت انار فعالیتی درآمدزا است که با ارزیابی نیاز
            بازار، به روزرسانی فرآیند بسته بندی و جابجایی می توان درآمد حاصل از
            آن را افزایش داد.{" "}
          </p>
          <p>
            نیاز آبی بسیار کم و سازگاری با محیط و استقامت در برابر گرما و
            خشک‌سالی از ویژگی‌های بارز گیاه انجیر محسوب می‌شود. از آنجایی که
            باغ‌های انجیر در شهرستان بشاگرد معمولاً در دامنه‌های شیب‌دار احداث
            می‌گردند، احداث چنین باغ‌هایی علاوه بر ایجاد اشتغال و پوشش گیاهی
            مناسبی برای منطقه و بیابان‌زدایی، می‌تواند به کنترل سیلاب، جلوگیری
            از فرسایش خاک و استفاده بهینه از آب باران کمک کند؛ از این رو احداث
            باغات انجیر در شهرستان مزیت داشته و می توان روی آن سرمایه گذاری کرد.
          </p>
          <p>
            انگور از مهم‌ترین محصولات باغی است که هم به لحاظ سطح زیر کشت و هم
            ارزش اقتصادی و تغذیه‌ای، مورد توجه کشاورزان و کارآفرینان قرار گرفته
            است. زیبایی، تنوع رنگ، طعم و مزه، ارزش غذایی، خواص دارویی و وجود
            فرآورده‌‌های تبدیلی چون کشمش، شیره انگور، روغن هسته انگور، کنسانتره،
            آب انگور، سرکه، آبغوره، دارو‌های تقویتی و مواد آرایشی ‌بهداشتی،
            همچنین توصیه‌‌های دینی و مذهبی انگور را به یک میوه استثنایی و
            بی‌نظیر تبدیل کرده است؛ بنابراین در بین مردم طرفداران زیادی دارد و
            بازار مصرف این محصول به صورت محصولات فراوری شده و تازه خوری فراهم
            است. سازگاری خوب این میوه با شرایط شهرستان باعث شده است تا توسعه
            باغات انگور در این شهرستان توجیه اقتصادی مناسبی داشته باشد.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری یکی از مشاغل رایج در شهرستان بشاگرد است و با یکی از مهم ترین
            نیازهای انسان، یعنی نیاز به منابع غذایی و خصوصا منابع پروتئینی مرتبط
            می‌باشد، که توجه به آن امری ضروری است. فعالیت در این حوزه شغلی و
            افزایش بهره وری در آن، می تواند از راهکارهای توسعه اقتصادی و عاملی
            برای توسعه صنایع غذایی، تبدیلی و تکمیلی محسوب شود. درصد بالایی از
            مردم این شهرستان به دامداری مشغول هستند. دامداری در این شهرستان به
            هر دو صورت سنتی و صنعتی انجام می شود. دام هایی همچون بز، گوسفند،
            شتر، گاو و زنبورعسل در حال حاضر در این شهرستان پرورش داده می شوند.
          </p>
          <p>
            پرورش بز در شهرستان مذکور دارای مزیت بیشتری نسبت به سایر دام ها است.
            بزهای پرورشی در این شهرستان بیشتر از نوع بومی هستند و قابلیت توسعه
            پرورش آن‌ها در شهرستان وجود دارد. با توجه به وجود فصل گرم و تمایل
            بزهای بومی برای چریدن در مناطق مختلف شهرستان، به نظر می رسد که پرورش
            بز بومی در شهرستان از امتیاز خوبی نسبت به بسیاری از دام های دیگر
            برخوردار باشد. به طورکلی بز به ‌عنوان یک حیوان اهلی نشخوارکننده جهت
            تولید شیر و گوشت در مناطق مختلف شهرستان پرورش داده می‌شود. جثه کوچک،
            کم توقع بودن و مقاومت در برابر بیماری‌ها و شرایط سخت محیطی، باعث شده
            تا بز به‌ عنوان حیوانی محبوب در بین دامداران شهرستان تلقی شود.
          </p>
          <p>
            در این شهرستان، پرورش گوسفند بومی نیز مورد توجه دامداران قرار گرفته
            است؛ زیرا توان گوسفند بومی برای تحمل اقلیم های متفاوت شهرستان بیشتر
            است و جیره غذایی کمتر و در نتیجه هزینه کمتری نیز دارد. همچنین تمامی
            فرآورده های دامی مانند گوشت، شیر، ماست، کره و حتی پشم و پوست دام
            پرکاربرد هستند و فروش این فرآورده ها در تمامی روزهای سال انجام
            می‌شود. قیمت گوشت گوسفند بالا است و به علاوه اجزای گوسفند مانند دل،
            قلوه، جگر، سیرابی، کله پاچه و خوش گوشت نیز قابل فروش هستند. خرید دام
            برای قربانی کردن در ایام مذهبی مانند عید قربان موجب رونق این کسب و
            کار می‌شود؛ بنابراین گسترش پرورش گوسفند سوددهی خوبی را در شهرستان به
            همراه خواهد داشت.
          </p>
          <p>
            پرورش شتر از دیگر فعالیت هایی است که به میزان کم در این شهرستان
            انجام می شود و می توان نسبت به توسعه انجام آن اقدام کرد. البته بررسی
            ها نشان می دهد که پرورش آن در اولویت های بعدی مزیت های شغلی این حوزه
            قرار می گیرد. پرورش شتر نسبت به سایر دام ها مزیت‌هایی مانند قابلیت
            سازگاری با شرایط سخت محیطی، تحمل گرما، کم آبی و کیفیت پایین علوفه و
            مقاومت نسبی در مقابل امراض و عوامل بیماری زا دارد. همچنین شتر در
            مقایسه با سایر دام های اهلی علوفه را با قابلیت هضم بالا و بازده
            بیشتری استفاده می نماید و قادر است از انواع خاص گیاهان مرتعی (خشبی،
            خاردار و تیغ دار) به میزانی استفاده نماید که سایر دام ها قادر به
            استفاده از آن نیستند. در این شهرستان در طی فصول تابستان علوفه های
            خشک زیادی در مراتع باقی می مانند که برای تغذیه این دام بسیار مناسب
            هستند.
          </p>
          <p>
            پرورش گاو و پرواربندی گوساله در راستای تامین گوشت و شیر می تواند کسب
            و کار موفقی باشد. پرورش گاو به صورت داشتی ضمن کمک به تولید گوساله
            برای پرواربندی، نقش مهمی در تولید لبنیات دارد. بخش عظیمی از گوشت
            قرمز شهرستان توسط گاوهای پروار شده تأمین می‌شود؛ بنابراین این بخش از
            دامپروری و دامداری دارای ظرفیت زیادی برای توسعه و پیشرفت دارد.
            مزایای ورود به عرصه‌ی پرواربندی گوساله در شهرستان دارای جنبه های
            مختلف است. از یک طرف، از پوست گاو گوشتی در چرم‌سازی استفاده می‌شود؛
            از طرف دیگر از گوشت آن جهت استفاده در تغذیه انسان بهره برداری می
            شود. همچنین برای جلوگیری از واردات گوشت گوساله از کشورهای دیگر،
            تولید آن اهمیت دارد. پرواربندی گوساله به هر دو صورت صنعتی و سنتی در
            شهرستان انجام می گیرد. در پرواربندی علمی و صنعتی از دام‌های نر جوان
            نژادهای گوشتی استفاده می‌شود. استفاده از ظرفیت ژنتیکی دام‌های گوشتی
            و کاهش کشتار دام‌های شیری و مولد از دیگر محاسن پرواربندی با روش‌های
            نوین است. پرواربندی گوساله با روش‌های علمی و نوین سبب کاهش دوره
            پرواربندی، کاهش هزینه تولید گوشت و جلوگیری از تخریب مراتع می‌شود که
            همین موضوع مزیت خوبی برای پرورش گاو در شهرستان ایجاد کرده است.
          </p>
          <p>
            با توجه به آب هوای شهرستان و منابع طبیعی فراوان، فعالیت در حوزه
            زنبورداری برای شهرستان مزیت خوبی دارد. این مسئله باعث شده ارزش
            اقتصادی پرورش زنبور عسل بسیار بیشتر از ارزش ریالی حاصل از تولید عسل
            باشد. در طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد کندوها می
            توان به فروش کندو نیز فکر کرد و به سود خوبی دست یافت. در ضمن محصول
            مزرعه پرورش زنبور عسل صرفاً کندو و عسل نیست، بلکه موم، زهر و ژل آن
            نیز قابلیت فروش دارد. در نتیجه افزایش این فعالیت در شهرستان دارای
            توجیه مناسبی است و می توان این فعالیت را به میزان بیشتری انجام داد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان بشاگرد، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از این محصولات در مراحل کاشت، داشت و برداشت
            به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از
            محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در
            طی سال صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی در این شهرستان می‌تواند
            زمان استفاده از محصولات را افزایش دهد و از میزان ضایعات آن بکاهد.
            همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از
            اتلاف و ضایع شدن محصولات در این شهرستان خواهد شد. مطابق با نظر
            کارشناسان، فعالیت در زمینه صنایع تکمیلی در شهرستان مذکور برای بسیاری
            از مشاغل به حد اشباع رسیده و یا از توجیه اقتصادی مناسبی برخوردار
            نیست؛ اما برخی مشاغل هنوز به حد اشباع نرسیده اند و می توان روی آنها
            سرمایه گذاری کرد که در ادامه به آنها پرداخته می شود.
          </p>
          <p>
            خرما و سیر به مقدار بسیار زیادی در این شهرستان تولید می شوند و
            کشاورزان محصول خود را در باغات به فروش می رسانند که در این صورت سود
            بسیار کمی دارد. از طرفی بسته بندی صنعتی خرما و سیر در شهرستان وجود
            ندارد؛ درحالی که اگر بسته بندی شود و به فروش رود، بازدهی بسیار
            بیشتری خواهد داشت. از این رو ایجاد واحدی برای بسته بندی خرما و سیر
            در شهرستان بشاگرد از مزیت خوبی برخوردار بوده و برای سرمایه گذاری
            مناسب می باشد. در حال حاضر فعالیت سورتینگ و بسته بندی خرما و سیر به
            صورت سنتی در شهرستان در حال انجام است و قابلیت انجام آن به صورت
            صنعتی وجود دارد. هدف از سورتینگ محصولات، دسته بندی و درجه بندی انواع
            محصول بر اساس سایز و کیفیت است؛ به طوری که بتوان محصول نهایی را به
            صورت یک دست و یک اندازه در بسته بندی های مختلف در بازار ارائه نمود و
            مشتری نهایی در طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن
            باشد.
          </p>
          <p>
            مطابق با نظر کارشناسان، در این شهرستان یک سردخانه درحال احداث بوده و
            پیشرفت 70 درصدی داشته است و با توجه به محصولات تولیدی در شهرستان به
            دو سردخانه دیگر نیاز می باشد . از مهمترین مزایای استفاده از سردخانه
            میوه و سبزی می توان به جلوگیری از فساد محصول اشاره کرد. از دیگر
            مزایای با اهمیت احداث سردخانه میوه، کنترل قیمت بازار است. در واقع با
            ساخت سردخانه میوه تعادلی در عرضه و تقاضا ایجاد می گردد و موجب خواهد
            شد از افزایش بی رویه قیمت که به ضرر مصرف کننده است و از کاهش بیش از
            حد آن که به ضرر باغداران است جلوگیری به عمل آید؛ بنابراین نقش
            سردخانه های میوه جات به عنوان حد واسط بازار و باغداران در این بین
            بسیار پر رنگ و حیاتی است. با توجه به میزان تولید زیاد انواع میوه در
            شهرستان بشاگرد، احداث چنین واحدی دارای مزیت است.
          </p>
          <p>
            فرآوری پوست دام شامل استفاده از پوست دام در صنعت چرم دوزی است که ضمن
            ایجاد درآمد مناسب برای سرمایه گذار، سود خوبی را نیز نصیب دامدار
            می‌کند. با توجه به بررسی های انجام شده پوست دام در این شهرستان دور
            انداخته می شود ؛ از این رو ظرفیت خوبی برای احداث واحد فرآوری پوست
            دام در شهرستان ایجاد شده است و برای سرمایه گذاری مناسب است.
          </p>
          <p>
            لازم به ذکر است که در صورت توجه نکردن به بازار فروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه ذکر شدند، با مسئله اشباع رو به رو خواهند شد.
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازارفروش در
            شهرستان های اطراف در زمینه راه اندازی این مشاغل امری مهم و ضروری
            است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی است؛ اما در شهرستان
            بشاگرد آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های
            شهرستان در این حوزه برای پیشرفت اقتصادی استفاده شود. در این شهرستان،
            تعدادی واحد صنعتی در زمینه های مختلف وجود دارند، اما پتانسیل های
            شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای صنعتی
            جدید ظرفیت وجود دارد. در اینجا مطابق با نظر کارشناسان، فرآوری معادن
            مختلف به عنوان کسب و کار مزیت دار مورد بررسی قرار می گیرند.
          </p>
          <p>
            در شهرستان بشاگرد معادنی همچون معادن کروم، منگنز، آهن، گوگرد و آزبست
            وجود دارد که اکثرا در حد شناسایی هستند و استخراجی از آنها صورت نمی
            گیرد. با توجه به قیمت جهانی این فلزات، ثروت عظیمی در دل طبیعت
            شهرستان نهفته است و نیاز است تا سرمایه گذاران بزرگ به آن توجه کنند.
            در صورت بهره برداری از معادن فوق و همچنین فرآوری آن‌ها، سود قابل
            توجهی عاید سرمایه گذار خواهد شد. در بین معادن مذکور، استخراج کروم و
            منگنز در اولویت می باشند.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی چکیده و ثمره ذوق و هنر هنرمندان و صنعتگرانی است که با
            دستان پرتوانشان روح و جان فرهنگ و هنر به یادگار مانده از نیاکان خویش
            را جاودانه می‌سازند. صنایع دستی نماد فرهنگ اصیل، تاریخ کهن و هنر
            بی‌مثال مردم این سرزمین اسطوره‌ای است.
          </p>
          <p>
            نکته ای که در رابطه با صنایع دستی وجود دارد این است که برخلاف زحمتی
            که هنرمند می کشد تا یکی از صنایع دستی را تولید کند، متاسفانه به علت
            عدم حمایت و بازار فروش داخلی و خارجی، رغبت به سمت فعالیت در این
            زمینه کاهش یافته است و بسیاری از هنرهای دستی به همین دلیل به فراموشی
            سپرده شده اند. در ادامه توضیحاتی راجع به برخی از پتانسیل های صنایع
            دستی در شهرستان پرداخته می شود؛ اما در هر صورت اگر توجهی به آن‌ها از
            سمت دولت و نهادهای مربوطه نشود، نمی توان انتظار موفقیت برای آن‌ها
            داشت.
          </p>
          <p>
            در این شهرستان، قالی بافی و حصیربافی بسیار رایج بوده و برخی نیز به
            تولید پوشاک سنتی در شهرستان مشغول هستند. از این رو در ادامه این سه
            حرفه در حوزه صنایع دستی شهرستان مورد بررسی قرار می گیرند.
          </p>
          <p>
            اتحادیه فرش یزد در شهرستان بشاگرد حضور پیدا کرده و با ارائه مواد
            اولیه و دستمزد، بافت انواع قالی را در شهرستان راه اندازی کرده است .
            قالی بافی که به صورت بافت فرش و تابلوفرش در این شهرستان انجام می شود
            از جمله صنایع دستی شهرستان است که قابلیت گسترش دارد. بافندگی فرش با
            سرمایه کم و بدون نیاز به مدرک، یک شغل امن و پردرآمدی را در محیطی
            سالم برای تمام افراد به ویژه بانوان ایجاد می کند. این کسب و کار را
            می توان در فضایی کوچک حتی در منزل و با سرمایه اولیه کم راه اندازی
            کرد و نیازی به مدرک و تکنولوژی خاصی نیست. از طرفی، قالیبافی از مشاغل
            خانگی پردرآمدی است که تسهیلات خوبی به آن تعلق می گیرد. بسیاری از
            زنان خانه دار این هنر را یک فرصت شغلی مناسب می دانند چون در کنار
            کارهای روزمره می توانند به این کار بپردازند و درآمد خوبی کسب کنند.
            در کل قالیبافی در شهرستان رونق خوبی داشته و برای سرمایه گذاری قابل
            پیشنهاد است.
          </p>
          <p>
            در بین صنایع دستی شهرستان بشاگرد، کارهای مرتبط با حصیر بافی به کشور
            آلمان، کشورهای حاشیه خلیج فارس و سایر شهرستان ها صادر می شوند . در
            شهرستان بشاگرد حصیر در مقیاس زیادی تولید می شود و بازار فروش خیلی
            خوبی دارد. یکی از علت های تولید زیاد این محصول، زندگی مردم در کپر
            است که با حصیر ساخته می شود. به دلیل وجود تالاب، ماده اولیه این کالا
            به راحتی در دسترس حصیربافان قرار می گیرد. وجود نخلستان های زیاد در
            این شهرستان شرایط را برای تولید این صنعت دستی نیز که از برگ خرما
            تهیه می شود، فراهم می کند. با استفاده از حصیر لوازم دیگری مانند سبد،
            گلدان و وسایل تزئینی دیگر نیز ساخته می شود. با توجه به تجربه مردم
            شهرستان در انجام این کار و وجود مواد اولیه لازم در شهرستان، فعالیت
            گسترده تر در این زمینه در صورت بازاریابی صحیح، قابلیت توسعه داشته و
            پیشنهاد می شود.
          </p>
          <p>
            در اولویت های پایین تر، تولید پوشاک سنتی در شهرستان برای سرمایه
            گذاری پیشنهاد می شود. مردم بشاگرد از این لباس ها استقبال خوبی میکنند
            و بازار خوبی در شهرستان دارد. ﭘﻮﺷﺎﮎ ﻣﺮﺩﺍﻥ ﻭ ﺯﻧﺎﻥ این شهرستان در قدیم
            ﺷﺎﻣﻞ ﺗﻦ ﭘﻮﺵ، ﺳﺮﭘﻮﺵ ﻭ ﭘﺎﯼ ﺍﻓﺰﺍﺭ ﺑﻮﺩﻩ ﺍﺳﺖ ﮐﻪ ﻫﺮﮐﺪﺍﻡ ﺍﺯ ﺍﯾﻦ ﺍﺟﺰﺍﺀ ﺑﻪ
            ﻧﻮﻉ ﻓﺼﻞ ﺳﺎﻝ، ﻧﻮﻉ ﮐﺎﺭ ﺍﻓﺮﺍﺩ و ﻭﺿﻌﯿﺖ ﻣﻌﯿﺸﺘﯽ آن ها ﻭ همچنین ﻣﻮﺍﻗﻊ
            ﺍﺳﺘﻔﺎﺩﻩ ﺍﺯ ﻟﺒﺎﺱ ﻣﺎﻧﻨﺪ ﻣﺮﺍﺳﻤﺎﺕ ﻭ ﺟﺸﻦ ﻫﺎ ﺑﺎ ﺳﺎﯾﺮ ﻣﻮﺍﻗﻊ ﺗﻔﺎﻭﺕ ﺩﺍشته
            است. ﺍﺯ ﻃﺮﻓﯽ ﻧﻮﻉ ﭘﻮﺷﺶ ﺩﺭ ﻗﺴﻤﺖ ﻫﺎﯼ ﻣﺨﺘﻠﻒ ﺑﺸﺎﮔﺮﺩ ﻧﯿﺰ ﺗﻔﺎﻭﺗﻬﺎﯾﯽ ﺩﺍﺭﺩ ﮐﻪ
            ﻧﺎﺷﯽ ﺍﺯ ﺍﺧﺘﻼﻑ ﺳﻠﯿﻘﻪ ﺍﻓﺮﺍﺩ ﻭ ﻧﻮﻉ ﻣﻌﺎﺷﺮﺕ ﺁﻧﻬﺎ ﺑﺎ ﺳﺎﯾﺮ ﮔﺮﻭه‌ها ﻣﯿﺒﺎﺷﺪ.
            ﻫﻤﭽﻨﯿﻦ ﻧﻮﻉ ﭘﻮﺷﺶ ﺩﺭ ﺟﻮﺍﻧﺎﻥ ﺑﺎ ﺍﻓﺮﺍﺩ ﻣﯿﺎﻧﺴﺎﻝ ﻭ ﭘﯿﺮ ﺗﻔﺎﻭﺗﻬﺎﯾﯽ ﺩﺍﺭﺩ ﮐﻪ
            ﻣﻌﻤﻮﻻ ﺟﻮﺍﻧﺎﻥ ﺑﺎ ﺗﻮﺟﻪ ﺑﻪ ﺍﯾﻨﮑﻪ ﺑﺮﺍﯼ ﮐﺎﺭ ﺑﻪ ﮐﺸﻮﺭﻫﺎﯼ ﻋﺮﺑﯽ ﺣﺎﺷﯿﻪ ﺧﻠﯿﺞ
            ﻓﺎﺭﺱ ﺳﻔﺮ می‌کرده‌اند. ﺩﺭ ﻧﻮﻉ ﻟﺒﺎﺱ ﭘﻮﺷﯿﺪﻥ ﺍﺯ ﺍﻟﮕﻮﻫﺎﯼ ﺍﺟﺘﻤﺎﻋﯽ ﺁﻧﺠﺎ
            ﺍﺳﺘﻔﺎﺩﻩ می‌کرده‌اند.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی برای آن وجود
            دارد که اگر از این ظرفیت های شیلاتی استفاده شود، ارزآوری بسیار خوبی
            به همراه خواهد شد. در شهرستان بشاگرد به دلیل وقوع خشکسالی های اخیر و
            کاهش نزولات جوی، منابع آبی زیرزمینی و سطحی افت داشته است و به همین
            سبب فعالیت در زمینه شیلات به صورت کاملا محدود در شهرستان انجام شده
            است؛ اما در صورتی که منابع آبی تامین شود و یا از استخرهای دومنظوره
            کشاورزی برای این منظور استفاده گردد، می توان در زمینه پرورش ماهیان
            گرمابی در شهرستان فعالیت نمود.
          </p>
          <p>
            امروزه در برخی مناطق شهرستان، پرورش ماهیان گرمابی نظیر کپور رایج شده
            و سوددهی مناسبی را به همراه داشته است. ماهیان گرمابی در محدوده دمایی
            27-20 درجه سانتی‌گراد بهترین رشد را دارند که در شهرستان بشاگرد این
            شرایط مهیا است. بزرگ‌ترین خانواده ماهيان آب شيرين، کپورماهیان هستند
            که دارای 200 جنس می‌باشند. این ماهی در مقایسه با سایر گونه‌های
            پرورشی در آب‌های گرم و معتدل، ارزشمندترین ماهی از لحاظ اقتصادی است و
            نیز ارزش‌های تغذیه‌ای فراوانی دارد؛ از این ‌رو آموزش توسعه پرورش این
            ماهی می‌تواند در راستای تأمین غذای جمعیت شهرستان و نیز افزایش سطح
            معیشتی مردم شهرستان مؤثر باشد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت شهرستان با
            یکدیگر تفاوت هایی دارد. در حوزه گردشگری، این شهرستان در حال حاضر
            دارای ده اثر تاریخی است که در فهرست آثار ملی تاریخی ایران ثبت‌
            شده‌اند. قلعه الله وردی خان در شهر گوهران و در ۲۰ کیلومتری مرکز
            شهرستان بشاگرد شهر سردشت قرار دارد. قدمت این قلعه به زمان قاجار بر
            می گردد. این قلعه تاریخی در سال ۱۳۸۶ در فهرست آثار ملی به ثبت رسیده
            است و یکی از ده‌ها آثار باستانی شهرستان است. برخی از آثار باستانی
            این شهرستان قدمت آن‌ها حداقل به چند صد سال بر می گردد. در شهرستان
            بشاگرد مردم اکثرا کپرنشین هستند و همین موضوع سبب شده است تا فرصت
            خوبی برای ایجاد اقامتگاه بومگردی مهیا شود .{" "}
          </p>
          <p>
            موارد باستانی و گردشگری ذکر شده باعث می شود تا همه ساله گردشگران
            زیادی از شهرها و کشورهای مختلف جذب شهرستان شوند و مزیت خاصی برای
            ایجاد اقامتگاه بومگردی بوجود آید. امروزه در شهرستان بشاگرد اقامتگاه
            بومگردی وجود دارد، ولی به دلیل استقبال گسترده از این طرح، ظرفیت برای
            اقامتگاه های جدید نیز وجود دارد.
          </p>
          <p>
            اقامتگاه بوم‌گردی فرصت مناسبی است تا مسافران ضمن گردشگری در هر منطقه
            و بازدید از جاذبه های توریستی، حس ایرانی زیستن به سبک سنتی را تجربه
            کنند. همچنین طبخ غذاهای محلی در برخی اقامتگاه ها، مصداق دیگری از
            مهمان نوازی ایرانی است. با توجه به اینکه علاقه مردم به سمت بازدید و
            اقامت در این مناطق بیشتر شده‌ است؛ بنابراین گسترش اقامتگاه بوم‌گردی
            در این شهرستان‌ توجیه اقتصادی مناسبی را به دنبال خواهد داشت.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            امروزه یکی از معیارهای پیشرفت جوامع، وضعیت تغذیه به ویژه تغذیه
            پروتئین توسط افراد آن جامعه است. وظیفه متخصصین علوم دامی تولید
            پروتئین با حداکثر کیفیت و عملکرد و حداقل هزینه و بار محیطی می باشد.
            فراورده های طیور از مهم ترین منابع پروتئینی در اغلب کشورها هستند، به
            طوری که تولید و مصرف آن ها در اغلب کشورها با سرعت روز افزون در حال
            افزایش است. در این زمینه برای پرورش بسیاری از طیور شرایط مساعدی در
            شهرستان بشاگرد وجود دارد، اما نکته مهم و قابل توجه، بازاریابی جهت
            فروش محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می
            تواند زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه
            صنعتی فراهم نماید؛ بنابراین در ادامه به طیوری که مزیت خوبی در
            شهرستان دارد، یعنی پرورش مرغ بومی، مرغ گوشتی، بوقلمون، کبک و بلدرچین
            پرداخته می شود.
          </p>
          <p>
            مرغ از جمله طیوری است که پرورش آن در شهرستان مورد توجه قرار گرفته
            است و گسترش پرورش آن از سوددهی خوبی برخوردار است. یکی از دلایل
            استقبال از پرورش مرغ بومی، سوددهی بسیار خوب پرورش آن است. مرغ بومی
            یا همان مرغ های محلی، نوعی نژاد بسیار مقاوم به شمار می آیند که در
            مقابل بیماری ها، گرما و سرما تحمل بالایی دارند و این مزیت باعث می
            شود که ایجاد واحدهای تولیدی مرغ بومی برای تولیدکنندگان سوددهی خوبی
            به همراه داشته باشد. یکی دیگر از مزیت های پرورش مرغ بومی این است که
            این کار نیاز به تجهیزات کمی دارد. هرچند اگر در پرورش مرغ بومی از
            تجهیزات مدرن استفاده شود، سود بیشتری نصیب پرورش دهنده می شود. منظور
            از تجهیزات مواردی مانند آبخوری، دان خوری و لانه تخم گذاری است.
          </p>
          <p>
            مرغداری های موجود در این شهرستان، علاوه بر پرورش مرغ بومی، به پرورش
            مرغ گوشتی نیز می پردازند و می توان نسبت به توسعه پرورش آن اقدام کرد.
            گوشت مرغ به سبب مزیت‌های فراوانی که دارد به عنوان منابع تامین
            پروتئین می تواند مطرح و نیاز عمومی منطقه و کشور را در این زمینه
            مرتفع نماید. ارزش غذایی بالای گوشت طیور، کم بودن افت پس از کشتار،
            سالم و بهداشتی بودن گوشت طیور، قابلیت هضم و جذب بالا، سرعت رشد سریع،
            صرفه جویی در جایگاه و زمین و دوره بازگشت سرمایه سریع از فواید پرورش
            مرغ گوشتی است.
          </p>
          <p>
            بوقلمون نیز از جمله طیوری است که در شهرستان پرورش داده می شود و
            ظرفیت لازم برای توسعه پرورش آن وجود دارد. گوشت بوقلمون دارای خواص
            غذایي ويژه ای است و محدوديت مصرف خاصي نيز ندارد؛ بنابراین مي تواند
            جايگزين مناسبی براي گوشت قرمز علی الخصوص در بيمارانی که مصرف گوشت
            قرمز برای آنها با محدوديت هایی همراه است، مطرح گردد. از ديگر
            امتيازات گوشت بوقلمون وجود هر دو نوع گوشت سفيد و قرمز در يک لاشه
            است. پرورش بوقلمون به دلیل به صرفه بودن تولید، در دسترس بودن
            نهاده‌های مصرفی بوقلمون، نیاز بازار داخلی و نیز امکان انجام صادرات
            به کشورهای منطقه حائز اهمیت است. سازگاری این پرنده با شرایط آب و
            هوایی شهرستان توسعه پرورش آن را با توجیه اقتصادی خوبی همراه کرده
            است.
          </p>
          <p>
            از طیور دیگری که پرورش آن‌ها در شهرستان رواج یافته و بازار خوبی برای
            گوشت آن‌ها در داخل شهرستان و کشورهای خارجی ایجاد شده است، می توان به
            بلدرچین و کبک اشاره کرد. از این رو پرورش آن‌ها دارای مزیت خواهد بود.
            بلدرچین پرنده ای با جثه کوچک، در برابر بسیاری از بیماری ها مقاوم
            است. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن بازار
            فروش، کوتاه بودن دوره پرورش (40 روز) و عدم پرورش انحصاری توسط شرکت
            های بزرگ دارای مزیت است. محصولات این پرنده شامل گوشت، تخم بلدرچین و
            کود است. گوشت و تخم این پرنده دارای ارزش غذایی و دارویی بوده و
            همچنین سرشار از پروتئین است.
          </p>
          <p>
            محصولات کبک نسبت به سایر طیور به دلیل طعم و کیفیت مناسب و قیمت
            بیشتر، مشتریان خاص خود را دارد. از جهت دیگر به دلیل مقاومت نسبتاً
            بالای این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به دیگر پرندگان
            کمتر است. با پرورش کبک به ‌صورت صنعتی می‌توان بخشی از نیاز شهرستان
            در حوزه گوشت را تأمین کرد. همچنین می‌توان به بازار جوجه و تخم کبک
            نیز اشاره نمود که قابلیت تولید و عرضه را دارند.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی می تواند یکی از
            راهکارهای مهم جهت ایجاد اشتغال پایدار و توسعه پایدار امنیت غذایی
            شهرستان محسوب شود. ایجاد صنایع غذایی در شهرستان بشاگرد، علاوه بر
            اشتغالزایی، باعث ارتقای سطح درآمد ارزی نیز می‌شود که کاهش هدررفت
            محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد زیادی ممکن
            می‌سازد. این شهرستان ظرفیت های بسیار خوبی در زمینه احداث صنایع غذایی
            مختلف دارد؛ اما تا به حال آنگونه که باید از این ظرفیت ها استفاده
            نشده است. در کل مطابق با نظر کارشناسان، شرایط لازم برای ایجاد
            واحدهای تولیدی در زمینه صنایع غذایی در این شهرستان فراهم نیست و به
            نظر می رسد که سرمایه گذاری در این زمینه مقرون به صرفه نباشد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
