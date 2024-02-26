"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Bars3BottomLeftIcon, CheckIcon, ChevronDownIcon, LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { usePersistStore } from "@/store";
import { Constants } from "@/utils/constants";
import { LANGUAGES } from "@/utils/enums";
import { useTheme } from 'next-themes'
import { ch ,en} from "@/assets";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { localeTranslations } from "@/utils";
import Link from "next/link";
type Props = {
  onMenuButtonClick(): void;
  setCollapsed(): void;
};
const Navbar = (props: Props) => {
    const pathName = usePathname();
  const { resolvedTheme, setTheme } = useTheme()
  const { theme,language, setLanguage } = usePersistStore((state: any) => state);
  const setSelectedTheme = async (t: string) => setTheme(t);
  const iconStyle = { width: 20, height: 20 };


  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };


  const ThemeItem = ({ th }: any) => (
    <button
      onClick={() => setSelectedTheme(th)}
      className="outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
      data-set-theme={th}
      key={th}
    >
      <span
        data-theme={th}
        className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer"
      >
        <span className="grid grid-cols-5 grid-rows-3">
          <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
            {resolvedTheme!.toLowerCase() === th!.toLowerCase() ? (
              <CheckIcon style={iconStyle} />
            ) : (
              ""
            )}
            <span className="flex-grow text-sm capitalize">{th}</span>{" "}
            <span className="flex h-full shrink-0 flex-wrap gap-1">
              <span className="bg-primary rounded-badge w-2"></span>{" "}
              <span className="bg-secondary rounded-badge w-2"></span>{" "}
              <span className="bg-accent rounded-badge w-2"></span>{" "}
              <span className="bg-neutral rounded-badge w-2"></span>
            </span>
          </span>
        </span>
      </span>
    </button>
  );


  return (
    <nav
    className={classNames({
      "items-center": true,
      "full md:w-full sticky z-10 shadow-sm h-[73px]": true
    })}
  >
    <div className="navbar w-full bg-base-100">
      {/* <IconButton
        icon={<Bars3BottomLeftIcon style={iconStyle} />}
        clickHandler={() => props.setCollapsed()}
        className="ml-4"
      /> */}
{/* 
<button
      aria-label='Toggle Dark Mode'
      type='button'
      className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='h-5 w-5 text-orange-300' />
      ) : (
        <MoonIcon className='h-5 w-5 text-slate-800' />
      )}
    </button> */}


      <div className="flex-1 ml-4 ">
        <div className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {process.env.REACT_APP_NAME}
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown">
          <div className="dropdown-bottom dropdown-end">
            <div tabIndex={-1} role="button" className="btn btn-ghost">
              <span>theme</span>
              <ChevronDownIcon style={iconStyle} />
            </div>
            <div
              tabIndex={-1}
              className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56  overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 "
            >
              <div className="grid grid-cols-1 gap-3 p-3">
                {Constants.THEMES().map((th: string) => (
                  <ThemeItem th={th} key={th} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={-1} role="button" className="btn btn-ghost">
            <LanguageIcon style={{ width: 20, height: 20 }} />
            <ChevronDownIcon style={iconStyle} />
          </div>
          <div
            tabIndex={-1}
            className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
          >
               <ul className="menu menu-sm gap-1">
               {i18n?.locales?.map((locale, index) => {
                  return (
                    <>
                      <li key={index}>
                        <Link href={redirectedPathName(locale)}>
                          <button className="active">
                            <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                              {locale}
                            </span>{" "}
                            <span className="font-[sans-serif]">
                              {localeTranslations[locale]}
                            </span>{" "}
                          </button>{" "}
                        </Link>
                      </li>
                    </>
                  );
                })}
                {/* {Constants.LANGUAGES?.map((lang: any) => (
                  <li key={lang?.key}>
                    <div
                      className="flex flex-row gap-4"
                      onClick={() => handleChangeLanguge(lang?.key)}
                      onKeyDown={() => {}}
                      tabIndex={-1}
                      role="button"
                    >
                     
                      {lang?.key === LANGUAGES.ENGLISH && (
                          <Image
                          src={us}
                          style={{
                            width: "20px",
                            height: "20px",
                          }}
                          alt=""
                        />
                      
                      )}
                      {lang?.key === LANGUAGES.CHINESE && (
                         <Image
                         src={ch}
                         style={{
                           width: "20px",
                           height: "20px",
                         }}
                         alt=""
                       />
                      )}
                      <span className="capitalize">{lang?.label}</span>
                      {language === lang?.key && (
                        <CheckIcon style={iconStyle} />
                      )}
                    </div>
                  </li>
                ))} */}
              </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
