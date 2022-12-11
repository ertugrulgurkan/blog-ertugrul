---
title: 'Java Örnek Mülakat Soruları'
date: 'Nov 29, 2022'
excerpt: 'Java mülakatlarından en çok karşınıza çıkabilecek sorular ve cevapları'
cover_image: '/images/posts/java-questions-header.png'
category: 'Java'
author: 'Ertuğrul Gürkan'
cover_in_article: true
author_image: '/images/authors/author.jpg'
---

#### **JVM Nedir?**

JVM, bir bilgisayarın java kodunu çalıştırabilmesine olanak sağlayan
sanal makineye verilen addır. bytecode uzantılı dosyaları makine koduna
çeviren bu soyut makine, java kodunu makine ve cihaz bağımsız aynı
şekilde işletmemize olanak sağlar.

 

#### **JDK ve JRE arasındaki farklar nelerdir?**

JRE, Java runtime editioni bir java uygulamasını çalıştırmak için
gerekli olan java komponentlerini ve kütüphanelerini içeren içersinde
JVM de kurulu olan programa denir.

JDK, Java ile yazılım geliştirmek için ihtiyaç duyulan yazılım kitlerini
içinde bulundurur. .java uzantılı dosyaların compile edilip .class
uzantılı ara dosyaların oluşmasına olanak sağlar. JDK, içerisinde
JVM,JRE ve Java Compiler'ını bulundurur.

 

#### **Object Oriented Programming nedir?**

Nesne Yönelimli Programlama (NYP) mantıksal işlemlerden ziyade,
nesnelere (object) ve nesneler üzerinde işlemlere odaklanan programlama
dili modelidir. NYP'de programlar, nesnelerin birbirileriyle etkileşime
geçmeleri sağlanmasıyla tasarlanır.

 

#### **Nesneye yönelik programlamanın temel kavramları nelerdir?**

1- Nesne(Object): Kendine has özellikleri ve belli durumlarda bu
özelliklerine bağlı çeşitli tutumlar sergileyen somut ya da soyut
varlıklardır.

2- Sınıf(Class): Aynı türden nesnelerin oluşturulduğu yapıya verilen
isimdir.

3- Method:Bir nesnenin davranış türüdür, bir method sınıf içerisinde
bulunur ve nesnelerin davranışlarını tanımlar.

 

#### **Object Oriented Programming prensipleri nelerdir? (Encapsulation, Abstraction, Inheritence, Polymorphism)**

1-Abstraction(Soyutlama): Sınıfların içerisindeki metotların içlerini
dışarısı için soyutlama veya gizleme işlemine Abstraction adı verilir.
Bu işlem java'da abstract sınıflarla veya interface'ler ile
yapılmaktadır. Abstract sınıflar genellikle ortak özellikleri olan
nesneleri tek bir çatı altında toplamak için kullanılır. İçi boş ya da
dolu metotlar tanımlanabilir. Abstract sınıflar içersinde bir obje new
keywordu ile yaratılamaz. Ve bir abstract metot varsa o sınıfın abstract
olarak tanımlanması gerekir. Abstract classlar genellikle is-a
ilişkisine sahiptir. Interface sınıflar ise daha çok can-do tarzındadır.
interface sınıflarında metotlar tanımlanabilir ve bu interface'i
implemente eden sınıf interface'de yazılı olan metotların içini
doldurmak zorundadır. Interface bir Vehicle ise; implemente edilen
sınıflar Car, Plane, Boat olabilir. Abstract Sınıfta ise Abstract class
Dog ise, extend edilen alt sınıflar Köpek cinsleri olabilir. Bir başka
değişle abstract sınıflar bir üst sınıfın özelliklerini tanımlamaya ve
alt sınıfın bu özellikleri kendilerine göre doldurmasına yarar,
interface ise implemete edilecek birden fazla sınıfın ortak bir özellik
kümesi olarak tanımlanabilir.

2-Encapsulation(Kapsülleme): Sınıf içerisindeki fieldların veya
değişkenlerin kapsülize edilerek dışarıdaki packagelerden veya
sınıflardan erişebilmesini kontrol etmeye yarar. Get ve Set metotları
ile erişim sağlanır.

