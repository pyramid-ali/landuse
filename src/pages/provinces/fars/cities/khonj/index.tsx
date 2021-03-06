import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-17"].cities["IR-1710"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        agriculture: "زراعت",
        livestock: "دامداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        services: "خدمات",
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
            شهرستان خُنج یکی از شهرستان‌های جنوبی استان فارس بوده و مرکز این
            شهرستان، شهر خنج می‌باشد. جمعیت این شهرستان بر پایۀ سرشماری سال ۱۳۹۵
            ه‍.ش برابر با ۴۱٬۳۵۹ تن بوده‌است.این شهرستان از شمال به شهرستان قیر
            وکارزین، از شرق به لارستان، از جنوب به گراش و لامرد و از غرب به
            شهرستان فراشبند محدود می گردد. ارتفاع خنج از سطح دریا ۶۷۰ متر است.
            فاصله‌اش با خلیج فارس ۱۱۰ کیلومتر و با شیراز ۲۷۰ کیلومتر می‌باشد.آب
            و هوای این شهرستان گرم و خشک بوده و زمستان های معتدلی در این شهرستان
            سپری می شود. شکل زیر موقعیت شهرستان خنچ را نشان می دهد.{" "}
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
            اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح ‌شده
            ‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه
            اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد
            مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در
            صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي،
            مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به
            نتيجه نهايي مطلوب دست ‌يابد؛ بنابراين خروجي هر شهرستان از تجميع
            مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان خنج
            ارائه ‌شده ‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همان طوري كه در قسمت مقدمه اشاره ‌شد مبناي تحليل، مصاحبه‌ها و ليست
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
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری یکی از حوزه‌های رایج در شهرستان خنج است. تولید اشتغال توسط
            رسته باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار
            رونق می‌بخشد. کشاورزی و از جمله باغبانی در توسعه ملی و افزایش رفاه
            عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع
            درآمد و عدالت اجتماعی موثر است. در یک نگاه کلی می توان گفت نقش
            کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری
            الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه
            شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای
            بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.
          </p>
          <p>
            شهرستان خنج با داشتن آب و هوایی مناسب و همچنین داشتن خاکی حاصلخیز
            جهت انجام فعالیت های باغداری بسیار مناسب می باشد. در ادامه به نمونه
            هایی از محصولات قابل تولید در شهرستان خنج پرداخته می‌شود .
          </p>
          <p>
            در شهرستان خنج کشت صیفی جاتی نظیر گوجه، خیار و... به صورت انبوه
            انجام می شود و با توجه به بازار فروش مناسب این محصولات و سازگاری آن
            با شرایط اقلیمی منطقه، امکان گسترش کشت این محصولات همچنان در شهرستان
            وجود دارد و کشت این نوع محصولات پیشنهاد می شود.
          </p>
          <p>
            خرما از جمله محصولات باغی است که به میزان زیاد در شهرستان خنج کشت می
            شود و با آب و هوای این شهرستان سازگاری دارد . خرما میوه ای است با
            ارزش غذایی بالا که به علت دارا بودن مواد قندی قابل توجه (حدود 70
            درصد) علاوه بر مصرف غذایی، در صنعت نیز موارد استفاده فراوان دارد.
            مصارف مختلف خرما در صنعت شامل موارد خوراکی مانند شیره، شهد و شکلات
            خرما است. از ضایعات آن نیز در ترکیب خوراک دام و طیور، از برگ خرما در
            ساخت انواع ظروف بافتنی و حصیر و از تنه و چوب خرما در کارخانجات
            نئوپان سازی و کاغذسازی و همین طور پوشش ساختمان‌ها و پل‌ها استفاده می
            کنند.
          </p>
          <p>
            شهرستان خنج ظرفیت مناسبی جهت گسترش کاشت مرکباتی نظیر پرتقال، لیمو
            شیرین، لیمو ترش و نارنگی دارد و در حال حاضر نیز کشت این محصولات در
            شهرستان انجام می شود و سوددهی مناسبی را نیز برای کشاورزان این حوزه
            به دنبال داشته است. همچنین با توجه به رونق باغداری در این شهرستان
            احداث نهالستان نیز می تواند سوددهی مناسبی را به همراه داشته باشد.
          </p>
          <p>
            در شهرستان خنج پرورش قارچ نیز به صورت محدود انجام می شود که گسترش
            کشت آن در شهرستان می تواند سوددهی خوبی را به همراه داشته باشد .
            فعالیت بیشتر در این حوزه در صورت ایجاد بازار فروش کافی دارای مزیت
            خواهد بود. قارچ غنی از پروتئین و ویتامین است و همین امر باعث شده که
            جایگزین مناسبی برای گوشت باشد. در برخی از شهرها و روستاها به دلیل
            عدم آشنایی با فواید قارچ، میزان مصرف این محصول پایین است که می توان
            با تبلیغ و معرفی این محصول، میزان مصرف را افزایش داد. همچنین پرورش
            قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک شروع
            کرد.
          </p>
          <p>
            در شهرستان خنج کشت هندوانه، خربزه، طالبی و گرمک نیز انجام می شود اما
            با توجه به نیاز آبی بالای این محصولات جهت رشد لازم است که قبل از
            کاشت این محصولات به شرایط آبی منطقه و همچنین به استفاده از سیستم
            آبیاری نوین جهت آبیاری این محصولات توجه شود .
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بخش زراعت در روند رشد و توسعه اقتصادی نقش‎های متعددی بر عهده دارد که
            از جمله مهم‎ترین آن‎ها می‎توان تامین مواد خام و اولیه مورد نیاز
            صنایع بالادستی، تامین نهاده‎هایی مانند نیروی کار، مصرف تولیدات سایر
            بخش‏های صنعتی از قبیل کودها و سموم شیمیایی و ماشین‌آلات کشاورزی،
            ارزآوری برای کشور و تامین مالی سایر بخش‎های زیربنایی را نام برد. در
            این قسمت نیز به بررسی محصولات زراعی متناسب با شرایط موجود در منطقه
            پرداخته می شود و مزایای کشت هر کدام به تفکیک آورده می شود.
          </p>
          <p>
            کشت گندم از گذشته تاکنون به روش آبی و دیم در این شهرستان انجام شده
            است و همچنان برای توسعه آن مزیت وجود دارد. گندم در بازه زمانی حدودا
            هشت ماهه به ثمر نشسته و به مرحله سود دهی می رسد و در دو نوع بهاره و
            پاییزه کشت می شود که محصول دهی پاییزه آن بیشتر است. علاوه بر خود
            گندم، کاه آن نیز جهت تغذیه دام مورد استفاده قرار می گیرد و مشتری خاص
            خودش را دارد و بعد از برداشت محصول، زمین آن نیز چراگاه گوسفندان
            خواهد شد. همچنین کشت گندم مورد حمایت های دولت واقع شده و کود شیمیایی
            و بذر نیز به شکل یارانه ای در اختیار کشاورزان قرار می گیرد؛ بنابراین
            توسعه این کشت توجیه اقتصادی دارد.
          </p>
          <p>
            شهرستان خنج برای کشت دانه های روغنی مانند کنجد و کلزا نیز مستعد است.
            در حال حاضر نیز این محصولات در شهرستان کشت می شوند و پتانسیل گسترش
            کشت نیز وجود دارد. کنجد یکی از قدیمی‌ترین گیاهان زراعی است؛ بنابراین
            کشت کنجد از زمان های قدیم در ایران رواج داشته است و حتی زمانی به
            عنوان بخشی از صادرات کشور محسوب می شده است. از دانه گیاه کنجد در
            تهیه حلوا و انواع شیرینی استفاده فراوان می شود. روغن آن نیز در طبخ
            غذاهای مختلف و همچنین تهیه عطرها و به عنوان حلال در داروسازی مصرف می
            شود. با توجه به ارزش غذایی این محصول، بازار مصرف همواره برای آن وجود
            دارد و گسترش آن در صورت تامین منابع آبی، سوددهی بالایی خواهد داشت.
          </p>
          <p>
            از مزایای کشت کلزا این است که این محصول می تواند در تناوب با زراعت
            گندم و جو قرار گرفته و از تراکم بیماری ها، آفات و علف های هرز بکاهد
            و باعث افزایش عملکرد دانه این محصولات شود. کلزا دارای پتانسیل عملکرد
            بالا بوده و در بین دانه های روغنی از درصد روغن بالایی (40 تا 45
            درصد) برخوردار است. کلزا به علت بقایای گیاهی مطلوب، علاوه بر تاثیر
            مثبت در میزان ماده آلی خاک، در تامین علوفه مورد نیاز زارعین نیز موثر
            است. همچنین کشت این محصول برای کشور بسیار مهم است زیرا سالانه مقدار
            زیادی واردات در این زمینه صورت می گیرد و ارز زیادی از کشور خارج می
            شود.{" "}
          </p>
          <p>
            پنبه نیز از محصولات زراعی دیگری است که در این شهرستان کشت می شود و
            می توان نسبت به توسعه کشت آن اقدام کرد. این گیاه گرمادوست می‌باشد و
            رشد و نمو آن بستگی زیادی به دما دارد و هرگز نباید با یخبندان و سرمای
            شدید مواجه گردد که این شرایط در شهرستان خنج فراهم است. البته این
            گیاه به شوری مقاوم است و در اغلب خاک‌های زراعی می‌توان آن را کشت
            نمود، اما خاک‌های رسوبی و جلگه‌ای عمیق با مواد آلی کافی و زهکشی
            طبیعی، مناسب‌تر هستند. پنبه، به طلای سفید مشهور است. الیاف پنبه یکی
            از مهم‌ترین الیاف طبیعی برای تهیه نخ و پارچه به شمار می‌رود و
            محصولات آن علاوه بر ویژگی‌هایی چون استحکام، دوام، رنگ‌پذیری، قابلیت
            شستشو، اتو پذیری، قابلیت جذب گرما و تبادل هوا، موجبات آرامش روحی و
            احساس مثبت را در انسان فراهم می‌آورد.
          </p>
          <p>
            حبوباتی همچون عدس نیز در این شهرستان کشت می گردند که می توان در
            زمینه گسترش سطح کشت آن ها اقدام کرد. عدس نیز از جمله حبوباتی است که
            کشت و برداشت آن نسبت به سایر حبوبات ساده تر بوده و با دو روش دیم و
            آبی قابل کشت است. این گیاه با هوای سرد هم سازگاری دارد و در فصل
            پاییز میزان ثمردهی آن بیشتر از بهار است. این گیاه به حاصلخیزی خاک
            کمک کرده و همچنین به عنوان کود سبز برای تقویت خاک استفاده می شود.
          </p>
          <p>
            ذرت در دو نوع علوفه ای و دانه ای در این شهرستان کشت می شود. دولت
            برای تشویق به کشت این گیاه، اقدام به خرید تضمینی آن از کشاورزان می
            کند. روغن ذرت، کنسرو بلال و دانه ذرت به مصارف انسانی می رسد و همچنین
            دانه ذرت در مرغداری ها و علوفه تر، خشک، سیلو شده و کنجاله دانه در
            دامداری ها استفاده می شود. طبق لیست مزیت سنجی توسعه کشت این محصول در
            این شهرستان دارای مزیت است، البته باید برای تأمین آب این محصول از
            آبیاری مکانیزه استفاده کرد؛ زیرا مصرف آب آن بسیار بالاست.
          </p>
          <p>
            کشت تنباکو و برنج نیز در این شهرستان به صورت محدود انجام می شود که
            در صورت وجود منابع آبی مناسب امکان گسترش سطح زیر کشت آن ها وجود
            دارد. برنج از مهم ترین غلات و اقلام غذایی است که بیشتر مردم به عنوان
            یک غذای اصلی به آن وابسته هستند. آب مورد نیاز برای کشت برنج از سایر
            غلات بیشتر است و رطوبت کافی از عوامل مورد نیاز برای کاشت بهتر این
            محصول است.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری به عنوان یکی از حوزه های بخش کشاورزی، در شهرستان خنج انجام
            می شود. انجام این فعالیت سود اقتصادی مناسبی را برای شهرستان به همراه
            داشته است. با توجه به اینکه حوزه دامداری با یکی از مهم ترین نیازهای
            انسان، یعنی نیاز به منابع غذایی و همچنین منابع پروتئینی مرتبط
            می‌باشد؛ بنابراین همواره مورد توجه قرار گرفته است. فعالیت در این
            حوزه شغلی و افزایش بهره وری در آن، می تواند عاملی برای توسعه صنایع
            غذایی، تبدیلی و تکمیلی محسوب شود. این شهرستان به لحاظ وضعیت منطقه ای
            و بستر آماده برای پرورش دام توانسته است پتانسیل های بالقوه ای را
            برای خود ایجاد کند و زمینه را برای اشتغال جوانان این منطقه فراهم
            کند.
          </p>
          <p>
            به طورکلی دامداری در این شهرستان به صورت سنتی انجام می شود. در
            شهرستان خنج، سرمایه گذاری در حوزه دامداری بازدهی خوبی خواهد داشت.
            طبق نظر کارشناسان، در این شهرستان پرورش دام سبک بهتر نتیجه می دهد.
            همچنین اگر پرورش دام به صورت صنعتی و نیمه صنعتی انجام شود، بازدهی
            مطلوب تری خواهد داشت. از جمله دام های سبک پرورشی در این شهرستان می
            توان به گوسفند بومی، قشقایی و بز بومی اشاره نمود. توسعه پرورش این
            دام ها در شهرستان مزیت دارد و پیشنهاد می شود.
          </p>
          <p>
            پرورش گوسفند بومی در این شهرستان نسبت به سایر حیوانات، بیشتر مورد
            توجه دامداران قرار گرفته است؛ زیرا توان گوسفند برای تحمل اقلیم های
            متفاوت بیشتر است. همچنین جیره غذایی کمتر و در نتیجه هزینه کمتری نیاز
            دارد. تمامی فرآورده های دامی مانند گوشت، شیر، ماست، کره و حتی پشم و
            پوست این دام پرکاربرد هستند و فروش این فرآورده ها در تمامی روزهای
            سال انجام می‌شود. قیمت گوشت گوسفند بالا است و به علاوه سایر اجزای
            گوسفند مانند دل، قلوه، جگر، سیرابی، کله پاچه، خوش گوشت و … نیز قابل
            فروش هستند. خرید دام برای قربانی کردن در ایام مذهبی مانند عید قربان
            و … موجب رونق این کسب و کار می‌شود.
          </p>
          <p>
            نژاد قشقایی از محبوب ترین نژادهای گوسفندان در کشور است. این گوسفندان
            جزو نژادهای گوشتی هستند و قادرند در شرایط محیطی دشوار نیز زندگی
            کنند. همچنین گوشت آن‌ها به عنوان یکی از با کیفیت ترین گوشت های
            گوسفند به شمار می رود.{" "}
          </p>
          <p>
            به طور کلی بز به ‌عنوان یک حیوان اهلی نشخوارکننده جهت تولید شیر و
            گوشت در این شهرستان پرورش داده می‌شود. جثه کوچک، کم توقع بودن و
            مقاومت در برابر بیماری‌ها و شرایط سخت محیطی باعث شده است که بز به
            ‌عنوان حیوانی محبوب در بین دامداران تلقی شود. در نقاط مختلف از این
            حیوان علاوه بر تولید شیر و گوشت، جهت تولید پوست و الیاف مویی نیز
            استفاده می‌شود.
          </p>
          <p>
            علاوه بر ظرفیت بالای شهرستان در زمینه پرورش دام سبک، برای پرورش گاو
            بومی و هلشتاین نیز مزیت وجود دارد. طبق نظر کارشناسان، اخیراً پرورش
            دام های اصلاح نژاد در این شهرستان بیشتر انجام می شود؛ لذا نسبت به
            گاو بومی در اولویت بالاتری قرار می گیرند.
          </p>
          <p>
            گاوهای بومی به لحاظ تنوع و اختلاف ژنتیکی، ویژگی های خاص نژادی و
            مقاومت های طبیعی ایجاد شده در آن ها طی قرن ها زیست در شرایط سخت
            محیطی و آب و هوایی مختلف به عنوان یک منبع عظیم تولید شیر و گوشت می
            تواند نقش مؤثری در تأمین مواد پروتئین حیوانی و اقتصاد شهرستان ایفا
            نماید. همچنین پوست گاو به عنوان یک محصول با ارزش دامی در صنعت
            چرم‌سازی استفاده می‌شود، حتی شاخ، سم و فضولات این حیوان نیز ارزش
            اقتصادی داشته و به روش های مختلف مورد استفاده قرار می گیرد.
          </p>
          <p>
            گاو هلشتاین که به نام هولشتاین نیز شناخته می شود جزو سنگین وزن ترین
            گاوهای شیری به شمار می‌رود. این نژاد که از نظر تولید شیر بهترین نژاد
            در میان گاوهای شیری است، حدوداً ۷۲۴۰ لیتر شیر در سال تولید می کند.
            این شیر دارای 65/3 درصد چربی و ۳ درصد پروتئین است.
          </p>
          <p>
            طبق نظر کارشناسان، پرورش شتر در قسمت هایی از شهرستان انجام می شود و
            با توجه به اینکه با شرایط اقلیمی شهرستان سازگار است، قابلیت توسعه آن
            وجود دارد. پرورش شتر نسبت به سایر دام ها مزیت‌هایی مانند قابلیت
            سازگاری با شرایط سخت محیطی مناطق خشک و نیمه خشک، تحمل گرما، کم آبی و
            کیفیت پایین علوفه و مقاومت نسبی در مقابل امراض و عوامل بیماری زا
            دارد. همچنین شتر در مقایسه با سایر دام های اهلی علوفه را با قابلیت
            هضم بالا و بازده بیشتری استفاده می نماید و قادر است از انواع خاص
            گیاهان مرتعی (خشبی، خاردار و تیغ دار) به میزانی استفاده نماید که
            سایر دام ها قادر به استفاده از آن نیستند. از دیگر فواید پرورش شتر،
            حداقلِ نیاز به تاسیسات، تجهیزات و امکانات پرورش و نگهداری و در نتیجه
            کمترین نیاز به سرمایه گذاری سنگین را دارد. گوشت شتر منبع بسیار خوبی
            برای بسیاری از مواد غذایی مهم و مورد نیاز بدن می‌ باشد. این گوشت
            حاوی پروتئین‌ هایی با ارزش غذایی بالا و تعدادی از ویتامین ‌های مفید
            و مورد نیاز بدن نظیر ویتامین ‌های گروه B و برخی از عناصر معدنی مهم
            نظیر آهن ، فسفر و کلسیم است. سازمان ملل متحد شیر شتر را جزو
            سالم‌ترین شیر حیوانی جهان شمرده است و به ‌دلیل خواص زیاد شیر شتر
            برخی محققان به آن «طلای سفید بیابان» می‌گویند.
          </p>
          <p>
            زنبورداری از جمله مشاغلی است که در این شهرستان انجام می شود. طبق نظر
            کارشناسان، این فعالیت اشباع نشده است و همچنان ظرفیت برای فعالیت های
            بیشتر در این زمینه وجود دارد. باردهی گل ها و میوه ها با گرده افشانی
            توسط زنبورعسل افزایش می یابد. این مسئله باعث شده است که ارزش اقتصادی
            پرورش زنبورعسل بسیار بیشتر از ارزش ریالی حاصل از تولید عسل باشد. در
            طی فرآیند پرورش و نگهداری زنبورعسل، با ازدیاد کندوها می توان به فروش
            کندو نیز اقدام کرد و به سود خوبی دست یافت. در مناطق گرمسیری از هر
            کندو یک بچه کندو و در مناطق سردسیری این تعداد به دو یا بیشتر افزایش
            می یابد. در ضمن محصول مزرعه پرورش زنبور عسل صرفاً کندو و عسل نیست،
            بلکه موم، زهر و ژل آن نیز قابلیت فروش دارد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            با وجود تنوع تولید محصولات کشاورزی در شهرستان خنج، بررسی‌ها نشان
            می‌دهد که سالانه مقداری از این محصولات در مرحله برداشت به ضایعات
            تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از محصولات
            کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال
            صورت می‌پذیرد؛ لذا توسعه صنایع تبدیلی در این شهرستان می‌تواند زمان
            استفاده از محصولات را افزایش دهد و از میزان ضایعات آن بکاهد. همچنین
            گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از اتلاف و
            ضایع شدن محصولات در این شهرستان خواهد شد.
          </p>
          <p>
            میوه های تولید شده در شهرستان عموماً به صورت فله ای به فروش می رسند
            و با کیفیت ترین محصولات با سایر تولیدات که کیفیت پایین تری دارند به
            یک قیمت به فروش می رسند. از این رو سورتینگ و درجه بندی میوه های
            تولید شده باعث می شود، تا محصولاتی که صادراتی هستند، یک دست باشند و
            کسب درآمد از این فعالیت به مراتب بیشتر شود.
          </p>
          <p>
            در رابطه با کشتار دام و طیور در شهرستان خنج، کشتارگاهی وجود ندارد،
            اما در نزدیکی شهرستان کشتارگاه دام وجود دارد. با این وجود با توجه به
            سطح دامداری در شهرستان، به نظر می رسد احداث کشتارگاه صنعتی دام و
            طیور در این شهرستان توجیه اقتصادی داشته باشد. کشتارگاه‌های صنعتی نقش
            مهمی در حفظ محیط زیست دارند؛ به دلیل اینکه ضایعات حاصل از کشتار دام
            نظیر خون و اجزای گوشتی غیر قابل مصرف، در محل تبدیل ضایعات به پودر
            گوشت که خوراک دام است، تبدیل می شود و علاوه بر قرار گرفتن مجدد در
            چرخه اقتصادی، از آلودگی محیط زیست نیز جلوگیری می‌کند. فاضلاب حاصل از
            کشتار در تصفیه خانه های مجهز تصفیه شده و پساب حاصله به مصرف کشاورزی
            می رسد. البته در کشتارگاه ها باید فضای مناسب برای کشتار دام سبک و
            سنگین به صورت همزمان وجود داشته باشد و همچنین باید آب مورد نیاز در
            زمان کشتار نیز تامین شده و تجهیزات و امکانات لازم برای رعایت مسائل
            بهداشتی و زیست محیطی فراهم شود.
          </p>
          <p>
            یکی از محصولاتی که به میزان زیاد در شهرستان خنج تولید می شود خرما
            است که معمولا به صورت فله و بدون بسته بندی به سایر استان ها ارسال می
            شود؛ بنابراین می توان با بسته بندی این محصول ارزش افزوده حاصل از آن
            را به میزان قابل توجهی افزایش داد و باعث افزایش درآمد و سوداوری برای
            شهرستان شد.
          </p>
          <p>
            با وجود تولید عسل در این شهرستان به میزان مناسب، واحدی جهت بسته بندی
            آن وجود ندارد؛ بنابراین احداث واحد صنعتی جهت بسته بندی عسل در
            شهرستان صرفه اقتصادی خوبی به همراه خواهد داشت. راه اندازی خط تولید و
            بسته بندی عسل یکی از بهترین راهکارهایی است که می‌توان به کمک آن یک
            منبع درآمد پایدار برای فرد یا خانواده ایجاد کرد. خوشبختانه عسل یکی
            از موادی است که امکان فاسد شدن آن وجود ندارد و می‌توان آن را برای
            مدت زمان زیادی بسته بندی کرد. از طرف دیگر روند تولید این محصول
            پیچیدگی چندانی ندارد و فرد می‌تواند با سرمایه کم حجم بالایی از آن را
            تولید نماید.
          </p>
          <p>
            با توجه به جمعیت بالای دام در این منطقه به ویژه دام سبک، ایجاد
            کشتارگاه صنعتی دام پیشنهاد می گردد. همچنین بررسی های انجام شده نشان
            می‌دهد ایجاد واحدی برای تولید خوراک دام، فرصت مناسبی برای سرمایه
            گذاری است؛ زیرا شهرستان خنج فاقد چنین واحدی است و در حال حاضر خوراک
            دام از جمله نیازهای این شهرستان است که از سایر شهرستان‌ها تأمین
            می‌شود.{" "}
          </p>
          <p>
            به منظور نگهداری و ذخیره سازی محصولات کشاورزی، احداث واحد سردخانه
            صنعتی در این شهرستان مزیت دارد. از مهمترین مزایای استفاده از سردخانه
            میوه و سبزی می توان به جلوگیری از فساد محصول اشاره کرد. روند انواع
            فسادها از قبیل فساد فیزیکی، فساد شیمیایی یا تغییر رنگ محصول، فساد
            ناشی از وجود میکروارگانیسم ها و غیره با نگهداری در سردخانه ها به شدت
            کند شده و حفظ کیفیت محصول در زمان طولانی تر حاصل می گردد. از دیگر
            مزایای با اهمیت احداث سردخانه میوه، کنترل قیمت بازار است. ذخیره کردن
            میوه در سردخانه موجب می شود در ماه هایی از سال که مصرف میوه بسیار
            است و فصل برداشت آن محصول خاص نیست، بازار با کمبود مواجه نشده و حباب
            قیمت ایجاد نگردد. در واقع با ساخت سردخانه میوه تعادلی در عرضه و
            تقاضا ایجاد می گردد و موجب خواهد شد از افزایش بی رویه قیمت که به ضرر
            مصرف کننده است و از کاهش بیش از حد آن که به ضرر باغداران است جلوگیری
            به عمل آید؛ بنابراین نقش سردخانه های میوه جات به عنوان حد واسط بازار
            و باغداران در این بین بسیار پر رنگ و حیاتی است.
          </p>
          <p>
            به رغم تولید میزان بالایی از گندم مرغوب در مزارع شهرستان متأسفانه
            برای فرآوری آن واحدی در شهرستان وجود ندارد؛ بنابراین سرمایه گذاری در
            زمینه احداث کارخانه آرد از مهم ترین نیازهای شهرستان خنج است. با
            آسیاب کردن گندم، جوانه و سبوس یا همان پوسته از بخش آردی آن تفکیک
            می‌گردد. آرد با توجه به میزان سبوس جدا شده، به انواع مختلفی
            تقسیم‌بندی می‌گردد. از انواع آرد می‌توان به آرد قنادی، آرد ستاره،
            آرد سبوس و آرد کامل اشاره نمود که از این میان آرد کامل به لحاظ میزان
            سبوس بالای آن، دارای ارزش غذایی قابل توجهی است. از طرفی ایران از
            جمله کشورهایی است که سرانه مصرف آرد و تولید نان در آن بالاست؛
            بنابراین بازار مصرف آن همواره فراهم است.
          </p>
          <p>
            لازم به ذکر است که در صورت دقت نکردن به بازار فروش و ظرفیت شهرستان،
            مشاغلی که در این حوزه نام برده شد با مسئله اشباع روبه رو خواهند شد؛
            بنابراین در نظر گرفتن نیاز و ظرفیت شهرستان و همچنین بازار فروش در
            شهرستان های اطراف در زمینه راه انداری این مشاغل مهم است.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            راه‌اندازی کسب و کار فرآوری محصولات کشاورزی مهم ترین روش برای ایجاد
            اشتغال پایدار و عاملی مهم در توسعه پایدار امنیت غذایی شهرستان محسوب
            می‌شود. ایجاد صنایع غذایی در شهرستان خنج، علاوه بر اشتغالزایی، باعث
            ارتقای سطح درآمد ارزی کشور نیز می‌شود که کاهش هدررفت محصولات کشاورزی
            و ایجاد ارزش افزوده از منابع را تا حد امکان ممکن می‌سازد.
          </p>
          <p>
            تولید لبنیات در شهرستان به صورت خانگی انجام می شود. با توجه به اینکه
            شیر تولید شده در شهرستان کفاف تامین نیاز شهرستان خنج را می دهد،
            ایجاد واحد های سنتی و نیمه صنعتی برای تولید آن دارای مزیت است. شیر و
            فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان است که
            از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز و پروتئین،
            غنی می‌باشد و همیشه استقبال بسیار خوبی از این نوع محصولات می شود.
            البته باید توجه داشت برای موفقیت در زمینه تولید لبنیات باید به
            بالابردن توانایی در زمینه رقابت با نشان‌های تجاری معروف نیز فکر کرد.
          </p>
          <p>
            با توجه به اینکه در شهرستان خنج سالانه مقدار زیادی خرما تولید می
            شود؛ بنابراین احداث واحدی جهت فرآوری خرما در شهرستان خنج مزیت خواهد
            داشت. فرآوری‌های متداول از خرما نظیر تولید شیره خرما، شهد خرما، سرکه
            خرما، چیپس خرما، قند مایع خرما، قهوه خرما، شکلات، نان و لواشک خرمایی
            مزیت تولید دارند، البته فرآوری خرما در همه موارد برای شهرستان قابلیت
            فعالیت دارد. همچنین با توجه به اینکه سالانه مقدار زیادی کنجد در
            شهرستان خنج تولید می شود؛ بنابراین فعالیت در حوزه فرآوری این محصول
            نظیر تولید روغن می تواند سودآوری مناسبی را برای سرمایه گذاران این
            حوزه فراهم آورد.
          </p>
          <p>
            در شهرستان خنج کشت گیاهان دارویی و همچنین گیاهان دارویی خودرو به
            میزان زیاد است و فعالیت در حوزه فرآوری این گیاهان به دلیل بازار مصرف
            بسیار خوب دارای مزیت است و می توان به سوددهی خوبی رسید. در واقع
            فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز به سرمايه‌گذاري
            زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته باشد. یکی از
            فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات دارای
            تکنولوژی و دانش فنی پیچیده‌ای نمی باشد و می‌توان به راحتی در این
            حوزه وارد شد. همچنین احداث واحدی برای بسته بندی این محصول نیز سوددهی
            خوبی خواهد داشت. همچنین با توجه به وجود باغات خوب میوه در این
            شهرستان، فراوری محصولات تولیدی نظیر تولید آبمیوه و سایر فراورده های
            میوه پتانسیل های لازم برای سرمایه گذاری را دارد.
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
            شهرستان خنج وجود دارد اما نکته مهم و قابل توجه، بازاریابی جهت فروش
            محصولات تولیدی است. در واقع وجود بازار فروش دائمی و مطمئن می تواند
            زمینه را برای گسترش طرح های پرورش طیور چه به صورت سنتی و چه صنعتی
            فراهم نماید؛ بنابراین طیوری که به آن پرداخته می شوند، به شرط
            بازازیابی مناسب مزیت پرورش دارند.
          </p>
          <p>
            پرورش مرغ گوشتی و تخم گذار در این شهرستان به صورت صنعتی انجام می شود
            که با توجه به شرایط حاضر امکان گسترش و توسعه آن وجود دارد. گوشت مرغ
            به سبب مزیت‌های فراوانی که دارد به عنوان منابع تامین پروتئین می
            تواند مطرح و نیاز عمومی منطقه و کشور را در این زمینه مرتفع نماید.
            ارزش غذایی بالای گوشت طیور، کم بودن افت پس از کشتار، سالم و بهداشتی
            بودن گوشت طیور، قابلیت هضم و جذب بالا، سرعت رشد سریع، صرفه جویی در
            جایگاه و زمین و برگشت سریع سرمایه از فواید پرورش مرغ گوشتی است.
          </p>
          <p>
            پرورش مرغ تخمگذار علاوه بر اینکه به تامین منابع غذایی طبیعی و رونق
            تولید کمک می کند نقش به‌سزایی در امر اشتغالزایی، بهبود وضع اقتصادی و
            خودکفایی در تولید محصول ارگانیک و طبیعی ایفا می‌کند. در صورتی که شخص
            بخواهد مشغول به پرورش مرغ تخم‌گذار به صورت محدود شود نیاز به
            تکنولوژی پرهزینه‌ای ندارد و با بهره گیری از امکانات کم و موجود در
            روستا یا محل زندگی خود می تواند شرایط اجرای طرح را فراهم کند. پرورش
            مرغ تخم‌گذار به صورت صنعتی و با تمام تجهیزات مدرن می‌تواند در صورت
            پیدا کردن بازار مناسب، سالیانه حدود 20 تا 30 درصد سودآوری داشته باشد
            که رقم مناسبی است. همچنین پیدا کردن بازار فروش با حاشیه سود بالا از
            امور مهم در مورد این کسب و کار است که با تبلیغات مناسب مخصوصا در
            فضای مجازی امکان پذیر است.
          </p>
          <p>
            پرورش شترمرغ، کبک و بلدرچین نیز هم اکنون در شهرستان انجام می‌شود؛
            اما ظرفیت های سرمایه گذاری و توسعه را دارند. قابل ذکر است که پرورش
            شترمرغ در این بین از مزیت بالاتری برخوردار است.
          </p>
          <p>
            شترمرغ در گروه پرندگان طبقه بندی شده و گوشت آن جزء گوشت‌های قرمز
            محسوب می‌شود که نسبت به دیگر گوشت‌های قرمز کم چرب‌تر و سالم‌تر است
            به طوری که ۹۰ درصد آن قابلیت هضم داشته و بعد از گوشت ماهی در رتبه
            دوم قرار دارد. پوست این پرنده از بهترین نوع چرم بوده و مقاومتش 3
            برابر چرم گاو است و ظرافت خاصی دارد و در تولید کیف و کفش با قیمت
            بالا به کار می رود. علاوه بر آن، از پر و تخم شترمرغ، ناخن و قرنیه
            چشم آن برای مصارف صنعتی، دارویی، زینتی و نیز تولید نخ بخیه استفاده
            می شود. همچنین با استفاده از پوکه تخم این پرنده در زمینه صنایع دستی
            و خلق آثار هنری، می توان اشتغال زایی کرد.
          </p>
          <p>
            کبک پرنده‌ای است وحشی، که در کوهستان‌ها زندگی می‌کند و از قدرت پرواز
            کمی برخوردار است. محصولات کبک نسبت به دیگر طیور به دلیل طعم و کیفیت
            مناسب و قیمت بیشتر، مشتریان خاص خود را دارد. از جهت دیگر به دلیل
            مقاومت نسبتاً بالای این پرنده در مقابل بیماری‌ها، تلفات آن نسبت به
            دیگر پرندگان کمتر است. با پرورش کبک به‌صورت صنعتی می‌توان بخشی از
            نیاز کشور در حوزه گوشت را تأمین کرد و از میزان واردات آن به داخل
            کشور کاست. همچنین می‌توان به بازار جوجه و تخم کبک نیز اشاره نمود که
            قابلیت تولید و عرضه را دارد.
          </p>
          <p>
            بلدرچین پرنده ای با جثه کوچک است که در برابر بسیاری از بیماری ها
            مقاوم است. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع نبودن
            بازار فروش، کوتاه بودن دوره پرورش (40 روز) و عدم پرورش انحصاری توسط
            شرکت های بزرگ دارای مزیت است. محصولات این پرنده شامل گوشت، تخم
            بلدرچین و کود است. گوشت و تخم این پرنده دارای ارزش غذایی و دارویی و
            همچنین سرشار از پروتئین است.
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
            سپرده شده اند. در ادامه توضیحاتی راجع به پتانسیل های صنایع دستی در
            شهرستان خنج آورده شده است اما در هر صورت اگر توجهی به آن از سمت دولت
            و نهادهای مربوطه نشود، نمی توان انتظار موفقیت برای آن داشت.
          </p>
          <p>
            قالی بافی از جمله صنایع دستی این شهرستان می باشد که فعالیت بیشتر در
            این زمینه مزیت دارد. قالی بافی از مشاغل خانگی پردرآمدی است که
            تسهیلات خوبی به آن تعلق می‌گیرد. بسیاری از زنان خانه دار این هنر را
            یک فرصت شغلی مناسب می‌دانند چون در کنار کارهای روزمره می‌توانند به
            این کار بپردازند و درآمد خوبی کسب کنند. از آن جایی که قالی انواع
            مختلفی دارد می‌توان با آموختن دانش آن، محصولات متنوع و متناسب با ذوق
            و سلیقه افراد تولید و به بازار عرضه کرد. همچنین با تولید فرش با
            کیفیت می‌توان به صادرات در این زمینه فکر کرد. این کسب و کار را
            می‌توان در فضای کوچک و با سرمایه اولیه کم راه انداخت و با فروش محصول
            و افزایش مشتری، این کار را گسترش داد و زمینه اشتغال بسیاری از جوانان
            را فراهم کرد.
          </p>
          <p>
            یکی دیگر از صنایع دستی این شهرستان گلیم بافی است. گلیم، زیر انداز و
            پوششی است که از ابریشم، موی بز، پشم گوسفند و یا دیگر چهار پایان اهلی
            بافته می شود. از گلیم به شکل سنتی اش، معمولا برای پوشاندن زمین،
            دیوار و یا رو اندازی برای حیوانات باربر استفاده می شود. ولی امروزه
            این محصولات به عنوان یک پوشش مدرن برای خانه های شهری نیز استفاده می
            شوند. گلیم های بافته شده در این شهرستان، نقوش بسیار زیبا، متنوع و
            منحصر به فردی دارند که موجب شده اند گلیم بوشهر به عنوان یکی از
            زیباترین گلیم های ایران شناخته شود. نقش های بافته شده بر روی این
            گلیم های زیبا عبارتند از: نقش حوض، دانه بیگی، آیینه گل، نقش خراسانی،
            آقاجاری، تهرانی و چنگ. فعالیت در این زمینه ضمن ایجاد اشتغال، سوددهی
            مناسبی خواهد داشت.
          </p>
          <p>
            گبه بافی از برجسته ترین صنایع دستی شهرستان خنج است که معمولاً در
            مناطق روستایی این شهرستان بافته می شود. گبه در دو نوع رنگی و خودرنگ
            بافته می شود. در بافت گبه رنگی، از نخ های دست ریس آماده شده از پشم
            گوسفند که به شیوه رنگرزی گیاهی رنگ آمیزی شده اند، استفاده می کنند.
            در بافت گبه های خود رنگ، از پشم گوسفندان با همان رنگ طبیعی خودشان
            استفاده می شود. گبه های مشهور استان، در طرح های خشتی، درختی، شیری و
            چهار فصل بافته می شود. افزایش فعالیت در این زمینه همراه با تأمین
            بازار فروش، توجیه اقتصادی خواهد داشت.
          </p>
          <p>
            حصیربافی از جمله صنایع دستی شهرستان خنج است. حصیر با استفاده از برگ
            خرما تولید می شود و با استفاده از آن لوازم دیگری مانند سبد، گلدان و
            وسایل تزئینی دیگر نیز تهیه می شود. با توجه به تجربه مردم شهرستان در
            انجام این هنر و همچنین وجود مواد اولیه لازم در شهرستان، فعالیت
            گسترده تر در این زمینه در صورت بازاریابی صحیح، قابلیت داشته و جزو
            پیشنهادات شغلی این حوزه می‌باشد.{" "}
          </p>
          <p>
            بعد از موارد فوق می‌توان به مزیت هایی مانند خوس بافی و جاجیم اشاره
            کرد که در حال حاضر توسط برخی از مردم شهرستان انجام شده و در صورت
            وجود بازار مصرف، همچنان جای کار داشته و می‌توان این تولیدات را
            افزایش داد .{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی
            گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با
            یکدیگر تفاوت هایی دارد. برای مثال گردشگری از فعالیت هایی است که با
            سودآوری بسیاری همراه است و در شهرستان خنج نیز ظرفیت های بسیار خوبی
            برای سرمایه گذاری در زمینه گردشگری وجود دارد.
          </p>
          <p>
            قلعه خندق، قلعه خوددامی، تل توانگر، آب انبار سید، سد پیر غار و ...
            از جمله جاذبه های دیدنی شهرستان خنج هستند که مورد استقبال مردم واقع
            می‌شوند ؛ بنابراین احداث اقامتگاه بوم گردی در این شهرستان سودآور
            خواهد بود.
          </p>
          <p>
            اقامتگاه بوم گردی فرصت مناسبی است تا مسافران ضمن گردشگری در هر منطقه
            و بازدید از جاذبه های توریستی، حس ایرانی زیستن به سبک سنتی را تجربه
            کنند. همچنین طبخ غذاهای محلی در برخی اقامتگاه ها، مصداق دیگری از
            مهمان نوازی ایرانی است. با توجه به اینکه علاقه مردم به سمت بازدید و
            اقامت در این مناطق بیشتر شده ‌است، گسترش این اماکن توجیه اقتصادی
            دارد.
          </p>
          <p>
            شهرستان خنج فاقد سینما است ؛ بنابراین احداث آن در صورت استقبال مردم
            ارزش افزوده زیادی به همراه خواهد داشت.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی هر کشوری است که متاسفانه
            در کشور ما آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل
            های هر شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در
            شهرستان خنج، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما
            پتانسیل های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد
            واحدهای صنعتی جدید ظرفیت وجود دارد.
          </p>
          <p>
            با توجه به رونق کشاورزی در شهرستان خنج و نیاز به ادوات کشاورزی،
            سرمایه گذاری در زمینه تولید ادوات کشاورزی از صرفه اقتصادی خوبی
            برخوردار خواهد بود. فعالیت در این زمینه ضمن اشتغالزایی برای جوانان،
            درآمدزایی بسیار خوبی نیز به همراه خواهد داشت.
          </p>
          <p>
            از دیگر کسب و کارهایی که در شهرستان خنج بنا به نظر کارشناسان می
            تواند سودآوری مناسبی به همراه داشته باشد تولید مصالح ساختمانی و مواد
            شوینده و بهداشتی است که سرمایه گذاری در این بخش می تواند موجب اشتغال
            جوانان این منطقه و کاهش درصد بیکاری شود.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه های شغلی سوددهی است که ظرفیت بسیار خوبی در کشور ما
            برای آن وجود دارد که اگر از این ظرفیت های شیلاتی استفاده شود ارزآوری
            بسیار خوبی برای کشور به همراه خواهد شد. در شهرستان خنج به دلیل وجود
            محدودیت‌های منابع آبی پرورش ماهی به صورت محدود انجام می شود و در این
            حوزه بیشتر پرورش ماهیان سردابی نظیر قزل آلا انجام می شود.
          </p>
          <p>
            ماهی قزل‌آلا مناسب‌ترین ماهی سردابی جهت پرورش است، زیرا آسان‌تر به
            غذای دستی عادت کرده و نسبت به درجه حرارت و کیفیت آب، حساسیت کمتری
            دارد. از این ماهی می‌توان جهت ماهی‌دار کردن آبگیرهای طبیعی استفاده
            نمود. به دلیل وجود تعداد زیادی مراکز تکثیر ماهی قزل‌آلای رنگین‌کمان
            در کشور، در طول سال بچه ماهی مورد نیاز مزارع پرورشی در اوزان مختلف
            مهیا می‌شود. از طرفی وجود کارخانه‌های متعدد تولید غذای ماهی قزل‌آلا
            باعث شده تا عمده‌ترین اقلام مورد نیاز مزارع پرورشی به‌راحتی قابل
            تأمین باشد. ماهی قزل‌آلای رنگین‌کمان مانند سایر آزادماهیان دارای
            گوشتی لذیذ است که طرفداران زیادی دارد و طعم و مزه این ماهی حتی در
            بین کسانی که کمتر ماهی را به‌عنوان غذای اصلی خود مصرف می‌کنند،
            خوشایند است.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
