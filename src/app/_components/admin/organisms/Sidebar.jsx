import {
  ArrowLeftCircleIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
  RectangleGroupIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

import { MenuItem } from '@/_components/admin/molecules/MenuItem';
import React from 'react';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

export const Sidebar = () => {
  return (
    <div className="admin_sidebar">
      <a href="/admin" className="admin_sidebar-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b_39_15)">
            <path
              d="M8.10482 6.78678C8.86353 5.98402 10.1294 5.94831 10.9321 6.70702L14.8798 10.4381C15.6826 11.1968 15.7183 12.4626 14.9596 13.2654L11.2285 17.2131C10.4698 18.0158 9.20398 18.0515 8.40122 17.2928L4.45353 13.5618C3.65077 12.8031 3.61506 11.5372 4.37377 10.7345L8.10482 6.78678Z"
              fill="url(#paint0_radial_39_15)"
            />
          </g>
          <g filter="url(#filter1_b_39_15)">
            <path
              d="M11.4005 5.45353C12.1592 4.65077 13.4251 4.61506 14.2278 5.37377L19.5465 10.4005C20.3492 11.1592 20.3849 12.4251 19.6262 13.2278L14.5995 18.5465C13.8408 19.3492 12.5749 19.3849 11.7722 18.6262L6.45353 13.5995C5.65077 12.8408 5.61506 11.5749 6.37377 10.7722L11.4005 5.45353Z"
              fill="url(#paint1_radial_39_15)"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_39_15"
              x="-0.172729"
              y="2.16052"
              width="19.6787"
              height="19.6787"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_39_15" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_39_15" result="shape" />
            </filter>
            <filter
              id="filter1_b_39_15"
              x="1.82727"
              y="0.827271"
              width="22.3455"
              height="22.3455"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_39_15" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_39_15" result="shape" />
            </filter>
            <radialGradient
              id="paint0_radial_39_15"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-7.84719 11.9999) scale(27.305 43.6704)"
            >
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_39_15"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20.5 12) rotate(-180) scale(40.5 64.7739)"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <h5>Dashboard</h5>
      </a>
      <nav className="admin_sidebar-nav">
        <div aria-label="main-nav">
          <nav class="hs-accordion-group" data-hs-accordion-always-open>
            <ul aria-label="nav-list">
              <li>
                <a class="" href="/admin">
                  <HomeIcon />
                  Dashboard
                </a>
              </li>
              <li class="hs-accordion" id="account-accordion">
                <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent">
                  <DocumentTextIcon />
                  Blog
                  <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                </a>

                <div
                  id="account-accordion"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-[4rem]"
                >
                  <ul aria-label="list-menu">
                    <hr />
                    <li>
                      <a class="" href="/admin/blog/posts">
                        Posts
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin/blog/tags">
                        Tags
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin/blog/categories">
                        Categories
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="hs-accordion" id="account-accordion">
                <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent">
                  <RectangleGroupIcon />
                  Gallery
                  <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                </a>

                <div
                  id="account-accordion"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-[4rem]"
                >
                  <ul aria-label="list-menu">
                    <hr />
                    <li>
                      <a class="" href="/admin/gallery/photos">
                        Photos
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin/gallery/videos">
                        Videos
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a class="" href="/admin/projects">
                  <FolderIcon />
                  Projects
                </a>
              </li>
              <li>
                <a class="" href="/admin/reviews">
                  <SparklesIcon />
                  Reviews
                </a>
              </li>
              <li>
                <a class="" href="/admin/users">
                  <UsersIcon />
                  Users
                </a>
              </li>
              <li>
                <a class="" href="/admin/settings">
                  <Cog8ToothIcon />
                  Settings
                </a>
              </li>
              {/* <li class="hs-accordion" id="account-accordion">
                <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent">
                  <UsersIcon />
                  Users
                  <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                </a>

                <div
                  id="account-accordion"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-[4rem]"
                >
                  <ul aria-label="list-menu">
                    <hr />
                    <li>
                      <a class="" href="/admin">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
              {/* <li class="hs-accordion" id="users-accordion">
                <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent" href="javascript:;">
                  <UsersIcon />
                  Users
                  <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                </a>

                <div
                  id="users-accordion"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-[4rem]"
                >
                  <ul class="hs-accordion-group" data-hs-accordion-always-open>
                    <li class="hs-accordion" id="users-accordion-sub-1">
                      <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent " href="javascript:;">
                        Sub Menu 1
                        <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                      </a>

                      <div
                        id="users-accordion-sub-1"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                      >
                        <ul class="">
                          <li>
                            <a class="" href="javascript:;">
                              Link 1
                            </a>
                          </li>
                          <li>
                            <a class="" href="javascript:;">
                              Link 2
                            </a>
                          </li>
                          <li>
                            <a class="" href="javascript:;">
                              Link 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="hs-accordion" id="users-accordion-sub-2">
                      <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent " href="javascript:;">
                        Sub Menu 2
                        <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                      </a>

                      <div
                        id="users-accordion-sub-2"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"
                      >
                        <ul class="">
                          <li>
                            <a class="" href="javascript:;">
                              Link 1
                            </a>
                          </li>
                          <li>
                            <a class="" href="javascript:;">
                              Link 2
                            </a>
                          </li>
                          <li>
                            <a class="" href="javascript:;">
                              Link 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li> */}
              {/* <li class="hs-accordion" id="account-accordion">
                <a class="hs-accordion-toggle hs-accordion-active:hover:bg-transparent">
                  <Cog8ToothIcon />
                  Settings
                  <ChevronDownIcon className="hs-accordion-active:rotate-180 chevron-down" />
                </a>

                <div
                  id="account-accordion"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-[4rem]"
                >
                  <ul aria-label="list-menu">
                    <hr />
                    <li>
                      <a class="" href="/admin">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a class="" href="/admin">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </nav>
        </div>

        <div aria-label="main-logout">
          <ul aria-label="nav-list">
            <li>
              <a class="" href="/">
                <ArrowLeftCircleIcon />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