3-Inheritence(Kalıtım): Bir sınıfın bazı özelliklerini bir üst sınıftan
almasına denir. Bu alt sınıf kendi özelliklerine ve fonksiyonlarına da
sahip olup, extend ettiği üst sınıfının tüm özelliklerini de
karşılamaktadır.

4-Polymorphism(Çok Biçimlilik): Çok biçimlilik, bir değişkenin, işlevin
veya nesnenin birden çok biçim alma yeteneğidir. Method overloading ve
overriding. Bir referansın birden fazla obje gibi davranmasına denir.
Extend edilen sınıfın obje referansı aynı zamanda alt sınıfı da refer
edebilir. Bu sayede alt sınıfların objelerini tek bir üst sınıf
referansı ile eşitleyebilir ve bunu çeşitli şekillerde kullanabiliriz.

 

#### **Java neden platform bağımsız bir dildir?**

Java, temel işletim sisteminden bağımsız olarak herhangi bir sistemde
çalışabilen bayt kodları nedeniyle platformdan bağımsız olarak
adlandırılır.

 

#### **Method Overloading ve Method Overriding nedir?**

Method Overloading aynı isimde metodun farklı parametreler ile tekrardan
tanımlanmasına denir, Method Overriding ise daha önce üst sınıftan
tanımlanmış olan bir metodun alt sınıfta tekrardan tanımlanmasıdır. Bu
tanımlanan metot, eğer alt sınıftan üretilmiş bir obje üzerinden
çağırılırsa override edilen alt sınıfta bulunan metot çağırılacak ve
işlenecektir.

** **

#### **Java Collectionları nelerdir?**

Java Collectionları Set, Map ve List olmak üzere 3 ana interface
üzerinden tanımlanabilir. Bu interface'lerin nesleleri ise şunlardır;

Set: HashSet, TreeSet, LinkedHashSet

Map: HashTable, HashMap, TreeMap, LinkedHashMap

List: ArrayList, Vector, Stack, LinkedList, Queue

 

#### **Upcasting nedir? Downcasting nedir?**

Bir sınıf(Üst Sınıf) kendisini extend eden (Alt) sınıfa cast edilebilir
. Buna downcasting denir .

Bir sınıf extend ettiği sınıfa cast edilebilir. Buna upcasting denir.
(tip dönüşümü).

 

#### **Integer ve int arasındaki fark nedir?**

int primative değişken tipidir. Sınıf olmadığı için herhangi bir metodu
yoktur. Null değer alamaz.

Integer ise bir sınıftır ve tanımlandığında obje özelliği gösterir.
Süper sınıf olan object sınıfını extend eder bu yüzden null değer
alabilir. İçerisinde integer değişkeni ile alakalı sayısal işlemler veya
çevrimler yapabilmemizi sağlayan metotlar bulunmaktadır.

 

#### **Serilization nedir?**

Bir nesnenin veya bir sınıfın saklanacak forma dönüştürülme işlemidir.
Extend edilen Serilization sınıfı alt sınıf olan kullanacağımız sınıfın
byte'lar halinde streamlere yazılabilir böylece bir java objesi
veritabanına kaydedilebilir.

Deserilization ise byte haline çevrilen java objesinin eski haline
çevrimine denir.

 

#### **Autoboxing boxing nedir?**

Wrapper'lar primative 8 değişkenin
(byte,short,int,long,float,double,boolean,char) class halleridir.
Autoboxing primative bir değişkenin wrapper sınıf tipine otomatik olarak
dönüştürme işlemine denir. Boxing ise yine aynı wrapper sınıfına
dönüştürme işlemidir ancak new ile üretilip constructor içerisinde bir
initialization yapılır.

 

#### **Autounboxing ve Unboxing nedir?**

Wrapper tipinden primative tipine otomatik olarak dönüştürme işlemine
denir.

Unboxing ise yine aynı dönüştürme işlemidir fakat bu dönüştürme
.intValue() .shortValue() gibi metotlar ile sağlanır.

 

