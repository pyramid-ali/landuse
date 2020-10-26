import React from "react";
import Section from "components/section";
import Provinces from "fixtures/provinces.json";
import CityContent from "components/city-content";

export default function () {
  const city = Provinces["IR-05"].cities["IR-0504"];

  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        industry: "صنعت",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        gardening: "باغداری",
        fisheries: "شیلات",
        livestock: "دامداری",
        birds: "طیور",
        agriculture: "زراعت",

      },
    },
  };

  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>شهرستان فردیس با مرکزیت شهر فردیس از جمله شهرستان های استان البرز لست. جمعیت این شهرستان طبق سرشماری سال 1395، 271 هزار و 829 نفر بوده است.  شهرستان فردیس دارای اقلیم آب و هوایی سرد و بافت شهری می باشد. این شهرستان توسط تهران و کرج دربرگرفته شده است و درواقع بین این دو شهرستان بسیار مهم قراردارد. شکل زیر موقعیت شهرستان فردیس را نشان می دهد. </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان برمبناي يک روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها به عنوان ورودي به نرم‌افزار داده‌شده و خروجي نرم‌افزار هم‌پوشاني اين دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين اولويت‌بندي‌ها توسط كارشناسان و افرادخبره هر شهرستان بازبيني و اصلاح مي‌شوند. يكي از منابع تحليل همين ليست مزيت‌سنجي اصلاح‌شده‌است. يكي ديگر از منابع تحليل، مصاحبه با كارشناسان و متخصصين حوزه اشتغال هر شهرستان است. در هر شهرستان با حداقل 3 نفر از اين افراد مصاحبه انجام مي‌شود. اين مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در صورت وجود تناقض و ابهام بين اين 3 مصاحبه و ليست مزيت‌سنجي، مصاحبه‌هاي تكميلي و حتي مصاحبه بيشتر هم صورت مي‌گيرد تا تيم تحليل به نتيجه نهايي مطلوب دست‌يابد. بنابراين خروجي هر شهرستان از تجميع مصاحبه‌ها و ليست مزيت‌سنجي حاصل مي‌شود. در ادامه تحليل شهرستان فردیس ارائه‌شده‌است.</p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>همانطوريكه در قسمت مقدمه اشاره‌شده مبناي تحليل، مصاحبه‌ها و ليست مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار شهرستان تعيين شده‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به ترتيب اولويت مشخص شده‌است. در تحليل به مشاغل موجود، مشاغل قابل توسعه و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد آن‌ها در شهرستان وجوددارد، اشاره شده‌است. مزيت‌هاي شغلي به ترتيب اولويت در ادامه آورده شده‌است.</p>
        </Section>
        <Section title="صنایع غذایی" id="Food_industry" size="h3">
          <p>راه‌اندازی کسب و کار فراوری محصولات کشاورزی مهم ترین روش برای ایجاد اشتغال پایدار و کاهش وابستگی به درآمد های نفتی و عاملی مهم در توسعه پایدار امنیت غذایی محسوب می‌شود. ایجاد صنایع غذایی، علاوه بر اشتغالزایی، باعث ارتقای سطح درآمد ارزی می‌شود که کاهش هدررفت محصولات کشاورزی و ایجاد ارزش افزوده از منابع را تا حد امکان ممکن می‌کند.</p>
          <p>شهرستان فردیس به دلیل نزدیکی به شهرستان های پرجمعیتی مانند تهران، کرج، شهریار و... به راحتی توانایی ارتباط با بازارفروش های متعدد و بزرگ را دارد؛ بنابراین ایجاد صنایع غذایی مختلف در این شهرستان فعالیتی مقرون به صرفه بوده و ضمن درآمدزایی، اشتغالزایی خوبی را نیز به همراه خواهد داشت. البته در برخی از صنایع غذایی که در ادامه به آن ها اشاره می شود، نیاز به واردات مواد اولیه از شهرستان های اطراف وجود دارد. </p>
          <p>فرآوری میوه به صورت صنعتی با توجه به تولید انواع میوه در این شهرستان و شهرستان های اطراف، از جمله فعالیت هایی است که قابلیت انجام دارد.  احداث واحد یا واحدهای صنعتی در رابطه با تولید آبمیوه، چیپس میوه و میوه خشک، کمپوت، لواشک و مربا در این منطقه امکان پذیر بوده و سرمایه گذاری در این زمینه پیشنهاد می گردد. خشک کردن میوه‌جات، یکی از روش‌هاي جلوگیري از فساد میکروبی آن‌ها است. در این روش، در اثر کاهش میزان رطوبت، امکان فساد میکروبی بسیار کم شده و سرعت دیگر واکنش‌هاي مضر نیز، به مقدار قابل توجهی کاهش می‌یابد. خشک کردن، ضمن اینکه روي محصول اثر حفاظتی دارد، وزن و حجم آن را نیز به میزان چشمگیری کاهش می‌دهد، در نتیجه از هزینه‌های حمل و نقل و ذخیره‌سازي نیز می‌کاهد. با توجه به اینکه بخشی از بازار میوه خشک ایران، سهم محصولات وارداتی است، با تولید مشابه داخلی این میوه‌ها (از نظر نوع و کیفیت)، می‌توان مانع واردات و خروج میلیون‌ها دلار ارز از کشور شد. همچنین نیاز بیش از حد برخی از کشورها به این گونه محصولات (به دلیل شرایط ویژه اقلیمی آن‌ها، هزینه بالای حمل و نقل سبزیجات و میوه‌های تازه و محدود بودن زمان نگه‌داری آن‌ها)، فرصت مناسبی برای رونق تولید و صادرات چیپس میوه فراهم آورده است.</p>
          <p>در رابطه با مزیت تولید کمپوت میوه نیز باید گفت امروزه با توجه به تولید انواع میوه بیش از مقدار مصرفی، باید با روش های مختلفی مانند تولید کمپوت، از مازاد میوه مصرفی نگهداری کرد تا علاوه بر کاهش ضایعات در تمام فصول مورد استفاده قرار بگیرند. تهیه کمپوت یکی از روش های نگهداری طولانی میوه با استفاده از حرارت است که طی آن آنزیم ها غیرفعال و اغلب میکروارگانیسم ها نابود می شوند. بسته بندی میوه های کمپوت شده به گونه ای است که از آلودگی مجدد آن ها جلوگیری می کند. انتخاب مواد اولیه مناسب و سالم در کیفیت محصول نهایی و رضایت مصرف کننده نقش مهمی دارد.</p>
          <p>همچنین می توان در رابطه با فرآوری انگور (با استفاده از انگور تولید شده در شهرستان و همچنین واردات انگور) نسبت به احداث واحدی صنعتی در زمینه فرآوری آن به منظور تولید سرکه انگور، شیره انگور، کشمش و روغن هسته انگور اقدام کرد. سرکه انگور، شیره انگور و کشمش همیشه از بازارفروش خوبی برخوردار هستند و تولید و فروش آن ها سوددهی خوبی را به همراه دارد.</p>
          <p>روغن هسته انگور نیز از جمله روغن‌های گیاهی برشمرده می‌شود که با بالابردن کلسترول خوب بدن و پایین آوردن کلسترول بد به پاکیزگی رگ‌های خونی و شست‌وشوی آنها کمک کرده و از بیماری‌های قلبی- عروقی و سکته قلبی و مغزی جلوگیری می کند. از این روغن برای خام خواری، سرخ کردن، در تهیه انواع سالادها، غذاها و همچنین تهیه شیرینی و گریل مورد استفاده قرار می‌گیرد. همین چند منظوره بودن یکی دیگر از مزیت‌های این روغن به شمار می‌آید. از طرفی در این روغن، اسیدهای چرب امگا ۳، ۶ و ۹ بالاتری نسبت به سایر روغن‌های گیاهی وجود دارد که مصرف متعادل آن می‌تواند به ارتقای سطح سلامت کمک کند. همچنین با توجه به واردات روغن؛ استفاده از ضایعات و هسته‌های میوه‌های فرآوری‌شده مانند انگور در تولید روغن، می‌تواند در کاهش وابستگی کشور موثر باشد و مورد حمایت دولت هم قرار بگیرد. روغن‌کشی از این دانه علاوه بر بحث خوراکی در بسیاری از موارد صنعتی مانند صنایع نساجی، تولید کاغذ، داروسازی، لاستیک سازی و ... هم پرکاربرد است. با توجه به این که تعداد رقبای موجود نیز در تولید این محصول کم است، سرمایه گذاری در این حوزه می تواند صرفه اقتصادی بسیاری داشته باشد.</p>
          <p>فرآوری و بسته بندی گیاهان دارویی به صورت صنعتی از دیگر پیشنهادات شغلی در این حوزه است که از صرفه اقتصادی بالایی برخوردار خواهد بود.  برای راه اندازی این کسب و کار لازم است از گیاهان دارویی موجود در شهرستان های اطراف استفاده شود. فرآوری گياهان دارويي، علاوه بر ارزش افزوده، نياز به سرمايه‌گذاري زيادي نداشته و مي‌تواند نقش مهمي در کارآفرینی داشته باشد. یکی از فرآوری‌های گیاهان دارویی تولید عرقیات است. تولید عرقیات دارای تکنولوژی و دانش فنی پیچیده ای نمی باشد و با توجه به سهولت صادرات این محصولات به شهرها و کشورهای دیگر، می توان با سرمایه‌ای اندک به این کسب و کار مشغول شد. خشک کردن و بسته‌بندی نیز از دیگر فرآوری‌های گیاهان دارویی است که می‌توان با فعالیت در آن‌ها به سود رسید.</p>
          <p>احداث واحدهایی صنعتی در خصوص فرآوری گندم مانند تولید شیرینی، کیک، کلوچه و بیسکوییت، رشته آشی و پلویی و نان (سنتی، صنعتی و فانتزی) از دیگر فعالیت هایی است که در این شهرستان قابلیت انجام دارد.  البته بررسی های انجام شده نشان می دهد تولید رشته آش و پلویی و نان در اولویت های بعدی مزیت های شغلی این حوزه قرار می گیرد. پخت شیرینی در ابعاد وسیع و کارگاهی و حتی در محیطی کوچک (در خانه) امکان پذیر است. شیرینی محصولی است که در انواع متفاوت و با طعم های متنوعی تهیه می شود. به علاوه این که با تغییر در مواد تشکیل دهنده آن می توان برای افراد رژیمی هم شیرینی تهیه کرده و این افراد را نیز به بازار هدف خود اضافه کرد. این کسب و کار را می توان با تجهیزات کم و سرمایه پایینی شروع کرد و در زمان کوتاه با فروش محصول به سود بالایی رسید. پخت شیرینی یکی از مشاغل زودبازده و یک فرصت شغلی مناسب مخصوصا برای زنان خانه دار محسوب می شود. یافتن بازار فروش محصول یکی از ضروریات این حرفه می‌باشد که با تبلیغات مناسب مخصوصا در فضای مجازی می توان به آن دست یافت . توجه به این نکته ضروری است که یکی از لازمه های موفقیت در این شغل گذراندن دوره های آموزشی مرتبط با پخت شیرینی است. </p>
          <p>امروزه شغل نانوایی یکی از مشاغل پایه‌ای و پر رونق است که در طول سال همیشه درآمدزا می باشد. نان محصولی است که با توجه به سلیقه یا نوع غذای مصرفی خانواده ها، همواره بر سر سفره ها قرار دارد. نان‌ها فقط به صورت نان های ساده و معمول مانند لواش، سنگک و … نیستند بلکه نان های فانتزی نیز تولید می شوند که مشتریان خاص خود را دارند. امروزه راه اندازی کسب و کار تولید نان فانتزی بازاری رو به رشد دارد. این کسب و کار با تولید نان هایی با اندازه و طعم های متفاوت با استقبال مردم مواجه شده‌است. باتوجه به شرایط شهرستان، فعالیت در این زمینه مزیت دارد.</p>
          <p>تولید فرآورده های دامی مانند لبنیات و سوسیس و کالباس به صورت صنعتی از دیگر پیشنهادات شغلی در این حوزه هستند که نهاده های مورد نیاز آن ها نیز قابل تامین است.  البته تولید سوسیس و کالباس در اولویت های بعدی مزیت های شغلی این حوزه قرار می گیرد.</p>
          <p>شیر و فرآورده هاي آن از مهمترین اجزاي تشکیل دهنده جیره غذایی انسان است که از لحاظ ارزش غذایی از کلسیم، فسفر، ویتامین هاي مورد نیاز و پروتئین، غنی می‌باشد و همیشه استقبال بسیار خوبی از این نوع محصولات می شود. البته باید توجه داشت برای موفقیت در این زمینه باید به بالابردن توانایی رقابت با نشان‌های تجاری معروف نیز فکر کرد.</p>
          <p>احداث واحدی صنعتی جهت تولید فرآورده های گوشتی مانند سوسیس و کالباس از دیگر ظرفیت های شغلی این شهرستان است. تولید محصولات مشتقی از گوشت‌های فرآوری شده، در هر زمانی سوددهی دارد و از شغل‌های آزاد پردرآمد محسوب می‌شود. در بین فراورده های عمل آوری شده از گوشت، سوسیس و کالباس به دلیل آماده سازی سریع و همچنین طعم و مزه مطلوب، مصرف بیشتری دارد. سوسیس و کالباس حاوی پروتئین های حیوانی کافی، چربی، کربوهیدرات و ویتامین است و می توان آن‌ها را از جمله غذاهای آماده در سفره خانواده ها نام برد. برای حفظ این جایگاه و افزایش تقاضای این محصولات، علاوه بر انتخاب روش های مناسب تولید و فراوری، باید به نوع و شکل بسته بندی آنها نیز توجه نمود. باتوجه به رونق دامداری در این شهرستان، راه‌اندازی این کسب‌وکار مزیت دارد.</p>
          <p>احداث واحدی جهت فرآوری سیب زمینی از دیگر پیشنهادات شغلی شهرستان فردیس در حوزه صنایع غذایی است؛ البته مواد اولیه مورد نیاز برای این کار باید از خارج از شهرستان خریداری شود. چیپس سیب زمینی یکی از محصولاتی است که به واسطه طعم جذاب خود مخاطبین زیادی در میان تمام اقشار جامعه دارد و اکثر افراد به ویژه کودکان و نوجوانان از این محصول استفاده می‌کنند. چیپس به عنوان یک ماده غذایی لذیذ و پرطرفدار در بازار مصرف مواد غذایی کالایی رقابتی است؛ بنابراین افرادی که قصد ورود به این حرفه را دارند باید به این نکته توجه کنند که حتماً محصولات تولیدی توانایی رقابت با نشان‌های تجاری موجود در بازار را داشته باشند</p>
          <p>با توجه به تولید مواد اولیه لازم برای تولید ترشیجات و شوریجات در شهرستان های اطراف، احداث کارگاه یا کارگاه هایی در این زمینه صرفه اقتصادی داشته و پیشنهاد می گردد.  ترشی و شور، بیشتر به‌عنوان یک چاشنی در کنار غذا مصرف می شود و به دلیل خاصیت اسیدی که دارد، باعث افزایش اشتها و میل به غذا خوردن در افراد می‌شود. این محصول یکی از فرآیندهای نگهداری طولانی‌ مدت صیفی‌ و سبزیجات  است. در جوامع امروزی به دلیل افزایش مشغله افراد و شاغل بودن بسیاری از زنان، فرصت کافی برای تهیه آن در منزل و توسط خود افراد وجود ندارد و اکثر خانواده‌ها تمایل دارند ترشی و شور موردنیاز خود را به‌صورت آماده تهیه نمایند. بنابراین راه اندازی کسب‌ وکار تهیه ترشی و شور می‌تواند راهی برای پاسخ به این نیاز افراد جامعه و کسب درآمد باشد.</p>
          <p>تهیه و بسته بندی نقل، نبات و آبنبات و همچنین تهیه و بسته بندی قره قروت از دیگر مشاغل سوددهی هستند که می توان در زمینه انجام آن ها سرمایه گذاری کرد؛ البته تهیه و بسته بندی قره قروت مزیت پایین تری نسبت به سایرین دارد.</p>
          <p>در حال حاضر واحدهایی در زمینه تولید آرد، عصاره های مواد غذایی مانند عصاره گوشت و مرغ، افزودنی مواد غذایی، رب گوجه فرنگی و تولید و بسته بندی سالاد وجود دارند. </p>

        </Section>
        <Section
          title="صنایع تبدیلی و تکمیلی"
          id="Conversion_complementary_industries"
          size="h3"
        >

          <p>با وجود تنوع تولید محصولات کشاورزی، بررسی‌ها نشان می‌دهد که سالانه مقداری از آن در مراحل کاشت، داشت و برداشت به ضایعات تبدیل می‌شوند. از سوی دیگر برداشت و یا تولید بسیاری از محصولات کشاورزی در یک بازه زمانی مشخصی رخ می‌دهد؛ اما مصرف آن‌ها در طی سال صورت می‌پذیرد. لذا صنایع تبدیلی می‌تواند زمان استفاده را افزایش دهد و از میزان ضایعات آن بکاهد. همچنین گسترش این صنایع موجب اشتغال‌زایی، ایجاد درآمد و جلوگیری از اتلاف و ضایع شدن محصولات می‌گردد.</p>
          <p>در شهرستان فردیس واحدهایی در زمینه صنایع تبدیلی و تکمیلی موجود است و با توجه به وجود ظرفیت های لازم برای انواع صنایع تبدیلی و تکمیلی، می توان در این حوزه مجددا سرمایه گذاری کرد.</p>
          <p>با توجه به وجود کشتارگاه طیور در این شهرستان و نبود واحدی جهت بسته بندی محصول تولید شده، می توان در این زمینه سرمایه گذاری و کسب درآمد کرد. یکی از روش‌های تازه ماندن گوشت مرغ، بسته‌بندی مناسب است. بسته بندی باید به گونه‌ای باشد که گوشت را در مقابل نفوذ طعم، بو، رنگ و سایر عوامل خارجی محافظت کرده و از خشک شدن و تبخیر سطحی جلوگیری کند. همچنین بسته بندی باید خواص حسی و ظاهری و سایر ویژگی‌های گوشت را حفظ و گوشت را در برابر آلودگی های میکروبی و سایر آلودگی ها نگهداری کند.</p>
          <p>با توجه به تولید انواع محصولات کشاورزی در شهرستان های اطراف ( البته در داخل شهرستان نیز میزان مناسبی از محصولات باغی تولید می شود)، احداث سردخانه بازدهی خوبی خواهد داشت؛ البته در حال حضر نیز تعداد کمی سردخانه موجود است و همچنان قابلیت گسترش دارد.  . از مهمترین مزایای استفاده از سردخانه محصولات کشاورزی می توان به جلوگیری از فساد محصول اشاره کرد. روند انواع فسادها از قبیل فساد فیزیکی، فساد شیمیایی یا تغییر رنگ محصول، فساد ناشی از وجود میکروارگانیسم ها و غیره با نگهداری در سردخانه ها به شدت کند شده و حفظ کیفیت محصول در زمان طولانی تر حاصل می گردد. از دیگر مزایای با اهمیت احداث سردخانه محصولات کشاورزی، کنترل قیمت بازار است. ذخیره کردن محصولات در سردخانه موجب می شود در ماه هایی که مصرف محصولات بسیار است و فصل برداشت آن محصول خاص نیست، بازار با کمبود مواجه نشده و حباب قیمت ایجاد نگردد. در واقع با ساخت سردخانه محصولات کشاورزی تعادلی در عرضه و تقاضا ایجاد می گردد و موجب خواهد شد از افزایش بی رویه قیمت که به ضرر مصرف کننده است و از کاهش بیش از حد آن که به ضرر باغداران است جلوگیری به عمل آید؛ بنابراین نقش سردخانه های محصولات کشاورزی به عنوان حد واسط بازار و کشاورزان در این بین بسیار پر رنگ و حیاتی است.</p>
          <p>همچنین می توان در رابطه با احداث واحد یا واحدهای سورتینگ وبسته بندی محصولات کشاورزی نیز اقدام کرد. سورتینگ و بسته بندی از فرآیند هایی است که بر میزان صادارت تاثیر دارد. هدف از سورتینگ، دسته بندی و درجه بندی انواع محصول بر اساس سایز و کیفیت است. به طوری که بتوان محصول نهایی را به صورت یک دست و یک اندازه در بسته بندی های مختلف در بازار ارائه نمود و مشتری نهایی در طول زمان از یکنواختی خرید خود با برند مورد نظر مطمئن باشد. بسته بندی نهایی محصولات پس از عملیات سورتینگ به منظور جابجایی آسان و همچنین حفاظت از محصول نهایی سورتینگ شده صورت می گیرد. از ویژگی های بسته بندی مناسب میوه می‌توان به عدم استفاده از مواد مضر و شیمیایی در ساختار بسته بندی، سهولت فریز کردن و نگهداری در سردخانه، قابلیت حمل و نقل مناسب، پاسخگویی به نیازهای نهایی بازار به طوری که در وزن ها و بسته های مختلف که همه سلیقه ها را در بر بگیرد، اشاره کرد. </p>
          <p>بسته بندی عسل از دیگر فعالیت هایی است که قابلیت سرمایه گذاری در این شهرستان را دارد.  ویژگی مهم عسل آن است که این ماده طبیعی به دلیل نداشتن آب، به شرط دوری از رطوبت، در مدت طولانی فاسد نمی‌شود. این ماده فقط در صورتی ارزش غذایی خود را از دست می‌دهد که بیش از ۶۰ درجه، حرارت ببیند. البته برای حفظ قدرت ضد میکروبی عسل باید آن را در مکانی تاریک و یا در ظرف شیشه ای مات یا تیره خارج از یخچال نگه داشت. نگهداری عسل در ظروف فلزی برای مدت طولانی مناسب نیست. بدین منظور امروزه بسته بندی عسل به شکل های جذاب، خلاقانه و مناسب جهت نگهداری رو به افزایش است. بسته‌بندی های شکیل، باعث جذب بیشتر مشتری و همچنن تسهیل در حمل و نقل عسل می‌شود؛ لذا کار کردن در حوزه بسته بندی عسل تولیدی شهرستان علاوه بر سودآوری باعث ایجاد اشتغال پایدار می‌شود.</p>
          <p>احداث کشتارگاه دام و طیور از دیگر ظرفیت های شغلی این شهرستان است که با توجه به رونق دامداری و پرورش طیور در اطراف این شهرستان، از رونق خوبی برخوردار خواهد شد.  البته در حال حاضر کشتارگاه طیور وجود دارد اما کشتارگاه دام موجود نیست. کشتارگاه‌های صنعتی نقش مهمی در حفظ محیط زیست دارند؛ به دلیل اینکه ضایعات حاصل از کشتار دام نظیر خون و اجزای گوشتی غیر قابل مصرف، در محل تبدیل ضایعات به پودرگوشت که خوراک دام است، تبدیل می شود و علاوه بر قرار گرفتن مجدد در چرخه اقتصادی، از آلودگی محیط زیست نیز جلوگیری می‌کند. فاضلاب حاصل از کشتار در تصفیه خانه های مجهز تصفیه شده و پساب حاصله به مصرف کشاورزی می رسد. البته در کشتارگاه ها باید فضای مناسب برای کشتار دام سبک و سنگین به صورت همزمان وجود داشته باشد و همچنین باید آب مورد نیاز در زمان کشتار نیز تامین شده و تجهیزات و امکانات لازم برای رعایت مسائل بهداشتی و زیست محیطی فراهم شود.</p>
          <p>فرد سرمایه‌گذار با احداث کشتارگاه صنعتی و خرید طیور، سود اقتصادی خوبی کسب می‌کند. احداث کشتارگاه به لحاظ رعایت موارد بهداشتی، اشتغالزایی، کاهش آلودگی محیطی زیست، بالابردن ظرفیت تولید و... در مناطقی که تعداد طیور پرورشی زیادی دارد، لازم است.</p>
          <p>در شهرستان فردیس می توان در زمینه احداث واحد صنعتی تولید زغال غشرده نیز سرمایه گذاری کرد. یکی از پرمصرف ترین سوخت های جهان، زغال است، ولی آلودگی هوا و آلودگی محیطی را به همراه دارد. زغال ها اگر در مجاورت اکسیژن آتش بگیرند دود فراوانی تولید می کنند ولی اگر اکسیژن از آن ها حذف شود بدون هیچ دودی می سوزند. زغال فشرده بهترین و مناسب ترین جایگزین برای زغال های طبیعی هستند چون هم توجیه اقتصادی دارند و هم برای طبیعت و سلامتی انسان ها مضر نیستند. زغال فشرده برعکس زغال های طبیعی از چوب درخت به وجود نمی آید و همین امر باعث می شود که درختان کمتری قطع شود. با توجه به این که کسب و کار تولید زغال فشرده یک کسب و کار جدید و نو است، راه  برای کارآفرینان تازه کار به این حوزه باز است.</p>
          <p>تولید و بسته بندی کمپوست (افزودن کود شیمیایی به کود حیوانی) هم از کسب و کار های خوبی است که قابلیت سرمایه گذاری را دارد؛ زیرا در این شهرستان و شهرستان های اطراف کشاورزی و دامداری به حد مطلوبی انجام می‌شود؛ لذا مشکلی در خصوص تولید و بازار مصرف این مورد وجود ندارد. كود حيواني علاوه بر تأمين قسمتي از نياز غذایي محصول، ساختمان فيزيكي خاك را بهبود بخشيده تا ريشه محصول بهتر بتواند تنفس كند و فضاي بهتري را برای رشد و گسترش ريشه در اختيار داشته باشد؛ بنابراین طرفداران زیادی مخصوصا در بین باغداران دارد.</p>

        </Section>
        <Section title="صنعت" id="Industry" size="h3">
          <p>مشاغل صنعتی از مهم ترین عوامل توسعه اقتصادی کشور است. اما در کشور ما آن گونه که باید به آن توجه نشده است و لازم است از پتانسیل های هر شهرستان در این حوزه برای پیشرفت اقتصادی کشور استفاده شود. در شهرستان فردیس، تعدادی واحد صنعتی در زمینه های مختلف وجود دارد اما پتانسیل های شهرستان نشان دهنده این موضوع است که همچنان برای ایجاد واحدهای صنعتی جدید ظرفیت وجود دارد. نزدیک بودن فردیس به شهرستان های پرجمعیت نیز شرایط را برای ایجاد واحدهای صنعتی مهیاتر کرده است.</p>
          <p>تولید انواع پوشاک  از جمله فعالیت هایی است که قابلیت انجام در این شهرستان را دارد.  لازم به ذکر است که در شهرستان فردیس فروشگاه های پوشاک زیادی وجود دارند که تولید و عرضه به این فروشگاه ها درآمدزایی خوبی را به همراه دارد.</p>
          <p>احداث واحدی صنعتی جهت تولید قطعات خودرو علی رغم نیاز به سرمایه زیاد، سوددهی بسیار خوبی دارد و می تواند نیاز به واردات در این زمینه را نیز تا حدودی مرتفع نماید.  البته در حال حاضر نیز کارخانه تولید قطعات خودرو وجود دارد و باید توانایی رقابت با کارخانه موجود را نیز در نظر گرفت. </p>
          <p>احداث واحد یا واحدهای وابسته به صنایع دارویی مانند واحد تولید الکل، از دیگر فعالیت هایی است که با توجه به وجود صنایع دارویی در این شهرستان قابلیت انجام دارد. </p>
          <p>تولید لوازم تحریر، ظروف پلاستیکی، ظروف یکبارمصرف، ظروف شیشه ای، چینی و کریستال از دیگر پیشنهادات شغلی در این حوزه هستند که در صورت بازاریابی مناسب، سود اقتصادی خوبی خواهند داشت.</p>
          <p>فعالیت در زمینه تولید چوب (چوب مورد نیاز برای تولید انواع صنایع چوبی)، مصنوعات چوبی همچون انواع مبلمان، درب و پنجره، میز و صندلی و جعبه کادوئی و مصنوعات آلومینیومی مانند درب و پنجر از جمله مواردی هستند که قابلیت سرمایه گذاری دارند.  البته تولید جعبه کادوئی در اولویت های بعدی مزیت های شغلی این حوزه قرار می گیرد.</p>
          <p>بررسی های انجام شده نشان می دهد، احداث واحدهای صنعتی جهت انجام فرآیند چاپ روی لباس و همچنین مهرسازی در این شهرستان مزیت اقتصادی دارد.  صنعت مهرسازی و ساخت مهر از قدیم وجود داشته است. مهر نشان دهنده معتبر بودن یک نامه، فاکتور، قرارداد، دستور و... می شود. در این صنعت طراحی مهر اهمیت ویژه ای دارد. بررسی های انجام شده نشان می دهد مهرسازی در اولویت های بعدی زمیت هیا شغلی این حوزه قرار می گیرد.</p>
          <p>احداث واحدی جهت تولید آلات موسیقی از جمله فعالیت هایی است که در صورت تامین بازارفروش از صرفه اقتصادی خوبی برخوردار است. </p>
          <p>صنایع فعال شهرستان فردیس عبارتند از: واحدهای تولید قطعات خودرو، دارو، مواد شیمیایی، تجهیزات پزشکی، مواد شوینده و بهداشتی، دستگاه تهویه هوا، دستگاه های الکترونیکی و قطعات الکترونیکی، ادوات کشاورزی، کارتن، سبد، مبل، ام دی اف، کابینت، لوکوموتیو و واگن(کارخانه مپنا)، ظروف چینی وبلور، میز ال سی دی، قطعات ساختمان، پلاستیک، گاز، قالب سازی و فلزکاری و نیروگاه تولید برق. </p>
          <p>تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با یکدیگر تفاوت هایی دارد. مشاغل خدماتی از جمله مشاغلی است که عده زیادی از مردم شهرستان فردیس را به خود مشغول ساخته و همچنان ظرفیت برای توسعه آن ها وجود دارد.</p>
          <p>ایجاد شرکت تهیه و توزیع مصالح ساختمانی، خدمات کامپیوتر، خدمات خودرو، خدمات چاپ، حسابداری، نصب دوربین مداربسته، فیلم برداری، عکاسی و صدابرداری از جمله مشاغل خدماتی هستند که انجام آن ها در این شهرستان، مزیت اقتصادی دارد.</p>
          <p>احداث رستوران از دیگر پیشنهادات شغلی در این شهرستان است که می تواند از درآمدزایی بالایی برخوردار باشد.</p>
          <p>خدمات ساختمانی، تعمیر لوازم منزل، کلیدسازی، خیاطی، طراحی لباس زنانه، مرمت فرش، آرایشگری، خطاطی، نقاشی و ساخت نرم افزار از دیگر فعالیت هایی هستند که می توان در حوزه مشاغل خدماتی این شهرستان انجام داد.</p>
          <p>راه اندازی سوپرمارکت و فعالیت در زمینه فروش محصولات مختلف امروزه از درآمدزایی خوبی در شهرستان های پرجمعیت برخوردار است. بنابراین سرمایه گذاری در این زمینه سودآوری خوبی خواهد داشت.</p>
          <p>پژوهشگری و نشریه نویسی از دیگر مشاغل خدماتی هستند که می توان نسبت به انجام آن ها در این شهرستان اقدام کرد.</p>

        </Section>
        <Section title="خدمات" id="Services" size="h3">
          <p>تنوع در حوزه مشاغل خدماتی بسیار زیاد است و حرفه های زیادی را در برمی گیرد که میزان سودآوری حرفه ها با توجه به نیاز و ظرفیت منطقه با یکدیگر تفاوت هایی دارد. مشاغل خدماتی از جمله مشاغلی است که عده زیادی از مردم شهرستان فردیس را به خود مشغول ساخته و همچنان ظرفیت برای توسعه آن ها وجود دارد.</p>
          <p>ایجاد شرکت تهیه و توزیع مصالح ساختمانی، خدمات کامپیوتر، خدمات خودرو، خدمات چاپ، حسابداری، نصب دوربین مداربسته، فیلم برداری، عکاسی و صدابرداری از جمله مشاغل خدماتی هستند که انجام آن ها در این شهرستان، مزیت اقتصادی دارد.</p>
          <p>احداث رستوران از دیگر پیشنهادات شغلی در این شهرستان است که می تواند از درآمدزایی بالایی برخوردار باشد.</p>
          <p>خدمات ساختمانی، تعمیر لوازم منزل، کلیدسازی، خیاطی، طراحی لباس زنانه، مرمت فرش، آرایشگری، خطاطی، نقاشی و ساخت نرم افزار از دیگر فعالیت هایی هستند که می توان در حوزه مشاغل خدماتی این شهرستان انجام داد.</p>
          <p>راه اندازی سوپرمارکت و فعالیت در زمینه فروش محصولات مختلف امروزه از درآمدزایی خوبی در شهرستان های پرجمعیت برخوردار است. بنابراین سرمایه گذاری در این زمینه سودآوری خوبی خواهد داشت.</p>
          <p>پژوهشگری و نشریه نویسی از دیگر مشاغل خدماتی هستند که می توان نسبت به انجام آن ها در این شهرستان اقدام کرد.</p>
        </Section>
        <Section title="صنایع دستی" id="Handicrafts" size="h3">
          <p>صنايع دستي به آن گروه از صنايعي گفته مي شود كه مهارت، ذوق و بينش انسان در آن نقش اساسي دارد و يا اينكه تمام يا بخش اعظم مراحل ساخت فراورده هاي آن با دست انجام گرفته و در چارچوب فرهنگ و بينش هر منطقه و با ديدگاه هاي قومي ساخته و پرداخته مي شود. صنايع دستي بازتابي از تاريخ تمدن هر ملت و قومي است و مي تواند انتشار مؤثري براي فرهنگ و سنن مناطق مختلف باشد. </p>
          <p>در شهرستان فردیس انواعی از صنایع دستی تولید می شوند که می توان در رابطه با توسعه آن ها سرمایه گذاری کرد.</p>
          <p>قالی بافی، تولید تابلوفرش، گلیم بافی، نمدمالی، جاجیم بافی، تولید لباس های بافتنی و قلاب بافی از جمله صنایع دستی این شهرستان هستند که می توان در زمینه گسترش آن ها سرمایه گذاری کرد. همچنین تولید گبه، قالیچه و ترمه از مزیت اقتصادی برخوردار هستند.  البته بررسی های انجام شده نشان می دهد قالی بافی، بافت قالیچه و تولید تابلوفرش از مزیت بالاتری برخوردار هستند.</p>
          <p>قالی بافی از مشاغل خانگی پردرآمدی است که تسهیلات خوبی به آن تعلق می گیرد. بسیاری از زنان خانه دار این هنر را یک فرصت شغلی مناسب می دانند چون در کنار کارهای روزمره می توانند به این کار بپردازند و درآمد خوبی کسب کنند. از آن جایی که قالی انواع مختلفی دارد می توان با آموختن دانش آن، محصولات متنوع و متناسب با ذوق و سلیقه افراد تولید و به بازار عرضه کرد. همچنین با تولید فرش با کیفیت می توان به صادرات در این زمینه فکر کرد. این کسب و کار  را می توان در فضای کوچک و با سرمایه اولیه کم راه انداخت و با فروش محصول و افزایش مشتری، این کار را گسترش داد و زمینه اشتغال بسیاری از جوانان را فراهم کرد.</p>
          <p>چرم دوزی، منجوق دوزی، کیف دوزی، خاتم کاری، منبت کاری، معرق کاری، طلاسازی، حکاکی روی فلز، حکاکی روی سنگ و میناکاری از دیگر فعالیت هایی هستند که در این شهرستان انجام می شوند و می توان نسبت به توسعه آن ها اقدام کرد. همچنین فعالیت هایی همچون قلم زنی، تولید جعبه کاغذی، ملیله سازی و ملیله دوزی نیز از مزیت خوبی برخوردار هستند.  لازم به ذکر است حکاکی روی سنگ و قلم زنی در اولویت های بعدی مزیت های شغلی این حوزه قرار می گیرند.  </p>
          <p>هنر ملیله سازی، هنر کار با فلزاتی مثل طلا، نقره و مس است که آن‌ها را با دقت و ظرافت به صورت مفتول‌های باریک در می‌آورند و با بهره گیری ازتصویر‌های سنتی و طرح‌های اسلیمی به یکدیگر پیوند می‌دهند.</p>
          <p>ملیله دوزی یکی از رودوزی های سنتی و زیبای ایران است. این دوخت زیبا به وسیله تارهای نازک و توخالی از جنس طلا یا نقره و گاهی برنج انجام می شود. </p>
          <p>تولید عروسک، گل سازی، سفالگری، آبگینه (نقاشی روی سفال و شیشه)، تولید زیورآلات سنتی از دیگر صنایع دستی این شهرستان هستند که قابلیت توسعه دارند. همچنین شرایط برای فعالیت در زمینه لعاب کاری، همجوشی شیشه و ساخت مجسمه شیشه ای، ساخت مجسمه چوبی، سنگی و مسی در شهرستان فردیس فراهم است.  طبق بررسی های انجام شده ساخت مجسمه های سنگی، چوبی و مسی مزیت پایین تری نسبت به سایرین دارند.</p>
          <p>تکنیک فیوزینگ گلاس یا همجوشی شیشه به ساخت، تهیه و اتصال قطعات شیشه های رنگی یا بی رنگ، بدون استفاده از چسب یا واسطه ی دیگری است. </p>
        </Section>
        <Section title="باغداری" id="gardening" size="h3">
          <p>باغداری یکی از حوزه‌های شغلی در برخی از مناطق شهرستان فردیس است. تولید اشتغال توسط باغداری بسیار زیاد می‌باشد و به اقتصاد شهرستان و فضای کسب و کار رونق می‌بخشد. کشاورزی و ازجمله باغبانی در توسعه ملی و افزایش رفاه عمومی، فقرزدایی، تنوع بخشیدن و پایدار کردن الگوی توسعه شهری، توزیع درآمد و عدالت اجتماعی موثر است.</p>
          <p>در یک نگاه کلی می توان گفت نقش کشاورزی و به خصوص باغداری در کاهش فقر بسیار چشمگیر بوده و در برقراری الگوی صحیح توسعه شهری مؤثر است و در صورت بی توجهی به این بخش، توسعه شهرنشینی، الگوی متمرکز و ناسالمی به خود می‌گیرد که پیدایش شهرهای بزرگ با هزینه زندگی بسیار بالا مثال بارز آن است.</p>
          <p>در شهرستان فردیس انواعی از محصولات باغی تولید می شوند که تا حدودی می توان نسبت به توسعه تولید آن ها اقدام کرد. البته باید در نظر داشت پیشنهادات مطرح شده در رابطه با توسعه محصولات باغی در صورتی قابل اجرا هستند که زمین کافی برای این کار وجود داشته باشد.</p>
          <p>احداث گلخانه از جمله ظرفیت های شغلی شهرستان فردیس است. در حال حاضر چند هکتار گلخانه در این شهرستان وجود دارد که به پرورش گل، گیاه و نهال های زینتی می پردازد. علاوه بر قابلیت توسعه تولید موارد نام برده شده، می توان نسبت به تولید محصولاتی همچون خیار، گوجه، بادمجان، توت فرنگی، سبزیجات، نشاء و گیاهان دارویی به صورت گلخانه ای نیز اقدام کرد. لازم به ذکر است احداث گلخانه گل، گیاه و نهال زینتی و گیاهان دارویی در اولویت های بعدی مزیت های شغلی این حوزه قرار می گیرند.</p>
          <p>میوه های هسته داری همچون آلبالو، گیلاس، هلو، آلو، زردآلو، گوجه سبز، شفت آلو و شلیل نیز در این شهرستان تولید می شوند که فعالیت در زمینه توسعه تولید آن ها سوددهی خوبی خواهد داشت. این میوه ها علاوه بر اینکه به عنوان تازه خوری با استقبال خوبی روبه رو هستند، بلکه در صنایع غذایی مختلف نیز کاربرد دارند؛ بنابراین از بازارفروش خوبی برخوردار بوده و فعالیت در زمینه تولید آن ها صرفه اقتصادی دارد.</p>
          <p>سیب، گلابی و به از دیگر محصولات باغی این شهرستان هستند که قابلیت سرمایه گذاری در رابطه با توسعه تولید آن ها وجود دارد. البته به نظر می رسد کاشت به مزیت پایین تری داشته باشد. سیب از میوه‌های مهمی است که می توان برای ماه‌ها انبار نمود؛ درحالیکه همچنان ارزش غذایی خود را حفظ می کند. توسعه باغات سیب در این شهرستان مزیت اقتصادی دارد. باید توجه داشت سیب معمولا آب نسبتا زیادی مصرف می کند که می توان با روش آبیاری قطره ای در شهرستان فردیس، در مصرف آب صرفه جویی کرد. البته مقدار آب مصرفی بر اساس کیفیت خاک منطقه و نوع پایه سیب و شرایط آب و هوایی متغیر است.</p>
          <p>گلابی انواع مختلفی دارد و بومی شرق اروپا و غرب آسیا است. نگهداری گلابی کار چندان سختی نیست به همین دلیل خیلی از کشاورزان خانگی به کاشت و نگهداری آن تمایل دارند. گلابی با مقدار کمی مراقبت هم رشد می کند و از این جهت به درخت سیب شباهت دارد. گل های گلابی همزمان با برگ هایش می رویند و میوه آن شیرین آبدار است. گلابی حاوی ویتامین های E، C  و کلسیم است و از آن برای دفع سموم بدن استفاده می کنند. نیاز به آبیاری زیادی برای درخت گلابی نیست. آبیاری بیش از حد سبب ریزش برگ های آن می شود و خشکی نیز گیاه را پژمرده می کند. در طول دوران رشد 2 نوبت آبیاری در هفته کافیست.</p>
          <p>درخت به نیز یکی از پرطرفدار ترین درختان میوه محسوب می شود. میوه درخت به، به دلیل متفاوت بودن طعم آن طرفداران خاص خود را دارد. درخت به از خانواده درختان سیب است؛ اما نسبت به درخت سیب مقاومت کمتری نسبت به سرمای زیاد دارد، ، این درخت بعد از ۴ الی ۵ سال از کاشت، شروع به میوه دهی می کند. بنابراین با توجه به اینکه بازگشت سرمایه در احداث و بهره وری از باغات به، طولانی است، لازم است باغداران برای کسب سود، مقداری صبور باشند. </p>
          <p>انگور از دیگر محصولات باغی شهرستان فردیس است که با شرایط اقلیمی این شهرستان سازگاری خوبی دارد و سرمایه گذاری در زمینه گسترش تولید آن مقرون به صرفه خواهد بود. انگور از مهم‌ترین محصولات باغی است که هم به لحاظ سطح زیر کشت و هم ارزش اقتصادی و تغذیه‌ای، موردتوجه کشاورزان و کارآفرینان است. زیبایی، تنوع رنگ، طعم و مزه، ارزش غذایی، خواص دارویی و وجود فرآورده‌‌های تبدیلی چون کشمش، شیره انگور، روغن هسته انگور، کنسانتره، آب انگور، سرکه، آبغوره، دارو‌های تقویتی و مواد آرایشی ‌بهداشتی، همچنین توصیه‌‌های دینی و مذهبی، انگور را به یک میوه استثنایی و بی‌نظیر تبدیل کرده است؛ بنابراین در بین مردم طرفداران زیادی دارد و بازار مصرف این محصول به صورت محصولات فراوری شده و تازه خوری فراهم است. پرورش انگور علاوه بر اشتغال‌زایی، یکی از محصولات ارزآور کشور است و می‌تواند در توسعه صادرات غیرنفتی در بخش کشاورزی، سهم بسزایی داشته باشد.</p>
          <p>پرورش قارچ از جمله فعالیت هایی است که به صورت خیلی محدود در این شهرستان انجام می شود اما ظرفیت لازم برای توسعه این فعالیت وجود دارد. میزان مصرف قارچ در سال های اخیر رشد خوبی داشته و سرانه مصرف بالا رفته است. مشتری داشتن این محصول از یک سو و غنی از پروتئین و ویتامین بودن آن از سوی دیگر، باعث شده که جایگزین مناسبی برای گوشت باشد. پرورش قارچ از شغل هایی است که می توان با سرمایه اولیه کم و محیط کوچک شروع کرد. یک دوره کامل پرورش قارچ 60 روز طول می کشد که قابلیت کاهش به 35 روز را دارد.</p>
          <p>شهرستان فردیس نهالستان دارد و می توان نسبت به توسعه آن اقدام کرد. در صورتی که امکان فعالیت به صورت گسترده وجود داشته باشد ( یعنی اگر زمین کافی موجود باشد) می توان خارج از شهرستان نیز بازاریابی انجام داد.</p>
          <p>در شهرستان فردیس توت درختی نیز تولید می شود که با توجه به بازدهی مناسب این محصول می توان نسبت به افزایش تولید آن اقدام کرد. توت این میوه بدون پوست، از خانواده گزنه‌ها و دارای فواید زیادی از جمله پاک‌کننده خون، خون ساز، ضدسرفه است که به صورت تازه و خشک استفاده می‌شود. میوه خشک شده توت با این که شیرین است اما خوردن آن برای کسانی که قند دارند ضرر ندارد زیرا قند آن درست معکوس قند انگور است. هم اکنون توت خشک در بازار تهران بسته به کیفیت با قیمت بالایی به فروش می رسد و  قیمت بالای آن مطمئنا ارزش کار و سرمایه‌گذاری دارد. </p>
        </Section>
        <Section title="شیلات" id="Fisheries" size="h3">
          <p>پرورش ماهیان زینتی از جمله فعالیت هایی است که در حوزه شیلات این شهرستان انجام می شود؛ طبق بررسی های انجام شده پرورش این نوع ماهی را می توان گسترش داد و با توجه به نزدیکی فردیس به بازارهای بزرگ، سرمایه گذاری در این زمینه سودآوری بالایی خواهد داشت. شاید سال‌ها قبل نگهداری ماهیان زینتی، موضوع چندان شایعی نبود و تنها عده‌ی معدودی در خانه‌های خود، آكواريوم  و ماهی زینتی نگهداری می‌کردند؛ اما در سال‌های اخیر، با توجه به رواج آپارتمان‌نشینی و دور افتادن انسان از طبیعت، شرایط به‌گونه‌ای رقم خورده است که بازار ماهیان زینتی رونق گرفته و زمینه‌ساز ایجاد مشاغل مختلف شده است. به‌طوری‌که امروزه شاهد آن هستیم در بسیاری از شهرها، چندین مغازه به خرید و فروش این آبزیان مشغول هستند. پرورش ماهیان زینتی نیاز به آب کمی دارد و می‌توان از آب‌های شهری برای تولید آنها استفاده کرد.</p>

        </Section>
        <Section size="h3" id="livestock" title="دامداری">
          <p>زنبورداری از جمله فعالیت هایی است که در بخشی از شهرستان فردیس انجام می شود و می توان نسبت به توسعه آن اقدام کرد. پرورش زنبور اگر همراه با رعایت اصول علمی صورت پذیرد، می تواند پیشه‌ای سودآور باشد. زندگی این حشرات به سبک کلنی باعث شده تا پرورش دهندگان زنبور از اشتغالی پایدار بهره مند شوند چراکه میزان بالای زاد و ولد زنبورها باعث سودآوری بیشتر برای پرورش دهندگان خواهد شد. بر خلاف افکار غالب عمومی که تصور می کنند مهمترین فایده زنبورعسل، تولیدعسل  و سایر محصولات و فراورده های مرتبط با شهد و عسل است، در واقع بالغ بر 90 درصد فواید زنبورعسل مربوط فعالیت گرده افشانی است. عدم فعالیت زنبورها و دیگر حشراتی که گرده افشانی را انجام می دهند باعث عدم باروری و نابودی تدریجی گیاهان و درختانی که برای گرده افشانی به این آنها وابسته اند می شود. افراد با تجربه معمولا در کنار پرورش زنبور عسل به کشاورزی و تولید محصولات زراعی می پردازند و با یک تیر دو نشان می زنند، زیرا با ادغام این 2 فعالیت علاوه بر تامین مواد غذایی برای زنبورها به دلیل کیفیت در گرده افشانی، به کشت و زراعتی با کیفیت و محصولی بی نظیر نیز دست خواهند یافت.</p>
          <p>در شهرستان فردیس زالو پرورش نمی یابد اما امکان انجام این فعالیت وجود دارد.  زالوها در آب‌‌های شیرین زندگی می‌‌کنند و به تکان‌‌های موجود در آب، لمس شدن، گرما، صدا و انواع مختلفی از مواد شیمیایی حساس هستند. ساختار بدن آن‌‌ها به‌‌صورت بند بند است و هر بند شامل ارگان داخلی خاصی مانند بخش مغزی، توده عصبی و اندام تولیدمثلی است. اندام مکنده برای خزیدن و تغذیه استفاده می‌‌شود. زالوها معمولاً بخش‌‌های گرم میزبان خود را گاز می‌‌گیرند و با انقباض‌‌های متناوبی که انجام می‌‌دهند، خون میزبان خود را می‌‌مکند. پروسه تغذیه آن‌ها معمولاً 40 دقیقه به طول می‌‌انجامد و در این مدت در حدود 5 تا 15 میلی‌‌لیتر خون از میزبان خود می‌مکند. از ویژگی‌های مثبت برای پرداختن به این کسب ‌و کار می‌توان به امکان اجرای طرح با تجهیزات ساده و کم‌هزینه و در محیط‌های کوچک، عدم نیاز به استخدام نیروی کار و امکان گسترش کسب و کار به دلیل ضریب تکثیر بالا در دوره‌های بعدی اشاره کرد.</p>
          <p>همچنین در شهرستان فردیس فعالیت هایی در زمینه پرورش دام های سنگین مانند گاو و دام های سبک انجام شده است اما بررسی های انجام شده نشان می دهد ظرفیتی برای توسعه این فعالیت ها وجود ندارد (فضایی برای این کار موجود نیست). </p>
        </Section>
        <Section title="طیور" id="Birds" size="h3">
          <p>در شهرستان فردیس پرورش طیور به میزان بسیار محدودی انجام می شود و طبق بررسی های انجام شده و با درنظر گرفتن بافت شهری شهرستان فردیس، ظرفیت برای احداث واحد پرورش طیور وجود ندارد. </p>
        </Section>
        

        <Section title="زراعت" id="agriculture" size="h3">
          <p>محصولاتی همچون گندم، جو، حبوبات، دانه های روغنی و گیاهان علوفه ای در مزارع موجود در شهرستان فردیس کشت می شوند اما طبق بررسی های انجام شده و به دلیل عدم وجود زمین کافی، ظرفیت لازم برای توسعه کشت این محصولات وجود ندارد.  زمین های موجود عمدتا تغییر کاربری داده اند و به مکان هایی همچون باغ تالار تبدیل گشته اند.  </p>
        </Section>


        

        
      </CityContent>
    </div>
  );
}
