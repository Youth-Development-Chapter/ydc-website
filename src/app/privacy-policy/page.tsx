import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1D] selection:bg-[#1D1D1D] selection:text-white">
      <Header />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1D1D1D]">Privacy Policy</h1>
        
        <div className="space-y-6 text-[#555555] leading-relaxed">
          <p>
            Welcome to the Youth Development Center (YDC). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our applications, including our Facebook login integration.
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you use our Facebook or Google login, we collect your basic profile information such as your name, email address, and profile picture. This is solely used to create and authenticate your account on the YDC Portal.
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">2. How We Use Your Data</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect YDC and our users. Your email address may be used to send you updates regarding your account, courses, or events.
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">3. Data Sharing and Security</h2>
          <p>
            We do not share your personal information with companies, organizations, or individuals outside of YDC except in cases where we have your consent or are required by law. We implement security measures to ensure your data is protected against unauthorized access.
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">4. Your Rights</h2>
          <p>
            You have the right to access, update, or delete the information we have on you. If you wish to delete your data, please see our Data Deletion Instructions.
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@ydc.org.pk.
          </p>
        </div>
      </main>

      <footer className="border-t border-[#E5E5E5] py-12 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#555555] text-sm">
            &copy; {new Date().getFullYear()} Youth Development Center (YDC). All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-[#555555]">
            <a href="/" className="hover:text-[#1D1D1D] transition-colors">Home</a>
            <a href="/data-deletion" className="hover:text-[#1D1D1D] transition-colors">Data Deletion</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