#### **Garbage Collector nedir?**

Garbage Collectionlar, otomatik Garbage Collectionları mekanizması ile
memory-leak lere engel olarak java'nın çalışır durumdayken verimliliğini
koruması ve hafızayı fazla kullanımdan dolayı doldurmamasını sağlar. New
ile üretilen objeler bilgisayar hafızasında yer tutacaktır. Bu objelerin
kullanımları sonlandığı zaman Garbage Collector tarafından obje silinir
ve kapladığı alan ram'den temizlenir.

 

#### **Mutable ve Immutable nedir?**

Immutable nesneler bir kez oluşturulduktan sonra içeriği
değiştirilemeyen sınıflardır. Tam tersi olarak da Mutable sınıflar ise
değiştirilebilir sınıflardır.

Immutable sınıflara örnek (String, Integer, Long, Double..) BigDecimal,
BigInteger olarak verilebilir.

Mutable sınıflara örnek olarak ise Date sınıfı verilebilir. Mutable, Set
ile yeni bir değer atayabildiğimiz sınıflara denir.

 

Java'da Immutable bir sınıf yaratmak için,

1-Sınıf final ile başlaması gerekir böylece extend edilemez.

2-Hiçbir değişken set metodu ile enkapsüle edilmemelidir.

3-Tüm değiştirilebilir alanlar final olarak tanımlanmalıdır böylece
yalnızca bir kez atanabilir.

4-Tüm alanlar constructor aracılığı ile final bir değere atanmalıdır.

5-Sınıfın tüm alanları private olarak tanımlanmalıdır.

 

Immutable nesneler Thread-Safe'tir. Çünkü oluştuktan sonra içeriği
değiştirilemez bu da threadlerde kullanımda ortaya çıkabilecek
senkronizasyon sorunlarını ortadan kaldırır

 

#### **Instance nedir?**

Referanstır, Objenin eşitlendiği değere denir. Bu instance kullanılarak
new olarak üretilen obje birden fazla kez kullanılabilir.

 

#### **Process ve Thread arasındaki farklar nelerdir?**

Günümüzde bir bilgisayar sisteminde tek bir işlem birimi olsa dahi, bu
tek işlem birimi(işlemci) işletim sisteminin kaynak kullanım
stratejisine göre her birine belli bir zaman ayırma esasına göre işlem
yapmaktadır. Dolayısıyla bilgisayarda aynı anda çok sayıda thread ve
process bulunmaktadır. Process kendisine ait kaynakları olan işlem
birimidir. Örneğin her process kendisine ait hafıza alanına sahiptir.
Theadler de processler gibi işlem birimleridir ve hafif siklet
processler (lightweight processes) olarak adlandırılır. Theadler daha az
kaynağa ihtiyaç duymaktadır. Theadler bir process içinde yer almaktadır
yani her Thead mutlaka bir processe sahiptir ve onun kaynaklarından
faydalanır. Theadler de processler gibi uygulamalarda paralelllik elde
etmek için kullanılır. Ancak processler daha bağımsız işletim
birimleridir kendilerine ait durum bilgileri, kendilerine ait adres
alanları varodr. Bir process içerisinde birçok thread barındırabilir ve
herbir thread mutlaka bir process içinde yer almaktadır. Aynı process
içindeki tüm Theadler aynı hafıza ve aynı durumu paylaşır birbirleriyle
direkt olarak haberleşebilirler çünkü aynı alanı paylaşırlar.

 

#### **Super ve this kavramları nedir?**

Super anahtar kelimesi (keyword) super class içindeki metotlara
fieldlara ve constructora erişmek için kullanılır. this anahtar
kelimesini kullanarak ise aynı sınıfa ait olan fieldlara metotlara ve
constructora erişebiliriz. This anahtar kelimesinin kullanıldığı yerde
aynı sınıfın geçerli bir instance'ı gibi davranır. super() this()
ifadeler ise mutlaka bir constructor içerisinde kullanılmalıdır. Static
metotlarda kullanılamaz.

 

#### **Javada Access modifiers nelerdir? Farkları nelerdir? (Default, Private, Protected, Public)**

