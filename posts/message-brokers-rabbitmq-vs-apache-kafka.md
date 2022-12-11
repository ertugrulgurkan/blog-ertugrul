---
title: 'Message Brokers: RabbitMQ vs. Apache Kafka'
date: 'Jun 30, 2021'
excerpt: 'RabbitMq ve Apache Kafka arasındaki genel farklar'
cover_image: '/images/posts/message-brokers.png'
category: 'Rehber'
author: 'Ertuğrul Gürkan'
cover_in_article: true
author_image: '/images/authors/author.jpg'
---
Message Brokers
===============

Message Broker, mesaj kuyruk sistemlerine verilen genel isimdir. Mesaj
aracısı olarak da geçer. bir mesajı gönderenin resmi mesajlaşma
protokolünden alıcının resmi mesajlaşma protokolüne çeviren bir ara
bilgisayar program modülüdür. RabbitMQ, Kafka, MSMQ, ActiveMQ, Azure
Service Bus yaygın olarak kullanılan message broker yazılımlarıdır.

RabbitMQ Nedir?
---------------

RabbitMQ, open source olarak kullanılan bir mesaj kuyruk sistemidir. Bir
uygulamadan gelen bir mesaj alır ve sırası geldiğinde başka bir
uygulamaya ileten sistemdir. RabbitMQ basit manada bir postane ya da
kargo şubesi olarak düşünülebilir. Görevi kendisine gelen mesajı uygun
zamanda receiver cihaza ulaştırmaktır.

### RabbitMQ özellikleri

-   Erland diliyle yazılmıştır
-   OpenSource'dur. Bu sayede büyük bir topluluğa sahiptir ve yaygın
    olarak kullanılır.
-   CrossPlatform destekler bu yüzden farklı cihazlarda ve işletim
    sistemlerinde kullanılabilir.
-   Docker ile çalışabilir ve oldukça kolay bir kurulumu mevcuttur.
-   Web arayüze sahiptir ve monitoring işlemi için avantajlıdır.


Yazılım uygulamalarında ölçeklenebilir bir ortam oluşturmak ve big
data'yı kontol etmek için mesaj kuyruk sistemleri kullanılır. Bir web
sitesi veya bir uygulama kullanıcılardan gelen isteklere anlık olarak
cevap veremeyecek kadar büyük veriler barındırıyorsa, çok fazla istek
varsa bunlar iş yüklerine oranla sıraya konularak asenkron bir şekilde
cevap verilmesi bekleniyorsa RabbitMQ gibi yazılımlar bu süreci otomatik
olarak gerçekleştirmeye yarar.

RabbitMQ bu sayede uygulamadaki response time'ı düşürerek daha efektif
bir mekanizma haline çevirir.

### RabbitMQ işleyişi


RabbitMQ Producer ve Consumer olmak üzere iki aktörü mevcuttur.

**Producer**: Gönderilen mesajın sahibidir.\
**Consumer**: Mesajın alıcısıdır.\
**Queue**: Mesajların rabbitMQ üzerinde depolandığı ve sıraya eklendiği
kuyruktur.

Publisher mesajı publish ettikten sonra mesajı RabbiMQ'daki exchange
karşılar. Exchange aldığı mesajı rabbitMQ içerisindeki ilgili route
üzerinden kuyruğa yönlendirir. Mesajın exchange'ten kuyruğa nasıl
gideceğinin bilgisi route üzerinde tanımlanır. Mesajlar queue'de
sıralanır. Queue bilindiği gibi FIFO (First in First out) mantığına
sahiptir. Kuyrultaki mesajlar sırasıyla consumer'a iletilir.

-     Farklı protokoller kullanılmak isteniyorsa, (AMQP, STOMP, MQTT,
    AMQP 1.0)
-     Yüksek performansa ihtiyaç varsa
-     Kolay bir entegrasyon isteniyorsa
-     Mesajların ulaşmasını garanti olarak isteniyorsa
-     Daha az sayıda mesajlaşma mevcutsa

RabbitMQ tercih edilmelidir.

### RabbitMQ Dezavantajları

-     Yüksek hacimli bir mesajlaşma sistemi için uygun değildir.
-     Consumer'lar sürekli online durumda kabul edilir. Eğer mesaj
    iletilmezse mesajıbeklemede olarak işaretler.
-     Mesajlar persistent olarak saklanmak isteniyorsa RabbitMQ
    persistent modundakullanılmalıdır. Bunun dışında RabbitMQ restart
    edildiğinde kuyruktaki tüm mesajlar kaybolacaktır.

Apache Kafka
------------
RabbitMQ'da anlatılan konseptin benzerine sahiptir. Kafka da message
broker yazılımıdır. Broker kendisinden bir mesaj gönderilmesi
istendiğinde o mesajı gönderir ancak ulaşıp ulaşmadığını kontrol etmez.
Queue içerisindeki takip cursor'unun nerede kaldığı belli değildir. Bunu
bilmesi gereken consumer'dır. Kafka genellikle rabbitMQ'ya göre daha
büyük ölçekli mesajlaşma uygulamalarında veya streaming uygulamalarında
kullanılır. Streaming gibi servislerde tercih edilmesinin sebebi
kuyruktaki mesajların kaybolmamasıdır ve persistent olarak
saklanmasıdır. Örneğin client izlediği bir videoyu geri sardığında
broker, eski mesajarı kolayca getirip consumer'a iletebilir.

-     Consumer'lar mesajı almak için anlık olarak broker'ı tetiklemek
    durumundaysa
-     Mesajlar kaybolmamalıysa (Persistency)
-     Kolay ölçeklenebilir bir yapı isteniyorsa
-     Aynı anda çok sayıda fazla mesajlaşma yapılıyorsa
-     Cursor'un queue'da nerede kaldığını consumer'ın kontol etmesi
    isteniyorsa;
    Kafka tercih edilmelidir.

    ### Kafka Dezavantajları
-   Native Kafka Protokol adında tek bir mesajlaşma protolü kullanır.
-   .NET için 3rd party bir sdk kullanılmalıdır. Desteği resmi olarak
    mevcut değildir.