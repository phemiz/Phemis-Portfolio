import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background text-white pt-24">
            <Header />

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    Terms of Service
                </h1>
                <p className="text-white/60 mb-12">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
                        <p className="text-white/70 leading-relaxed">
                            These Terms of Service (&quot;Terms&quot;) govern your access to and use of Phemis Portfolio&apos;s website
                            (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you
                            disagree with any part of the terms, you may not access the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Use of Service</h2>
                        <h3 className="text-xl font-semibold mb-3 text-white/90">Permitted Use</h3>
                        <p className="text-white/70 leading-relaxed mb-4">
                            You may use our Service for lawful purposes only. You agree to use the Service in compliance with
                            all applicable laws and regulations.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-white/90">Prohibited Activities</h3>
                        <p className="text-white/70 leading-relaxed mb-4">
                            You agree not to engage in any of the following prohibited activities:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                            <li>Copying, distributing, or disclosing any part of the Service without authorization</li>
                            <li>Using any automated system to access the Service in a manner that sends more requests than a human can reasonably produce</li>
                            <li>Transmitting spam, chain letters, or other unsolicited communications</li>
                            <li>Attempting to interfere with, compromise, or disrupt the Service or servers</li>
                            <li>Collecting or harvesting any personally identifiable information from the Service</li>
                            <li>Using the Service for any illegal or unauthorized purpose</li>
                            <li>Impersonating another person or entity</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Intellectual Property Rights</h2>
                        <h3 className="text-xl font-semibold mb-3 text-white/90">Our Content</h3>
                        <p className="text-white/70 leading-relaxed mb-4">
                            The Service and its original content, features, and functionality are owned by Phemis Portfolio
                            and are protected by international copyright, trademark, patent, trade secret, and other
                            intellectual property laws.
                        </p>

                        <h3 className="text-xl font-semibold mb-3 text-white/90">Your Content</h3>
                        <p className="text-white/70 leading-relaxed">
                            If you submit any content to our Service (such as through contact forms or comments), you grant
                            us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content
                            in connection with the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Portfolio and Project Information</h2>
                        <p className="text-white/70 leading-relaxed">
                            The projects, code samples, and technical information displayed on this portfolio are provided
                            for informational purposes only. While we strive for accuracy, we make no warranties or
                            representations about the completeness, accuracy, or reliability of any information presented.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Third-Party Links and Services</h2>
                        <p className="text-white/70 leading-relaxed">
                            Our Service may contain links to third-party websites or services (such as GitHub, LinkedIn, or
                            Twitter) that are not owned or controlled by Phemis Portfolio. We have no control over, and
                            assume no responsibility for, the content, privacy policies, or practices of any third-party
                            websites or services. You acknowledge and agree that we shall not be responsible or liable for
                            any damage or loss caused by your use of any such content or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Disclaimer of Warranties</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed
                            or implied, regarding:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                            <li>The operation or availability of the Service</li>
                            <li>The accuracy, completeness, or reliability of any content</li>
                            <li>That the Service will be uninterrupted, secure, or error-free</li>
                            <li>That defects will be corrected</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                        <p className="text-white/70 leading-relaxed">
                            To the maximum extent permitted by law, Phemis Portfolio shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                            whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible
                            losses resulting from:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mt-4">
                            <li>Your access to or use of (or inability to access or use) the Service</li>
                            <li>Any conduct or content of any third party on the Service</li>
                            <li>Unauthorized access, use, or alteration of your content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Indemnification</h2>
                        <p className="text-white/70 leading-relaxed">
                            You agree to defend, indemnify, and hold harmless Phemis Portfolio and its affiliates from and
                            against any claims, damages, obligations, losses, liabilities, costs, or expenses arising from:
                        </p>
                        <ul className="list-disc list-inside text-white/70 space-y-2 ml-4 mt-4">
                            <li>Your use of the Service</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of any third-party rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Termination</h2>
                        <p className="text-white/70 leading-relaxed">
                            We may terminate or suspend your access to the Service immediately, without prior notice or
                            liability, for any reason, including if you breach these Terms. Upon termination, your right to
                            use the Service will immediately cease.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
                        <p className="text-white/70 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of your jurisdiction,
                            without regard to its conflict of law provisions. Any disputes arising from these Terms or your
                            use of the Service shall be resolved in the courts of competent jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
                        <p className="text-white/70 leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                            revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking
                            effect. What constitutes a material change will be determined at our sole discretion. By
                            continuing to access or use our Service after revisions become effective, you agree to be bound
                            by the revised terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Severability</h2>
                        <p className="text-white/70 leading-relaxed">
                            If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                            changed and interpreted to accomplish the objectives of such provision to the greatest extent
                            possible under applicable law, and the remaining provisions will continue in full force and effect.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us:
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

                    <section className="bg-white/5 border border-white/10 rounded-lg p-6 mt-12">
                        <p className="text-white/80 text-sm">
                            <strong>Acknowledgment:</strong> By using the Service, you acknowledge that you have read these
                            Terms of Service and agree to be bound by them.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
