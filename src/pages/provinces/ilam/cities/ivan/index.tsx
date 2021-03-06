import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-06"].cities["IR-0603"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        agriculture: "زراعت",
        livestock: "دامداری",
        undefined: "صنایع تبدیلی",
        food_industry: "صنایع غذایی",
        fisheries: "شیلات",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        industry: "صنعت",
        birds: "طیور",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان ایوان در شمال استان ایلام قراردارد و مرکز آن، شهر ایوان است.
            این شهرستان از شمال به استان کرمانشاه و شهرستان اسلام‌آباد غرب، از
            شرق به شهرستان چرداول، از جنوب شرق به شهرستان سیروان، از غرب به
            شهرستان ایلام و کشور عراق و از شمال غرب به شهرستان گیلانغرب و
            قصرشیرین محدود است. فاصله این شهرستان تا مرکز استان ایلام ۴۰
            کیلومتر، تا کرمانشاه ۱۴۰ کیلومتر و تا مرز عراق از پایانه مرزی سومار
            ۸۳ کیلومتر است. مردم آن کرد کلهر بوده و شیعه هستند. این شهرستان یکی
            از مراکز ایل کلهر است. آن یافت می‌شود. شهرستان دارای چشمه‌ها و
            رودخانه‌ای به نام گنگیر می‌باشد. این منطقه گاهی از نواحی مورد آسیب
            ریزگردها است . شکل زیر موقعیت شهرستان ایوان را نشان می‌دهد.
          </p>
          <p>
            آب و هوای ایوان معتدل و نیمه مرطوب است. بیش‌ترین درجه حرارت ۳۴ درجه،
            کم‌ترین درجه حرارت ۱۰- درجه و میزان بارندگی ۶۹۲ میلی‌متر است. این
            شهرستان دارای کوه‌هایی به نام بانکول، مانشت و شیره زول است که پوشیده
            از جنگلهای انبوه بلوط، بنه، زالزالک، و بادام کوهی است و انواعی از
            گیاهان دارویی و گل‌ها در طبیعت
          </p>
          <p>
            مردم شهرستان خیلی خطرپذیر و ریسک‌پذیر نیستند. در واقع به علت ورشکست
            شدن تعدادی از واحدها، از انجام کارهای جدید ترس دارند، البته کسانی که
            سرمایه داشته باشند، ریسک می کنند؛ ولی بیشتر مردم وضعیت مالی خوبی
            ندارند که بخواهند ریسک انجام دهند.
          </p>
          <p>
            بیشتر جوانان به مشاغل خدماتی و اداری علاقه دارند؛ زیرا در حال حاضر
            سرمایه گذاری کمی در مناطق محروم انجام می شود. در ضمن جوانان فنی خیلی
            خوبی در ایوان هستند، که اگر سرمایه‌گذار باشد یا خود آن‌ها سرمایه
            داشته باشند، کار می‌کنند.
          </p>
          <p>
            مهاجرت جوانان بیشتر به سمت شهرهای صنعتی مانند تهران، ایلام، کرمانشاه
            و...است؛ زیرا شغل صنعتی در شهرستان وجود ندارد؛ به عنوان مثال در
            عسلویه و بندرعباس بیش از صد یا صد و پنجاه نفر از کارگران، اهل
            شهرستان ایوان هستند.
          </p>
          <p>
            هوای شهرستان به این صورت است، که تابستان‌ها زیاد گرم نیست و
            زمستان‌ها هم خیلی سرد نیست. در واقع آب‌و هوای شهرستان، معتدل و خوب
            است.
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
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            باغداری خوبی در شهرستان ایوان انجام می‌شود. همچنین اخیرا یک طرح ملی
            در منطقه سیاهگل برای جلوگیری از هدررفت آب انجام شده که خیلی خوب جواب
            داده است. انگور تولیدشده در این مناطق که شامل انگور عسگری و انگور
            یاقوتی است، از مرغوبیت خوبی برخوردار بوده و به برخی نقاط هم صادر
            می‌شود؛ بنابراین کشت این محصول، پیشرفت چشمگیری را خواهد داشت.
          </p>
          <p>
            در مسیر ایوان به سمت زر، باغات پسته نیز وجود دارد که جدیدا احداث
            شده‌اند؛ اما هنوز به مرحله ثمردهی نرسیده‌اند. علت ایجاد باغات پسته
            در منطقه این است که آب و هوای زر برای پسته مناسب است و در واقع تنها
            در یک بخش شهرستان، پسته جواب می دهد؛ بنابراین با توجه به تقاضای مردم
            و بازار این محصول، قابلیت توسعه برای کشت محصول زیاد است.
          </p>
          <p>
            در مناطقی از شهرستان، مانند روستاهای کلان، خوران، ماژین و سرتنگ وجود
            باغات گردو از سابقه بالایی برخوردار بوده است و از این باغات، گردوی
            با کیفیتی برداشت می‌شود و با توجه به سازگاری محصول با منطقه، ظرفیت
            برای کشت آن فراهم است؛ لذا کشت آن سودآوری خوبی را به دنبال دارد.
          </p>
          <p>
            کشت گوجه، خیار و سایر صیفی جات هم در برخی از مناطق این شهرستان انجام
            می‌شود و با توجه به نیاز و تقاضای همیشگی مردم، کشت آنها قابلیت توسعه
            دارد و مانند موارد فوق از اولویت‌های اول و برتر باغداری هستند.
          </p>
          <p>
            بعد از محصولات ذکر شده در حوزه باغداری می‌توان به کشت سبزی‌جات اشاره
            کرد که در حال حاضر نیز در این شهرستان انجام می‌شود و زمینه های لازم
            برای گسترش وجود دارد.
          </p>
          <p>
            در اولویت‌های سوم این شهرستان کشت محصولاتی مانند شلغم، تربچه سفید،
            کدو، بادمجان، زیتون و میوه‌هایی مانند هندوانه و انجیر و همچنین
            میوه‌های هسته‌دار، قرار دارد و به نظر می‌رسد ظرفیت برای کشت بیشتر
            آن‌ها وجود دارد؛ زیرا همواره بازار هدف خود را دارند.
          </p>
          <p>
            در ضمن تنها یک گلخانه فعال در شهرستان وجود دارد، که به تولید نهال
            انگور و نهال‌های باغی مشغول است و به نظر می‌رسد فعالیت در این حوزه
            نیز مثمرثمر باشد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            بیشتر محصولاتی که در شهرستان ایوان کشت می‌شوند، محصولات دیمی بوده و
            در بیشتر مناطق گندم و جو برداشت می‌شود. کشت این محصولات با اقلیم این
            منطقه و آب و خاک آن سازگار است. در ضمن خریداری این محصولات به صورت
            تضمینی و از طرف دولت انجام می‌شود ؛ بنابراین مشکلی در فروش آنها وجود
            ندارد. همچنین به دلیل وجود کارخانه آرد در این شهرستان، فرآوری‌های
            اولیه روی آن‌ها صورت می‌گیرد و برای فرآوری‌های دیگر مانند تولید رشته
            آشی آماده می‌شوند.
          </p>
          <p>
            در این شهرستان دامپروری رونق خوبی دارد و از طرفی کشت علوفه های دامی
            مانند یونجه نیز انجام می‌شود؛ بنابراین گسترش این کشت قابلیت توسعه
            دارد.
          </p>
          <p>
            کشت حبوباتی نظیر عدس و نخود به میزان کم و به صورت دیمی انجام می شود؛
            اما با توجه به نیاز و تقاضای مردم و کشت خوب این محصولات در این
            منطقه، همچنان ظرفیت گسترش را دارند و مانند موارد فوق از مزیت های
            برتر این شهرستان در حوزه زراعت هستند.
          </p>
          <p>
            در اولویت سوم این شهرستان کشت کلزا، زعفران، کنجد، ذرت، کدو و گیاهان
            دارویی مانند آویشن، قرار دارد و به نظر می‌رسد با توجه به اهمیت این
            محصولات در بازار کنونی، قابلیت پیشرفت و رشد برای آنها وجود داشته
            باشد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            در این شهرستان در حوزه دامداری، دام‌های سبک و سنگین به روش‌های سنتی
            و صنعتی پرورش داده‌می‌شوند. البته پرورش دام‌های سبک مانند گوسفند و
            بز به صورت سنتی انجام می شود. در ضمن واحدهای صنعتی در زمینه پرورش
            گاو شیری و پرواربندی فعال هستند و اخیرا نیز در زمینه ایجاد
            گاوداری‌های صنعتی بزرگ مانند گاوداری هایی با ظرفیت هزار و پانصد راس
            دام سنگین اقداماتی شده و در حال فعالیت هستند. نژاد اکثر دام های سبک
            که در حال حاضر در منطقه پرورش پیدا می کنند، بومی است، البته گرایش به
            سمت نژادهایی مانند بختیاری، زنجانی و... نیز وجود دارد و بعضا پرورش
            داده می‌شوند. نژاد دام‌های سنگین اصلاح نژادشده نیز در این میان هستند
            و گاو بومی در بین آنها وجود ندارد .
          </p>
          <p>
            در زمینه دام و دامداری، هنوز جای کار در شهرستان وجود دارد و اشباع
            نشده است. اگر بتوان واحدهای پرواربندی را فعال کرد، می‌توان این منطقه
            را به قطب تولید گوشت قرمز تبدیل و در این حوزه فعالیت کرد. در ضمن
            کیفیت گوشت منطقه ایوان فوق العاده است و بازار هدف خوبی دارد.
          </p>
          <p>
            دام های اصلاح نژاد شده سبک در شهرستان پرورش داده نمی شود؛ علت این
            است که مردم پذیرش ندارند.
          </p>
          <p>
            لازم به ذکر است بعضی از دام‌هایی که رنگ خاصی دارند، خوب گوشت نمی
            گیرند و پشم این دام‌ها هم اصلا به فروش نمی‌رسد؛ در صورتی که دام های
            سفید رنگ، خوب رشد می‌کنند و از پشم آن‌ها نیز استفاده می‌شود.
          </p>
          <p>
            زنبورداری در شهرستان انجام می‌شود و می‌توان گفت حدود چهار هزار کلونی
            زنبور وجود دارد که وضعیت مناسبی دارند. البته زنبورداری بیشتر در
            منطقه سومار انجام می‌شود و در سطح شهرستان خیلی کم است.
          </p>
          <p>
            بنابرانچه گفته شد پرورش گوسفند، گاو، بز گوشتی و زنبور عسل در اولویت
            اول، پرورش دام های اصلاح نژاد شده در اولویت دوم قرار دارند.{" "}
          </p>
        </Section>
        <Section id="undefined" title="صنایع تبدیلی" size="h3">
          <p>
            تولید کود حیوانی با توجه به گستردگی باغداری و زراعت و همچنین رونق
            دامداری قابل گسترش است؛ زیرا هم بازار مصرف آن وجود دارد و هم
            ظرفیت‌های لازم برای تولید آن مهیا است.
          </p>
          <p>
            بسته‌بندی خشکبار و حبوبات نیز با توجه به صنعتی شدن جوامع کنونی و
            نیاز مردم، قابل رشد است.
          </p>
          <p>
            ایجاد کشتارگاه با در نظر گرفتن نیاز شهرستان قابل سرمایه گذاری است.
            البته لازم به ذکر است که اگر یک یا دو مورد کشتارگاه ایجاد شود، اشباع
            می‌شود؛ لذا باید به این نکته هم توجه کرد.
          </p>
          <p>
            با توجه به آب و هوای این شهرستان و پرورش خوب زنبور عسل، بسته بندی
            این محصول و همچنین تولید موم و کندو از مزیت‌های شغلی ایوان در این
            حوزه است.
          </p>
          <p>
            سردخانه‌ای برای نگهداری محصولات کشاورزی در شهرستان وجود ندارد. در
            واقع یکی از معضلات شهرستان ایوان نیز همین است، که اکثر محصولات به
            صورت تازه‌خوری فروخته می شوند؛ بنابراین اقدام در این مورد نیز
            مثمرثمر خواهد بود.
          </p>
          <p>
            در ادامه می‌توان گفت دامداری در این شهرستان به صورت گسترده انجام
            می‌شود؛ ولی صنایع بسته بندی و فرآوری آن در این منطقه وجود ندارد. اگر
            بسته بندی گوشت در خود شهرستان انجام شود، محصولات دام زنده، به
            کرمانشاه یا شهرهای دیگر فرستاده نمی‌شود و سود بیشتری نصیب دامدار
            می‌گردد؛ بنابراین توسعه این قسمت، رشد و پیشرفت خوبی را به دنبال
            خواهد داشت.
          </p>
          <p>
            فرآوری پوست دام شامل فرآوری پوست و پشم دام و استفاده از آن در صنعت
            قالی‌بافی با توجه به اینکه مواد اولیه این صنعت وارد می‌شود، نیز قابل
            گسترش است. همچنین فراوری پوست گاو و استفاده از آن در صنعت چرم از
            مزیت‌های پرورش گاو است. توجه به این نکته ضروری است که در تهیه چرم
            باید بازارفروش و شرایط شهرستان (فاصله از شهرهای بزرگتر، میزان جمعیت
            و...) درنظرگرفته‌شود.{" "}
          </p>
          <p>
            در این شهرستان تعدادی مرغداری گوشتی و تخم گذار وجود دارد؛ بنابراین
            استفاده از این قابلیت و بسته بندی و فرآوری گوشت مرغ و بسته بندی تخم
            مرغ هم از مشاغلی است که با ایجاد آن درآمد خوبی عاید فرد می‌شود. بسته
            بندی گوشت بلدرچین هم از مزیت هایی است که در صورت پرورش انبوه این
            پرنده و بازاریابی مناسب، رشد خوبی خواهد داشت.
          </p>
          <p>
            با توجه به کشت دانه های روغنی مانند کنجد و کلزا و همچنین واردات
            روغن، فرآوری و روغن کشی از این موارد، علاوه بر ایجاد اشتغال، سود
            خوبی به دنبال دارد.{" "}
          </p>
          <p>
            بسته بندی ماهی و بسته بندی گوشت کبک و بوقلمون نیز در صورت پرورش
            انبوه و بازاریابی مناسب، قابل توسعه هستند.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            در شهرستان ایوان، صیفی‌جات و انگور در کارخانه‌ای فرآوری نمی‌شود؛
            بیشتر این محصولات حتی به شکل خانگی نیز فرآوری نمی‌شوند و به صورت خام
            به فروش می‌رسند. با توجه به تولید انبوه انگور، تولید شیره و سرکه و
            همچنین تهیه کشمش و مویز، قابلیت توسعه دارد.
          </p>
          <p>
            با توجه به کشت میوه‌های آجیلی، تولید خشکبار نیز با نظر به اینکه مواد
            اولیه آن‌ها در شهرستان موجود است، پیشرفت خوبی خواهد داشت؛ زیرا بازار
            مصرف آن‌ها خوب است.
          </p>
          <p>
            تهیه نان، تولید شیرینی و رشته آشی هم با توجه به مهارت بانوان و وجود
            مواد اولیه، قابل رشد و توسعه است. با توجه به کشت گندم نیز به نظر
            می‌رسد سایر محصولات مرتبط مانند برشته کردن گندم، تولید پفک گندم،
            تولید آرد سوخاری، تولید نان بستنی، تهیه بیسکوییت و کلوچه و همچنین
            بسته بندی غلات قابل توسعه باشند که در اولویت های بعدی قرار می‌گیرند.
          </p>
          <p>
            بعد از این موارد تولید لبنیات نیز با توجه به وجود دامداری های زیاد
            در این شهرستان، قابل سرمایه گذاری است. در ضمن کارگاه و کارخانه‌ای هم
            در این زمینه وجود ندارد. فراوری سایر محصولات گاو نیز مانند تولید
            ژلاتین و تهیه شیرخشک هم درصورت وجود بازارمصرف، قابلیت توسعه دارد.
          </p>
          <p>
            فراوری گیاهان دارویی شامل عرق گیری، خشک‌کردن و گلاب گیری نیز قابلیت
            گسترش دارد.
          </p>
          <p>
            تولید میوه خشک، آبمیوه و چیپس میوه هم در صورت کشت انبوه میوه و گسترش
            باغداری قابلیت سرمایه گذاری دارد.
          </p>
          <p>
            بعد از موارد فوق فرآوری سایر محصولات باغی مانند: تولید رب، مربا،
            ترشی و.. به صورت سنتی انجام می شود؛ اما برند خاصی ندارند. این
            محصولات فرآوری شده، کیفیت خوبی دارند، از نظر سلامت و بهداشت مشکلی
            ندارند و در نمایشگاه های محلی عرضه می شود؛ بنابراین می‌توان در این
            زمینه کار کرد تا حتی در سطح کشور هم مطرح باشند.{" "}
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            بیشتر واحدهای پرورش ماهی در زمینه ماهی‌های گرمابی مانند کپور، سرگنده
            و... فعال هستند، البته یک واحد پرورش ماهی سردآبی نیز در شهرستان
            وجوددارد. در ضمن دو واحد پرورش ماهی، یکی در سیاهگل و دیگری در منطقه
            خوران، فعال هستند؛ بنابراین کار کردن در این زمینه هم در آمد خوبی را
            نصیب می‌کند و هم می‌توان در این حوزه صادراتی را به سایر نقاط داشت.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            علی‌رغم وجود جاذبه‌های طبیعی در شهرستان، در زمینه اقامتگاه‌های
            بومگردی کار نشده است؛ زیرا این شهرستان به صورت یک منطقه بن بست است؛
            اما با تبلیغات گسترده در این زمینه و ایجاد اقامتگاه می‌توان در حوزه
            توریست و گردشگری این شهرستان تغیراتی را ایجاد کرد. ایجاد رستوران‌های
            بومی از مزیت‌های این حوزه است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            تولیدات صنایع دستی به صورت کارگاهی فعال نیست و بیشتر به صورت خانگی
            انجام می شود، البته یک کارگاه فرش‌بافی که تابلوفرش و دیگر محصولات
            فوق العاده خوبی تولید می‌کند و حدود چهل یا پنجاه نفر نیرو دارد، نیز
            فعال است.
          </p>
          <p>
            افراد زیادی در کنار فعالیت‌های کشاورزی به تولید صنایع مختلف دستی
            مشغول هستند. برخی از مهمترین صنایع دستی شهرستان با قدمت زیاد که گاها
            مصارف شخصی و یا با منظور کسب درآمد تولید می‌شوند، شامل قالی، تابلو
            فرش و گلیم های ساده و برجسته است.
          </p>
          <p>
            بعد از موارد فوق نیز جاجیم‌بافی، معرق‌کاری و تولیدات چرمی از
            مزیت‌های این شهرستان است که به نظر می‌رسد درآمد خوبی داشته‌باشد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            دو یا سه معدن بیتومین در شهرستان وجود دارد، که بزرگترین معدن در
            خاورمیانه است. بیتومین نوعی زغال سنگ است. فرآوری این محصولات در
            شهرستان، درحد آسیاب و بسته‌بندی بیتومین استخراج شده است؛ اما اگر
            بتوان این مواد را بیشتر فرآوری کرد و از حالت خامی خارج نمود،
            اشتغالزایی خوبی ایجاد می‌شود.
          </p>
          <p>
            استعداد ایجاد صنایع چوبی و کار با چوب در شهرستان وجود دارد و خیلی از
            افراد شاید استادکار باشند و در شهرهای دیگر کار کنند؛ به عنوان مثال
            چند مبل‌ساز در ملایر مشغول به کار هستند؛ در حالی که می‌توان این
            صنایع را در همین شهرستان ایجاد و در آمد خوبی کسب کرد.
          </p>
          <p>
            معادن نفت و گاز مانند چند چاه نفت قدیمی در شهرستان در کوه و گاومهر
            قرار دارند که از آنها بهره برداری نشده و نمی‌شود؛ بنابراین کار کردن
            در زمینه فرآوری آنها نیز از مزیت های نسبی حوزه صنعت است.
          </p>
          <p>
            یک شهرک صنعتی به نام ایوان در شهرستان وجود دارد و کارخانه تولید فوم
            برای دمپایی سازی در آن قرار دارد. کارخانه تولید میلگرد با نام نبرد،
            کارخانه آسفالت و کارخانه تولید ماسه، کارخانه موزاییک سازی رنگی که در
            فضاهای شهری از تولیداتشان استفاده می‌شود و یک کارخانه تولید انواع
            اسید با برند اسید پود (تولید سولفات پتاسیم، اسید کلریدریک و اسید
            سولفوریک) از کارخانه های فعال در شهرستان هستند.
          </p>
          <p>
            در ضمن یک کارخانه تولید کود و کارگاه هایی در زمینه تولید کابینت فعال
            هستند و کارشان نیز خوب است.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            از شصت واحد مرغداری در شهرستان، چهل واحد فعال هستند، که خیلی هم
            کارشان خوب است. همچنین شهرستان ایوان قطب تولید گوشت سفید است. در ضمن
            اکثر این مرغداری ها گوشتی هستند. علاوه بر پرورش مرغ، چند واحد پرورش
            بلدرچین هم به صورت نیمه صنعتی فعالیت می کنند که مانند موارد فوق از
            اولویت‌های برتر این شهرستان هستند.
          </p>
          <p>
            پرورش کبک نیز در این شهرستان انجام می‌شود که به دلیل نیاز به سرمایه
            اندک و شرایط آسان برای اجرای این طرح و همچنین پرورش بوقلمون در مناطق
            روستایی، می‌تواند دارای مزیت باشد.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
