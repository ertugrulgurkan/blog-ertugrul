import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="Hakkımda">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">Hakkımda</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Ertuğrul Gürkan Kimdir?</h3>
        <p className="mb-3">Adım Ertuğrul, Bir yazılım ve teknoloji meraklısıyım, hakkımda daha fazla bilgiye ulaşmak istiyorsanız aşağıdaki kişisel adresime giriş yapabilirsiniz.</p>
        <a href="https://ertugrulgurkan.com.tr/">Kişisel Sitem</a>
      </div>
    </Layout>
  );
}