Javada, metotlara, classlara ve değişkenlere erişim seviyesini
belirlemek için kullanılan keywordlerdir.

1-Default: Aynı sınıftan, altsınıftan ve aynı package'den erişilebilir.
Javada bir access modifier tanımlanmazsa default olarak kabul edilir ve
bu geçerli olur.

2-Private: Sadece aynı sınıftan erişilebilir.

3-Protected: Aynı sınıftan, aynı packageden ve alt sınıflardan
erişilebilir.

4-Public: Her yerden erişilebilir.

 

#### **Method ve Constructor arasındaki farklar nelerdir?**

Constructor, class çağırıldıgında ilk çalışan metotdur. Constructorılar
parametre alabilir fakat değer döndürmez. Overload edilir , override
edilmez. Her sınıfta default olarak gizli bir constructor bulunur ve
sınıfın objesi oluşturulduğunda ilk olarak bu constructor metodu
çalışır, işletilir. Parametereli constructorlar genellikle nesne ilk
oluşturulduğunda sınıf içerisindeki değişkenlerin atanması veya nesnenin
ilk oluştuğunda davranışlarını ayarlamak için kullanılır. Metod ise
sınıf içerisinde bir değil birden fazla kez kullanılabilir,
çağırılabilir. Override edilebilir. İhtiyaç halinde nesnenin
oluşturulduğu farklı sınıflar içerisinde çağırılabilir.

 

#### **Solid prensipleri nelerdir?**

1-Single responsibilty: Bir nesne ya da bir sınıfın tek bir sorumluluğu
olmalıdır.

2-Open-closed: Bir sınıf değişime kapalı gelişmeye açık olmalıdır.

3-Liskov's Substitution: Nesneler programın çalışmasında sorun
yaratmadan kendi alt örnekleriyle değiştirilebilmelidir.

4-Interface Segregation: Nesneler ihtiyaç duymadıkları metotların
interfacelerinden ayrıştırılmalıdır.

5-Dependency Inversion: Yüksek seviyeli sınıflar düşük seviyeli
sınıflara bağlı olmamalı, her ikisi de soyut kavramlara bağlı olmalıdır.

 

#### **Single Responsibilty nedir?**

Single responsibilty bir nesnenin tek bir amaçla yaratılmasını konu
alır. Bağlı olduğu sınıfın içerdiği davranışsal özellikler tek bir amaca
uygun olmalı başka bir davranış göstermemelidir. Örneğin bir çalışan
sınıfı içerisinde vergi hesaplama fonskiyonu bulunamaz. Bu single
responsibilty prensibine aykırı bir kod yazım şeklidir.

 

#### **Cohesion Nedir?**

Bir sınıfın oluşturulma amacını ne kadar temsil ettiğini gösterir.
OOP'de sınıfların belirli bir amaca yönelik yazılması beklenir. (High
Cohesion) Örnek verecek olursak matematik işlemi yapan bir sınıfa file
işlemlerini gerçekleyen bir metod daha eklediğimiz zaman high Cohesion
prensibini bozmuş oluruz.

 

#### **Coupling nedir?**

iki sınıfın birbirine olan bağımlılığı diyebiliriz. OOP'de nesnelerin
birbirleriyle az bağımlı olması benimsenir. (Low coupling) Örnek olarak
A sınıfı B sınıfına ne kadar bağımlıysa coupling bir o kadar artar. Bu
da projenin bakımını ve genişletilebilirliğini azaltır. Low coupling
için çeşitli prensipler uygulanır. Interface kullanımı, design
patternler gibi.

 

#### **Final anahtar kelimesi ne işe yarar?**

Final variables(değişkenler):Değiştirilemez. Static ile beraber Constant
olarak kullanılabilir.

Final class:Extend edilemez

Final methods: Override edilemez.

 

#### **Static değerlerin özellikleri ?**

Static variable:Class a aittir yani her nesne için bir defa
oluşturulmaz. Memory de bir defa oluşturulur.

Static method:Class a aittir yani her nesne için bir defa oluşturulmaz.
Class ismiyle çağrılabilir.

