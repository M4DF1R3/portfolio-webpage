import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 pt-5 border-t bg-base-200">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <p className="text-base text-gray-400">
            @2023 Kevin Qian
            <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-white">{link.title}</h3>
              {link.links.map((item) =>
                item.url != "" ? (
                  <Link
                    href={item.url}
                    key={item.title}
                    className="text-gray-400"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <h2 className="text-gray-400" key={item.title}>
                    {item.title}
                  </h2>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
