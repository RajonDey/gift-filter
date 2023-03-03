import Head from "next/head";
import styles from "styles/About.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>Giftlawn - Terms & Policy</title>
      </Head>
      <section className={styles.page}>
        <h1>Terms & Policies</h1>

        <h2>Introduction</h2>
        <p>
          Welcome to Giftlawn. By accessing or using our website, you agree to
          be bound by the following terms and policies. If you do not agree with
          any part of these terms, please do not use our website.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          Please refer to our Privacy Policy for information about how we
          collect, use, and protect your personal information.
        </p>
        <details>
          <summary>Privacy Policy</summary>
          <br />
          <p>
            At Giftlawn, we are committed to protecting your privacy and
            personal information. We will never share or sell your personal
            information to third parties unless required by law.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, and shipping address when you place an order or sign up for
            our newsletter. We may also collect non-personal information such as
            your IP address and browser type.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use your personal information to process your orders, provide
            customer support, and send you marketing communications if you have
            opted-in. We may also use non-personal information for analytics and
            website improvements.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies to personalize your experience on our website and
            improve our services. You may disable cookies in your browser
            settings, but this may limit some functionality on our website.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or misuse. However, no
            transmission of data over the internet is completely secure, so we
            cannot guarantee absolute security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be reflected on this page, and we encourage you to review this
            policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about our privacy policy,
            please contact us at privacy@giftlawn.com.
          </p>
          <br />
          <hr />
        </details>
        <br />
        <h2>Intellectual Property</h2>
        <p>
          All content on our website, including but not limited to text, images,
          graphics, logos, and software, is the property of Giftlawn or its
          content suppliers and is protected by United States and international
          copyright laws. You may not use, reproduce, distribute, or modify any
          content from our website without our prior written consent.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Giftlawn provides its website and services on an "as is" and "as
          available" basis, without any warranties of any kind, either express
          or implied. We do not guarantee that our website will be error-free or
          uninterrupted, and we disclaim any liability for the accuracy,
          completeness, or reliability of any information or content on our
          website. By using our website, you agree that your access to and use
          of our website is at your own risk.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Giftlawn shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of
          our website or services, even if we have been advised of the
          possibility of such damages. In no event shall our total liability to
          you for all damages, losses, and causes of action exceed the amount
          paid by you, if any, for accessing or using our website or services.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold Giftlawn and its affiliates, officers,
          agents, and employees harmless from any claim, demand, or damage,
          including reasonable attorneys' fees, arising out of your use of our
          website or services or your violation of these terms and policies.
        </p>

        <h2>Changes to Terms & Policies</h2>
        <p>
          We reserve the right to modify or update these terms and policies at
          any time, without prior notice. Your continued use of our website or
          services after any such changes constitutes your acceptance of the
          revised terms and policies.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about these terms and policies,
          please contact us at{" "}
          <a href="mailto:contact@giftlawn.com">contact@giftlawn.com</a>.
        </p>
      </section>
    </>
  );
};

export default About;
