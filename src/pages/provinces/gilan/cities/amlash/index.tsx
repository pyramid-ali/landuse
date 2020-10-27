import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-25"].cities["IR-2503"]
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
        services: "خدمات",
        fisheries: "شیلات",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان زیبای املش از شهرستان‌های شمالی ایران است که در استان گیلان
            قرار دارد. این شهرستان از شمال به شهرستان های لنگرود، لاهیجان و
            آستانه اشرفیه، از شرق به شهرستان رودسر، از جنوب به شهرستان رودبار،
            از غرب به سیاهکل و از شمال غرب به شهرستان رشت محدود می‌شود. این
            شهرستان دارای یك شهر، 2 بخش ، 5 دهستان و 370 آبادی است كه شهر املش
            در بخش مركزی و مركز شهرستان بوده و بخش دیگراین شهرستان رانكوه نام
            دارد. قومیت مردم املش گیلک بوده و با لهجه بیه پیش (شرق گیلان) و گویش
            املشی تکلم می‌کنند. نام املش از دو واژه «ام» و «لش» که ” لش ” به
            معنی راکد، ایستاده، و ” ام ” به معنی رود و رودخانه است گرفته شده
            است. بنابراین املش به معنی رود راکد و جریان ایستاده است. شکل زیر
            موقعیت شهرستان املش را نشان می‌دهد. این شهرستان از نظر ژئومرفولوژی و
            ناهمواری ها به سه منطقه جلگه ای، کوهپایه ای و کوهستانی تقسیم شده و
            بخش جلگه ای از آبرفت های رودهای شلمانرود، کیارود و رود کهنه گویه به
            وجود آمده که شهر املش بر مخروط افکنه شلمانرود بنا شده است. بخش
            کوهستانی در جنوبی ترین قسمت شهرستان واقع شده و پوشیده از مراتع است و
            بلندترین قله آن ناتشکوه نام دارد. مناطق جلگه ای و کوهپایه ای دارای
            آب و هوای معتدل خزری و مناطق کوهستانی دارای زمستان های سرد و پوشیده
            از برف و یخبندان و در تابستان خنک است. مجاورت شهر املش با رودخانه
            راکد شلمانرود باعث شد تا در گذشته مردم املش عمدتا در بخش کشاورزی و
            دامپروری فعالیت کنند و آثار کشاورزی بدست آمده در این منطقه نشان می
            دهد که فعالیت‌های کشاورزی در 1500 سال قبل در املش رواج داشته است.
            این شهرستان یکی از دو معدن بزرگ میکای سیاه و دولومیت ایران را در قلب
            خود جای داده‌است. مهاجرت در شهرستان بسیار انجام می گیرد و از سال
            هفتاد و پنج تا کنون که املش شهرستان شده، همیشه جمعیت در حال کاهش
            بوده است. دلیل مهاجرت از املش به شهرستان های دیگر بیکاری و وضعیت
            اقتصادی ضعیف مردم است.{" "}
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
            اکثریت جمعیت شهرستان املش را جمعیت مسن یا پیر تشکیل می دهد و این
            افراد نیز از گذشته به شغل کشاورزی و دامپروری مشغول هستند. البته
            میزان اشتغال به کشاورزی بیشتر از دامداری است. بیشتر کشاورزی شهرستان
            را باغداری تشکیل می دهد و بیشتر زمین های کشاورزی به باغات(خصوصا
            باغات چای) اختصاص دارد. این شهرستان حدودا 5000هکتار باغات چای دارد و
            قطب تولید کننده چای است و بعد از لاهیجان رتبه دوم را در تولید چای
            دارد . کاشت زیاد این محصول نشان دهنده ظرفیت بسیار خوب شهرستان
            است.چای یک کالای استراتژیک و از اقلام مصرفی تمام اقشار جامعه است و
            یکی از با اهمیت ترین محصولات نقدینه آفرین در بخش کشاورزی است و توسط
            اقشار کم درآمد نیز مصرف خوبی دارد. البته درست است که بازار فروش در
            ایران برای چای داخلی نسبت به چای خارجی کمتر است اما با تبلیغات
            گسترده تر در مورد مضرات چای خارجی و فواید چای ایرانی می توان بازار
            فروش آن را گسترده تر کرد. همچنین می توان به بازار فروش آن در خارج از
            کشور و روی صادارت آن فکر کرد. با توجه به جوابگو بودن کاشت چای در این
            شهرستان و توضیحات داده شده در خصوص سودآور بودن چای ایرانی، درصورت
            بودن زمین کافی گسترش کاشت آن به عنوان اولویت اول مزیت های شغلی این
            حوزه پیشنهاد می شود.
          </p>
          <p>
            گردو، فندق و مرکبات از محصولاتی هستند که در شهرستان املش کاشته می
            شوند. البته کاشت فندق و گردو در مناطق ییلاقی شهرستان انجام می شود.
            درصورت وجود زمین کافی در مناطق ییلاقی کاشت این محصولات پیشنهاد می
            شود. گردو و فندق از محصولاتی هستند که ارزش غذایی بالایی دارند و
            برخلاف قیمت بالای آن، هنوز هم جایگاه خوبی در میان اقشار مختلف جامعه
            دارند. علاوه بر آن تولید بیشتر گردو و فندق می تواند شرایط را برای
            فرآوری آن ها مهیا و ارزش افزوده بسیار خوبی را برای شهرستان ایجاد
            کند.
          </p>
          <p>
            آب و هوای مساعد و خاک مرغوب شهرستان، شرایط را برای کاشت مرکبات به
            میزان بیشتر فراهم کرده است. همانطور که می دانیم برای مرکبات نیز
            همیشه بازار فروش وجود دارد.{" "}
          </p>
          <p>
            واحد صنعتی پرورش قارچ دکمه ای در شهرستان با توجه به وجود کارخانه
            تولید کود ورمی کمپوست، موفق عمل می کند و تولید خوبی در این زمینه
            صورت می گیرد. تولید این کود در شهرستان شرایط را برای افزایش واحدهای
            تولید قارچ دکمه ای فراهم کرده است.{" "}
          </p>
          <p>
            صیفی جاتی همچون خیار، گوجه و توت فرنگی نیز در این شهرستان در اکثر
            خانه های روستایی و درفضای آزاد کاشته می شوند و درصورت استقبال مردم
            از کاشت این نوع محصولات،تولید آن ها در شهرستان مزیت دارد و بازار
            فروش خوبی نیز خواهد داشت.
          </p>
          <p>
            سبزیجاتی همچون ترب سفید و سایر سبزیجات محلی نیز در شهرستان کاشته
            می‌شوند و شرایط آب و هوایی و خاک مناسب برای کاشت آن ها وجود دارد که
            می توان میزان بیشتری از آن ها را تولید و در بازار عرضه کرد.
          </p>
          <p>
            در رابطه با وضعیت گلخانه ها در شهرستان املش باید گفت در این شهرستان
            11گلخانه برای تولید گل و گیاه زینتی مانند گل های سوزنی، شمشاد،
            کاکتوس و سیکاس وجود دارد. برای ایجاد واحدهای دیگر گلخانه ای در خصوص
            پرورش گل و گیاه زینتی و همچنین تولید صیفی جات ظرفیت وجود دارد. بخش
            تولید و تجارت گل و گیاهان زینتی می‌ تواند در اشتغالزایی و رشد
            درآمدهای ارزی غیرنفتی موثر باشد، ولی نداشتن پایانه صادراتی گل و گیاه
            از مشکلات مهم شهرستان املش است که باید برای رفع این مشکل اقدام کرد و
            سودآوری را افزایش داد.
          </p>
          <p>
            طبق بررسی‌های انجام گرفته باغ خرمالو نیز قابلیت احداث در شهرستان
            املش را دارد و کاشت آن با شرایط آب و هوایی شهرستان سازگاری دارد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            زراعت در شهرستان املش استقبال کننده زیادی دارد و بیشترین محصول زراعی
            که در این شهرستان تولید می شود برنج است. حدودا 3500هکتار مزارع
            شالیکاری زیر کشت برنج هستند. برنج راتون نیز به عنوان کشت دوم در
            مزارع کشت می شود. البته کیفیت بالای برنج راتون از لحاظ غذایی،
            اقتصادی بودن و بازارپسندی آن باعث شده که شالیکاران املش، برنج راتون
            را کمتر به بازارعرضه کنند و بیشتر به‌صورت خودمصرفی استفاده کنند.
            درصورت وجود زمین کافی می توان میزان بیشتری برنج، تولید و به بازار
            عرضه کرد که با توجه به قیمت فعلی برنج ایرانی سود خوبی نصیب فرد تولید
            کننده می‌شود.
          </p>
          <p>
            گیاهان دارویی نیز در مناطق ییلاقی شهرستان کاشته می شوند و امکان
            گسترش کاشت این محصولات وجود دارد. گیاهان دارویی با توجه به بازار
            مصرفی که در بین مردم پیدا کرده است صرفه اقتصادی خوبی دارد. گل
            گاوزبان یکی از انواع گیاهان دارویی است که در ییلاقات به میزان زیاد
            وجود دارد.
          </p>
          <p>
            حبوباتی مانند لوبیا، نخود سبز، باقلا سبز و عدس در شهرستان تولید می
            شوند که در صورت وجود زمین به میزان کافی و استقبال مردم، کشت آن ها در
            شهرستان جواب می دهد و تولید مقدار بیشتری از آنها موجب رفع نیاز
            شهرستان و حتی ارسال به سایر شهرستان ها و سودآوری می شود.{" "}
          </p>
          <p>
            گندم و جو قبلا در شهرستان کشت می شده اما جدیدا به دلیل عدم حمایت
            دولت از کشاورزانی که گندم و جو تولید می‌شود، مردم کم کم از کشت این
            محصولات دست کشیده اند. برای تولید مجدد این محصولات نیاز به حمایت
            دولت است. محصولاتی مانند سویا، سیر و سیب زمینی نیز قابلیت کشت در
            شهرستان را دارند. البته کشت این محصولات در اولویت بالاتری نسبت به
            کشت گندم وجو قرار می گیرد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            همانطور که گفته شد دامپروری از مشاغل اصلی مردم شهرستان املش است. در
            شهرستان املش نیز مانند بسیاری از شهرستان های شمالی کشور پرورش دام
            سنگین بیشتر صورت می گیرد. در این شهرستان اکثر دام های سنگین پرورشی
            از نوع شیرده هستند و درخصوص دام های سبک بیشتر پرواربندی انجام می
            شود. با توجه به اینکه شرایط موجود در شهرستان، بیشتر پرورش دام سنگین
            را می طلبد، پرورش دام سنگین(گاو) در اولولیت اول مزیت های شغلی این
            حوزه و پرورش دام سبک(گوسفند) در اولویت بعدی قرار می‌گیرد.
          </p>
          <p>
            زنبورداری نیز از مشاغل دیگر حوزه دامداری است که در شهرستان املش
            انجام می شود. درست است که شهرستان املش قطب تولید عسل در استان گیلان
            نیست اما تولید عسل خوبی دارد. از آن جایی که آب و هوای شهرستان املش
            شرایط خوبی را برای رشد گل و گیاه در این منطقه فراهم کرده است،
            زنبورداری نیز به خوبی جواب می دهد و بازار فروش مناسبی برای عسل وجود
            دارد؛ بنابراین شرایط برای افزایش زنبورداری در شهرستان فراهم است.
          </p>
          <p>
            در شهرستان املش پرورش زالو به صورت خانگی انجام می شود. کشور‌های
            خارجی و بالاخص اروپایی، این روز‌ها بطور تخصصی روی طب سنتی به‌وسیله
            زالو فعالیت می‌کنند. از این رو کشور ما نیز می‌تواند با پرورش زالو
            وارد این عرصه شده و حتی زمینه صادرات آن را به کشور‌های دیگر فراهم
            آورد. پرورش زالو از مشاغلی است که می توان به صورت خانگی و با هزینه
            اولیه کم آن را انجام داد و توسعه بخشید.
          </p>
          <p>
            پرورش کرم ابریشم نیز در این شهرستان انجام می شود. سال گذشته
            نوغانداران كشور بيش از 900 تن پيله تر ابريشم توليد كردند كه از اين
            ميزان، افزون بر 400 تن آن سهم تلاش پيله وران استان گيلان بوده است.
            قابليت پرورش كرم ابريشم در مناطق مختلف كشور و مكان هاي كوچك، سهولت
            كار، سرمايه گذاري اندك و درآمدزا بودن اين فعاليت جانبي در بازه زماني
            45 روزه و ارزش افزوده فرآورده هاي آن مثل نخ و فرش از مهمترين مزاياي
            پرورش كرم ابريشم است. با توجه به قابلیت شهرستان در پرورش کرم ابریشم
            و داشتن صرفه اقتصادی در انجام این حرفه،گسترده تر کردن پرورش کرم
            ابریشم پیشنهاد می گردد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            خوشبختانه در خصوص صنایع تبدیلی و تکمیلی تا اندازه ای در شهرستان املش
            کار شده است. اما ظرفیت های شهرستان حاکی از این است که بازهم در این
            زمینه جای کار وجود دارد. همانطور که در بالاتر اشاره شد شهرستان املش
            قطب تولید چای در استان گیلان است. از این رو واحدهایی(دو واحد) برای
            بسته بندی چای وجود دارد. اما بازهم در این زمینه جای کار بسیاری وجود
            دارد. بسته بندی چای خشک از مواردی است که با خرید دستگاه بسته بندی
            چای در منزل نیز قابل انجام است. به هرحال انجام این شغل به صورت خانگی
            و یا در واحدهای صنعتی سود خوبی دارد و از ارسال چای به صورت فله ای به
            خارج از شهرستان برای بسته بندی جلوگیری می کند. بسته بندی چای علاوه
            بر اینکه تاثیر مثبتی بر بازار فروش دارد(نسبت به فروش فله ای قیمت
            گذاری بالاتری روی آن می توان داشت) باعث حفظ محتوای درون آن می شود.
            راه‌اندازی کسب و کار بسته‌بندی چای نیازمند بررسی بازار و وجود
            واحدهای مشابه است. یکی دیگر از مشاغل مرتبط با تولید چای، تهیه چای
            کیسه‌ای است. با تولید چای کیسه‌ای می‌توان از واردات این محصول
            جلوگیری کرده و به سود خوبی دست یافت.
          </p>
          <p>
            باتوجه به تولید عسل در شهرستان، قابلیت ایجاد واحدهای بسته بندی(بسته
            به نیاز شهرستان) را فراهم کرده است. بسته بندی شکیل عسل قطعا در بازار
            فروش آن تاثیر قابل توجهی خواهد داشت. ظاهرا دو یا سه مورد در خصوص
            بسته بندی عسل ثبت برند شده اند ولی بازهم جای کار وجود دارد. از آن
            جایی که عسل تولیدی به سراسر کشور ارسال و یا توسط مسافرانی که به این
            منطقه می آیند خریداری می شود(این محصول در شهرستان معروف شده) افزایش
            واحدهای بسته بندی عسل جوابگو خواهد بود. همچنین تهیه موم و کندوی
            زنبور عسل نیز به تبع زنبورداری در شهرستان لازم به انجام است، ولی در
            اولویت بعدی قرار می گیرد.
          </p>
          <p>
            همانطور که گفته شد سطح کشت برنج در این شهرستان وسیع است و واحد هایی
            برای سورتینگ و بسته بندی آن نیاز است که راه‌اندازی این شماغل پیشنهاد
            می‌شود. البته در حال حاضر نیز بسته بندی برنج در شهرستان انجام می شود
            ولی قابلیت گسترش دارد.{" "}
          </p>
          <p>
            تولید کمپوست (افزودن مقدار مشخصی از کودهای شیمیایی به کود حیوانی)
            نیز به دلیل استفاده کشاورزان برای تقویت زمین های کشاورزی خود گزینه
            شغلی خوبی است و صرفه اقتصادی دارد.
          </p>
          <p>
            علی رغم تولید گردو و فندق اما واحدی برای بسته بندی آن ها وجود ندارد.
            به صورت کلی جای صنایع بسته بندی در شهرستان املش خالی است. می توان
            برای احداث واحدی برای بسته بندی گردو و فندق اقدام کرد. فندق یا گردوی
            بسته بندی شده امروزه از بازار فروش خوبی در میان مردم برخوردار است.
          </p>
          <p>
            ازآن جایی که دام سبک و سنگین در شهرستان پرورش داده می شود، در صورت
            تقاضا برای فرآوری پوست، امکان انجام آن وجود دارد(در صورت نیاز به
            پوست دام بیشتر، می توان از شهرستان های اطراف وارد کرد.) با اینکه
            فرآوری پوست گاو(برای تولید چرم) و پوست گوسفند(برای تولید نخ) مشاغل
            سوددهی هستند در بسیاری از نقاط کشور ما استفاده مفیدی از پوست دام ها
            نمی شود. درصورتی که می توان چرم های مرغوبی تهیه کرد ودرصورت نبود
            بازار فروش در شهرستان به خارج از شهرستان ارسال کرد.
          </p>
          <p>
            در حال حاضر کشتارگاهی در خصوص کشتار دام و طیور در شهرستان وجود ندارد
            و دام وطیور برای کشتار به شهرستان همجوار(لنگرود) فرستاده می شود. به
            نظر می رسد نیازی به کشتارگاه برای دام وطیور در شهرستان نباشد. اما در
            صورت افزایش واحدهای پرورش طیوری مانند بوقلمون و بلدرچین نیاز به
            ایجاد کشتارگاه برای آن ها احساس خواهد شد.
          </p>
          <p>
            درصورت تولید مرغ، بلدرچین، بوقلمون، و غاز به صورت انبوه اردک می توان
            صنعت بسته بندی گوشت آن ها را ایجاد کرد و درصورت نبود بازار فروش، آن
            ها را به شهرستان های اطراف ارسال کرد. تخم بلدرچین در حال حاضر به
            صورت خانگی بسته بندی می شود که می توان بازهم به صورت خانگی به این
            شغل پرداخت اما برای بسته‌بندی تخم بلدرچین و تخم مرغ به صورت صنعتی
            نیاز به تعداد بیشتر واحدهای پرورش مرغ تخم گذار و بلدرچین است.
          </p>
          <p>
            درحال حاضر میزان ماهی پرورش داده شده به مقدار انبوه نیست تا صنعت
            بسته بندی ماهی در این شهرستان ایجاد شود. اما در صورت افزایش واحد های
            پرورش ماهی و یا واردات از شهرستان های اطراف که میزان پرورش ماهی
            بیشتری دارند، چنین واحدی قابلیت راه اندازی دارد. البته درکنار ایجاد
            این صنعت لازم است روی فرهنگ استفاده مردم از محصصولات بسته بندی شده
            خصوصا ماهی کار شود و تبلیغاتی برای گسترش بازار فروش صورت بگیرد.
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            وجود صنایع غذایی نیز در هر نقطه ای از کشورمان باعث استفاده بهتر و
            چندبرابر از ظرفیت های موجود می شود و واردات بی رویه را در زمینه های
            مختلف کاهش می دهد. موارد وارداتی که به راحتی در کشور خودمان قابلیت
            تولید دارند. در شهرستان های شمالی به واسطه تولیدات باغی و زراعی و
            همچنین تولیدات دامی خوبی که دارند،بستر برای ایجاد واحدهای فرآوری
            محصولات دامی و کشاورزی فراهم است و نیازمند سرمایه گذاری در این زمینه
            است. شهرستان املش نیز از موارد گفته شده مستثنی نیست. البته در زمینه
            صنایع غذایی همچون صنایع تبدیلی و تکمیلی اقداماتی صورت گرفته است ولی
            قابلیت توسعه موارد موجود و یا ایجاد واحدی جدید وجود دارد. برای مثال
            همانطور که گفتیم چای از تولیدات عمده شهرستان املش است و کارخانه های
            فرآوری چای در شهرستان وجود دارد اما تولیدات فراوان چای باعث شده که
            بازهم در زمینه احداث واحدی برای فرآوری چای و افزودن اسانس به آن
            سرمایه گذاری کرد. عمل افزودن اسانس می تواند تاثیر بسیاری در گسترش
            بازار فروش چای ایرانی در بین مردم کشورمان دارد. همچنین{" "}
          </p>
          <p>
            در زمینه فرآوری برنج نیز کارخانه های شالیکوبی وجود دارد اما تعداد
            این واحدها زیاد نیست. وجود واحدهای شالیکوبی باعث می شود به جای اینکه
            برنج به شهرستان لنگرود برای فرآوری ارسال شود در داخل شهرستان فرآوری
            شود و کشاورزان متحمل هزینه حمل و نقل نشوند. سطح کشت وسیع برنج وتولید
            برنج به مقدار فراوان می تواند انگیزه ای برای تولید فرآورده هایی از
            برنج مانند آرد برنج شود. آرد برنج برای پخت انواع غذا و شیرینی پزی
            استفاده می شود. تهیه آرد برنج به صورت خانگی نیز امکان پذیر است.
          </p>
          <p>
            فندق و گردوی تولیدی در شهرستان به صورت خام فروخته می شود درصورتی که
            اگر برای روغن کشی از آن ها استفاده شود سود بسیار بیشتری نصیب افراد
            تولید کننده می شود. می توان این عمل را در کارگاه های کوچک با تهیه
            دستگاه های مربوط به روغن کشی انجام داد.
          </p>
          <p>
            همانطور که در بالا به آن اشاره شد تولید شیر شهرستان مقدار زیادی دارد
            و توسط مراکز جمع آوری شیر جمع آوری می شود اما شهرستان در حال حاضر
            تولید لبنیات صنعتی ندارد. به تازگی یک کارخانه برای تولید لبنیات در
            شهرستان با هشت میلیارد تسهیلات احداث شده؛ ولی هنوز به بهره برداری
            نرسیده است و از این کارخانه صد نفربه صورت مستقیم مشغول به کار می
            شوند، البته احتمال اینکه درسال نود و هشت به بهره برداری برسد خیلی کم
            است. با احداث چنین کارخانه ای به نظر می رسد دیگر مزیتی برای ایجاد
            واحد صنعتی تولید لبنیات وجود نداشته باشد. اما در رابطه با ایجاد
            لبنیات سنتی می توان کار کرد.{" "}
          </p>
          <p>
            تولید سوسیس و کالباس در شهرستان امکان پذیر است ولی ممکن است نیاز به
            واردات گوشت از شهرستان های اطراف داشته باشد. همچنین بازار فروش آن
            احتمالا در داخل شهرستان گسترده نیست و باید روی صادارات آن فکر کرد.
            میوه‌هایی مانند مرکبات و خرمالو و توت فرنگی برای تهیه چیپس میوه ،
            میوه خشک، لواشک، شهد و مربا مناسب هستند و محصولات خوشمزه ای از این
            نوع میوه ها به دست می آید. امکان انجام این مشاغل به صورت خانگی وجود
            دارد ولی برای انجام صنعتی آن نیاز به کاشت بیشتر این میوه ها و یا
            واردات میوه از سایر شهرستان ها است.
          </p>
          <p>
            انواع گیاهان دارویی شهرستان قابلیت فرآوری و بسته بندی دارند. لازم به
            ذکر است که تولید آن ها انبوه نیست تا واحد صنعتی بزرگی برای این کار
            احداث شود. اما می توان در سطح کارگاه های کوچک برای فرآوری آن
            ها(مانند عرق گیری،خشک کردن و بسته بندی) اقدام کرد. این محصولات
            طبیعتا مورد استقبال مردم قرار می گیرد.
          </p>
          <p>
            لازم به ذکر است تولید رب گوجه فرنگی و خیارشور و فرآوری سبزیجات(خشک
            کردن و بسته بندی) به صورت خانگی می تواند از مشاغل سودده برای مردم
            شهرستان خصوصا بانوان باشد. خوشبختانه فرهنگ مصرف تولیدات خانگی امروزه
            در بین مردم جا افتاده است.
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            طیور پرورشی در شهرستان متنوع است. طیوری مانند مرغ گوشتی(صنعتی)، مرغ
            تخم گذار(صنعتی)، مرغ بومی، بلدرچین، بوقلمون، اردک و غاز پرورش داده
            می شود. البته در میزان پرورش این طیور تفاوت هایی وجود دارد. برای
            مثال مرغ گوشتی و تخم گذار سطح پرورش خوبی دارند؛ اما استقبال از پرورش
            مرغ بومی نسبت به پرورش مرغ به صورت صنعتی بیشتر است. پرورش مرغ بومی
            با توجه به خصوصیات آن از جمله مقاومت در مقابل شرایط سخت محیطی، هزینه
            پایین نگهداری و بازارپسندی و کیفیت مطلوب مورد توجه است.
          </p>
          <p>
            اردک و غاز نیز از طیوری هستند که به صورت سنتی پرورش داده می شوند. از
            ویژگی های بارز اردک می توان به نیاز کم به غذا و مهم تر از همه دوام
            بالای آن اشاره کرد که همین موارد باعث شده تا پرورش دهنده های طیور به
            دلیل سود بالا و ریسک پایین، تمایل بیشتری به پرورش این پرنده داشته
            باشند. گوشت این پرنده باتوجه به ارزش غذایی بالا و ویتامین و پروتئینی
            که دارد از محبوبیت بالایی برخوردار بوده و گاها به عنوان جایگزین گوشت
            مرغ از آن یاد می شود .گوشت اردک از گوشت بسیاری از پرنده های پرورشی
            سالم تر است چرا که این پرنده در دوره رشد خود هیچ گونه هورمون یا
            موارد دیگر دریافت نمی کند.{" "}
          </p>
          <p>
            در رابطه با پرورش غاز باید گفت که انجام این کار سودآوری خوبی دارد.
            غازها در برابر باکتری ها ، ویروس ها و سایر عوامل بیماری زا مقاوم
            هستند و کم تر بیمار می شوند وبه راحتی می توانند احتیاجات غذایی خود
            را از مراتع سرسبز به دست آورند و نیاز به تغذیه دستی آنان به حداقل
            برسد. پرورش غاز در استان های شمالی ایران کمک فراوانی به باغداران در
            هرس علف های هرز و دفع حلزون و سایر حشرات می کند.{" "}
          </p>
          <p>
            پرورش بوقلمون و بلدرچین نیز تا اندازه ای در شهرستان انجام می شود؛
            اما تعداد واحدهای پرورش این پرنده ها خیلی زیاد نیست. باتوجه به
            سازگاری این طیور با آب و هوای شهرستان می توان با آموزش مناسب و دادن
            آگاهی به مردم، واحدهای مربوط به پرورش این طیور را ایجاد کرد و با
            فروش آن سود خوبی کسب نمود. البته تقاضا برای پرورش بلدرچین نسبت به
            پرورش بوقلمون بیشتر بوده و مزیت بالاتری دارد.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            وقتی صحبت از مشاغل خدماتی در شهرستان های شمالی می شود اولین چیزی که
            ممکن است به ذهن ما برسد مبحث گردشگری و فعالیت های مربوط به آن است.
            شهرستان املش یکی از شهرستان های بسیار زیبای گیلان است که جاذبه های
            گردشگری بسیاری دارد و گردشگران بسیاری را می تواند جذب کند. مردم
            شهرستان با انجام فعالیت های مربوط به گردشگری می توانند سودآوری
            بالایی داشته باشند؛ زیرا شهرستان های شمالی همه ساله با استقبال
            فراوان مردم روبه رو هستند و هرچقدر شهرستان از لحاظ امکانات گردشگری
            غنی تر باشد گردشگران بیشتری را جذب می کند. برخی از جاذبه های گردشگری
            شهرستان املش عبارتند از: آبشار سیاه تاش (نگین طبیعت املش)، برج اُمام
            (نشانی برای راهنمایی مسافران)، عمارت صوفی(یادگاری زیبا از عهد
            قاجار)، گورج( شاه نشین اسماعیلیان املش). با توجه به مطالب گفته شده
            احداث اقامتگاه بومگردی و رستوران های بومی در شهرستان املش مزیت دارد
            و کمک زیادی به صنعت توریست در این شهرستان می کند.
          </p>
          <p>
            از جمله مشاغل خدماتی دیگری که در این شهرستان قابلیت انجام دارد و
            پیشنهاد می شود می‌توان به کارگاه طلا و جواهرسازی و خیاطی انواع لباس
            خصوصا لباس های محلی اشاره‌کرد که خیاطی در شهرستان تقاضای بالایی
            دارد.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            شیلات از حوزه هایی که بسیار سودآور بوده و درصورتی که منابع غنی آبی و
            شرایط محیطی مورد نیاز وجود داشته باشد بسیار جواب می دهد. معمولا در
            تمام شهرستان های شمال کشور با توجه به منابع آبی که دارند پرورش ماهی
            انجام می شود. در شهرستان املش شرایط برای پرورش دو نوع ماهی سردابی و
            گرمابی مهیا است و می توان درخصوص ایجاد مزارع پرورش هردونوع ماهی
            اقدام کرد. همچنین در این شهرستان یک واحد پرورش ماهی های یک گرمی قزل
            آلا و تبدیل آن ها به ماهی های 50گرمی(درواقع واحد پرورش بچه ماهی)
            وجود دارد که این ماهی ها بعد از تولید به خارج از شهرستان ارسال می
            شوند. به نظر می رسد بتوان برای افزایش تعداد این واحد ها اقدام کرد و
            سود خوبی به دست آورد.
          </p>
          <p>
            پرورش ماهی خاویاری نیز به ندرت در شهرستان انجام می شود. پرورش این
            ماهی هزینه و زمان زیادی(حدودا 5سال) می طلبد؛ ولی درصورت وجود سرمایه
            کافی، سود بسیار زیادی به دنبال دارد.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            بیشتر جمعیت شهرستان را افراد مسن و پیر تشکیل می دهد و جوانان بیشتر
            به شهرهای دیگر مهاجرت کرده اند و همچنین افرادی که در حال حاضر در
            شهرستان هستند بیشتر به کشاورزی و دامپروری اشتغال دارند یا از طریق
            صنایع تبدیلی، تکمیلی و غذایی مربوط به چای و برنج کسب درآمد می کنند؛
            بنابراین از مشاغل صنعتی استقبال چندانی نشده‌است. طبق بررسی‌های
            انجام‌شده در مشاغلی از قبیل تولید مصنوعات چوبی مانند تهیه زغال از
            چوب می‌توان سرمایه‌گذاری کرد و آن را توسعه داد. تولید ادوات کشاورزی
            نیز با توجه به وسعت کشاورزی پیشنهاد می شود. با راه اندازی مشاغل
            نامبرده شده در تمامی حوزه ها امید است که مهاجرت جوانان کمتر شود و
            تولیدات مختلف شهرستان املش رونق بگیرد.
          </p>
          <p>
            صنایع فعال شهرستان املش عبارتند از:واحد های بسته بندی حبوبات، ادویه
            جات و خشکبار برادران اسد زاده، فرآوری و بسته بندی چای، تولید روکش و
            رویه ی کتونی، تولید بتن های سبک و سنگین، شالیکوبی، تولید قارچ دکمه
            ای و کود ورمی کمپوست، تولید قند و بلوک زنی.{" "}
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            صنایع دستی شهرستان املش شامل چادرشب بافی، حصیربافی، فرش بافی و
            نمدمالی است که تمام آن ها قابلیت گسترش دارند. برای مثال نمدمالی
            درآمدزایی خوبی در شهرستان دارد. کارگاه های تولید سفال نیز در شهرستان
            وجود دارد که می توان درخصوص افزایش آن ها گامی برداشت.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
