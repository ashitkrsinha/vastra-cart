import { Clock, Headset, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            detail: "794 Francisco, San Francisco, CA 94102, USA",
            subdetail: "Visit our main office"
        },
        {
            icon: Phone,
            title: "Phone Support",
            detail: "+1 (212) 456-7890",
            subdetail: "Mon - Fri, 9am - 8pm EST"
        },
        {
            icon: Mail,
            title: "Email Us",
            detail: "support@gocart.com",
            subdetail: "We respond within 24 hours"
        },
        {
            icon: Headset,
            title: "24/7 Customer Help",
            detail: "Live Chat Available",
            subdetail: "Dedicated support team"
        }
    ]
    return (
        <Layout>
            <div className="min-h-[70vh] mx-6">
                <div className="max-w-7xl mx-auto my-12 sm:my-16">
                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl sm:text-4xl text-slate-500 dark:text-slate-400">
                            Get In <span className="text-slate-800 dark:text-slate-100 font-medium">Touch</span>
                        </h1>
                        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl">
                            Have questions about products, orders, or setting up your store on GoCart? We'd love to help you out. Contact us through any of our channels below.
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {contactInfo.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col items-start gap-4 transition hover:shadow-md"
                            >
                                <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-base">{item.title}</h3>
                                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm mt-1">{item.detail}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.subdetail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Business Hours Banner Card */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/40 border border-indigo-100 dark:border-slate-700/80 max-w-2xl">
                        <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold mb-3">
                            <Clock size={22} className="text-indigo-500 dark:text-indigo-400" />
                            <h3 className="text-lg">Business Hours</h3>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex justify-between border-b border-slate-200 dark:border-slate-700/60 pb-2">
                                <span>Monday - Friday</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">9:00 AM - 8:00 PM EST</span>
                            </div>
                            <div className="flex justify-between pt-1">
                                <span>Saturday - Sunday</span>
                                <span className="font-medium text-slate-700 dark:text-slate-300">10:00 AM - 5:00 PM EST</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;