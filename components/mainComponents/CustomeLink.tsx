import React from 'react'

const CustomeLink = () => {
  return (
    <section aria-labelledby="social-links-header">
    <h2 className="text-xl font-semibold" id="social-links-header">
      Social Links
    </h2>
    <p className="text-sm text-gray-600">Add some social media links</p>
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="facebook">
            Facebook
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="facebook"
            readOnly
            type="text"
            value="https://www.facebook.com/john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="twitter">
            Twitter
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="twitter"
            readOnly
            type="text"
            value="https://twitter.com/john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="instagram">
            Instagram
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="instagram"
            readOnly
            type="text"
            value="https://www.instagram.com/john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="github">
            Github
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="github"
            readOnly
            type="text"
            value="https://github.com/john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="telegram">
            Telegram
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="telegram"
            readOnly
            type="text"
            value="https://t.me/john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="linkedin">
            Linkedin
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="linkedin"
            readOnly
            type="text"
            value="https://linkedin.com/john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="email"
            readOnly
            type="text"
            value="mailto@john_snow.cc"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="youtube">
            Youtube
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="youtube"
            readOnly
            type="text"
            value="https://youtube.com/@john_snow"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="whatsapp">
            Whatsapp
          </label>
          <input
            className="mt-1 p-2 border rounded-md"
            id="whatsapp"
            readOnly
            type="text"
            value="+918888888888"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default CustomeLink