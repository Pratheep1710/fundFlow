"use client";

import { Navbar } from "@/components/layout/Navbar";
import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark group/design-root">
      <div className="flex h-full grow flex-col">
        <Navbar />

        <main className="px-4 md:px-40 flex flex-1 justify-center py-10">
          <div className="flex flex-col w-full max-w-[960px] gap-12">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-0">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 text-center @[960px]:flex-row @[960px]:justify-between @[960px]:text-left"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCx9UCs_fGO4SqyAVsZXlskk1P5RydI9tIn45nCVEhj5JzkxE_6OfJPBCjXtymOrbnfZg_pUpGPMpFh8WOUM37OgGQzAPjMN2PgXtbc6lW0-dS0ZTwewPhecJgdEGjHnzXnua1EvzUim6Sb8hZcfv3b4nwdN5V67q5itNjlwR4uNYAwmd5dGsS7WLABA2ULDX-NLyadghDRSZ_f8DxW42ZeY2VSGMfEgvadRSBKih9uyqACfh5tCXrT-9UaxTbk5n9eK2dYucxhviAE')"
                  }}
                >
                  <div className="flex flex-col gap-4 max-w-2xl @[960px]:pl-12">
                    <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight @[480px]:text-5xl">
                      Streamline Your Chit Fund Management
                    </h1>
                    <h2 className="text-white/80 text-base font-normal leading-relaxed @[480px]:text-lg">
                      FundFlow empowers fund managers with intuitive tools for efficient chit fund operations, from automated tracking to insightful analytics.
                    </h2>
                  </div>
                  <LoginForm />
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-background-dark dark:text-background-light text-2xl font-bold tracking-tight px-4">Key Features</h2>
              <div className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-6">
                  <div className="flex flex-col gap-4 rounded-lg min-w-72 flex-1">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBXbZZ7dlgCB9NQcHNvrLeugoUk8UutjCNqgesGm1fm6MqkaZQ_Ml3B7VVSD6tSGK-NCZIu8rySt_wE6EH0KKCkFH7GY9wKTEHel3EJQ9rGC4780ZS2YmxHTwbev40UfG8Do6cgeuoG94EQN1VhuYP52Usuyn78GzRkXxva9576jclnx7P2WFlv1-f__Hq_6lIqr29QX69TKhxG0x5OEbmudqtPX8bKTjb4IxQX8-bgN9u02rpO5U-0Ejs1J95etoJ5sETNO6Qn8m')"
                      }}
                    ></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-background-dark dark:text-background-light text-base font-bold">
                        Automated Notification Reminders
                      </p>
                      <p className="text-background-dark/60 dark:text-background-light/60 text-sm font-normal">
                        Send automated reminders for monthly premium payments via email, WhatsApp, and SMS.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg min-w-72 flex-1">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1mNxaE011A4lxurepLjLV_lxmSR0zMMq2dlfUzH0kHaTS5VxVXmedHl7LX2NDt3J5u7671HH_YumOtcdvjyM2dDGcHjB_u0y-YptD53mAkfsudluajVsvrqmg_VzAvtgmWDeUkCj2cpSi-BHKHI37pRJYKDhw_lExKED6iQ-LUm15gSnyClAeg7xt3SJ2Cjv8Ae2J8fmcfBixR_p1RjvbMiFHpnWff-x9HvbaIKDZmq06NhgeX4fYwVFZ3CxkQuSagkRWCRLQZCu')"
                      }}
                    ></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-background-dark dark:text-background-light text-base font-bold">
                        Smart Premium Calculator
                      </p>
                      <p className="text-background-dark/60 dark:text-background-light/60 text-sm font-normal">
                        Calculate monthly premiums based on auction amount with verification and multi-channel sharing.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg min-w-72 flex-1">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj4-x5iZZSLr04DPkbrAis9c0RVjM4om72ijacJuT8HiiFy8DfouICM7wGykU2JKl_o1tbBk7p5sM0_pRkg5ZcA-Gn23gRpPM2kz6HLIT_2eBylD7ldG0h2gAxLjoCeYW6KTBbw2Nkm6ouihEFecXFymYOKHGYWNRup9e3PO0xWU-ypXsvl0jx_QYfnePBPv1foTXPa2DIyCAgzHHA-IzduuFvMlhT5B_bOYHrDtEXxQOse7y6UEK40d6YOhJCilLgOGd39SE17y7b')"
                      }}
                    ></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-background-dark dark:text-background-light text-base font-bold">
                        Client Payment Tracking
                      </p>
                      <p className="text-background-dark/60 dark:text-background-light/60 text-sm font-normal">
                        Easily track paid and unpaid client lists for better financial management.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg min-w-72 flex-1">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3gY1a-0pB_8VzY1b0R2z9Z8c_6V3w_0m5n2F6d_8G_8f3s_3w-0w-0f_0_7Y_0C_0_5U_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0')"
                      }}
                    ></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-background-dark dark:text-background-light text-base font-bold">
                        Seamless Fund Loading
                      </p>
                      <p className="text-background-dark/60 dark:text-background-light/60 text-sm font-normal">
                        Effortlessly load existing and new funds into the system for streamlined management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-8 px-5 py-10 text-center border-t border-background-dark/10 dark:border-background-light/10 @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-center @[480px]:gap-12">
            <Link href="#about" className="text-background-dark/60 dark:text-background-light/60 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-background-dark/60 dark:text-background-light/60 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="#privacy" className="text-background-dark/60 dark:text-background-light/60 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-background-dark/60 dark:text-background-light/60 text-sm font-normal">
             2024 FundFlow. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
