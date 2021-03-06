import React from "react"
import Section from "components/section"
import Provinces from "fixtures/provinces.json"
import CityContent from "components/city-content"
export default function () {
  const city = Provinces["IR-02"].cities["IR-0211"]
  const menu = {
    introduction: "آشنایی با شهرستان",
    analyze: "تحلیل شهرستان",
    jobs: {
      value: "تعیین کسب‌وکارهای مزیت‌دار شهرستان",
      children: {
        gardening: "باغداری",
        livestock: "دامداری",
        food_industry: "صنایع غذایی",
        conversion_complementary_industries: "صنایع تبدیلی و تکمیلی",
        birds: "طیور",
        agriculture: "زراعت",
        services: "خدمات",
        handicrafts: "صنایع دستی",
        fisheries: "شیلات",
        industry: "صنعت",
      },
    },
  }
  return (
     <div className="w-full">
      <CityContent menu={menu} city={city}>
        <Section id="introduction" title="آشنایی با شهرستان">
          <p>
            شهرستان سردشت یکی از شهرستان‌های مرزی و کردنشین استان آذربایجان غربی
            است که در جنوب غربی این استان و امتداد جنوبی ارومیه قرار دارد و با
            شمال کشور عراق و اقلیم کردستان عراق، همسایه است. مرکز این شهرستان،
            شهر سردشت بوده و مردم این شهرستان کردزبان هستند و با لهجه سورانی
            موکریانی صحبت می‌کنند. شهرستان سردشت از شمال به شهرستان پیرانشهر، از
            شمال غربی به مهاباد، از شرق به بوکان، از جنوب به استان کردستان و
            کشور عراق و از غرب به کشور عراق منتهی می‌گردد. همچنین سردشت دارای
            ۱۰۰ کیلومتر مرز با کردستان عراق است. شکل زیر موقعیت شهرستان سردشت را
            نشان می‌دهد. شهرستان سردشت نیز همچون سایر مناطق استان آذربایجان غربی
            تحت تاثیر جبهه های هوایی است که از شمال غربی و گاها از غرب استان
            وارد می گردند. این توده های هوایی از دریای سیاه و مدیترانه وارد
            استان گردیده و به ویژه در زمستان و بهار باعث ریزش های جوی نسبتا خوبی
            در استان می شوند. به علت بارش برف و باران فراوان،شهرستان سردشت از
            منابع آب بسیار غنی برخوردار است. کل محدوده ی شهرستان سردشت در حوزه
            آبریز زاب کوچک قرار گرفته که بخش اصلی حوزه نیز محسوب می شود. وضعیت
            خاص جغرافیایی در شهرستان سردشت و به دنبال آن بارندگی های نسبتا زیاد
            در این ناحیه باعث تنوع پوشش گیاهی آن شده است. به طوری که یکی از
            مهمترین نواحی جنگلی استان در منطقه سردشت واقع شده است. آبشار شلماش،
            آبشار رزگه، دشت وزنه، دشت مردواو (مرداب)، دشت باژار، کانی گراوان،
            رودخانه زاب، دره خدرآباد، بیوران، گردنه زمزیران و وجود ۸۰۰ هکتار
            جنگل از جمله جاذبه های طبیعی و گردشگری این شهرستان است. مردم شهرستان
            سردشت روحیه ی کار و فعالیت و همچنین ریسک پذیری خوبی دارند، در گذشته
            به دلیل بازبودن مرز، مردم در زمینه تجارت فعالیت می کردند؛ ولی در حال
            حاضر به کشاورزی و دامداری مشغول هستند.{" "}
          </p>
        </Section>
        <Section id="analyze" title="تحلیل شهرستان">
          <p>
            مزيت‌سنجي و اولويت‌بندي كسب‌وكارهاي موجود در هر شهرستان برمبناي يک
            روش تحقيق انجام مي‌شود. در اين روش تحقيق، يک شناسنامه براي هر
            شهرستان و يک شناسنامه براي هر كسب‌وكار تدوين مي‌شود. اين شناسنامه‌ها
            به عنوان ورودي به نرم‌افزار داده‌شده و خروجي نرم‌افزار هم‌پوشاني اين
            دو شناسنامه و تعيين مشاغل مزيت‌دار شهرستان است. اين اولويت‌بندي‌ها
            توسط كارشناسان و افرادخبره هر شهرستان بازبيني و اصلاح مي‌شوند. يكي
            از منابع تحليل همين ليست مزيت‌سنجي اصلاح‌شده‌است. يكي ديگر از منابع
            تحليل، مصاحبه با كارشناسان و متخصصين حوزه اشتغال هر شهرستان است. در
            هر شهرستان با حداقل 3 نفر از اين افراد مصاحبه انجام مي‌شود. اين
            مصاحبه‌ها پياده‌سازي و ارزيابي مي‌گردد. در صورت وجود تناقض و ابهام
            بين اين 3 مصاحبه و ليست مزيت‌سنجي، مصاحبه‌هاي تكميلي و حتي مصاحبه
            بيشتر هم صورت مي‌گيرد تا تيم تحليل به نتيجه نهايي مطلوب دست‌يابد.
            بنابراين خروجي هر شهرستان از تجميع مصاحبه‌ها و ليست مزيت‌سنجي حاصل
            مي‌شود. در ادامه تحليل شهرستان سردشت ارائه‌شده‌است.
          </p>
        </Section>
        <Section id="jobs" title="تعیین کسب‌وکارهای مزیت‌دار شهرستان">
          <p>
            همانطوريكه در قسمت مقدمه اشاره‌شده مبناي تحليل، مصاحبه‌ها و ليست
            مزيت‌سنجي است. از بررسي اين دو منبع رسته‌هاي رايج و اولويت‌دار
            شهرستان تعيين شده‌است. مبناي اين اولويت‌بندي، فراواني و ميزان اشاره
            افراد كارشناس به كسب‌وكارهاي رايج در هر شهرستان و اولويتي كه اين
            مشاغل در ليست مزيت‌سنجي دارند، است. در هر رسته كسب‌وكارهاي رايج به
            ترتيب اولويت مشخص شده‌است. در تحليل به مشاغل موجود، مشاغل قابل توسعه
            و مشاغلي كه هنوز در شهرستان راه‌اندازي نشده و پتانسيل ايجاد آن‌ها در
            شهرستان وجوددارد، اشاره شده‌است. مزيت‌هاي شغلي به ترتيب اولويت در
            ادامه آورده شده‌است.
          </p>
        </Section>
        <Section id="gardening" title="باغداری" size="h3">
          <p>
            شهرستان سردشت، شهرستانی مرزی است و در گذشته مردم بیشتر به کسب و
            کارهای مرزی مانند مبادلات تجاری مشغول بوده اند اما امروزه به دلیل
            بسته شدن مرز، افراد به مشاغلی مانند کشاورزی و دامداری روی آورده اند.
            کشاورزی به هردو صورت زراعت و باغداری انجام می شود اما باتوجه به
            اینکه شهرستان سردشت بافتی کوهستانی دارد، باغداری نسبت به زراعت توسعه
            بیشتری پیدا کرده است. با اینکه تعدادی از زمین های کشاورزی شهرستان به
            آب دسترسی ندارند اما بارش های زیاد در این شهرستان امکان کاشت محصولات
            باغی به مقدار بیشتر را فراهم کرده است. انگور سیاه از محصولات باغی
            این شهرستان است که به میزان زیادی تولید می شود. می توان گفت سالانه
            حدود 35000 تن انگور در شهرستان تولید می‌شود. با وجود ظرفیتی که در
            شهرستان برای کاشت انگور وجود دارد و باتوجه به کیفیت بسیار خوب و
            معروف بودن انگور سردشت، افزایش تعداد باغ های انگور سیاه پیشنهاد می
            شود(بیشتر انگور تولیدی به صورت دیمی است).
          </p>
          <p>
            گردو، بادام و انجیر نیز در این شهرستان به مقدار زیادی کاشته می‌شود.
            هر سه نوع محصولی که نام برده شد از محصولات باغی بسیار ارزشمند و
            باخواص فراوان هستند و بازار فروش خوبی در بین مردم دارند. علاوه بر
            اینکه برای تازه خوری استفاده زیادی دارند، می توان باتولید فراورده
            های آن ها ارزش افزوده بالایی نیز برای منطقه ایجاد کرد. بعد از احداث
            باغ انگور سیاه،احداث باغ هایی برای تولید این محصولات پیشنهاد می شود.
            سماق نیز یکی از محصولات کاملا ارگانیک و بومی شهرستان سردشت است که به
            دلیل داشتن مناطقی با شیب زیاد، مکان مستعدی برای تولید این محصول به
            شمار می رود و در حال حاضر نیز در شهرستان تولید انبوهی دارد. باتوجه
            به اینکه سماق فواید زیادی برای سلامتی دارد و ادویه ای پرطرفدار در
            بین مردم ایران است، افزایش کاشت آن مزیت دارد.{" "}
          </p>
          <p>
            در شهرستان سردشت تولید قارچ صورت می گیرد و برای ایجاد کارگاه های
            بیشتر نیز ظرفیت وجود دارد که می توان در این خصوص اقدام کرد.{" "}
          </p>
          <p>
            انار و سیب نیز کشت مناسبی در شهرستان دارند و امکان گسترش باغ های
            مربوط به آن ها وجود دارد اما دارای مزیت کمتری نسبت به موارد گفته شده
            هستند. به دلیل دسترسی نداشتن بخشی از زمین های کشاورزی شهرستان سردشت
            به آب، انار، بیشتر به صورت دیم کاشته می شود؛ در صورتی که انار آبی
            کیفیت بهتری نسبت به انار دیمی دارد. سیب نیز از جمله محصولاتی است که
            به آب زیادی نیاز دارد؛ بنابراین سازگاری بالایی با شرایط شهرستان
            ندارد.{" "}
          </p>
          <p>
            در بین محصولات جالیزی هندوانه نیز کاشته می شود و افزایش تولید آن
            دارای مزیت است. همچنین محصولاتی مانند گلابی،زردآلو و هلو نیز در
            شهرستان تولید می شوند و می توان مقدار بیشتری از آن ها را در صورت
            وجود آب تولید کرد.
          </p>
          <p>
            برای تولید صیفی جات، سبزیجات و نهال میوه‌ها، گلخانه وجود دارد که
            تولید آن ها در حد تامین نیاز شهرستان است. این مطلب نشان دهنده ی وجود
            ظرفیت برای احداث گلخانه در این شهرستان است. علاوه بر محصولات گفته
            شده، قابلیت تولید زعفران نیز به صورت گلخانه ای وجود دارد.
          </p>
          <p>
            {" "}
            البته تعدادی از روستاها هنوز گاز کشی نشده اند و برای احداث گلخانه در
            این مکان‌ها، باید برای تامین سوخت مورد نیاز سیستم های گرمایشی، چاره
            ای اندیشیده‌شود.{" "}
          </p>
          <p>
            در پایان می توان به قابلیت کاشت صیفی جاتی همچون خیار، گوجه، کدو،
            بادمجان، خربزه و سبزیجات خوراکی در فضای آزاد اشاره کرد.{" "}
          </p>
        </Section>
        <Section id="livestock" title="دامداری" size="h3">
          <p>
            دامداری نیز از دیگر مشاغل اصلی مردم شهرستان سردشت است. اکثر دامداری
            انجام شده در شهرستان به صورت سنتی است. دامداران این شهرستان به پرورش
            دام سبک و سنگین می پردازند. پرورش دام بیشتر به منظور تولید شیر صورت
            می گیرد و پروار بندی خیلی کم انجام می شود. دام های سنگین شامل گاوهای
            بومی و گاو های اصلاح نژادی مانند سمینتال و هلشتاین است. البته بررسی
            ها نشان داده است که پرورش گاو سمینتال نسبت به گاو هلشتاین بازدهی
            بیشتری دارد. گاو سمینتال جزء بهترین گاوهای شیری و گوشتی در جهان است.
            این نژاد گاو متعلق به کشور سوئیس است که در حال حاضر در کشورهای
            مختلفی از جهان پرورش می یابد. این گاو با دادن کمترین علوفه و مواد
            کنسانتره، بیشترین شیر و گوشت را می دهند و به همین دلیل پرورش آن
            مقرون به صرفه است. در بین دام های سبک نیز علاوه بر گوسفند، بز گوشتی
            و بز سانن نیز پرورش داده می‌شوند. بز گوشتی تعداد قابل توجهی در میان
            دام های سبک این شهرستان دارد و قابلیت خوبی برای پرورش آن وجود دارد.
            به طوری که پرورش آن همچون پرورش گوسفند دارای مزیت است.{" "}
          </p>
          <p>
            بزسانن روزانه 3تا8کیلوگرم شیر می دهد. سرمایه گذاری اولیه برای پرورش
            آن بسیار کم بوده و برای پرورش در محیط و شرایط روستایی مقاوم است .
            پرورش بزسانن با شرایط شهرستان سردشت سازگاری دارد. همچنین پیشنهاد می
            شود که علاوه بر پروش دام سبک بومی، به پرورش این نژاد نیز توجه شود.
            لازم به ذکر است پرورش دام سنگین و سبک مزیتی مشابه دارند. البته پرورش
            دام های سبک و سنگین اصلاح نژادی از مزیت پایین تری برخوردار هستند. به
            صورت کلی مراتع زیاد و آب و هوای مناسب شهرستان زمینه را برای توسعه
            دامداری فراهم کرده‌است.
          </p>
          <p>
            به دلیل پوشش گیاهی بسیار خوب شهرستان سردشت، زنبورداری در سطح بالایی
            انجام می شود و عسل با کیفیتی تولید می‌شود؛ بنابراین گسترش این حرفه
            پرسود، پیشنهاد می شود.{" "}
          </p>
        </Section>
        <Section id="food_industry" title="صنایع غذایی" size="h3">
          <p>
            همانطور که می دانیم وجود صنایع غذایی برای هر شهرستانی که ظرفیت های
            لازم برای تولید مواد غذایی را دارد لازم است. علاوه براینکه وجود این
            صنایع بهره وری را افزایش می دهد و درآمد بیشتری را نصیب فرد تولید
            کننده‌ی مواداولیه می کند، واردات مختلفی که در حوزه مواد غذایی صورت
            می گیرد را نیز تا اندازه ای کم می کند. علی‌رغم پایین‌بودن وسعت
            شهرستان سردشت، ظرفیت‌های خوبی برای ایجاد برخی صنایع غذایی وجود دارد
            و می توان این واحدهای صنعتی را در شهرک صنعتی احداث کرد. همانطورکه در
            بالاتر توضیح داده شد، انگور تولیدی در این شهرستان مقدار قابل توجهی
            دارد. درحال حاضر نیز فرآورده های حاصل از آن مانند کشمش تولید می شود؛
            اما میزان انگور تولیدی به اندازه ای است که باز هم می‌توان برای ایجاد
            واحدهای صنعتی در زمینه تولید فرآورده های آن سرمایه گذاری کرد.
            بنابراین فرآوری انگور سیاه به منظور تولید کشمش و شیره، سرکه، باسلوق
            و روغن هسته انگور در اولویت اول مزیت های شغلی این حوزه قرار می گیرد.
            باسلوق به راحتی با استفاده از شیره انگور و مقداری مواد اولیه دیگر
            تهیه می شود. روغن هسته انگور خواص درمانی فوق العاده و قیمت بالایی
            دارد. تولید آبمیوه نیز با توجه به میزان انگور تولیدی و وجود میوه های
            دیگر، صرفه اقتصادی بسیار خوبی دارد.
          </p>
          <p>
            از جمله فرآورده های دیگری که می توان از میوه های موجود در شهرستان به
            دست آورد میوه خشک، چیپس میوه، کنسانتره و لواشک است که به جز کنسانتره
            موارد دیگر قابلیت تولید در خانه را دارند. چیپس های میوه تقریبا عاری
            از چربی هستند و خوردن آنها می تواند خطر بروز سکته قلبی و بیماری های
            عروقی را کاهش دهد. هرچند که چیپس میوه و میوه خشک که در مقایسه با
            میوه های تازه از درصد کمتری از املاح و ویتامین های طبیعی برخوردارند،
            ولی می توانند جایگزین های مناسبی برای تنقلات شور و شیرین صنعتی
            باشند.از این رو فرهنگ استفاده از چیپس میوه و میوه خشک در بین مردم،در
            حال جا افتادن است.{" "}
          </p>
          <p>
            شیر تولیدی در شهرستان سردشت نیز مقدار خوبی دارد و می توان در زمینه
            احداث واحدی صنعتی برای تولید لبنیات اقدام کرد. با این کار درآمد
            دامداران نیز افزایش می یابد و مجبور نیستند که شیر تولیدی خود را با
            قیمت ناچیز بفروشند. تولید سایر فرآورده های حاصل از میوه ها مانند
            تولید ترشیجات، مربا و شهد نیز به عنوان اولویت های بعدی مزیت شغلی در
            این حوزه پیشنهاد می شود.{" "}
          </p>
          <p>
            همانطور که گفته شد گردو و بادام نیز در سطحی کمتر از انگور تولید می
            شوند ولی میزان کاشت خوبی دارند. می توان از گردو و بادامی که برداشت
            می شود برای تولید فرآورده ی باارزش حاصل از آن ها یعنی روغن بادام و
            گردو استفاده کرد. انجام این حرفه به صورت کارگاهی در این شهرستان
            قابلیت انجام دارد و باتوجه به قیمت بالای این محصولات و سودده بودن
            تولید آن ها،راه اندازی چنین کارگاهی پیشنهاد می گردد.
          </p>
          <p>
            سماق تولیدی نیز به قدری است که فرآوری آن(پودر کردن و بسته بندی آن)
            به صرفه باشد. این مورد نیز از مشاغلی است که به صورت خانگی نیز قابلیت
            انجام دارد و پیشنهاد می شود.{" "}
          </p>
          <p>
            گندم کشت شده شده در شهرستان به مقداری است که بتوان تولید آرد به صورت
            صنعتی داشت. البته ممکن است تمام آرد تولیدی از میزان استفاده مردم
            شهرستان بیشتر باشد که در این صورت باید روی صادارت آن کار کرد. تهیه
            نان نیز به صورت سنتی و نیمه صنعتی انجام می شود. یک کارگاه نیمه صنعتی
            درخصوص تهیه نان وجود دارد که نیاز شهرستان را تمام وکمال تامین نمی
            کند؛ بنابراین احداث واحدی دیگر در این زمینه به صرفه خواهدبود. تولید
            فرآورده های دیگر گندم مانند شیرینی، رشته آشی و پلویی و کلوچه و
            بیسکوییت نیز به عنوان مشاغل دارای مزیت در این حوزه مطرح است. سایر
            فرآورده های حاصل از گندم مانند گندم برشته،پفک گندمی، آرد سوخاری و
            نشاسته نیز قابلیت تولید دارند ولی در اولویت های بعدی قرار می گیرند.
          </p>
          <p>
            گیاهان دارویی کشت شده در شهرستان، مورد استفاده بعضی از مردم برای
            تولید عرقیجات به صورت سنتی قرار می گیرد. اما به نظر می رسد قابلیت
            ایجاد کارگاهی برای فرآوری گیاهان دارویی( عرق گیری، خشک کردن و بسته
            بندی) وجود داشته باشد.{" "}
          </p>
          <p>
            گوشت تولیدی در شهرستان را نیز می توان فرآوری کرد و محصولاتی مانند
            سوسیس و کالباس تولید کرد. البته ظاهرا این محصولات بازارفروش چندانی
            در بین مردم شهرستان سردشت ندارد اما می توان آن ها را به خارج از
            شهرستان ارسال کرد. تولید سایر فرآورده های حاصل از دام مانند ژلاتین و
            شیرخشک و ژل رویال از عسل نیز به عنوان اولویت های آخر مزیت های شغلی
            این حوزه پیشنهاد می شود.
          </p>
        </Section>
        <Section
          id="conversion_complementary_industries"
          title="صنایع تبدیلی و تکمیلی"
          size="h3"
        >
          <p>
            صنایع تبدیلی و تکمیلی مانند صنایع غذایی از اهمیت زیادی برخوردار است
            و وجود آن ها بسیاری از هزینه های اضافی را مانند هزینه های حمل و نقلی
            که برای استفاده از صنایع تبدیلی و تکمیلی دیگر شهرستان ها صرف می‌شود،
            از بین می‌برد. درخصوص صنایع تبدیلی و تکمیلی مورد نیاز برای شهرستان
            سردشت متاسفانه کار خاصی انجام نشده است. در حال حاضر برای نگهداری
            محصولات کشاورزی سردخانه وجود دارد.اما به نظر می رسد برای احداث واحد
            دیگری از آن(باتوجه به تولیدات باغی که دارد) ظرفیت وجود داشته باشد.
            برای کشتار دام و طیور موجود در شهرستان کشتارگاهی وجود ندارد و دام
            وطیور برای کشتار به تبریز،اصفهان و..برده می شوند. فاصله سردشت تا
            تبریز حدود 340 کیلومتر است. درنتیجه باید این مسیر طولانی طی شود. اما
            اگر کشتارگاهی درخصوص دام و طیور احداث شود،دغدغه ی دامداران و پرورش
            دهندگان طیور برطرف می شود.{" "}
          </p>
          <p>
            همانطوریکه بیان‌شد تولید عسل به میزان خوبی در شهرستان صورت می گیرد و
            شرایط را برای ایجاد واحد صنعتی بسته بندی عسل و تولید موم و کندوی عسل
            فراهم کرده است. انجام این حرفه ها موجب رونق زنبورداری در شهرستان
            خواهد شد.{" "}
          </p>
          <p>
            فرآوری پوست دام از مشاغل سوددهی است که متاسفانه علی رغم وجود مواد
            اولیه آن(یعنی پوست دام) به آن توجهی نمی شود. درصورتی که انجام فرآوری
            پوست دام به منظور تولید چرم از پوست گاو وتولید نخ از پوست گوسفند
            مانع دور ریختن پوست های دام می شود وصرفه اقتصادی خوبی نیز به همراه
            دارد. لازم به ذکر است مواردی مانند احداث کشتارگاه و فرآوری پوست به
            زودی اشباع می شوند و بسته به ظرفیت شهرستان، احداث یک یا دو واحد از
            آن ها کفایت می کند.{" "}
          </p>
          <p>
            برای جمع آوری شیر نیز متاسفانه ایستگاهی وجود ندارد که راه اندازی
            چنین مراکزی پیشنهاد می شود. تولید کمپوست (افزودن مقدار مشخصی از
            کودهای شیمیایی به کود حیوانی) نیز به دلیل استفاده کشاورزان برای
            تقویت زمین های کشاورزی خود گزینه شغلی خوبی است و صرفه اقتصادی دارد.
          </p>
          <p>
            گردو و بادام تولیدی نیز در صورت بسته بندی شکیل، فروش بهتری خواهد
            داشت. می توان در زمینه احداث چنین کارگاهی سرمایه گذاری کرد و سود
            خوبی را به دست آورد؛ اما باید به این نکته توجه داشت که ممکن است
            خشکبار بسته بندی شده بازار فروش خوبی در شهرستان سردشت نداشته باشد که
            در این صورت می توان آن ها را به خارج از شهرستان ارسال کرد.
          </p>
          <p>
            گوشت و مرغ تولیدی در شهرستان سردشت بستر را برای ایجاد واحد های صنعتی
            بسته بندی گوشت و مرغ مهیا کرده است؛ اما باید توجه داشت که به احتمال
            زیاد این محصولات در بین مردم شهرستان سردشت بازار فروش ندارند و باید
            روی صادرات آن ها کار کرد. بسته بندی حبوبات و غلات نیز باتوجه به کشت
            این محصولات در شهرستان به میزان قابل قبول،پیشنهاد می شود.{" "}
          </p>
        </Section>
        <Section id="birds" title="طیور" size="h3">
          <p>
            پرورش طیور از کسب و کار هایی است که تعدادی از مردم شهرستان سردشت را
            به خود مشغول کرده است. پرورش مرغ از فعالیت هایی است که با بیشترین
            استقبال در این حوزه مواجه بوده است. در این شهرستان 40 مرغداری وجود
            دارد که تمام آن ها مرغ گوشتی پرورش می دهند. پرورش مرغ تخم گذار در
            شهرستان سردشت انجام نمی شود. به نظر می رسد ظرفیت خوبی برای پرورش مرغ
            گوشتی وجود داشته باشد.
          </p>
          <p>
            پرورش طیور دیگری مانند مرغ بومی، بلدرچین، شتر مرغ و کبک نیز به صورت
            سنتی و درمقیاس کوچک در شهرستان سردشت انجام می شود. با توجه به اینکه
            پرورش طیور نام برده شده در این شهرستان جواب داده است و صرفه اقتصادی
            خوبی دارد،ایجاد واحدهای صنعتی برای بلدرچین، شترمرغ و کبک و گسترش
            پرورش مرغ بومی پیشنهاد می شود.{" "}
          </p>
          <p>
            قابلیت پرورش بوقلمون نیز در شهرستان سردشت وجود دارد. گوشت بوقلمون
            ترکیبی از گوشت سفید و قرمز است و با گران شدن گوشت قرمز با استقبال
            بیشتری در بین مردم روبه رو شده است.
          </p>
        </Section>
        <Section id="agriculture" title="زراعت" size="h3">
          <p>
            همانطور که قبلا به آن اشاره شد، بخشی از کشاورزی شهرستان به صورت کشت
            محصولات زراعی انجام می شود که میزان خوب و قابل توجهی دارد. اما علت
            این که زراعت رتبه بالایی در بین حوزه های شغلی پیشنهادی ندارد این است
            که شهرستان سردشت شهرستانی کوهستانی است و مساحت زمین های همواری که
            برای کشت محصولات زراعی مناسب باشند زیاد نیست تا بتوان در این حوزه
            فعالیت بیشتری انجام داد. همچنین تعدادی از زمین ها هستند که آب
            ندارند. از آن‌جایی که شهرستان بارندگی بسیار خوبی دارد، این مشکل با
            کشت دیم تا حدودی حل می شود؛ اما مشکل کمبود زمین هموار همچنان باقی
            است.
          </p>
          <p>
            گندم، عمده تولید زراعی شهرستان سردشت است. درصورت وجود زمین می توان
            برای گسترش کشت آن اقدام کرد. لازم به ذکر است شرط وجود زمین کافی برای
            تمام محصولات زراعی که از این به بعد نیز به آن اشاره می شود، وجود
            دارد.{" "}
          </p>
          <p>
            طبق بررسی‌های انجام‌شده گیاهان دارویی نیز در شهرستان کشت می شوند که
            بیشتر این گیاهان شامل گل محمدی و آویشن است. با توجه به سودآوری و
            استقبال خوبی که گیاهان دارویی دارد، گسترش کشت آن، گزینه شغلی مناسبی
            است. همچنین که درحال حاضر فرآوری آن نیز توسط مردم به صورت سنتی انجام
            می شود. درصورت افزایش کشت آن مردم رغبت بیشتری برای ایجاد واحدهای
            صنعتی پیدا می کنند.
          </p>
          <p>
            دانه های روغنی مانند آفتابگردان در شهرستان تولید می شوند. با توجه به
            واردات بی رویه در زمینه دانه های روغنی، افزایش کشت آن ها مقرون به
            صرفه است. قابلیت کشت کلزا نیز وجود دارد که دراولویت های بعدی قرار می
            گیرد.
          </p>
          <p>
            جو، پیاز، یونجه و حبوباتی مانند نخود، عدس و انواع لوبیا(لوبیا
            قرمز،چیتی و سفید) نیز در شهرستان کشت می شوند. افزایش سطح کشت آن ها
            به عنوان محصولات مهم کشاورزی که از نیازهای ضروری هستند،پیشنهاد می
            شود.
          </p>
          <p>
            کشت محصولاتی همچون ذرت دانه ای،ذرت علوفه ای،شبدر و سیب زمینی با
            اقلیم شهرستان سازگاری دارد و پیشنهاد می شود که در اولویت آخر قرار
            می‌گیرند.
          </p>
        </Section>
        <Section id="services" title="خدمات" size="h3">
          <p>
            سردشت شهرستان مرزی است و قبلا با باز بودن مرز، مردم زیادی به مشاغل
            خدماتی مانند مبادلات تجاری مشغول بودند ولی با بسته شدن مرز، مشاغل
            خدماتی نسبت به گذشته مقداری کمرنگ تر شده است. البته در شهرستان یک
            بازارچه مرزی وجود دارد که کالاهای وارداتی از مرزهای کشور وخصوصا بانه
            در این بازارچه به فروش می رسند. درحال حاضر نیز مردم به فروشندگی
            تمایل دارند و از آن استقبال می کنند و باتوجه به شرایط گفته شده(وجود
            بازارچه مرزی) این شغل سوددهی خوبی خواهد داشت.{" "}
          </p>
          <p>
            مشاغل خدماتی دیگری وجود دارند که در اولویت اول مزیت های شغلی این
            حوزه قرار می گیرند و مزیت بالاتری نسبت به فروشندگی دارند و آن، مشاغل
            مربوط به گردشگری است. در شهرستان سردشت جاذبه های گردشگری زیادی وجود
            دارد که واقعا برای گردشگر جذاب است.(در قسمت اول به تعدادی از این
            مکان ها اشاره شد) اما متاسفانه آن چنان که باید درحوزه گردشگری کار
            نشده است. احداث اقامتگاه بومگردی،رستوران های بومی،هتل و مسافرخانه از
            اقداماتی است که می توان در این زمینه انجام داد و گردشگر بیشتری را
            جذب نمود و کسب درآمد کرد. شهرستان سردشت بسیار مسافرپذیر است ولی
            ازلحاظ امکانات هتل و مسافرخانه بسیار ضعیف است. در سراسر شهرستان فقط
            یک هتل وجود دارد که کفایت نمی کند.
          </p>
        </Section>
        <Section id="handicrafts" title="صنایع دستی" size="h3">
          <p>
            در شهرستان سردشت به صنایع دستی توجه خوبی شده است. قالی بافی یکی از
            صنایع دستی شهرستان است که نسبت به سایر صنایع دستی مورد استقبال
            بیشتری واقع شده است. به نظر می رسد افزایش تولید قالی به شرط
            بازاریابی صحیح صرفه اقتصادی خوبی داشته باشد.
          </p>
          <p>
            گلیم بافی، جاجیم بافی، تولید سبد، دستمال بافی و تولید کفش کلاش از
            صنایع دستی دیگر این شهرستان هستند که قابلیت گسترش دارند.
          </p>
        </Section>
        <Section id="fisheries" title="شیلات" size="h3">
          <p>
            در شهرستان سردشت پرورش ماهی سردابی انجام می شود و به نظر می رسد تنها
            برای این ماهی قابلیت پرورش وجود داشته باشد. همچنین افزایش واحدهای
            پرورش ماهی سردابی مقرون به صرفه است.
          </p>
        </Section>
        <Section id="industry" title="صنعت" size="h3">
          <p>
            شهرستان سردشت معادن سیلیس و طلا دارد که متاسفانه فرآوری درخصوص آن ها
            صورت نمی گیرد و به صورت خام به تکاب فرستاده می شود. با فرآوری این
            مواد معدنی سود کلانی را می توان به دست آورد.البته احداث واحدهای
            فرآوری نیز نیازمند سرمایه کلانی است.
          </p>
          <p>
            تولید پوشاک از مشاغل صنعتی است که در این شهرستان جواب می دهد. درواقع
            با توجه به اینکه می توان پارچه های جین را از ترکیه وارد کرد، این شغل
            در شهرستان مزیت دارد و می توان در این حیطه فعالیت کرد.
          </p>
          <p>
            صنایع فعال شهرستان سردشت عبارتند از: کارخانه های تولید نایلون، شن،
            ماسه و آسفالت، یخ، مصنوعات بتنی، لوله های پلی اتیلن، روغن موتور، کفی
            و داشبود خودرو، پلاستیک و بازیافت زباله های تر و خشک، کشمش،آب انگور
            و کارخانه بسته بندی ادویه.
          </p>
        </Section>
      </CityContent>
    </div>
  )
}
