import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-12"].cities["IR-1201"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        gardening: "باغداری",
        agriculture: "زراعت",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        industry: "صنعت",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        services: "خدمات",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            اسفراین شهری در جنوب شرقی استان خراسان شمالی است. این شهر مرکز
            شهرستان اسفراین است و صفی‌آباد دیگر شهر آن است.کردزبانان اصلی‌ترین
            ساکنین شهر اسفراین هستند.این شهرستان از جنوب و جنوب شرقی با شهرستان
            سبزوار، از شرق با قوچان و سبزوار و از غرب با بجنورد همسایه‌ است. در
            حاشیه جنوبی کوه‌های آلاداغ که خود در امتداد شرقی رشته کوه البرز قرار
            دارد و در قسمت جنوبی به ارتفاعات جغتای می‌پیوندد . شکل زیر موقعیت
            شهرستان اسفراین را نشان می‌دهد.
          </p>
          <p>
            عمده‌ترين مراكز سكونتي واحدهاي دشتي شامل دشت اسفراين و دشت صفي آباد
            هستند. با وجود اين در برخي دره‌هاي باز نيز استقرارهايي شكل گرفته
            است. به طور كلي آب و هواي شهرستان اسفراين معتدل با زمستان‌هاي سرد تا
            ملايم است. در نواحي شمالي شهرستان به دليل وجود انشعابات بينالود، آب
            و هوا معتدل كوهستاني و در مناطق جنوبي شهرستان به دليل نزديكي به كوير
            تابستان‌ها گرم و خشك و زمستان‌ها سرد است.
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
            درصد زیادی از ساکنین شهرستان اسفراین را کردزبان‌ها تشکیل داده‌اند که
            به طور ذاتی به دامپروری و نگهداری دام علاقه‌مند هستند. دام‌های سبک
            اعم از گوسفند و بز در حاشیه‌ی شهرستان پرورش داده می‌شوند. وجود مراتع
            بکر و حاصلخیز در شمال خراسان و ایجاد زنجیره تولیدات، باعث فعالیت
            گسترده دام در این منطقه شده است. در کنار پرورش این دام‌ها، پرورش گاو
            هم انجام می‌شود. پرواربندی گوساله هم به دلیل شرایط مناسب منطقه موفق
            خواهدبود.
          </p>
          <p>
            پرورش زنبور به منظور تهیه عسل در شهرستان رونق خوبی دارد؛ به طوری‌که
            با وجود کار در این زمینه همچنان ظرفیت برای تولید وجود دارد. وجود
            مراتع خودرو، رویش انواع گیاهان با گل‌دهی بالا و وجود درختان میوه در
            دهستان‌هایی مانند میلانلو و رویین باعث‌شده این حرفه رونق بیشتری
            بگیرد. از این‌رو می توان در زمینه تولید عسل در اسفراین کارکرد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            وجود سد بیدواز در شهرستان اسفراین باعث رونق باغداری شده‌است.
            درسال‌های اخیر محصولات باغی نظیر سیب، انگور و گلابی در این شهرستان
            با کیفیت بالایی تولید شده‌است که می توان همچنان آن‌ها را گسترش داد.
            البته کاشت این محصولات در روستاهای حاشیه سد، ثمردهی بیشتری دارد.
          </p>
          <p>
            میوه‌هایی چون آلبالو، زردآلو، گیلاس، گردو، بادام، هلو و آلو در
            مناطقی که دمای کمتری دارند و سردسیرتر هستند کشت می‌شود. به دلیل
            مساعدبودن شرایط برای رشد و محصول‌دهی در دهستان‌های بام، رویین و
            دامنکوه قابلیت توسعه دارند. همچنین در این روستاها می‌توان کشت
            بادمجان ،خیار و گوجه را در مزارع انجام داد.
          </p>
          <p>
            طرح پایلوت خیار در گلخانه مدتی است که در شهرستان اجرا شده‌است و با
            توجه به صادراتی‌بودن این محصولات گلخانه‌ای می‌توان آن را گسترش داد.
            علاوه بر خیار گلخانه‌ای، تولید گوجه فرنگی نیز می تواند دارای مزیت
            باشد. از دیگر طرح‌هایی که در شهرستان اسفراین انجام شده‌است، گلخانه
            هیدروپونیک است که نتیجه خوبی هم داشته و همچنان قابلیت اجرا و توسعه
            دارد.{" "}
          </p>
          <p>
            کشت پسته با توجه به مقاومت بالایی که در برابر کیفیت نامطلوب آب دارد
            در مراتع دهستان صفی‌آباد باعث درآمد زایی خواهد شد و قابلیت توسعه
            دارد.
          </p>
          <p>
            کشت سبزیجات خانگی به صورت کسب‌وکار خرد در مناطق بخش مرکزی باعث تامین
            نیاز شهرستان می شود و این مورد هم دارای مزیت است.
          </p>
          <p>
            در اولویت‌های بعدی کشت‌هایی چون گل‌محمدی، گیاهان دارویی، آلوئه‌ورا و
            انار (در مناطق گرمسیری مانند دهستان زرق آباد) مزیت دارند. ایجاد
            کارگاه‌های پرورش قارچ دکمه‌ای و صدفی هم از دیگر پیشنهادات کارشناسان
            بوده است.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            در حال حاضر حبوباتی چون لوبیا و عدس در شهرستان کشت می‌شود.لازم به
            ذکراست که استان خراسان شمالی در تولید عدس دارای رتبه ی سوم کشور است
            و عدس تولیدی این منطقه مرغوبیت بالایی دارد .از طرفی این محصولات
            قابلیت آبیاری به صورت دیم را نیز دارد.به همین علت پیشنهاد گسترش کشت
            آن داده می‌شود.
          </p>
          <p>
            زراعت گندم، جو، پیاز، چغندر قند، هندوانه و خربزه نیز در شهرستان
            مرسوم است. به دلیل وجود کارخانه قند در شهرستان شیروان می‌توان کشت
            چغندرقند را توسعه داد چون سود نسبتا خوبی در این کار وجوددارد. از
            طرفی چون کشت دیم گندم و جو انجام می‌شود توسعه آن همچنان مزیت
            دارد.کشت پیاز یه شرط عدم اشباع هم گزینه مناسبی است.
          </p>
          <p>
            در گذشته کشت پنبه در این شهرستان رونق داشته‌است و حتی برای فرآوری آن
            کارخانه پنبه پاک‌کنی فعالیت می‌کرده‌است؛ اما به دلیل کاهش سطح زیر
            کشت پنبه مجبور بودند تا مواد اولیه را از شهرستان‌های دیگر وارد کنند
            که برای این واحد صرفه اقتصادی چندانی نداشته است. به هر حال کشت پنبه
            می تواند مزیت مناسبی برای منطقه باشد و باعث رونق گرفتن واحد پنبه پاک
            کنی نیز شود.
          </p>
          <p>
            کشت کلزا به همت اداره جهاد کشاورزی منطقه مدتی است که رواج پیدا
            کرده‌است.باتوجه به مصرف کم آب این گیاه می‌توان زراعت آن را در
            شهرستان گسترش داد. کشت زیره به خاطر سازگاری با منطقه و دیمی بودن
            محصو، در سال‌های اخیر توسعه پیداکرده‌است. این محصول به عنوان ادویه و
            دارو در ایران مصرف می‌شود و با توجه به گرایش افراد به سمت مصرف آن می
            توان کشت زیره را در مزارع شهرستان گسترش داد.
          </p>
          <p>
            از بین میوه های جالیزی در این شهرستان، کشت هندوانه و خربزه رونق
            دارد. بازار فروش این محصولات تابستانی تقریبا غیرقابل پیش‌بینی است.
            یعنی ممکن است در یک سال به دلیل عدم وجود در بازار، سود خوبی به
            کشاورز برساند و سالی هم به دلیل وفور، چندان قیمت بالایی نداشته
            باشد.به همین دلیل قبل از کشت آن باید این نکات را نیز در نظر گرفت.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            صنایع تبدیلی عضو جدانشدنی در کنار تولیدات است. به‌منظور بهره‌وری
            مناسب از محصولاتی که در حوزه های مختلف تولید می‌شود نیاز است تا با
            انجام فرآیندهای مناسب سوددهی را بالا برده و ایجاد شغل کرد.
          </p>
          <p>
            وجود زنبورستان‌های فراوان و تولید عسل مرغوب در شهرستان اسفراین
            نیازمند بسته بندی مناسب است. با ورود به این شغل، علاوه بر کوتاه‌شدن
            دست دلالان و واسطه‌گران، باعث عرضه این محصول با نام حقیقی خود می‌شود
            و می‌تواند سود بیشتری را به تولید کنندگان برساند. از این رو بسته
            بندی عسل در این شهرستان دارای مزیت است.
          </p>
          <p>
            در زمینه بسته‌بندی دیگر محصولات هم می‌توان واردشد و تولیداتی که
            شهرستان دارد را بسته بندی کرد. در این زمینه بسته‌بندی سبزیجات،
            حبوبات، خشکبار، گوشت و کشمش می‌توانند موفق باشند. بسته‌بندی حبوبات و
            سبزیجات به دلیل وجود مواد اولیه در شهرستان می تواند احتمال موفقیتش
            بیشتر است. همچنین امروزه تقاضا برای استفاده ار حبوبات و سبزیجات
            مرغوب بسته‌بندی شده بالارفته است و فروشگاه‌های زیادی در سطح کشور
            اقدام به عرضه ی این مواد کرده‌اند و فرهنگ آن در بین مردم جا افتاده
            است؛ بنابراین مزیت دارد. تولید خشکبار و کشمش در شهرستان نیازمند عرضه
            مناسب در بازار فروش است. بسته‌بندی خشکبار در ابعاد و اندازه‌های
            مختلف از دیگر مشاغلی است که می‌توان آن را در اسفراین اجرا کرد.
            امروزه بیشتر افراد از خواص کشمش آگاهی داشته و تمایل زیادی برای
            استفاده از آن دارند. این محصول به عنوان غذا، خوراکی و دارو برای
            درمان کم‌خونی و برخی نارسایی‌های دیگر استفاده می‌شود. وجود درختان
            انگور در این شهرستان و تولید کشمش از دیگر عواملی هستند که بسته‌بندی
            را می طلبند.
          </p>
          <p>
            به دلیل اولویت‌داشتن حوزه دامداری برای مردم، وجود کشتارگاه در این
            شهرستان می‌تواند مزیت خوبی داشته باشد. از طرفی با توجه به تولیدات
            باغی، ایجاد یک واحد سردخانه جهت نگهداری و ذخیره سازی محصولات از دیگر
            مزیت‌هایی است که می‌توان بر روی آن کارکرد.
          </p>
          <p>
            طبق لیست مزیت سنجی، وجود درختان سپیدار فراوان در منطقه باعث رونق
            درودگری می‌شود. بسته‌بندی زعفران تولیدی منطقه خراسان هم در این
            شهرستان خوب جواب می دهد.{" "}
          </p>
          <p>
            اگر چه درصد کمی از افراد تمایل به استفاده از گوشت بسته‌بندی شده
            دارند اما به دلیل رونق دامداری در این منطقه، با بازاریابی مناسب
            می‌توان زمینه را برای ایجاد این کسب‌وکار فراهم نمود.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            همانطور که در قسمت‌های قبلی ذکر شد، شرایط آب‌وهوایی و اقلیم اسفراین
            برای تولیدات باغی باکیفیت و متنوع بسیار مساعد است. از آن‌جایی‌که با
            فرآوری این میوه‌ها به اشکال مختلف در خارج از فصل نیز می‌توان از
            آن‌ها بهره برد. بمابراین می‌توان در زمینه فرآوری و تبدیل محصولات
            باغی به چیپس میوه، مربا، لواشک کار کرد. مزیتی که اجرای این طرح ها
            دارند این است که به صورت کارگاه‌های کوچک خانگی نیز قابلیت اجرایی شدن
            دارند اما اگر مجوز بهداشت برای راه‌اندازی این کارگاه‌ها کسب شود،
            برای فروش مشکل خاصی پیش نمی‌آید و می توان اطمینان بیشتری برای خریدار
            حاصل کرد.
          </p>
          <p>
            صنایع تبدیلی پیشنهادشده در خصوص تولید انگور، تولید کشمش، شیره انگور
            و حتی سرکه است. این محصولات سود خوبی به تولیدکننده می‌رسانند مخصوصا
            اگر به صورت ارگانیک و طبیعی تهیه شده‌باشند.
          </p>
          <p>
            به دلیل رونق تولیدات خیار گلخانه‌ای، ایجاد واحدی در زمینه تولید
            خیارشور هم می‌تواند موفق باشد. همچنین میزان تولید بالای گوجه فرنگی
            بستر مناسبی را برای تهیه رب که از اصلی‌ترین چاشنی‌های غذایی است
            فراهم می‌کند.
          </p>
          <p>
            ایجاد یک واحد تولید سوسیس و کالباس نیز می‌تواند در این منطقه دارای
            مزیت باشد. البته مصرف این فرآورده‌ها بیشتر به ذائقه مردم منطقه بستگی
            دارد.
          </p>
          <p>
            از آن‌جایی که از بین محصولات زراعی و باغی، کشت گندم جایگاه بالایی را
            به خود اختصاص داده است، می‌توان در زمینه محصولات حاصل از گندم
            پیشنهاداتی را ارائه داد. در رابطه با فرآورده‌های گندم نیز می توان در
            این شهرستان تولید رشته آشی و پلویی را آغاز کرد. سایر فرآورده‌ها
            مانند پفک گندمی، نشاسته و برشته‌کردن گندم متناسب با نیاز منطقه
            پیشنهاد می‌شود.
          </p>
          <p>
            از دیگر فرآورده‌های دامی نیز می‌توان به تولید انواع ناگت، ژلاتین از
            استخوان و شیر خشک اشاره نمود. در واقع رونق دامداری در این منطقه
            امکان تولید چنین محصولاتی را به ما می‌دهد. بدیهی است که در صورت
            تولید محصول باکیفیت می‌توان بازار فروش مناسبی برای آن پیدا کرد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            از صنایع جدید و کاربردی که می‌توان از پوست بادام و گردو و خاک اره
            تولید کرد، زغال فشرده است. با آموزش مناسب می‌توان این کسب‌وکار را در
            شهرستان ترویج داد. تولید این ماده مشاغل جدیدی است که سود خوبی عاید
            شخص می‌کند. از طرفی تولید زغال فشرده مزیت‌های فراوانی دارد و در
            مناطقی که مواد اولیه آن وجود دارد قابلیت اجرایی‌شدن دارد.
          </p>
          <p>
            وجود کارخانجاتی که در زمینه قطعات خودرو در اسفراین کار می‌کنند، می
            تواند باعث رونق تولید بقیه ملزومات خودرو مانند آب رادیاتور و واکس
            داشبورد شود. این محصولات به دلیل افزایش روزافزون تعداد خودرو در سطح
            استان‌ها و شهرستان‌ها استفاده‌های فراوانی دارند و می توان با
            راه‌اندازی آن برای افراد زیادی ایجاد شغل کرد.{" "}
          </p>
          <p>
            ایجاد کارگاه تولید پوشاک به شرط کیفیت بالای تولید و بازاریابی مناسب
            هم از دیگر گزینه‌های پیشنهادی است. با استفاده از دانش و ارائه
            طرح‌های جدید و به روز می‌توان با نمونه‌های وارداتی به کشور رقابت
            نمود. از آن جایی‌که پوشاک هم از نیازهای جدایی ناپذیر زندگی است می
            توان در مورد فروش آن اطمینان داشت.
          </p>
          <p>
            در صورت رونق تولید عسل و بسته بندی آن و همچنین تولید رب و خیارشور،
            صنعت تولید ظروف پلاستیکی هم خوب جواب می‌دهد. این واحد در صورتی که
            محصولات با کیفیتی تولید کند، با بازاریابی مناسب می‌تواند محصولات خود
            را به شهرستان‌ها و استان‌های همجوار نیز ارسال نماید.
          </p>
          <p>
            در حال حاضر واحدهای تولید لوله پلی اتیلن، کارخانه لوله گستر، آذین
            فورج، گرانول‌سازی، سفال، سیمان، قطعات خودرو، قطعات بتنی، گچ شاه
            جهان، رب نیکسان، تولید سبد میوه، کارتن، موزاییک پرسی و سنگبری آنتیک
            در شهرستان اسفراین فعال هستند.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            با توجه به شرایطی که شهرستان اسفراین دارد می‌توان مرغ تخم‌گذار و مرغ
            بومی را پرورش داد. قرارگرفتن این دو ماده‌ی پروتئینی در سبد مصرف
            خانوارها و قیمت مناسب این محصولات باعث می‌شود تا راه‌اندازی این
            کسب‌وکارها دارای مزیت باشد.
          </p>
          <p>
            گوشت بوقلمون از لحاظ طبیعت و بسیاری از مواد مغذی شباهت فراوانی به
            گوشت دام دارد. از این جهت بسیار مورد استقبال قرارگرفته و تبدیل به
            گوشت مصرفی بسیاری از خانوارها شده‌است. از این جهت می‌توان در قالب
            واحدهایی با تعداد قطعه متفاوت، پرورش بوقلمون را راه‌اندازی نمود. در
            برخی مناطق شهرستان، شرایط برای پرورش کبک و غاز وجود دارد. البته باید
            توجه داشت که بازار فروش گوشت این دو پرنده قدری محدودتراست و قبل از
            راه‌اندازی این طرح باید بابت این نکته اطمینان خاطر کسب نمود.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            در حال حاضر بافت گلیم و جاجیم در شهرستان انجام می‌شود و با توجه به
            تخصصی که در شهرستان وجود دارد می‌توان آن را گسترش داد. به دلیل
            استقبال خوبی که از چادرشب به خاطر کیفیت بالا و نخی بودن آن شده‌است،
            همچنان می‌توان آن را گسترش داد.
          </p>
          <p>
            طرح جوراب‌بافی به‌تازگی در چند روستای اسفراین انجام شده است و فروش
            خوبی هم داشته که می‌توان همچنان این کار را ادامه داد. در رده‌های
            بعدی دوخت لباس‌های کردی هم پیشنهاد می‌شود.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            از آنجا که پرورش شیلات وابستگی مستقیم به آب دارد، باید این نکته را
            خاطرنشان کرد که با توجه به وضعیت بحرانی آّب، فقط در روستای رویین
            پرورش ماهیان سردآبی مزیت دارد.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            در این حوزه ارائه خدمات خودرو با توجه به وجود فارغ التحصیلان مکانیک
            خودرو در شهرستان می تواند دارای مزیت باشد.این شغل از نیازهای شهری با
            توجه به وجود اتومبیل است.{" "}
          </p>
          <p>
            وجود مناطق گردشگری و تاریخی همچون شهر باستانی بلقیس، سد ییلاقی
            بیدواز، روستای زیبای رویین و ... باعث شده تا گردشگرانی اسفراین را به
            عنوان مقصد سفر خود انتخاب کنند.به همین دلیل در جهت ایجاد اقامتگاه
            بومگردی در مناطق گردشگری و در مرحله ی بعدی احداث رستوران با الگوی
            بومی کرمانجی می‌توان کار کرد.
          </p>
          <p>
            لازم به ذکر است که گردشگری در این منطقه بیشتر فصلی بوده و در 6 ماه
            اول سال بیشتر مسافران در این منطقه مهمان می‌شوند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
