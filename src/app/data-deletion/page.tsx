import Header from "@/components/Header";

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1D] selection:bg-[#1D1D1D] selection:text-white">
      <Header />
      
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1D1D1D]">Data Deletion Instructions</h1>
        
        <div className="space-y-6 text-[#555555] leading-relaxed">
          <p>
            According to the Facebook Platform rules, we have to provide a User Data Deletion Callback URL or Data Deletion Instructions URL. If you want to delete your activities and data for the Youth Development Center (YDC) app, you can follow these instructions:
          </p>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">Removing the App from Facebook</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Go to your Facebook Account&apos;s Settings & Privacy.</li>
            <li>Click &quot;Settings&quot;.</li>
            <li>Go to &quot;Apps and Websites&quot; where you will see all of the apps and websites you linked with your Facebook.</li>
            <li>Search and Click &quot;Youth Development Center&quot; in the search bar.</li>
            <li>Scroll and click &quot;Remove&quot;.</li>
            <li>Congratulations, you have successfully removed your app activities.</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#1D1D1D] mt-8 mb-4">Account Deletion Request</h2>
          <p>
            If you wish to completely delete your YDC account and all associated data from our servers, please contact our support team:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Email: <strong>info@ydc.org.pk</strong></li>
            <li>Subject: <strong>Account Deletion Request</strong></li>
          </ul>
          <p className="mt-4">
            Please include the email address associated with your account in the email body. Our team will process your request and securely delete your data within 7 business days.
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
            <a href="/privacy-policy" className="hover:text-[#1D1D1D] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
