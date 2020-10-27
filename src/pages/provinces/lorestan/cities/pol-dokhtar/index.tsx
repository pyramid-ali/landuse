import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-26"].cities["IR-2605"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        food_industry: "صنایع غذایی",
        livestock: "دامداری",
        gardening: "باغداری",
        agriculture: "زراعت",
        industry: "صنعت",
        handicrafts: "صنایع دستی",
        services: "خدمات",
        birds: "طیور",
        fisheries: "شیلات",
      },
    },
  }
  return (
    <div>
      <CityContent menu={menu} advantage={city.advantage}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان پلدختر یکی از شهرستان‌های استان لرستان است که در جنوب این
            استان قرار گرفته‌است. این شهرستان، شهرستانی کوهستانی است که در میان
            کوه‌های سر به فلک کشیده زاگرس واقع شده‌است. ارتفاعات پلدختر شامل
            کوهِ مله در قسمت شمالِ غربی شهر با ۲۰۰۴ متر، کوه اثر در قسمت شرقی
            شهرستان (منطقه دهلیچ) با ۲۱۵۰ متر و کبیرکوه در قسمت جنوبی شهرستان با
            ۲۳۰۰ متر (منطقه هِلوش) است. جمعیت شهرستان نیز براساس سرشماری سال
            1395، 73 هزار نفر بوده است. شکل زیر موقعیت شهرستان پلدختر را نشان
            می‌دهد.
          </p>
          <p>
            شهرستان پلدختر از شمال و شرق به شهرستان خرم‌آباد، از غرب و شمال غربی
            به شهرستان رومشکان و کوهدشت و از جنوب به استان خوزستان و ایلام محدود
            می‌شود. پلدختر در حدود ۱۱۰ کیلومتری جنوب غربی خرم‌آباد واقع شده و
            شهرستانی مرزی بین استان‌های لرستان، ایلام و خوزستان است. همچنین حدود
            ۲۵ کیلومتر با شهرستان رومشکان، حدود ۴۵ کیلومتر با شهرستان دره‌شهر از
            استان ایلام و حدود ۱۰۰ کیلومتر با اندیمشک خوزستان فاصله دارد.
          </p>
          <p>
            شهرستان دارای آب و هوایی متفاوت است. آ‌ب‌و‌هوای بیشتر قسمت‌های
            شهرستان پلدختر در تابستان‌ها گرم و در زمستان‌ها تقریباً معتدل است
            اما قسمت شرق و شمال آن زمستان‌های سردتری دارند .
          </p>
          <p>
            در رابطه با میزان بارش ها در این منطقه نیز باید گفت میانگین بارش
            سالانه ۳۷۲/۶ میلی‌متر است که به همین علت از شهرستان‌های پُرباران
            استان لرستان است. همچنین در ارتفاعات، میزان برف زیادی می‌بارد که
            دوام آنها پس از بارندگی به ۷ تا۲۰ روز می‌رسد .
          </p>
          <p>
            شهرستان پلدختر دارای مزیت ها و پتانسیل های زیادی در حوزه های مختلف
            ازجمله باغداری و خدماتی است، از مزیت های نسبی خوبی در سطح کشور
            برخوردار است، دارای نیروی کار جوان و روحیه خوب کار و فعالیت در بین
            مردم است که می توان از اینها در جهت بهبود وضعیت اقتصادی به نحواحسن
            بهره برد.
          </p>
          <p>
            کشاورزی و دامداری ازجمله اصلی ترین مشاغل مردم در این منطقه است. صنعت
            ساخت مصالح ساختمانی نیز از جایگاه ویژه ای در این منطقه برخوردار است
            و میزان اشتغال قابل توجهی را برای افراد بومی ایجاد کرده است.
          </p>
          <p>
            ریسک پذیری پایین مردم، کمبود تسهیلات و سرمایه، عدم آموزش و عدم تجربه
            از مهمترین موانع ایجاد کسب و کار در شهرستان پلدختر عنوان شده است.
            کمبود امکانات نیز یکی از اصلی ترین چالش های این شهرستان است که علاوه
            بر اینکه باعث شده شغل بیشتر مردم کشاورزی یا دامداری باشد، موجب
            مهاجرت تعداد قابل توجهی از افراد خصوصا قشر جوان شده است.
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
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            بخش كشاورزي شهرستان پلدختر داراي ظرفيت بالايي است كه درصورت توسعه
            صنایع تبدیلی و فرآوری، می تواند رونق بیشتری بگیرد. پلدختر منطقه ای
            حاصلخیز است که بخش عظیمی از تولیدات کشاورزی بویژه صیفی جات جنوب
            استان در آن کشت می شود. در سالهای اخیر به دلیل نبود سردخانه، افزایش
            قیمت مواداولیه، گرانی نهاده ها، نبود میدان عرضه میوه و تره بار،
            انگیزه کار در زمینه کشاورزی خصوصا تولید صیفی جات بسیار کاهش یافته
            است. کاهش قیمت محصولات همزمان با برداشت محصول از دیگر مسائل اصلی بر
            سر کشاورزان خصوصا صیفی کاران است. آنها اگر بخواهند محصولات خود را در
            دیگر استان‌ها نیز به فروش رسانند، باید هزینه حمل و نقل قابل ملاحظه و
            زیادی را بپردازند که باعث می شود صرفه اقتصادی کار در این زمینه کاهش
            یابد. تمام موارد ذکر شده باعث شده که تمایل و انگیزه افراد برای کار
            در این حوزه را از دست برود.{" "}
          </p>
          <p>
            ایجاد واحدهای بسته بندی و فرآوری سبزیجات، باعث بازگشت رونق به بازار
            تولید صیفی جات و سبزیجات خواهد شد، میزان اشتغال خوبی فراهم خواهد
            کرد، میزان سود را افزایش خواهد داد و شرایط برای صادرات محصولات به
            خارج از شهرستان را هموارتر خواهد کرد. درواقع به علت صادرات انواع
            صیفی جات و محصولات باغی خصوصا انجیر سیاه به سطح کشور، می توان در
            زمینه بسته بندی آنها کار کرد. باتوجه به بررسی های انجام شده به نظر
            نمی رسد بتوان بازار فروش این محصولات را در سطح شهرستان یافت؛ ولی
            درصورت تامین آن در خارج از شهرستان، از این کار سود خوبی حاصل خواهد
            شد.{" "}
          </p>
          <p>
            بسته بندی محصولات، علی رغم اینکه بعضا هزینه های اضافی را برای
            تولیدکنندگان ایجاد می کند، از اهمیت و جایگاه ویژه ای برخوردار است.
            اطلاعات مفیدی در رابطه با محصول در اختیار خریدار قرار می دهد و یا در
            سهولت کاربرد، نقل و انتقال، حفاظت و انبار کردن محصول نیز تأثیر
            بسیاری می گذارد. در همین راستا به نظر می رسد کار در زمینه بسته بندی
            محصولات غذایی تولیدی در سطح شهرستان پلدختر مانند انواع فرآورده های
            انجیر، روغن کلزا، گل نسترن و... و همچنین بسته بندی عسل می تواند
            دارای سود و توجیه اقتصادی قابل ملاحظه ای باشد.{" "}
          </p>
          <p>
            باوجود سطح دامداری که در سطح شهرستان درحال انجام است، به نظر می رسد
            فعالیت در حیطه فرآوری پوست دام مانند تولید نخ، مزیت خوبی داشته باشد
            البته باتوجه به اهمیت تامین بازار فروش، قبل از هر اقدامی باید به این
            نکته توجه خاصی داشت و آنرا به خوبی بررسی کرد.
          </p>
          <p>
            سردخانه نگهداری محصولات غذایی نیز به علت حجم تولیدات باغی می تواند
            دارای توجیه اقتصادی باشد و علاوه بر اشتغالزایی سود خوبی را ایجاد کند
            البته باید توجه کرد که این مورد، با ایجاد چند واحد محدود به حالت
            اشباع خواهد رسید؛ درنتیجه باید بررسی دقیقی برای ورود به این عرصه
            انجام پذیرد.
          </p>
          <p>
            طبق بررسی های انجام شده، کشتار دام در سطح شهرستان پلدختر انجام می
            شود و نیازی به ایجاد کشتارگاه نیست؛ هرچند که درصورت احساس نیاز به
            کار در این حوزه، درصورت وجود بازار فروش می توان واحدهایی ایجاد کرد
            البته برای اقدام در این حوزه باید به این نکته نیز توجه داشت که
            واحدهای این چنینی با ایجاد چند مورد محدود به حالت اشباع خواهند رسید.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            طبق بررسی‌های انجام شده، انجیر یکی از مهمترین تولیدات شهرستان است.
            آب، شربت، مسقطی، مربا، سرکه، کمپوت و خشکبار از فرآورده های مقوی
            انجیر به شمار می رود. کار در زمینه تولید این محصولات علاوه بر ایجاد
            انگیزه برای تولید بیشتر، سود تولید را نیز افزایش خواهد داد و میزان
            اشتغال قابل توجهی را ایجاد خواهد کرد. علاوه بر اینکه اگر بتوان بازار
            فروش این محصولات را در خارج از شهرستان و استان فراهم نمود، عایدی
            قابل ملاحظه ای به ارمغان می آید البته باید گفت که به صورت کلی در سطح
            کشور، بیشتر این محصولات نام برده شده، از انجیر خشکباری تولید می
            شوند؛ ولی از انجیرسیاه نیز می توان آنها را تولید کرد که درصورت فرهنگ
            سازی، فروش خوبی خواهد داشت. درضمن درحال حاضر تمام انجیر تولبدی در
            پلدختر به صورت خام فروش به سراسرکشور صادر می شود.{" "}
          </p>
          <p>
            باوجود اینکه درحال حاضر، بیشتر انجیر تولیدی به سراسرکشور صادر می
            شود؛ بازار فروش، اصلی ترین معضل و مشکل باغداران است که با کار در
            زمینه صنایع تبدیلی و غذایی آن می توان این موضوع را نیز تاحد قابل
            توجهی بهبود بخشید.{" "}
          </p>
          <p>
            صیفی کاری یکی از اصلی ترین مشاغل مردم در سطح این شهرستان بوده و هست.
            درصورت تامین آب و البته کار در زمینه ایجاد صنایع تبدیلی و فرآوری می
            توان رونق را به این بازار برگرداند. وجود بازارهای صادرات برای
            محصولات خام نیز، باعث می شود تا درصورت کار در زمینه فرآوری و تبدیل
            این محصولات، از بازار فروش این محصولات نیز تاحدی اطمینان حاصل نمود.{" "}
          </p>
          <p>
            تولید فرآورده هایی مانند خیارشور، ترشی، رب گوجه فرنگی و دیگر
            محصولاتی که بازار مصرف و تقاضای خوبی خواهند داشت، علاوه بر افزایش
            سود کشاورز می تواند انگیزه برای تولید بیشتر توسعه کشت این نوع از
            صیفی جات ایجاد کند. لازم به ذکر است درحال حاضر بیشتر این محصولات
            درحد خانگی و خرد تولید می شوند. همچنین درصورت توسعه کشت در زمینه
            انگور و انار، می توان در زمینه تولید فرآورده های آنها مانند کشمش،
            رب، شربت و شهد فعالیت های اقتصادی خوب و سوددهی را انجام داد.{" "}
          </p>
          <p>
            هرساله میزان قابل توجهی از دانه های روغنی و مهمترین فرآورده آنها
            یعنی روغن وارد کشور می شود؛ بنابراین کشت و فرآوری آنها در مناطقی که
            مستعد این کار هستند، می تواند مزیت مهمی محسوب شود. کلزا ازجمله این
            دانه های روغنی است که در پلدختر کشت می شود و می توان در زمینه صنایع
            فرآوری آن مانند تولید روغن به خوبی کار کرد و سود خوبی را به دست
            آورد.{" "}
          </p>
          <p>
            افزایش تمایل به مصرف گیاهان دارویی ازجمله مزیت های کار در زمینه
            صنایع تبدیلی و فرآوری آنهاست. گل نسترن از اصلی ترین انواع این گیاهان
            هستند که در منطقه پلدختر وجود دارد. از جوشانده گل نسترن در زمینه
            درمان سرماخوردگی، درمان آنفولانزا، درد و التهاب استفاده می شود. روغن
            حاصل از پرس سرد ميوه هاي آن به علت پتانسیل بالا در بهبود مشكلات
            پوستي، ماده ي ارزشمندي برای استفاده در لوازم آرایشی گیاهی و محصولات
            مراقبت از پوست مانند لوسیون ها و کرم ها است. عرق نسترن تقویت کننده
            قلب و آرامشبخش است، سنگ کیسه صفرا را رفع می کند و بی خوابی را از بین
            می برد. در ادامه باید اشاره کرد می توان در زمینه فرآوری سایر گیاهان
            دارویی، به صورت خشک کردن، بسته بندی و عرق گیری نیز می توان فعالیت
            های سودآوری انجام داد.
          </p>
          <p>
            طبق بررسی های انجام شده و علی رغم اینکه دامداری یکی از اصلی ترین
            مشاغل مردم منطقه است، میزان شیر تولیدی کم و به اندازه ای است که نیاز
            مردم خود منطقه به لبنیات و محصولات لبنی را برطرف کند. نکته ای که
            وجود دارد این است که باتوجه به ضرورت و وجود تقاضا برای محصولات دامی
            و مزیت دامداری در سطح منطقه، ایجاد واحدهای جدیدتر برای فرآوری شیر و
            تولید محصولاتی مانند انواع لبنیات می تواند توجیه اقتصادی داشته باشد؛
            ولی درعین حال قبل از انجام هراقدامی در این زمینه ابتدا باید شرایط
            تولید آن و توان رقابت با واحدهای قدیمی تر به خوبی مورد ارزیابی قرار
            گیرد. در ادامه باید اشاره کرد درصورت تامین بازار فروش و تامین گوشت،
            می توان در حوزه تولید سوسیس و کالباس حتی به صورت خانگی فعالیت سوددهی
            را دنبال کرد.{" "}
          </p>
          <p>
            وجود تقاضای همیشگی برای فرآورده های گندم مانند نان، آرد، شیرینی،
            رشته آشی و پلویی همچنین جوابدهی و کشت آن در این منطقه، از دلایلی است
            که باعث می شود تا بتوان ایجاد توسعه در این زمینه را پیشنهاد کرد. در
            زمینه تولید سایر فرآورده های گندم مانند آرد سوخاری، نان بستنی، پفک،
            کیک و بیسکوییت نیز درصورت تامین بازار فروش، می توان فعالیت های
            اقتصادی خوبی انجام داد.
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            آب و هوا و اقلیم شهرستان پلدختر، باعث شده است که پرورش دام و کار در
            زمینه دامداری، سود خوبی داشته و از اصلی ترین مشاغل مردم محسوب شود.
            کیفیت گوشت تولیدی در پلدختر خاص و مرغوب است و حتی به استانهای دیگر
            صادر می شود.
          </p>
          <p>
            یکی از نکات قابل توجه رسته دامداری در سطح شهرستان پل دختر، شروع طرح
            اصلاح نژادی گوسفند رومانف با نژاد لری است. تولید گوشت و شیر بیشتر و
            همچنین دوقلوزایی از جمله مزایابی بود که باعث شد در سال 1394، اولین
            جرقه برای اصلاح نژاد گوسفند لری زده شود. نسل تولیدی با دنبه و چربی
            کمتر، قابلیت چند قلوزائی و بارداری در فصول مختلف، بهبود افزایش
            تولیدات را به ارمغان آورده است.{" "}
          </p>
          <p>
            باید گفت درحال حاضر طرح هایی در حوزه پرورش گاوشیری اصلاح نژادی،
            پرواربندی گوساله، پرورش گوسفند داشتی اصلاح نژادی و پرواربندی بره
            درحال فعالیت هستند. باتوجه به اینکه محصولات تولیدشده از هرکدام از
            این دام ها بازارفروش خود را دارد، ایجاد توسعه در تمام آنها می تواند
            سودآورد و دارای مزیت باشد.
          </p>
          <p>
            شهرستان پلدختر از میزان تولید عسل قابل قبولی برخوردار بود؛ اما در
            چند سال گذشته به دلیل ریزگردهای ورودی از کشور عراق و گرمای شدید هوا،
            میانگین تولید سالیانه کاهش قابل ملاحظه ای را تجربه کرده است. این
            شهرستان با داشتن تنوع آب هوایی، تنوع پوشش گیاهی و وجود مناطق ییلاقی
            و قشلاقی متفاوت، از پتانسیل خوبی برای زنبورداری بهره مند است و
            پتانسیل خوبی برای تولید عسل دارد اگر مسئله ریزگردها حل شود. خواص
            دارویی و درمانی عسل و بازار تقاضا برای آن نیز بر مزیت کار در این
            حوزه را افزایش می دهد.{" "}
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            رودخانه کشکان به اضافه چندین حلقه چاه در مناطق مختلف منطقه، از
            مهمترین منابع تامین آب در شهرستان پلدختر است. در سال 1394، خشکسالی
            در منطقه تاحدی بود که کشت انواع محصولات آبدوست مانند سبزیجات و صیفی
            جات، ذرت و... در این منطقه ممنوع شد و در رابطه با عدم انجام فعالیت
            های کشاورزی و خسارات ناشی از آن، هشدارهای زیادی از سوی مسئولین
            شهرستان صادر شد. در سیل اخیر براثر طغیان رودخانه کشکان، برای چند
            ساعت تمام منطقه به زیر آب فرو رفت، زیرساخت های شهری منطقه به طور
            کامل تخریب شد، آب آشامیدنی و آب و برق قطع شد و... که رفاه و آسایش
            مردم و همچنین انجام انواع فعالیت های اقتصادی را با مشکلات جدی روبرو
            کرد. علی ایحال این بارندگی ها باعث بالا آمدن سطح آب رودخانه کشکان
            شده و این رودخانه دائمی را که چندین شهرستان از آن تغذیه می کنند،
            حیات دوباره بخشید. درحال حاضر میزان قابل توجهی از آب مورداستفاده در
            کشاورزی، علاوه بر چاه ها از طریق این رودخانه تامین می گردد.{" "}
          </p>
          <p>
            کشاورزی باغداری یکی از اصلی ترین مشاغل مردم در سطح شهرستان پلدختر
            است که در دو یا سه سال اخیر به علت خشکسالی با چالش های جدی ای روبرو
            شده است. سیل اخیر نیز به پنج هزار هکتار از باغات استان لرستان خسارت
            وارد کرد که عمده خسارت در شهرستان پلدختر بود . مزیت های آب و هوایی،
            مهارت افراد در باغداری و کیفیت محصولاتی که تولید می شوند، لزوم
            مکانیزه کردن آبیاری در این شهرستان و استفاده درست از منابع آبی موجود
            برای ادامه راه باغداری و به صورت کلی کشاورزی را یادآور می شود.{" "}
          </p>
          <p>
            پلدختر قطب تولید محصولاتی مانند سبزیجات و صیفی جات است. باتوجه به
            اینکه این محصولات به میزان آب قابل توجهی نیاز دارند و همچنین باتوجه
            به پایدار نبودن میزان افزایش آب رودخانه کشکان و چاه های زیرزمینی،
            برای ایجاد توسعه در این بخش که تامین آب از اصلی ترین و ابتدایی ترین
            مولفه های آن است، تامین منابع آبی جدید و تغییر جدی الگوی آبیاری، از
            اصلی ترین موضوعات است. باید اشاره کرد که تا زمانی که مشکل آب در
            پلدختر به صورت اساسی حل نشود، نمی توان از مشاغل پیشنهادی در ذیل، به
            عنوان مشاغل پایدار نام برد.{" "}
          </p>
          <p>
            این شهرستان در طی سالهای گذشته، یکی از قطب های کشت سبزی و صیفی جات
            در سطح استان است. یکی از مزیت های شرایط آب و هوایی پلدختر برای انجام
            فعالیت در این حوزه این است که در طول سال، به ندرت شاهد دمای صفر درجه
            در سطح شهرستان هستیم؛ درنتیجه می‌توان در طول سال به کاشت، داشت و
            برداشت پرداخت. خاک حاصلخیز نیز از دیگر مزیت های شهرستان است. میزان
            تولید سبزی در سال جاری در این شهرستان 50 هزار تن بوده است که بیشتر
            آن نیز به دیگر استانها مانند کرمانشاه، همدان، سنندج و... صادر می
            شود. کار در این حوزه و توسعه کشت عمدتا به دو دلیل پیشنهاد می شود؛ یک
            اینکه درصورت افزایش سطح زیرکشت، صرفه اقتصادی برای ایجاد واحدهای
            فرآوری این محصولات افزایش یافته و دوم اینکه با افزایش سطح زیرکشت، می
            توان همچنان مزیت صادرات به دیگر استان‌ها را ادامه داد. باید اشاره
            کرد روستاهای گل گل، بابازید، تیمورآباد، کیان آباد و چند منطقه دیگر
            از مناطقی هستند که محصولات در آنها کشت می شود.{" "}
          </p>
          <p>
            روستاهای معمولان، سراب حمام، افرینه، کیان آباد و چم مهر از مناطقی
            هستند که کشاورزان در آن به کشت خیار مشغول هستند و محصولاتشان را به
            خارج از شهرستان صادر می کنند و بازار فروش خوبی دارند. خیار یکی از
            اصلی ترین صیفی جاتی است که در سطح شهرستان تولید می شود و به خوبی با
            اقلیم پلدختر همخوانی دارد. کمبود آب و بارش تگرگ، مسئله ای جدی بر سر
            راه توسعه کشت این محصول است. در ادامه نیز باید به گوجه اشاره کرد که
            عمده کشت آن در مناطقی مانند چم گز، چم گرداب، هلوش، میانکوه شرقی،
            معمولان و چند منطقه دیگر انجام می شود که بازار خوبی هم در خارج از
            شهرستان دارند
          </p>
          <p>
            مناطق عمده سبزي كاري در روستاهاي جلگه خلج، موراني، كيان آباد، تيمور
            آباد، پران پرويز، گل گل سفلي و عليا، خرسدرسفلي و عليا، بابازيد و وره
            زرد شهرستان پلدختر هستند. در فصل هاي سرد سال، شهرستان پلدختر به دليل
            قرار گرفتن در محدوده مناطق گرمسيري و سردسيري كشور (حدفاصل استان هاي
            لرستان و خوزستان) مي تواند به محور توليد سبزي كشور تبدیل شود.{" "}
          </p>
          <p>
            انجیر دارای ارزش غذایی و خواص درمانی بسیاری است. اهمیت این میوه به
            اندازه‌ای است که در قرآن از آن سخن به میان آمده و در روایات دینی ما
            در مورد خواص انجیر بسیار آمده است. این میوه انواع متفاوتی دارد، اما
            بسته به اقلیم و شرایط رشد و پرورش گیاه، دارای طعم و مزه متفاوتی است.
            انجیر سیاه یکی از انواع شیرین و آبدار این میوه است که در نواحی غرب
            ایران خصوصا منطقه پلدختر به فراوانی یافت می شود. کمک به استحکام و
            سلامت استخوان ها، رفع اختلالات جریان خون، درمان کم خونی ناشی از فقر
            آهن و تقویت معده و روده از مهمترین خواص انجیرسیاه است البته مانند هر
            ماده خوراکی دیگر، مضراتی هم مانند ناراحتی معده و یا میزان قند بالا
            دارد درنتیجه باید در مصرف آن جانب اعتدال را رعایت نمود.{" "}
          </p>
          <p>
            پلدختر مقام نخست تولید انجیر سیاه کشور را به خود اختصاص داده است .
            به علت ماندگاری کم، درحال حاضر این محصول بیشتر بصورت تازه خوری مصرف
            می شود؛ اما در صنایع متنوعی مانند شیرینی پزی، مربا، سرکه، مارمالاد،
            شربت و شکلات انجیر کاربرد دارد علاوه بر اینکه به صورت خشک شده نیز
            مورد استفاده قرار می گیرد. طبق تحقیقات انجام شده، شرایط برای توسعه
            این محصول در شهرستان فراهم است و درصورت افزایش سطح زیرکشت می تواند
            صرفه اقتصادی بالایی برای واحدهای فرآوری ایجاد کند.{" "}
          </p>
          <p>
            انگور، یکی از دیگر محصولات باغی در سطح شهرستان پلدختر هستند. بیشترین
            سطح زیرکشت شهرستان نیز در روستاهای افرینه، پران پرویز و چم مهر قرار
            دارد. مزیت تولیدات فرآوری شده از این محصول و مهارت کشاورزان، از
            مهمترین دلایلی است که باعث می شود توسعه کشت انگور را پیشنهاد داد. در
            ادامه باید به کشت انار اشاره کرد که در حال حاضر در شهرستان انجام
            می‌شود و درصورت کار بیشتر در این حیطه می‌توان نیاز مردم خود شهرستان
            را برطرف نمود.{" "}
          </p>
          <p>
            در آخر نیز باید به کشت بادمجان، یکی دیگر از صیفی جات تولیدی در این
            منطقه اشاره کرد. در چند سال گذشته که خشکسالی اتفاق نیفتاده بود،
            مناطق حاشیه ای رودخانه کشکان بویژه روستای افرینه و معمولان از
            مهمترین مناطق کشت این محصولات در سطح شهرستان بودند. اکنون نیز با
            تامین منبع آب پایدار، می توان همچنان در این حوزه کار کرد.
          </p>
          <p>
            شهرستان پلدختر به دلیل آب و هوای مناسب از معدود نقاط استان است که
            استعداد توسعه و کشت مرکبات را دارد. در سالهای گذشته و اوایل دهه نود،
            بیشتر سطح زیرکشت، مرکباتی مانند لیموترش، لیموشیرین، نارنج و نارنگی
            بوده است که علاوه بر مصرف در داخل شهرستان به شهرستانهای همجوار نیز
            فرستاده می شد. درحال حاضر کشت این محصولات به دلیل آب بر بودن، به
            صورت محدود انجام می شود؛ درنتیجه برای پیشنهاد دادن توسعه آن باید به
            این نکته توجه کرد.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            کشاورزی زراعی یکی از اصلی ترین مشاغل مردم خصوصا روستانشینان شهرستان
            پلدختر است. خاک حاصلخیز است و رود دائمی کشکان، مسئله کمبود آب را از
            بین برده است. البته علی رغم این موضوع و همچنین علی رغم کیفیت بالای
            محصولات تولیدی، خشکسالی و کاهش بارندگی در سال های اخیر، باعث کاهش
            قابل ملاحظه ای در میزان برداشت محصولات کشاورزی شده است. تنش دمایی
            نیز یکی دیگر از عوامل کاهش تولیدات کشاورزی در سطح شهرستان است .
          </p>
          <p>
            هرساله چندین هزار هکتار گندم به صورت دیم و آبی در سطح شهرستان کشت و
            تولید می شود. میزان قابل توجهی از این گندم، توسط دولت خریداری شده،
            مقدار دیگری به خارج از شهرستان حمل شده و مابقی در سیلو نگهداری می
            شود. جو نیز علاوه بر اینکه در سطح شهرستان کشت شده و جواب داده است،
            به علت گستردگی استفاده از خورام داک و طیور دارای مزیت ویژه تری است.
            توسعه کار در زمینه تولید این دو محصول می تواند همچنان شهرستان را از
            واردات این محصولات بی نیاز کرده و تقاضای مردم را جواب دهد؛ ولی باید
            توجه داشت که باتوجه به شرایط پیش آمده در اقتصاد ایران، پایه های خرید
            تضمینی دولت در این دو مورد درحال سست شدن است؛ درنتیجه برای کار در
            این حوزه باید بیش از پیش دقت کرد.{" "}
          </p>
          <p>
            شهرستان پلدختر یکی از مناطق مستعد کشت کلزا در سطح استان لرستان بوده
            که عمدتا به صورت دیم درحال کشت است. کلزا محصولی است که اگر در تناوب
            با كشت گندم قرار گيرد، باعث حاصلخيزي خاك در سال آينده و كاهش آفات و
            بيماري هاي گندم خواهد شد که این موضوع یکی از مزیت های آن به حساب می
            آید. واردات هرساله و خروج میزان قابل توجهی ارز ازکشور نیز می تواند
            به عنوان دلیل دیگری در راستای مزیت کار در حوزه کشت این دانه روغنی
            باشد. البته نکات زیادی در روند کشت کلزا باید مدنظر قرار گیرد تا این
            فعالیت با صرفه اقتصادی و سود همراه باشد؛ به عنوان مثال باید تجهیزات
            و ابزارآلات خاصی در سطح منطقه برای برداشت وجود داشته باشد و یا باید
            از میزان مشخصی به بیشتر کشت انجام شود.{" "}
          </p>
          <p>
            به صورت کلی کشت گیاهان دارویی می تواند فرصت خوبی برای ایجاد اشتغال و
            بازگرداندن رونق به کشاورزی زراعی منطقه باشد؛ زیرا درآمدزایی قابل
            ملاحظه ای داشته و آبدوست هم نیستند.{" "}
          </p>
          <p>
            گل گاوزبان یکی از انواع گیاهان دارویی همخوان با شرایط شهرستان پلدختر
            است که کشت آن نیز به صورت عمده و صنعتی انجام می شود. توسعه در این
            حوزه، باتوجه به افزایش تمایل به سمت استفاده از موادگیاهی، پیشنهاد می
            شود. درضمن طبق بررسی های انجام شده بسته بندی نیز در سطح شهرستان
            انجام می شود.{" "}
          </p>
          <p>
            کشت گل نرگس که گونه دیگری از گیاهان دارویی است نیز در پلدختر انجام
            می شود. کار در این زمینه علاوه بر اینکه می تواند صرفه اقتصادی برای
            واحدهای فرآوری ایجاد کند، به علت وجود بازارهای صادراتی، سود خوبی را
            هم به ارمغان خواهد آورد.{" "}
          </p>
          <p>
            گل نسترن یکی دیگر از انواع گیاهان دارویی است که با شرایط این شهرستان
            همخوانی دارد؛ ولی کشت آن به صورت عمده انجام نمی شود. نسترن بیشترین
            ميزان ویتامین C در میان محصولات باغی، میوه ها و سبزیجات را دارا است.
            ميوه آن نیز حاوی مقادیر قابل توجهی از ترکیبات مختلف زیست فعال مانند
            کاروتنوئیدها، توکوفرول، پلی فنولها، بیوفلاوونویدها، تانن ها، پکتین،
            قندها، اسیدهای ارگانیک، اسیدهای آمینه، اسانس، فولات ها و اسیدهای چرب
            اشباع نشده مي باشد. تقاضا برای ميوه نسترن به عنوان یک ماده طبیعی و
            پرخاصیت، در حال افزایش است؛ زیرا میزان استفاده و مفید بودن آن در
            محصولات مختلف خوراکی و غیرخوراکی درحال فرهنگ سازی و جا افتادن در
            میان مردم است؛ بنابراین می توان سود خوبی را از افزایش سطح زیرکشت آن
            انتظار داشت.
          </p>
          <p>
            ذرت دانه‌ای در شهرستان پلدختر کشت می شود. جلوگیری از فرسایش خاک،
            کاهش مصرف آب، کاهش مصرف سوخت، جلوگیری از آتش زدن کاه از جمله مزایای
            کشت مستقیم ذرت دانه ای است. بازار عمده فروش آن نیز مرغداری ها،
            دامداری ها و کارخانه های خوراک دام است. در چند سال گذشته، روستاهای
            واشیان، باغ جایدر، دوکوهه، سراب حمام و اسلام‌آباد بیشترین سطح زیر
            کشت ذرت دانه‌ای را در سطح پلدختر به خود اختصاص دادند. درصورت ایجاد
            توسعه در این زمینه و افزایش سطح زیرکشت، می توان تولید خوراک دام را
            به صورت جدی و صنعتی دنبال کرد. البته در عین حال باید توجه داشت که
            منابع تامین آب این محصول باید بررسی شود.{" "}
          </p>
          <p>
            برنج محصولی است که با شرایط اقلیمی وخاک شهرستان پلدختر همخوانی داشته
            و جواب می دهد؛ ولی با شرایط فعلی وضعیت آب به نظر نمی رسد بتوان کار
            زیادی در این حیطه انجام داد؛ محدودیت آب مانع جدی بر سر راه توسعه کشت
            آن است؛ بنابراین قبل از هراقدامی در این زمینه ها، باید موضوع آب را
            به خوبی بررسی کرد.{" "}
          </p>
          <p>
            سیب زمینی، ازجمله محصولات زراعی باکیفیت شهرستان پلدختر محسوب می شود.
            این محصول آب بر بوده و برای پرورش به میزان آب قابل توجهی نیاز دارد و
            همانطور که در مقدمه اشاره شد، علی رغم بارندگی های اخیر، خشکسالی یکی
            از اصلی ترین چالش ها در سطح پلدختر به حساب می آید. درصورتی که بتوان
            طوری برنامه ریزی کرد که این محصول را در فصولی که بارندگی بیشتر است
            کشت کرد، کار در این زمینه می تواند سود خوبی داشته باشد. در ادامه
            باید به کشت حبوباتی مانند لوبیا، نخود و عدس نیز اشاره کرد که درصورت
            افزایش سطح کشت می تواند نیاز منطقه را برطرف نماید.{" "}
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            طبق بررسی های انجام شده واحدهایی در زمینه ساخت سبد فعالیت دارند؛ ولی
            با توجه به مزیت صادرات صیفی جات و انجیر، به نظر می رسد توسعه این بخش
            و حتی ایجاد واحدهای جدیدتری برای تولید کارتون می تواند موفق باشد.
          </p>
          <p>
            تولید مصالح ساختمانی، ازجمله کسب و کارهایی است که در شهرستان پلدختر
            رواج داشته و میزان اشتغال خوبی را ایجاد کرده است. کارخانه های مختلفی
            در سطح شهرستان به کار در این حوزه مشغول هستند که عمدتا نیز موفق بوده
            و علاوه بر صادرات به سطح کشور، در خارج از کشور نیز بازار فروش خوبی
            دارند. کارخانجات گچ ازجمله این موارد است.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            طبق بررسی های انجام شده تولید صنایع دستی در شهرستان پلدختر، رونق
            خوبی ندارد و اصولا تولید زیادی در این حوزه انجام نمی شود. گلیم و
            جاجیم ازجمله تولیدات این حیطه است. درصورت حل مشکل بازار فروش و توسعه
            آموزش در این زمینه مخصوصا به نسل جوان، می توان در این زمینه توسعه
            خوبی ایجاد کرد.{" "}
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            پل های تاریخی شهرستان پلدختر، غار کلماکره، جنگل های بلوط شهر
            معمولان، پل گاومیشان، تالاب ها که دارای شهرت جهانی نیز هستند،
            کاروانسرای چشمک و.. از آثار تاریخی موجود در سطح منطقه پلدختر است.
            طبق تحقیقات انجام شده، راه های مواصلاتی به بیشتر این موارد صعب
            العبور است؛ ولی باتوجه به قدمت تاریخی و منحصر به فرد بودن طبیعت آنها
            و همچنین وجود پتانسیل کار در زمینه ارائه خدمات گردشگری در این منطقه،
            به نظر می رسد درصورت فرهنگ سازی و تبلیغات، بتوان فعالیت های اقتصادی
            خوبی مانند ایجاد رستوران های بومی و یا اقامتگاه های بومگردی انجام
            داد. البته باتوجه به اقلیم آب و هوایی و گرمسیر بودن، باید صرفه
            اقتصادی کار در این حوزه و پایداری تقاضا به خوبی مورد بررسی قرار
            گیرد.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش مرغ در شهرستان پلدختر انجام می شود. باتوجه به تفاوت قیمت این
            پرنده با دیگر ماکیان و همچنین گستردگی فرهنگ استفاده از آن نسبت به
            دیگر طیور، ایجاد توسعه در این زمینه می تواند از سودآوری خوبی
            برخوردار باشد.{" "}
          </p>
          <p>
            باتوجه به گرمسیر بودن منطقه، مزیت پرورش طیوری مانند بلدرچین و
            بوقلمون خیلی زیاد نیست؛ زیرا این نوع از پرنده ها بیشتر با آب وهوای
            معتدل سازگاری دارد؛ ولی اگر بتوان شرایط مطلوب نگهداری آنهارا مهیا
            کرد که البته هزینه بر است، می توان در این حوزه ها نیز کار کرد و
            حداقل نیاز خود شهرستان را برطرف نمود.{" "}
          </p>
          <p>
            بلدرچین پرنده ای با جثه کوچک است که در برابر بسیاری از بیماری ها
            مقاوم می باشد. پرورش بلدرچین به دلیل هزینه های جاری پایین، اشباع
            نبودن بازار فروش، کوتاه بودن دوره پرورش (40 روز) و عدم پرورش انحصاری
            توسط شرکت های بزرگ مزیت دارد. محصولات این پرنده شامل گوشت، تخم
            بلدرچین و کود است، گوشت و تخم آن دارای ارزش غذایی و دارویی و همچنین
            سرشار از پروتئین است.{" "}
          </p>
          <p>
            بوقلمون نیز ازجمله طیوری است که شرایط سخت تری برای نگهداری نسبت به
            مرغ داشته و از قیمت بیشتری در بازار نیز برخوردار است. کلسترول گوشت
            آن نصف گوشت قرمز بوده و مصرف آن باعث می شود تا کلسترول بد خون را
            کاهش می دهد. بوقلمون با جمجه ای ۴۰ گرمی، سرعت رشد بالایی دارد به
            طوریکه در طول ۳ ماه به ۱۵ کیلوگرم می رسد و به سرعت رشد می کند. این
            پرنده تنها حیوانی است که ۲ نوع گوشت دارد؛ سینه آن دارای گوشت سفید و
            گوشت ران آن، قرمز است.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            پرورش ماهی در شهرستان پلدختر درحال انجام است. علی رغم خشکسالی های
            بوجود آمده و کمبود آب، در سال‌های اخیر چندین طرح پرورش ماهی گرم آبی
            اجرایی شده‌است. پرورش ماهیان سردآبی نیز در مناطقی که دارای آب و هوای
            معتدلی هستند، انجام می شود. به صورت کلی درصورت تامین بازار فروش،
            ایجاد توسعه در این زمینه سودآور بوده و اشتغال خوبی هم ایجاد خواهد
            کرد.{" "}
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
