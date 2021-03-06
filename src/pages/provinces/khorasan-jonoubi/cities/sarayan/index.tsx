import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-10"].cities["IR-1009"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        livestock: "دامداری",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        agriculture: "زراعت",
        gardening: "باغداری",
        birds: "طیور",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        industry: "صنعت",
        services: "خدمات",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان سرایان در شمال غربی استان خراسان جنوبی واقع است. شهرستان
            سرایان از غرب به شهرستان فردوس و بخش سده شهرستان قائنات، از شرق به
            بخش کاخک شهرستان گناباد، از جنوب و جنوب شرق به بخش خوسف شهرستان
            بیرجند، از جنوب غربی به بخش دیهوک شهرستان طبس محدود می‌شود. آب و
            هوای این شهرستان نسبتا معتدل و دارای زمستان‌های سرد و تابستان‌های
            خشک است. این شهرستان تا اردیبهشت ۱۳۸۳، جزء بخش‌های سه‌گانه شهرستان
            فردوس بود که در این سال به صورت شهرستان مستقل درآمد و به استان
            خراسان جنوبی ملحق شد. شهر سرایان، مرکز شهرستان سرایان، در ۵۸ درجه و
            ۳۱ دقیقه طول شرقی و ۳۳ درجه و۵۱ دقیقه عرض شمالی، در ۱۶۰ کیلومتری
            مرکز استان (شهر بیرجند) و در دشتی هموار در حاشیه کویر و در دامنه
            جنوب غربی رشته‌کوه زابری معروف به شتران قراردارد. جمعیت شهرستان
            سرایان طبق سرشماری سال 1395 حدود 33312نفر گزارش شده‌است . شکل زیر
            موقعیت شهرستان سرایان را نشان می‌دهد.
          </p>
          <p>
            در این شهرستان دو منطقه وجود دارد، منطقه ی کویری که شامل سه قلعه است
            و از نظر میزان آب‌های زیرزمینی و همچنین کشاورزی وضعیت خوبی ندارد و
            منطقه سردسیری که شامل آیت است و از لحاظ منابع آب و کشاورزی وضعیت
            خوبی دارد.
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
            دامداری از مشاغل اصلی مردم شهرستان سرایان است. بررسی‌های انجام‌شده
            نشان می‌دهد که ظرفیت خوبی برای سرمایه‌گذاری در این حوزه وجود دارد.
            دامداری در این شهرستان به صورت پرورش دام سبک و سنگین در حال انجام
            است. البته در حال حاضر پرورش دام سبک نسبت به دام سنگین بیشتر صورت
            می‌گيرد؛ اما در زمینه سرمایه‌گذاری برای پرورش دام سنگین و سبک تفاوتی
            وجود ندارد و هردو مورد اولویت اول را در حوزه دامداری به خود اختصاص
            می‌دهند. در کنار پرورش گوسفند، بز گوشتی نیز پرورش داده می‌شود که در
            اولویت آخر مزیت‌های شغلی حوزه دامداری قرار می‌گیرد.
          </p>
          <p>
            شرایط آب‌وهوایی شهرستان به‌گونه‌ای است که می‌توان در این منطقه، شتر
            پرورش داد. از بررسی داده‌ها و اطلاعات می‌توان نتیجه گرفت که همچنان
            زمینه برای پرورش شتر وجود دارد.
          </p>
          <p>
            زنبورداری نیز از مشاغلی است که در شهرستان انجام می‌شود و قابلیت
            توسعه دارد. زنبورداری و شترداری در اولویت بعد از پرورش گاو و گوسفند
            قرار می‌گیرند.{" "}
          </p>
          <p>
            در سطح شهرستان سرایان به صورت پراکنده درختان توت وجود دارند؛ در
            نتیجه پرورش کرم ابریشم قابلیت انجام دارد. در حال حاضر نیز این شغل در
            روستاهای کوهپایه‌ای درحال انجام است و می‌توان برای توسعه آن
            سرمایه‌گذاری کرد.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            صنایع تکمیلی و تبدیلی از صنایعی است که جای خالی آن در شهرستان احساس
            می‌شود. وجود محصولاتی مانند زعفران و پسته که به میزان زیادی کشت
            می‌شوند شرایط را برای ایجاد صنایع تبدیلی و تکمیلی فراهم کرده‌است.
            بسته‌بندی زعفران و بسته‌بندی پسته از صنایعی است که ایجاد آن‌ها
            سودآوری بسیار خوبی داشته و از فروش فله‌ای آن‌ها جلوگیری می‌کند.
          </p>
          <p>
            از آنجایی که میوه‌های متنوعی در شهرستان تولید می‌شود؛ اما سردخانه‌ای
            برای نگهداری آن‌ها وجود ندارد، نیاز به احداث آن احساس می‌شود.
          </p>
          <p>
            انجام گسترده دامداری نیز قابلیت تولید کمپوست (افزودن مقدار مشخصی از
            کودهای شیمیایی به کود حیوانی) را فراهم کرده‌است و با توجه به اینکه
            کشاورزی جایگاه خوبی در شهرستان دارد، بازار مصرف مواد تولیدی وجود
            دارد.
          </p>
          <p>
            بعد از مواردی که تا اینجا گفته‌شد صنایع تبدیلی و تکمیلی دیگری نیز
            اولویت دارند. برای مثال زنبورداری از مشاغلی است که در سطح خوبی انجام
            می‌شود اما بسته‌بندی عسل به صورت سنتی صورت می‌گیرد و بسته‌بندی صنعتی
            وجود ندارد. درنتیجه بسته‌بندی صنعتی عسل و همچنین تهیه موم و کندوی
            زنبورعسل از پیشنهادات شغلی در حوزه صنایع تبدیلی و تکمیلی است و می
            تواند موجب رونق زنبورداری نیز بشود.
          </p>
          <p>
            وجود دام‌های فراوان در شهرستان، قابلیت انجام فرآوری برروی پوست
            دام‌ها را به وجود آورده‌است. منظور از فرآوری پوست دام، تولید چرم از
            پوست گاو و تولید نخ از پشم گوسفند است. در کنار این موارد پوست شتر
            نیز قابلیت فرآوری دارد. روغن کوهان شتر که خاصیت درمانی دارد نیز از
            فرآورده‌های دیگری است که می‌توان در شهرستان تولید کرد. لازم به ذکر
            است این مشاغل خیلی زود اشباع شده و بازارمصرف محدودی دارند؛ بنابراین
            برای راه‌اندازی این کسب‌وکارها حتما بازارمصرف، تامین مواداولیه و
            نیاز منطقه بررسی شود.
          </p>
          <p>
            باتوجه به کشت انبوه گندم، جو و زیره، بسته بندی غلات و زیره در
            شهرستان جواب می‌دهد.
          </p>
          <p>
            احداث کشتارگاه دام و طیور هم از مزیت‌های شغلی منطقه است و سودآوری
            خوبی دارد؛ اما باید توجه داشت که این مشاغل به زودی اشباع شده و
            قابلیت احداث بیش از یک مورد نیازمند بررسی بیشتر است.
          </p>
          <p>
            در ادامه می‌توان مواردی مانند بسته‌بندی گوشت قرمز، گوشت شتر، شترمرغ،
            مرغ، بلدرچین، بوقلمون، کبک، ماهی و بسته‌بندی تخم بلدرچین را به عنوان
            کسب‌وکارهای قابل راه‌اندازی پیشنهاد داد. بسته‌بندی گوشت مرغ در
            اولویت بعد از بسته‌بندی گوشت قرمز و شتر قرار می‌گیرد. بسته‌بندی گوشت
            بلدرچین، بوقلمون، کبک، شترمرغ، ماهی و تخم بلدرچین در مزیت‌های بعدی،
            اولویت‌بندی می‌شوند. فرآوری پر و پوست شترمرغ و تولید روغن شترمرغ نیز
            از مواردی است که قابلیت توسعه دارد. لازمه راه‌اندازی کسب‌وکارهای
            اشاره‌شده، افزایش واحدهای پرورش بلدرچین، شترمرغ، بوقلمون، کبک و ماهی
            است.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            وجود دامداری و کشاورزی به صورت گسترده، زمینه را برای ایجاد واحدهای
            فرآوری فراهم کرده‌است. درواقع صنایع غذایی هم مانند صنایع تبدیلی و
            تکمیلی جای کار بسیاری دارد. با توجه به کشت زیاد زعفران و پسته،
            فرآوری زعفران مانند تولید پودر و عصاره آن و فرآوری پسته مانند
            شورکردن آن از کسب‌وکارهای قابل راه‌اندازی هستند که در اولویت اول
            مشاغل حوزه صنایع غذایی قرار می‌گیرند.
          </p>
          <p>
            از آنجایی که شهرستان، تولید گوشت خوبی هم دارد تولید سوسیس و کالباس
            در این حوزه پیشنهاد می‌شود که مزیتی مشابه با موارد گفته شده دارد.
          </p>
          <p>
            انار از محصولاتی است که کشت خوبی را به خود اختصاص داده‌است اما
            فرآوری خاصی روی آن صورت نمی‌گیرد. تولید رب انار از مواردی است که
            قابلیت انجام دارد.
          </p>
          <p>
            کشت گسترده گندم نیز امکان تولید فرآورده‌های آن مانند تولید آرد، نان،
            شیرینی و رشته آشی و پلویی را ایجاد کرده است. فرآورده‌های دیگر مانند
            تهیه آرد سوخاری، گندم برشته، پفک گندمی، نان بستنی، نشاسته و کلوچه و
            بیسکوییت هم قابلیت سرمایه‌گذاری دارند اما در اولویت‌های پایین‌تر
            قرار می‌گیرند.{" "}
          </p>
          <p>
            باتوجه به تولید میوه‌های متنوع، مشاغلی مانند تولید آبمیوه، چیپس
            میوه، میوه خشک، لواشک، ترشیجات، مربا، کنسانتره، کمپوت و شهد امکان
            راه‌اندازی و سرمایه‌گذاری دارند. روغن‌کشی از دانه‌های روغنی، فرآوری
            زرشک، تولید لبنیات، ژلاتین و شیر خشک نیز مانند موارد گفته شده از
            اولویت‌های آخر کسب‌وکار پیشنهادی در حوزه صنایع غذایی هستند. در خصوص
            اینکه تولید لبنیات دارای مزیت کمی است باید گفت که در شهرستان سرایان
            کارخانه فرآوری شیر وجود دارد که مقداری از رونق آن کم شده و بهتر است
            در خصوص توسعه همین کارخانه گامی برداشته شود. اما بازهم از مزیت ایجاد
            واحدهای تولید لبنیات نمی‌توان چشم‌پوشی کرد و به صورت کارگاه‌های سنتی
            و نیمه‌صنعتی می‌توان کارکرد. تولید رب گوجه و خیارشور نيز به صورت
            خانگی قابل انجام است.
          </p>
          <p>
            در طی چند سال اخیر در زمینه کشت گیاهان دارویی فعالیت خوبی صورت گرفته
            است. اما به دلیل کم‌بودن واحدهای فرآوری و مشکل در انتقال آن‌ها به
            خارج از شهرستان برای فرآوری(در انتقال گیاهان دارویی مردم اذیت می
            شدند.)، رغبت برای کشت این محصولات کم شده‌است. ایجاد واحدهای فرآوری
            برای گیاهان دارویی به کشت مجدد آن توسط مردم کمک خواهدکرد.
          </p>
          <p>
            با توجه به تولید انگور و کنجد در شهرستان می‌توان روی فرآوری این
            محصولات، درصورت افزایش کشت، مانند تولید شیره و سرکه انگور،کشمش و
            ارده کنجد فعالیت کرد. همچنین تولید خشکبار نیز از مشاغلی است که
            سودآوری بالایی داشته و در شهرستان سرایان نیز قابلیت انجام دارد. وجود
            پسته،گردو و انگور(برای تولید کشمش) زمینه را برای تولید خشکبار فراهم
            کرده‌است.{" "}
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            کشاورزی در حال حاضر از مشاغل اصلی مردم شهرستان سرایان بوده که به
            صورت باغداری و زراعت در حال انجام است. از آنجایی که محصولات عمده و
            دارای مزیت شهرستان در هردو شاخه زراعت و باغداری قرار می‌گیرند و
            ظرفیت مشابهی در خصوص کشت محصولات باغی و زراعی وجود دارد، ترتیبی بین
            این دو شاخه از نظر اولویت نمی توان قائل شد وهردو شاخه در یک اولویت
            قرار می‌گیرند.{" "}
          </p>
          <p>
            زعفران در بین محصولات زراعی در اولویت اول قرار می‌گیرد و کشت و
            فرآوری آن‌ مزیت دارد.(در خصوص فرآوری آن قبلا توضیح داده‌شد). بعد از
            زعفران کشت محصولاتی مانند زیره،گندم و جو مزیت دارد. کشت زیره به دلیل
            مصرف کم آب، مورد استقبال مردم قرار گرفته است. گندم و جو هم جزء محصول
            استراتژیکی هستند که به صورت تضمینی توسط دولت خریداری می‌شود؛
            بنابراین کارکردن در خصوص کشت گندم و جو و زیره گزینه شغلی مناسبی است.
            بعد از محصولات گفته‌شده کشت محصولاتی مانند پنبه، کنجد، کلزا
            وحبوبات(نخود،عدس،لوبیا) دارای مزیت هستند. لازم به ذکراست پنبه در
            گذشته بسیار کشت می‌شده و شهرستان سرایان یکی از قطب‌های تولید پنبه در
            کشور بوده است. طبق بررسی‌های انجام‌شده از لحاظ کیفی، این شهرستان
            بهترین طول الیاف را در ایران دارد؛ اما متاسفانه به دلیل خشکسالی‌های
            رخ داده کشت پنبه مزیت کمی دارد.(پنبه محصولی است که آب زیادی مصرف می
            کند).
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            با توجه به شرایط شهرستان، کاشت پسته در میان محصولات باغی از مزیت
            بیشتری برخوردار است. کاشت پسته و فرآوری آن بسیار سودده خواهد بود.
            لازم به ذکر است زمان ثمردهی پسته بیش از 5 سال است.{" "}
          </p>
          <p>
            در سطح شهرستان، شرایط برای احداث گلخانه صیفی‌جات(مانند خیار و گوجه)
            کاملا فراهم‌بوده و از کسب‌وکارهای پیشنهادی است. لازم به ذکر است که
            بازار فروش برای محصولاتی مانند گوجه و خیار همیشه وجود دارد.
          </p>
          <p>
            بعد از محصولات فوق می‌توان به کاشت انار در شهرستان اشاره‌کرد. انار
            شهرستان سرایان کیفیت بسیار خوبی دارد؛ بنابراین احداث باغ انار دارای
            مزیت است.
          </p>
          <p>
            محصولات باغی دیگر مانند خربزه، هندوانه، انگور، زردآلو، گردو، بادام،
            هلو، گیلاس، آلو، آلبالو، زرشک، عناب، انجیر، گلابی و گیاهان دارویی
            همچون گل محمدی قابلیت کاشت در شهرستان را دارند.{" "}
          </p>
          <p>
            احداث گلخانه‌ی تولید سبزی، نهال، بذر صیفی‌جات و سبزیجات، گل و گیاه و
            آلوئه وراپیشنهاد داده می‌شود و ظرفیت خوبی در شهرستان برای احداث چنین
            گلخانه‌هایی وجود دارد. البته گیاه آلوئه‌ورا را در فضای باز نیز
            می‌توان کاشت{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور از شاخه‌های دیگری است که زمینه سرمایه‌گذاری و توسعه برای
            آن فراهم است. شترمرغ از طیوری است که پرورش آن در شهرستان سرایان
            بسیار خوب جواب می‌دهد و با نوسانات دمایی شهرستان، سازگاری بسیاری
            دارد. در حال حاضر 4 واحد پرورش شترمرغ وجود دارد ولی واحدهای دیگری هم
            می‌توان ایجاد کرد. پرورش بوقلمون نیز به صورت گسترده‌تر از زمان
            فعلی،قابل انجام است اما در اولویت بعد از پرورش شترمرغ قرار می‌گیرد.
          </p>
          <p>
            در پایان می‌توان به پرورش طیوری مانند مرغ گوشتی، مرغ تخم‌گذار،
            بلدرچین و کبک اشاره کرد. البته به گفته کارشناسان فعلا برای ایجاد
            واحدهای پرورش مرغ گوشتی و مرغ تخم‌گذار مجوزی داده نمی‌شود؛ اما
            درصورت صدور مجوز براي ایجاد مرغداری، می توان در این‌ حوزه اقدام کرد.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            قالی‌بافی یکی از صنایع دستی رایج در سرایان است. قالی‌بافی و توربافی
            بیشتر به‌صورت خانگی انجام می‌شود. به دلیل رواج قالی‌بافی بین مردم
            شهرستان خصوصا بانوان و مهارت داشتن در این زمینه، امکان توسعه و
            سرمایه گذاری وجود دارد. بعد از قالی‌بافی، زنگوله‌سازی (مورد استفاده
            در حوزه دامداری)، گلیم‌بافی، جاجیم‌بافی، پارچه‌بافی و تراش سنگ‌های
            زینتی نیز از کسب و کارهای قابل توسعه هستند. البته این مشاغل در حال
            حاضر نیز به صورت خانگی در حال انجام هستند.
          </p>
          <p>
            چاقوسازی، سبدسازی،چادرشب‌بافی، غده‌بافی، حوله‌بافی و نخ‌ریسی از
            صنایع دستی تولیدی مردم شهرستان هستند که در اولویت‌های بعدی
            راه‌اندازی قرار می‌گیرند.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی در شهرستان انجام می‌شود و ماهیانی مانند کپور و قزل
            آلا(البته ماهی کپور بیشتر است) پرورش داده می شوند. درواقع شرایط
            پرورش ماهیان سردابی و گرمابی در شهرستان وجود دارد و طبق بررسی‌های
            انجام‌شده از لحاظ اولویت راه‌اندازی، مزیت یکسانی دارند.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            هرچند که کار تولیدی و صنعت از مشاغل پرطرفدار در بین مردم شهرستان
            سرایان نیست؛ اما وجود کارخانه و کارگاه های فعال در سرایان،
            نشان‌دهنده ظرفیت این شهرستان در مشاغل صنعتی است. به گفته کارشناسان
            در صورت وجود سرمایه‌گذار، مشاغل صنعتی می‌تواند آینده خوبی را برای
            این شهرستان رقم بزند. از جمله مشاغل صنعتی که می توان برای توسعه آن
            سرمایه‌گذاری کرد فراوری خاک بنتونیت با توجه به وجود معادن فراوان
            بنتونیت است. از محصولات فرآوری‌شده در وسایل آرایشی، چاه‌های نفت،
            برق، قیر، ایزوگام، کشاورزی، مصارف صنعتی و... استفاده می‌شود.
          </p>
          <p>
            کارخانه‌های سنگبری جمیل سنگ، پنبه پاک‌کنی، کارتون‌سازی سپیدشانه،
            تولید شیر سرایان، خوراک دام سجاد و امید، وسایل پلاستیکی( مانند سبد و
            فرآوری آنها) به نام سالار پلاس، دیوارهای بتنی، بسته‌بندی غلات و
            ادویه‌جات، کارگاه‌های بزرگ بلوک زنی و بلوکه سیمانی، واحدهای
            بسته‌بندی خشکبار بخصوص زعفران، هفت تا ده کارخانه برای فرآوری خاک
            بنتونیت( که خاک معادن سه قلعه، دوست آباد و بغداده را فرآوری(آسیاب و
            بسته بندی) می‌کنند)، کارخانه بزرگ آهک خرم که آهک صنعتی تولید می‌کند
            و در حال حاضر به کارخانه سنگ آهن، تغییر کاربری داده، واحدهای شن‌شویی
            (که خیلی صنعتی نیستند)، تولید لوله و اتصالات پلی‌اتیلن و یک کارگاه
            تولید حلقه‌های سیمانی برای انتقال آب قنات از صنایع فعال این شهرستان
            هستند.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            مشاغل خدماتی توسط تعدادی از مردم و خصوصا جوانان این شهرستان مورد
            استقبال واقع شده است.
          </p>
          <p>
            یکی از مناطق دیدنی شهرستان، کویر سه قلعه است که آسمان آن را پنجمین
            آسمان تاریک جهان می‌نامند و برای کارهای نجوم و رصد بسیار مناسب است.
            طبق بررسی‌های انجام‌شده درحال ساخت یک رصدخانه در این منطقه هستند.
            میزان بازدید از این کویر بسیار بالا است. درحال حاضر اقامتگاه‌هایی در
            کویر سه‌قلعه وجوددارد؛ بنابراین احداث اقامتگاه جدید پیشنهاد نمی‌شود.
          </p>
          <p>
            در شهرستان مشاغل خدماتی دیگری مانند خیاطی، خدمات ساختمانی، تعمیر
            لوازم منزل و خدمات خودرو قابلیت انجام دارند.
          </p>
          <p>
            در ادامه تحليل، مشاغل در 10 رسته ذيل سه حوزه كشاورزي، صنعت و خدماتي
            دسته‌بندي شده‌است. در هريک از اين رسته‌ها عناوين شغلي، بر اساس مزيت
            راه‌اندازي، از شماره 1 تا 5 اولويت‌بندي شده‌اند.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
