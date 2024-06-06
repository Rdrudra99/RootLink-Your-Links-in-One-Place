import Link from 'next/link'
import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai';
import { PiFacebookLogoDuotone, PiTwitterLogoDuotone, PiGithubLogoDuotone, PiInstagramLogoDuotone, PiTelegramLogoLight, PiLinkedinLogoDuotone, PiYoutubeLogoDuotone, PiWhatsappLogoDuotone } from 'react-icons/pi';




const LinkData = [
  {
    id: 1,
    name: "Facebook",
    icon: <PiFacebookLogoDuotone />,
    link: "https://facebook.com",
    title: "Follow Me On Facebook"
  },
  {
    id: 2,
    name: "Twitter",
    icon: <PiTwitterLogoDuotone />,
    link: "https://twitter.com",
    title: "Follow Me On Twitter"
  },
  {
    id: 3,
    name: "GitHub",
    icon: <PiGithubLogoDuotone />,
    link: "https://github.com",
    title: "Follow Me On GitHub"
  },
  {
    id: 4,
    name: "Instagram",
    icon: <PiInstagramLogoDuotone />,
    link: "https://instagram.com",
    title: "Follow Me On Instagram"
  },
  {
    id: 5,
    name: "Telegram",
    icon: <PiTelegramLogoLight />,
    link: "https://telegram.org",
    title: "Follow Me On Telegram"
  },
  {
    id: 6,
    name: "LinkedIn",
    icon: <PiLinkedinLogoDuotone />,
    link: "https://linkedin.com",
    title: "Connect With Me On LinkedIn"
  },
  {
    id: 7,
    name: "YouTube",
    icon: <PiYoutubeLogoDuotone />,
    link: "https://youtube.com",
    title: "Subscribe To My YouTube Channel"
  },
  {
    id: 8,
    name: "Email",
    icon: <AiTwotoneMail />,
    link: "mailto:youremail@example.com",
    title: "Send Me An Email"
  },
  {
    id: 9,
    name: "WhatsApp",
    icon: <PiWhatsappLogoDuotone />,
    link: "https://wa.me/yourphonenumber",
    title: "Message Me On WhatsApp"
  }
];

const Preview = ({ formData }: any) => {
console.log(formData, "Rudra");



  return (
    <div className="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden">
      <main className="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
        <div className="text-center">
          <div className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
            <img src={
                formData.profileImage ? formData.profileImage : "https://source.unsplash.com/100x100/?profile"
            } alt="name" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold mt-4 text-slate-800">
            {formData.username ? formData.username : "John Snow"}
          </h1>
          <p className="text-sm mt-2 text-slate-600">
            {formData.description ? formData.description : "Web Developer"}
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {
            LinkData.map((item: any, index: number) => {
              return (
                <span className="p-1">
                  <Link href={item.link} target="_blank" rel="noopener | noreferrer">
                    {item.icon}
                  </Link>
                </span>
              )
            })
          }
        </div>
        <ul className="space-y-2">
          {
            [1, 2, 3, 4, 5].map(() => {
              return (
                <li>
                  <Link href="https://example.com" rel="noopener noreferrer" target="_blank">
                    <dt className="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-5 w-5" width="1em" height="1em" viewBox="0 0 256 256" data-v-6e89ca90="">
                          <g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path><path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="w-full flex-grow min-w-0">
                        <p className="font-medium text-sm leading-6 text-start text-gray-900">My Website</p>
                      </div>
                    </dt>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Preview


