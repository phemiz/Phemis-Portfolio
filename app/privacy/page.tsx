import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-white pt-24">
            <Header />

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    Privacy Policy
                </h1>
                <p className="text-white/60 mb-12">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                        <p className="text-white/70 leading-relaxed">
                            Welcome to Phemis Portfolio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect,
                            use, disclose, and safeguard your information when you visit our portfolio website. Please read
                            this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
                            do not access the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
                        <h3 className="text-xl font-semibold mb-3 text-white/90">Personal Data</h3>
                        <p className="text-white/70 leading-relaxed mb-4">
                            We may collect personally identifiable information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                            <li>Contact us through the contact form</li>
                            <li>Subscribe to our newsletter (if applicable)</li>
                            <li>Interact with our website features</li>
                        </ul>
                        <p className="text-white/70 leading-relaxed mt-4">
                            This information may include your name, email address, and any other information you choose to provide.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-white/90">Automatically Collected Information</h3>
                        <p className="text-white/70 leading-relaxed">
                            When you visit our website, we may automatically collect certain information about your device,
                            including information about your web browser, IP address, time zone, and some of the cookies
                            installed on your device. This is standard practice for most websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            We use the information we collect in the following ways:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                            <li>To respond to your inquiries and provide customer support</li>
                            <li>To send you updates and promotional materials (with your consent)</li>
                            <li>To improve our website and user experience</li>
                            <li>To monitor and analyze usage and trends</li>
                            <li>To protect against fraudulent or illegal activity</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Disclosure of Your Information</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            We do not sell, trade, or rent your personal information to third parties. We may share your
                            information in the following situations:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                            <li><strong className="text-white/90">By Law or to Protect Rights:</strong> If we believe disclosure is necessary to comply with applicable law, regulation, legal process, or governmental request</li>
                            <li><strong className="text-white/90">Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                            <li><strong className="text-white/90">With Your Consent:</strong> We may disclose your information for any other purpose with your consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-white/70 leading-relaxed">
                            We may use cookies and similar tracking technologies to track activity on our website and store
                            certain information. Cookies are files with a small amount of data that may include an anonymous
                            unique identifier. You can instruct your browser to refuse all cookies or to indicate when a
                            cookie is being sent. However, if you do not accept cookies, you may not be able to use some
                            portions of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                        <p className="text-white/70 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal
                            information. However, please note that no method of transmission over the Internet or method of
                            electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
                            your personal information, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Your Data Protection Rights</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            Depending on your location, you may have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                            <li><strong className="text-white/90">Access:</strong> Request copies of your personal data</li>
                            <li><strong className="text-white/90">Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                            <li><strong className="text-white/90">Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong className="text-white/90">Restriction:</strong> Request restriction of processing your personal data</li>
                            <li><strong className="text-white/90">Objection:</strong> Object to our processing of your personal data</li>
                            <li><strong className="text-white/90">Data Portability:</strong> Request transfer of your data to another organization</li>
                        </ul>
                        <p className="text-white/70 leading-relaxed mt-4">
                            To exercise any of these rights, please contact us at contact@phemis.dev.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Third-Party Links</h2>
                        <p className="text-white/70 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy
                            practices or content of these third-party sites. We encourage you to review the privacy policies
                            of any third-party sites you visit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Children&apos;s Privacy</h2>
                        <p className="text-white/70 leading-relaxed">
                            Our website is not intended for children under the age of 13. We do not knowingly collect
                            personally identifiable information from children under 13. If you are a parent or guardian and
                            believe your child has provided us with personal information, please contact us so we can delete
                            such information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-white/70 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to
                            review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                            <p className="text-white/90">
                                <strong>Email:</strong> <a href="mailto:contact@phemis.dev" className="text-white hover:underline">contact@phemis.dev</a>
                            </p>
                            <p className="text-white/90 mt-2">
                                <strong>Website:</strong> <a href="/" className="text-white hover:underline">Phemis Portfolio</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