Static block:Class execute edildiği zaman heap de yerini alır.

 

#### **Stored Procedure Nedir?**

Procedure belli bir işi yapan kod parçasıdır. Stored Procedure Database
server ında tutulan ve ilk derlemeden sonra bir daha derlenmeye ihtiyaç
duyulmayan SQL ifadeleridir.

 

#### **Trigger Nedir?**

Trigger yani tetikleyici, ilişkisel veri tabanı yönetim sistemlerinde
bir tabloda belirli olaylar meydana geldiği zaman yani ekleme,
güncelleme, silme işlemlerinden biri gerçekleşmeden önce veya sonra
çalışan ve belirli işlemleri kodlandığı şekilde yerine getiren
yordamdır.

 

#### **Error ve Exception arasındaki farklar nelerdir?**

Error, jvm tarafından runtime'da handle edilmesi mümkün olmayan türden
hatalardır. Exception ise try catch ile handle edilebilir. Java'da
exceptionları 5 farklı keyword ile handle edilebilir. -- Try -- Catch --
Finally -- Throw -- Throws

 

#### **Checked Exception ve Unchecked Exception arasındaki farklar nelerdir?**

RuntimeException ve Error dışında Throwable sınıfını extend eden
sınıflar Checked Exceptions olarak tanımlanabilir. Checked Exceptionlar
compile edilirken alınan hatalardır. (IOException, SQLException)

RuntimeException sınıfını extend eden exceptionlar Unchecked
Exceptionlar olarak adlandırılır. Compile edilirken kontrol edilip
gözükmez, (ArithmeticException, NullPointerException)

 

#### **Reflection nedir ve hangi amaçla kullanılır?**

Java Reflection bir uygulama geliştirme arayüzü olup, o anki JVM'deki
sınıfları, arayüzleri ve nesneleri yansıtan, temsil eden kütüphanedir.
Özellikle geliştirme araçları yazarken reflection kütüphanesine ihtiyaç
duyarız. Reflection kütüphanesini kullanarak; -Bir nesnenin sınıfını
belirleriz -Classın fieldları, metodları, constructorları, üst classları
ve değişkenleri hakkında bilgiler alabiliriz -Bir arayüze ait olan sabit
ve metod tanımlamalarını tespit ederiz -Çalışma zamanına kadar ismi
bilinmeyen bir sınıf örneği yaratabiliriz (Bir bakıma runtime'da yeni
sınıflar yaratabilirsiniz) -Çalışma zamanına kadar ismi bilinmese de
sahaların değerini ayarlar ve alabiliriz. -Aynen çalışma zamanına kadar
bilinmeyen metodları çalıştırabiliriz. -Çalışma zamanına kadar
bileşenleri ve boyutu bilinmeyen diziler yaratabilir, daha sonra bu
dizinin bileşenlerini değiştirebiliriz.Küçük projelerde yapılan işlem
sayısı, kullanılan tip sayısı pek fazla değildir. Buna bağlı olarak
yazılan if-else blokları ve switch-case blokları nispeten küçük
olacağından okunmasında, takip edilmesinde çok sıkıntı yaşanmaz.
Reflection ve annotation'lar bu durumların tersinin ortaya çıktığı
genellikle büyük ölçekli projelerde kullanışlı mekanizmalardır.

 

#### **Singleton design pattern nedir?**

Singleton design pattern, creational design pattern kategorisindedir.

Bu tasarım örüntüsündeki amaç, bir class'tan sadece bir instance
yaratılmasını sağlar. Yani herhangi bir class'tan bir instance
yaratılmak istendiğinde, eğer daha önce yaratılmış bir instance yoksa
yeni yaratılır. Daha önce yaratılmış ise var olan instance kullanılır.

 

#### **Factory design pattern nedir?**

Bir sınıf oluşturup arada bir interface kullanarak, kullanılacak
sınıflar kümelenebilir, bununla birlikte araya bir factory (fabrika)
sınıfı eklenere soyut bir biçimde daha anlaşılabilir bir biçimde
yazılmasına factory design pattern denir.

 

