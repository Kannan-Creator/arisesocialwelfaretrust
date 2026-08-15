import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Home – Arise SWT",
  description: "ARISE Social Welfare Trust",
  keywords:
    "ARISE Social Welfare Trust, Chennai, non-profit organization, sustainable change, education, empowerment, social responsibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link href="/storage/files/root143/favicon54041.png" rel="icon" />

        {/* Preconnect Fonts */}
        <link
          href="/external/fonts.googleapis.com/asset.bin"
          rel="preconnect"
        />
        <link
          crossOrigin=""
          href="/external/fonts.gstatic.com/asset.bin"
          rel="preconnect"
        />

        {/* Stylesheets */}
        <link
          href="/external/fonts.googleapis.com/css2_family_Jost_wght_500_600_family_Roboto_display_swap"
          rel="stylesheet"
        />
        <link
          href="/external/cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          rel="stylesheet"
        />
        <link href="/common/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="/common/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/environs/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="/common/lib/lightbox/css/lightbox.min.css"
          rel="stylesheet"
        />
        <link href="/environs/css/style.css" rel="stylesheet" />
        <link href="/common/style.css" rel="stylesheet" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
          #cartfix {background: #f8b864!important;}
          .primary{background-color: #fff; color:#000}
          .secondary{background-color: #f8b8640a; color:#000}
          .bgcolor{background-color: #fff}
          .navbar-brand .display-5 {font-size: 1.6rem; color: #000 !important;}

          .navbar-brand .me-3{margin-right:0 !important}
          .carousel-header .imgblock img {height: 600px;object-fit: contain}
          .carousel-header{margin-top: 125px;}
          @media (max-width:750px){ 
            .navbar-brand .display-5 {font-size: 0.8rem}
            .carousel-header{margin-top: 10px;}
            .carousel-header .carousel-inner:has(.carousel-item img.mnullimg), .carousel-header .carousel-item .mnullimg {height: 220px;object-fit: contain;min-height: auto;}
          }
          .footer .img-fluid.me-3.my-3{background: #fff;padding: 10px;}
        `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Scripts */}
        <Script
          src="/common/lib/jquery/jquery-min-3.7.1.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/common/bootstrap5/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/common/lib/wow/wow.min.js" strategy="lazyOnload" />
        <Script src="/common/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script
          src="/common/lib/waypoints/waypoints.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/lib/counterup/counterup.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/lib/owlcarousel/owl.carousel.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/lib/isotope/isotope.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/lib/lightbox/js/lightbox.min.js"
          strategy="lazyOnload"
        />
        <Script src="/common/lib/ticker/newsticker.js" strategy="lazyOnload" />
        <Script src="/environs/js/main.js" strategy="lazyOnload" />
        <Script src="/common/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
