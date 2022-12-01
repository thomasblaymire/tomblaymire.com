import styled from "styled-components";

const StyledFooter = styled.footer``;

export function Footer({}) {
  return <StyledFooter>Footer</StyledFooter>;
}

// function Footer({ image }: { image: ImageBuilder }) {
//   const { userInfo } = useRootData();
//   const subscribedToNewsletter =
//     Boolean(userInfo) ||
//     userInfo?.convertKit?.tags.some(
//       ({ name }) => name === "Subscribed: general newsletter"
//     );
//   const featuredImg = (
//     <div className="aspect-w-4 aspect-h-3">
//       <img
//         loading="lazy"
//         className="w-full rounded-sm object-contain"
//         {...getImgProps(image, {
//           widths: [300, 600, 850, 1600, 2550],
//           sizes: [
//             "(max-width: 639px) 80vw",
//             "(min-width: 640px) and (max-width: 1499px) 50vw",
//             "(min-width: 1500px) and (max-width: 1620px) 25vw",
//             "410px",
//           ],
//           transformations: {
//             resize: {
//               aspectRatio: "4:3",
//               type: "fit",
//             },
//           },
//         })}
//       />
//     </div>
//   );
//   return (
//     <footer className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600">
//       <div className="relative mx-10vw">
//         <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
//           <div className="col-span-full md:col-span-3 xl:row-span-2">
//             <AboutSection />
//           </div>

//           <div className="col-span-full mt-20 md:col-span-5 md:col-start-1 xl:hidden">
//             {subscribedToNewsletter ? featuredImg : <NewsletterSection />}
//           </div>

//           <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
//             <ContactSection />
//           </div>

//           <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
//             <GeneralSection />
//           </div>

//           <div className="col-span-full mt-20 md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
//             <SitemapSection />
//           </div>

//           {/*
//           Note that the <NewsletterSection /> is rendered twice. The position of this cell changes based on breakpoint.
//           When we would move the cell around with css only, the tabIndex won't match the visual order.
//          */}
//           <div className="col-span-4 col-start-9 row-span-2 row-start-1 mt-0 hidden xl:block">
//             {subscribedToNewsletter ? featuredImg : <NewsletterSection />}
//           </div>

//           <div className="col-span-full mt-24 text-lg text-gray-500 dark:text-slate-500 md:mt-44">
//             <span>All rights reserved</span>{" "}
//             <span className="block md:inline">{`© Kent C. Dodds ${new Date().getFullYear()}`}</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
