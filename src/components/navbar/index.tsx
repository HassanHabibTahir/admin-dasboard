"use client";
import React from "react";
import classNames from "classnames";
import { SunIcon } from "@heroicons/react/24/outline";
import useStore from "@/store";

type Props = {
  onMenuButtonClick(): void;
  setCollapsed(): void;
};
const Navbar = (props: Props) => {
  const { setTheme } = useStore((state: any) => state);

  const init = React.useCallback(
    async (text: string) => {
      setTheme(text);
    },
    [setTheme]
  );

  return (
    <nav
      // data-theme="forest"
      className={classNames({
        " text-zinc-500": true,
        " items-center": true,
        "full md:w-full sticky z-10 shadow-sm h-[73px]  ": true,
      })}
    >
      <div className="navbar w-full bg-base-100">
        <button
          role="button"
          onClick={() => props.setCollapsed()}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className="flex-1">
          <div className="text-xl">{process.env.NEXT_PUBLIC_NAME}</div>
        </div>
        <div className="flex-none">
          <div className="dropdown">
            <div className="  dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <span>Theme</span>
                <svg
                  width="12px"
                  height="12px"
                  className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <div
                tabIndex={0}
                // className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56  overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 "
              >
                <div className="grid grid-cols-1 gap-3 p-3">
                  <button
                    onClick={() => init("light")}
                    className="outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
                    data-set-theme="light"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="light"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">light</span>{" "}
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
                  <button
                    onClick={() => init("dark")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="dark"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="dark"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">dark</span>{" "}
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
                  <button
                    onClick={() => init("cupcake")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="cupcake"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="cupcake"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">cupcake</span>{" "}
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
                  <button
                    onClick={() => init("bumblebee")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="bumblebee"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="bumblebee"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">bumblebee</span>{" "}
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
                  <button
                    onClick={() => init("emerald")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="emerald"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="emerald"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">emerald</span>{" "}
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
                  <button
                    onClick={() => init("corporate")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="corporate"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="corporate"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">corporate</span>{" "}
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
                  <button
                    onClick={() => init("synthwave")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="synthwave"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="synthwave"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">synthwave</span>{" "}
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
                  <button
                    onClick={() => init("retro")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="retro"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="retro"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">retro</span>{" "}
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
                  <button
                    onClick={() => init("cyberpunk")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="cyberpunk"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="cyberpunk"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">cyberpunk</span>{" "}
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
                  <button
                    onClick={() => init("valentine")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="valentine"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="valentine"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">valentine</span>{" "}
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
                  <button
                    onClick={() => init("halloween")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="halloween"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="halloween"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">halloween</span>{" "}
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
                  <button
                    onClick={() => init("garden")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="garden"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="garden"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">garden</span>{" "}
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
                  <button
                    onClick={() => init("forest")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="forest"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="forest"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">forest</span>{" "}
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
                  <button
                    onClick={() => init("aqua")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="aqua"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="aqua"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">aqua</span>{" "}
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
                  <button
                    onClick={() => init("lofi")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="lofi"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="lofi"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">lofi</span>{" "}
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
                  <button
                    onClick={() => init("pastel")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="pastel"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="pastel"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">pastel</span>{" "}
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
                  <button
                    onClick={() => init("fantasy")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="fantasy"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="fantasy"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">fantasy</span>{" "}
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
                  <button
                    onClick={() => init("wireframe")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="wireframe"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="wireframe"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">wireframe</span>{" "}
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
                  <button
                    onClick={() => init("black")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="black"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="black"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">black</span>{" "}
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
                  <button
                    onClick={() => init("luxury")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="luxury"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="luxury"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">luxury</span>{" "}
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
                  <button
                    onClick={() => init("dracula")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="dracula"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="dracula"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">dracula</span>{" "}
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
                  <button
                    onClick={() => init("cmyk")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="cmyk"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="cmyk"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">cmyk</span>{" "}
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
                  <button
                    onClick={() => init("autumn")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="autumn"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="autumn"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">autumn</span>{" "}
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
                  <button
                    onClick={() => init("business")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="business"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="business"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">business</span>{" "}
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
                  <button
                    onClick={() => init("acid")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="acid"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="acid"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">acid</span>{" "}
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
                  <button
                    onClick={() => init("lemonade")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="lemonade"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="lemonade"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">lemonade</span>{" "}
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
                  <button
                    onClick={() => init("night")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="night"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="night"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">night</span>{" "}
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
                  <button
                    onClick={() => init("coffee")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="coffee"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="coffee"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">coffee</span>{" "}
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
                  <button
                    onClick={() => init("winter")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="winter"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="winter"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">winter</span>{" "}
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
                  <button
                    onClick={() => init("dim")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="dim"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="dim"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">dim</span>{" "}
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
                  <button
                    onClick={() => init("nord")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="nord"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="nord"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">nord</span>{" "}
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
                  <button
                    onClick={() => init("sunset")}
                    className="outline-base-content text-start outline-offset-4"
                    data-set-theme="sunset"
                    data-act-className="[&amp;_svg]:visible"
                  >
                    <span
                      data-theme="sunset"
                      className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                    >
                      <span className="grid grid-cols-5 grid-rows-3">
                        <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="invisible h-3 w-3 shrink-0"
                          >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                          </svg>{" "}
                          <span className="flex-grow text-sm">sunset</span>{" "}
                          <span className="flex h-full shrink-0 flex-wrap gap-1">
                            <span className="bg-primary rounded-badge w-2"></span>{" "}
                            <span className="bg-secondary rounded-badge w-2"></span>{" "}
                            <span className="bg-accent rounded-badge w-2"></span>{" "}
                            <span className="bg-neutral rounded-badge w-2"></span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div title="Change Language" className="dropdown dropdown-end">
            <div
              tabIndex={parseInt("0")}
              role="button"
              className="btn btn-ghost"
              aria-label="Language"
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
              </svg>{" "}
              <svg
                width="12px"
                height="12px"
                className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>{" "}
            <div
              tabIndex={parseInt("0")}
              // tabIndex="0"
              className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
            >
              <ul className="menu menu-sm gap-1">
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      AR
                    </span>{" "}
                    <span className="font-[sans-serif]">عربي</span>{" "}
                    <span className="badge badge-sm badge-ghost">beta</span>
                  </button>{" "}
                </li>
                <li>
                  <button className="active">
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      EN
                    </span>{" "}
                    <span className="font-[sans-serif]">English</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      ES
                    </span>{" "}
                    <span className="font-[sans-serif]">Español</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      FA
                    </span>{" "}
                    <span className="font-[sans-serif]">فارسی</span>{" "}
                    <span className="badge badge-sm badge-ghost">beta</span>
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      FR
                    </span>{" "}
                    <span className="font-[sans-serif]">Français</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      ID
                    </span>{" "}
                    <span className="font-[sans-serif]">Indonesia</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      IT
                    </span>{" "}
                    <span className="font-[sans-serif]">Italiano</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      JA
                    </span>{" "}
                    <span className="font-[sans-serif]">日本語</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      KO
                    </span>{" "}
                    <span className="font-[sans-serif]">한국어</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      MS
                    </span>{" "}
                    <span className="font-[sans-serif]">Melayu</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      PT
                    </span>{" "}
                    <span className="font-[sans-serif]">Português</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      RU
                    </span>{" "}
                    <span className="font-[sans-serif]">Русский</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      UK
                    </span>{" "}
                    <span className="font-[sans-serif]">Українська</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      VI
                    </span>{" "}
                    <span className="font-[sans-serif]">Vietnamese</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      ZH
                    </span>{" "}
                    <span className="font-[sans-serif]">中文</span>{" "}
                  </button>{" "}
                </li>
                <li>
                  <button>
                    <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                      ZH
                    </span>{" "}
                    <span className="font-[sans-serif]">繁體中文</span>{" "}
                  </button>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