#### **JPA / Hibernate arasındaki fark nedir?**

JPA bir spesifikasyondur, yani kurallar bütünüdür. Java EE ve Java SE
uygulamalarında kullanılır. Java Persistence API kendi başına bir şey
yapamaz, bir implementation'a yani uygulamak için bir araca ihtiyaç
duyar.Hibernate, Java geliştiricileri için geliştirilmiş bir ORM
kütüphanesidir. Nesne yönelimli modellere göre veritabanı ile olan
ilişkiyi sağlayarak, veritabanı üzerinde yapılan işlemleri
kolaylaştırır.JPA sadece bir spesifikasyon, yani bir implementasyonu
yok. JPA'yı izlenmesi gereken yönergeler veya bir arabirim olarak
düşünürken, Hibernate JPA uygulaması, JPA tarafından tanımlanan API
altında işlevsellik sağlayan koddur.

 

#### **Thead yaratmanın iki yolu nedir?**

1-Runnable interface'ini implemente ederek.

2-Thread sınıfını extend ederek.

 

#### **En çok kullanılan spring annotasyonları nelerdir ve ne işe yararlar?**

\@Controller -- for controller classes in Spring MVC project.

\@RequestMapping -- for configuring URI mapping in controller handler
methods. This is a very important annotation, so you should go through
Spring MVC RequestMapping Annotation Examples

\@ResponseBody -- for sending Object as response, usually for sending
XML or JSON data as response.

\@PathVariable -- for mapping dynamic values from the URI to handler
method arguments.

\@Autowired -- for autowiring dependencies in spring beans.

\@Qualifier -- with \@Autowired annotation to avoid confusion when
multiple instances of bean type is present.

\@Service -- for service classes.

\@Scope -- for configuring the scope of the spring bean.

\@Configuration, \@ComponentScan and \@Bean -- for java based
configurations.

#### 

#### **Spring scopeları nelerdir?**

-   Singleton
-   Prototype
-   Request
-   Session
-   Global-session

 

#### **Mikroservisler nedir? Monolithic mimariden farkı nedir neden tercih edilir? Avantajları dezavantajları?**

Mikroservis yekpare bir sistemi her biri bağımsız olarak çalışan e açık
protokoller (http, soap) vasıtasıyla birbiri ile iletişim kuran küçük
servislere ayrılmasını konu alır. Monolitik yapıya bir alternatif olarak
düşünülmüştür. Monolitik mimaride yapı tektir, nispeten anlaşılması
kolaydır ve tek bir dille geliştirilebilir. Uygulama büyüdükçe
codebasein yönetilmesi, bakımının ve deploy edilmesi zorlaşır.
Mikroservisler birbirinden bağımsız ve tek bir işe odaklanmıştır, 
Uygulama yatay eksende daha kolay scale edilebilir.



#### **Sync Async nedir? Arasındaki farklar nedir ve ne amaçla kullanılır?**

Senkron programlama, yazılımda her bir işlemin sıra ile yapılmasıdır.
Örneğin süpermarketlerdeki kasa kuyruğunda bir önceki müşteri,
ürünlerinin ödemesini yapmadan sizin ürünlerinize sıra gelmemektedir.
Beklerken yaşanan zaman kaybı Asenkron programlamada ortadan kalkar.
Asenkron programlama; işlemlerin birbirini beklemeden , bağımsız olarak
gerçekleşmesidir. Süpermarket örneğinden devam edecek olursak, Asenkron
programlama; her müşterinin sıra beklemeden istediği kasadan ödeme
yapabilmesini sağlamaktadır.

 

#### **Dependency Injection nedir?**

"Dependency Inversion" prensibinin uygulanmasını içeren bir
patterndir.Dependency Injection tekniğinde bağımlılık oluşturacak
parçalarının ayrılıp, bunların sisteme dışarıdan verilmesi (enjekte
edilmesi) ile meydana gelir. Temel olarak 3 tür DI vardır. Bunlar;
Constructor Injection, Setter Injection, Method Injection) Tüm yöntemler
bağımlı olan sınıfları dışarıdan enjekte etmeye dayanır.
